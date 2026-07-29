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
        
        return {
            "success": True,
            "message": "Audit request submitted successfully",
            "id": str(result.inserted_id)
        }
        
    except Exception as e:
        print(f"Error in regional audit submission: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
