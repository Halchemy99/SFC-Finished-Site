from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime, timezone
import os
from motor.motor_asyncio import AsyncIOMotorClient
import resend

router = APIRouter()

# Initialize Resend
resend.api_key = os.getenv("RESEND_API_KEY")

# MongoDB connection
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME", "superfly_production")

class RegionalAuditRequest(BaseModel):
    companyName: str
    contactName: str
    email: EmailStr
    phone: str
    productCategory: str
    currentAmazonLinks: Optional[str] = ""
    targetMarkets: List[str]
    monthlyRevenue: Optional[str] = ""
    mainChallenges: str
    additionalInfo: Optional[str] = ""
    sourceRegion: str
    submittedAt: str

@router.post("/regional-audit")
async def submit_regional_audit(request: RegionalAuditRequest):
    try:
        # Save to MongoDB
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]
        
        audit_data = request.dict()
        audit_data['createdAt'] = datetime.now(timezone.utc)
        audit_data['status'] = 'pending'
        
        result = await db.regional_audits.insert_one(audit_data)
        
        # Send notification email to team
        target_markets_str = ", ".join(request.targetMarkets)
        
        html_content = f"""
        <h2>New Regional Audit Request from {request.sourceRegion.upper()}</h2>
        
        <h3>Company Information</h3>
        <ul>
            <li><strong>Company:</strong> {request.companyName}</li>
            <li><strong>Contact:</strong> {request.contactName}</li>
            <li><strong>Email:</strong> {request.email}</li>
            <li><strong>WhatsApp:</strong> {request.phone}</li>
        </ul>
        
        <h3>Product & Amazon Info</h3>
        <ul>
            <li><strong>Category:</strong> {request.productCategory}</li>
            <li><strong>Target Markets:</strong> {target_markets_str}</li>
            <li><strong>Monthly Revenue:</strong> {request.monthlyRevenue or 'Not specified'}</li>
            <li><strong>Current Amazon Links:</strong><br>{request.currentAmazonLinks or 'None provided'}</li>
        </ul>
        
        <h3>Challenges</h3>
        <p>{request.mainChallenges}</p>
        
        {f'<h3>Additional Info</h3><p>{request.additionalInfo}</p>' if request.additionalInfo else ''}
        
        <hr>
        <p><strong>Source Region:</strong> {request.sourceRegion}</p>
        <p><strong>Submitted:</strong> {request.submittedAt}</p>
        <p><strong>MongoDB ID:</strong> {str(result.inserted_id)}</p>
        """
        
        # Send via Resend
        params = {
            "from": os.getenv("SENDER_EMAIL", "harry@superfly-commerce.com"),
            "to": ["harry@superflycommerce.com"],
            "subject": f"🔥 New {request.sourceRegion.upper()} Audit Request - {request.companyName}",
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
