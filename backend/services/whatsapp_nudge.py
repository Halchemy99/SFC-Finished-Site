import asyncio
import logging
import os
import re
from datetime import datetime, timezone, timedelta

from motor.motor_asyncio import AsyncIOMotorClient

logger = logging.getLogger("whatsapp_nudge")

NUDGE_INTERVAL_SECONDS = 3600
BOOKING_LINK = "https://calendly.com/superflycommerce"

FIRST_MESSAGE = (
    "Hi {name}! Harry from Superfly Commerce here 👋\n\n"
    "You requested a free Amazon audit yesterday but we haven't received your Seller Central invite yet.\n\n"
    "It takes 2 minutes:\n"
    "1. Open Seller Central → Settings → User Permissions\n"
    "2. Click \"Add a new user\"\n"
    "3. Enter: Harry Allen — harry@superflycommerce.com\n\n"
    "We only need View permissions and you can revoke access anytime. "
    "As soon as we're in, your audit starts the same day.\n\n"
    "Reply here if you need a hand!"
)

SECOND_MESSAGE = (
    "Hi {name}, Harry again from Superfly Commerce 👋\n\n"
    "Just closing the loop on your free Amazon audit — we still haven't received your Seller Central invite "
    "(Harry Allen — harry@superflycommerce.com under Settings → User Permissions).\n\n"
    "If you'd rather do it together, grab a free 10-minute call and we'll set it up live "
    "and share your first findings on the spot:\n"
    f"{BOOKING_LINK}\n\n"
    "No pressure either way — this is the last reminder. Good luck with your launch! 🚀"
)


def normalize_phone(raw):
    if not raw:
        return None
    cleaned = re.sub(r"[^\d+]", "", str(raw))
    if not cleaned.startswith("+"):
        cleaned = "+" + cleaned.lstrip("0")
    return cleaned if len(cleaned) >= 8 else None


async def send_whatsapp(tw, sender, phone, body):
    await asyncio.to_thread(
        tw.messages.create,
        from_=f"whatsapp:{sender}",
        to=f"whatsapp:{phone}",
        body=body,
    )


async def run_nudge_pass():
    sid = os.getenv("TWILIO_ACCOUNT_SID")
    token = os.getenv("TWILIO_AUTH_TOKEN")
    sender = os.getenv("TWILIO_WHATSAPP_FROM")
    if not (sid and token and sender):
        logger.info("Twilio not configured — skipping WhatsApp nudge pass")
        return

    from twilio.rest import Client
    tw = Client(sid, token)
    sender = sender.replace("whatsapp:", "")

    mongo = AsyncIOMotorClient(os.getenv("MONGO_URL"))
    db = mongo[os.getenv("DB_NAME", "superfly_production")]
    now = datetime.now(timezone.utc)

    # First nudge: 24h after signup, no invite yet
    cursor = db.regional_audits.find({
        "createdAt": {"$lt": now - timedelta(hours=24)},
        "status": {"$ne": "invite_sent"},
        "nudge_sent": {"$ne": True},
    })
    async for lead in cursor:
        phone = normalize_phone(lead.get("whatsapp") or lead.get("phone"))
        if not phone:
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"nudge_sent": True, "nudge_skipped_reason": "no_valid_phone"}},
            )
            continue
        name = lead.get("contact_name") or lead.get("contactName") or "there"
        try:
            await send_whatsapp(tw, sender, phone, FIRST_MESSAGE.format(name=name))
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"nudge_sent": True, "nudged_at": now}},
            )
            logger.info(f"First WhatsApp nudge sent to {phone}")
        except Exception as e:
            logger.error(f"First nudge failed for {phone}: {e}")
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"nudge_sent": True, "nudge_error": str(e)}},
            )

    # Second nudge: 72h after first nudge, still no invite
    cursor = db.regional_audits.find({
        "nudged_at": {"$lt": now - timedelta(hours=72)},
        "status": {"$ne": "invite_sent"},
        "second_nudge_sent": {"$ne": True},
    })
    async for lead in cursor:
        phone = normalize_phone(lead.get("whatsapp") or lead.get("phone"))
        if not phone:
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"second_nudge_sent": True, "second_nudge_skipped_reason": "no_valid_phone"}},
            )
            continue
        name = lead.get("contact_name") or lead.get("contactName") or "there"
        try:
            await send_whatsapp(tw, sender, phone, SECOND_MESSAGE.format(name=name))
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"second_nudge_sent": True, "second_nudged_at": now}},
            )
            logger.info(f"Second WhatsApp nudge (booking link) sent to {phone}")
        except Exception as e:
            logger.error(f"Second nudge failed for {phone}: {e}")
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"second_nudge_sent": True, "second_nudge_error": str(e)}},
            )
    mongo.close()


async def nudge_loop():
    while True:
        try:
            await run_nudge_pass()
        except Exception as e:
            logger.error(f"Nudge pass crashed: {e}")
        await asyncio.sleep(NUDGE_INTERVAL_SECONDS)
