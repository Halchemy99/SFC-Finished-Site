from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime, timezone
import os
from motor.motor_asyncio import AsyncIOMotorClient
import resend

router = APIRouter(prefix="/api")

# Initialize Resend
resend.api_key = os.getenv("RESEND_API_KEY")

# MongoDB connection
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME", "superfly_production")

class RegionalAuditRequest(BaseModel):
    # Original form fields
    companyName: Optional[str] = None
    contactName: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    productCategory: Optional[str] = None
    currentAmazonLinks: Optional[str] = ""
    targetMarkets: Optional[List[str]] = []
    monthlyRevenue: Optional[str] = ""
    mainChallenges: Optional[str] = ""
    additionalInfo: Optional[str] = ""
    sourceRegion: Optional[str] = None
    submittedAt: Optional[str] = None
    
    # New quiz form fields
    region: Optional[str] = None
    company_name: Optional[str] = None
    contact_name: Optional[str] = None
    whatsapp: Optional[str] = None
    current_marketplaces: Optional[str] = None
    monthly_revenue: Optional[str] = None
    quiz_score: Optional[int] = None
    issues_found: Optional[str] = None
    partner_access_experience: Optional[str] = None

@router.post("/regional-audit/submit")
async def submit_regional_audit(request: RegionalAuditRequest):
    try:
        # Save to MongoDB
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]
        
        audit_data = request.dict()
        audit_data['createdAt'] = datetime.now(timezone.utc)
        audit_data['status'] = 'pending'
        
        result = await db.regional_audits.insert_one(audit_data)
        
        # Handle both old and new form formats
        company = request.company_name or request.companyName or "Unknown"
        contact = request.contact_name or request.contactName or "Unknown"
        phone = request.whatsapp or request.phone or "Not provided"
        region = request.region or request.sourceRegion or "Unknown"
        revenue = request.monthly_revenue or request.monthlyRevenue or "Not specified"
        marketplaces = request.current_marketplaces or ", ".join(request.targetMarkets or []) or "Not specified"
        
        # Build email content based on available data
        if request.quiz_score is not None:
            # New quiz format
            html_content = f"""
            <h2>🎯 New Interactive Audit Request from {region.upper()}</h2>
            
            <div style="background: #FEE2E2; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #DC2626; margin-top: 0;">Quiz Results</h3>
                <p><strong>Risk Score:</strong> {request.quiz_score}/12 (higher = more issues)</p>
                <p><strong>Issues Found:</strong> {request.issues_found or 'None specified'}</p>
                <p><strong>Partner Access Experience:</strong> {request.partner_access_experience or 'Unknown'}</p>
            </div>
            
            <h3>Contact Information</h3>
            <ul>
                <li><strong>Company:</strong> {company}</li>
                <li><strong>Contact:</strong> {contact}</li>
                <li><strong>Email:</strong> {request.email}</li>
                <li><strong>WhatsApp:</strong> {phone}</li>
            </ul>
            
            <h3>Business Details</h3>
            <ul>
                <li><strong>Current Marketplaces:</strong> {marketplaces}</li>
                <li><strong>Monthly Revenue:</strong> {revenue}</li>
            </ul>
            
            <hr>
            <p><strong>Source:</strong> Interactive Quiz - {region}</p>
            <p><strong>Submitted:</strong> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}</p>
            <p><strong>MongoDB ID:</strong> {str(result.inserted_id)}</p>
            
            <div style="margin-top: 20px; padding: 15px; background: #DBEAFE; border-radius: 8px;">
                <p><strong>Next Step:</strong> Book 10-min call to set up Amazon Partner Access and share initial audit findings</p>
            </div>
            """
        else:
            # Original form format
            target_markets_str = ", ".join(request.targetMarkets or [])
            html_content = f"""
            <h2>New Regional Audit Request from {region.upper()}</h2>
            
            <h3>Company Information</h3>
            <ul>
                <li><strong>Company:</strong> {company}</li>
                <li><strong>Contact:</strong> {contact}</li>
                <li><strong>Email:</strong> {request.email}</li>
                <li><strong>WhatsApp:</strong> {phone}</li>
            </ul>
            
            <h3>Product & Amazon Info</h3>
            <ul>
                <li><strong>Category:</strong> {request.productCategory or 'Not specified'}</li>
                <li><strong>Target Markets:</strong> {target_markets_str}</li>
                <li><strong>Monthly Revenue:</strong> {revenue}</li>
                <li><strong>Current Amazon Links:</strong><br>{request.currentAmazonLinks or 'None provided'}</li>
            </ul>
            
            <h3>Challenges</h3>
            <p>{request.mainChallenges or 'Not specified'}</p>
            
            {f'<h3>Additional Info</h3><p>{request.additionalInfo}</p>' if request.additionalInfo else ''}
            
            <hr>
            <p><strong>Source Region:</strong> {region}</p>
            <p><strong>Submitted:</strong> {request.submittedAt or datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}</p>
            <p><strong>MongoDB ID:</strong> {str(result.inserted_id)}</p>
            """
        
        # Send via Resend
        params = {
            "from": os.getenv("SENDER_EMAIL", "onboarding@resend.dev"),
            "to": ["harry@superflycommerce.com"],
            "subject": f"🔥 New {region.upper()} Audit Request - {company}",
            "html": html_content
        }
        
        resend.Emails.send(params)

        # Confirmation + partner authorization guide to the lead
        try:
            sc_links = {
                "india": ("Amazon India", "https://sellercentral.amazon.in/gp/account-manager/home.html"),
                "uae": ("Amazon UAE", "https://sellercentral.amazon.ae/gp/account-manager/home.html"),
                "mexico": ("Amazon Mexico", "https://sellercentral.amazon.com.mx/gp/account-manager/home.html"),
            }
            home_label, home_url = sc_links.get((region or "").lower(), ("Amazon UK", "https://sellercentral.amazon.co.uk/gp/account-manager/home.html"))
            lead_html = f"""
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
                <h2 style="color: #16A34A;">Your free Amazon audit is confirmed ✅</h2>
                <p>Hi {contact},</p>
                <p>Thanks for requesting your audit. We'll be in touch within 24 hours.</p>
                <p><strong>Want your audit started today?</strong> Add us as a user on your Amazon account — it takes 2 minutes:</p>
                <ol style="line-height: 1.9;">
                    <li>Open <a href="{home_url}" style="color: #16A34A;"><strong>User Permissions in {home_label} Seller Central</strong></a>
                        (or <a href="https://sellercentral.amazon.co.uk/gp/account-manager/home.html" style="color: #16A34A;">Amazon UK</a> /
                        <a href="https://sellercentral.amazon.com/gp/account-manager/home.html" style="color: #16A34A;">Amazon USA</a>)</li>
                    <li>Click <strong>"Add a new user"</strong></li>
                    <li>Enter: <strong>Harry Allen</strong> — <strong>harry@superflycommerce.com</strong> and send the invite</li>
                </ol>
                <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 12px 16px; margin: 16px 0;">
                    <p style="margin: 0; font-size: 14px;">🔒 We only need <strong>View</strong> permissions. You stay in full control and can revoke access anytime from the same page.</p>
                </div>
                <p>Once we accept the invite, we start your audit within a few hours instead of days.</p>
                <p>Questions? Just reply to this email.</p>
                <p>— Harry Allen<br>Superfly Commerce</p>
            </div>
            """
            resend.Emails.send({
                "from": os.getenv("SENDER_EMAIL", "onboarding@resend.dev"),
                "to": [request.email],
                "reply_to": "harry@superflycommerce.com",
                "subject": "Your Amazon audit is confirmed — 1 quick step to fast-track it",
                "html": lead_html
            })
        except Exception as lead_email_error:
            print(f"Lead confirmation email failed: {lead_email_error}")
        
        return {
            "success": True,
            "message": "Audit request submitted successfully",
            "id": str(result.inserted_id)
        }
        
    except Exception as e:
        print(f"Error in regional audit submission: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


class InviteSentRequest(BaseModel):
    audit_id: Optional[str] = None
    email: Optional[EmailStr] = None
    contact_name: Optional[str] = None
    company_name: Optional[str] = None
    region: Optional[str] = None


@router.post("/regional-audit/invite-sent")
async def invite_sent(request: InviteSentRequest):
    try:
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]

        update = {"$set": {"status": "invite_sent", "invite_sent_at": datetime.now(timezone.utc)}}
        if request.audit_id:
            from bson import ObjectId
            try:
                await db.regional_audits.update_one({"_id": ObjectId(request.audit_id)}, update)
            except Exception:
                pass
        elif request.email:
            await db.regional_audits.find_one_and_update(
                {"email": request.email}, update, sort=[("createdAt", -1)]
            )

        contact = request.contact_name or "A seller"
        company = request.company_name or "Unknown company"
        region = (request.region or "unknown").upper()
        html = f"""
        <h2>🚀 ACTION NEEDED: Seller Central invite sent!</h2>
        <p><strong>{contact}</strong> from <strong>{company}</strong> ({region}) just clicked
        "I've sent the invite" on the partner authorization guide.</p>
        <ul>
            <li><strong>Email:</strong> {request.email or 'Not provided'}</li>
            <li><strong>Audit ID:</strong> {request.audit_id or 'Not provided'}</li>
            <li><strong>Time:</strong> {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}</li>
        </ul>
        <p><strong>Next step:</strong> Check your Seller Central invitations and accept it ASAP so the audit can start today.</p>
        """
        resend.Emails.send({
            "from": os.getenv("SENDER_EMAIL", "onboarding@resend.dev"),
            "to": ["harry@superflycommerce.com"],
            "subject": f"🚀 ACCEPT NOW: {contact} ({company}) sent their Seller Central invite",
            "html": html
        })

        return {"success": True}
    except Exception as e:
        print(f"Error in invite-sent tracking: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
