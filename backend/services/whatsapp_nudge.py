import asyncio
import logging
import os
import re
from datetime import datetime, timezone, timedelta

from motor.motor_asyncio import AsyncIOMotorClient

logger = logging.getLogger("whatsapp_nudge")

NUDGE_INTERVAL_SECONDS = 3600

MESSAGE = (
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


def normalize_phone(raw):
    if not raw:
        return None
    cleaned = re.sub(r"[^\d+]", "", str(raw))
    if not cleaned.startswith("+"):
        cleaned = "+" + cleaned.lstrip("0")
    return cleaned if len(cleaned) >= 8 else None


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
    cutoff = datetime.now(timezone.utc) - timedelta(hours=24)

    cursor = db.regional_audits.find({
        "createdAt": {"$lt": cutoff},
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
            await asyncio.to_thread(
                tw.messages.create,
                from_=f"whatsapp:{sender}",
                to=f"whatsapp:{phone}",
                body=MESSAGE.format(name=name),
            )
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"nudge_sent": True, "nudged_at": datetime.now(timezone.utc)}},
            )
            logger.info(f"WhatsApp nudge sent to {phone}")
        except Exception as e:
            logger.error(f"WhatsApp nudge failed for {phone}: {e}")
            await db.regional_audits.update_one(
                {"_id": lead["_id"]},
                {"$set": {"nudge_sent": True, "nudge_error": str(e)}},
            )
    mongo.close()


async def nudge_loop():
    while True:
        try:
            await run_nudge_pass()
        except Exception as e:
            logger.error(f"Nudge pass crashed: {e}")
        await asyncio.sleep(NUDGE_INTERVAL_SECONDS)
