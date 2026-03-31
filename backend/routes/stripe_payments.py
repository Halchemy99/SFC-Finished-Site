from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, EmailStr
from emergentintegrations.payments.stripe.checkout import StripeCheckout, CheckoutSessionResponse, CheckoutSessionRequest
import os
import logging
from datetime import datetime

router = APIRouter(prefix="/api/stripe", tags=["payments"])
logger = logging.getLogger(__name__)

# Fixed service packages - NEVER accept amounts from frontend
SERVICE_PACKAGES = {
    "listing-optimization": {
        "name": "Listing Optimization Sprint",
        "price": 200.00,  # £200
        "currency": "gbp",
        "description": "Listing optimization for up to 5 listings"
    },
    "a-plus-content": {
        "name": "A+ Content Package",
        "price": 300.00,  # £300
        "currency": "gbp",
        "description": "Professional A+ content for 1 product"
    },
    "product-photography": {
        "name": "Product Photography",
        "price": 500.00,  # £500
        "currency": "gbp",
        "description": "Professional product shoot - up to 10 images"
    },
    "infographic-set": {
        "name": "Amazon Infographic Set",
        "price": 175.00,  # £175
        "currency": "gbp",
        "description": "Up to 6 custom infographics"
    },
    "brand-story": {
        "name": "Brand Story Element",
        "price": 125.00,  # £125
        "currency": "gbp",
        "description": "Premium brand story module"
    },
    "brand-video": {
        "name": "Brand Video",
        "price": 400.00,  # £400
        "currency": "gbp",
        "description": "Up to 45 seconds professional video editing"
    },
    "listing-copywriting": {
        "name": "Listing Copywriting",
        "price": 150.00,  # £150
        "currency": "gbp",
        "description": "SEO-optimized title, bullets, and description"
    },
    "ppc-audit": {
        "name": "PPC Audit & Setup",
        "price": 400.00,  # £400
        "currency": "gbp",
        "description": "Complete PPC audit with campaign setup"
    },
    "brand-storefront": {
        "name": "Brand Storefront",
        "price": 800.00,  # £800
        "currency": "gbp",
        "description": "Custom Amazon Storefront design"
    },
    "business-analysis": {
        "name": "Full Business Analysis",
        "price": 1500.00,  # £1,500
        "currency": "gbp",
        "description": "Deloitte-level strategic report"
    }
}

class CheckoutRequest(BaseModel):
    package_id: str
    customer_email: EmailStr
    customer_name: str
    origin_url: str

STRIPE_API_KEY = os.environ.get('STRIPE_API_KEY')

if not STRIPE_API_KEY:
    logger.error("STRIPE_API_KEY not found in environment variables")

@router.post("/create-checkout")
async def create_checkout_session(request: CheckoutRequest, http_request: Request):
    """
    Create Stripe checkout session for one-off service purchase
    
    Security: Package price is retrieved from SERVER-SIDE dictionary only
    """
    
    # Validate package exists
    if request.package_id not in SERVICE_PACKAGES:
        raise HTTPException(status_code=400, detail="Invalid package selected")
    
    package = SERVICE_PACKAGES[request.package_id]
    
    # Get base URL from request
    host_url = request.origin_url or str(http_request.base_url).rstrip('/')
    
    # Build success and cancel URLs dynamically
    success_url = f"{host_url}/payment/success?session_id={{CHECKOUT_SESSION_ID}}"
    cancel_url = f"{host_url}/pricing"
    
    webhook_url = f"{host_url}/api/stripe/webhook"
    
    try:
        # Initialize Stripe checkout
        stripe_checkout = StripeCheckout(
            api_key=STRIPE_API_KEY,
            webhook_url=webhook_url
        )
        
        # Create checkout session request
        checkout_request = CheckoutSessionRequest(
            amount=package["price"],
            currency=package["currency"],
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={
                "package_id": request.package_id,
                "package_name": package["name"],
                "customer_email": request.customer_email,
                "customer_name": request.customer_name,
                "purchase_date": datetime.now().isoformat()
            }
        )
        
        # Create session with Stripe
        session = await stripe_checkout.create_checkout_session(checkout_request)
        
        logger.info(f"Checkout session created: {session.session_id} for package: {request.package_id}")
        
        return {
            "url": session.url,
            "session_id": session.session_id
        }
        
    except Exception as e:
        logger.error(f"Failed to create checkout session: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to create checkout session. Please try again."
        )

@router.get("/checkout-status/{session_id}")
async def get_checkout_status(session_id: str):
    """
    Check the status of a Stripe checkout session
    Called by frontend after redirect from Stripe
    """
    
    try:
        host_url = os.environ.get('BACKEND_URL', 'http://localhost:8001')
        webhook_url = f"{host_url}/api/stripe/webhook"
        
        stripe_checkout = StripeCheckout(
            api_key=STRIPE_API_KEY,
            webhook_url=webhook_url
        )
        
        status = await stripe_checkout.get_checkout_status(session_id)
        
        return {
            "status": status.status,
            "payment_status": status.payment_status,
            "amount_total": status.amount_total,
            "currency": status.currency,
            "metadata": status.metadata
        }
        
    except Exception as e:
        logger.error(f"Failed to get checkout status: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to retrieve payment status"
        )

@router.post("/webhook")
async def stripe_webhook(request: Request):
    """
    Handle Stripe webhook events
    CRITICAL: This is where we confirm payments and send emails
    """
    
    try:
        body = await request.body()
        signature = request.headers.get("Stripe-Signature", "")
        
        host_url = os.environ.get('BACKEND_URL', 'http://localhost:8001')
        webhook_url = f"{host_url}/api/stripe/webhook"
        
        stripe_checkout = StripeCheckout(
            api_key=STRIPE_API_KEY,
            webhook_url=webhook_url
        )
        
        # Handle webhook and verify signature
        webhook_response = await stripe_checkout.handle_webhook(body, signature)
        
        # If payment successful, send confirmation emails
        if webhook_response.event_type == "checkout.session.completed" and webhook_response.payment_status == "paid":
            await send_payment_confirmation_emails(webhook_response)
        
        logger.info(f"Webhook processed: {webhook_response.event_type} for session: {webhook_response.session_id}")
        
        return {"status": "received"}
        
    except Exception as e:
        logger.error(f"Webhook processing error: {str(e)}")
        # Return 200 to prevent Stripe retries for errors we can't handle
        return {"status": "error", "message": str(e)}

async def send_payment_confirmation_emails(webhook_data):
    """
    Send confirmation emails to customer and merchant after successful payment
    """
    from smtplib import SMTP
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    
    metadata = webhook_data.metadata
    
    SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
    SMTP_USER = os.environ.get('SMTP_USER', '')
    SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
    MERCHANT_EMAIL = "harry@superflycommerce.com"
    
    package_name = metadata.get('package_name', 'Service')
    customer_email = metadata.get('customer_email')
    customer_name = metadata.get('customer_name')
    amount = webhook_data.amount_total / 100  # Convert from pence to pounds
    
    try:
        # Send email to CUSTOMER
        customer_msg = MIMEMultipart('alternative')
        customer_msg['Subject'] = f"Payment Confirmed - {package_name}"
        customer_msg['From'] = SMTP_USER
        customer_msg['To'] = customer_email
        
        customer_html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #22C55E; border-radius: 8px;">
              <h2 style="color: #22C55E;">Payment Successful! 🎉</h2>
              
              <p>Hi {customer_name},</p>
              
              <p>Thank you for your purchase! We've received your payment and will get started right away.</p>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Order Details:</h3>
                <p style="margin: 5px 0;"><strong>Service:</strong> {package_name}</p>
                <p style="margin: 5px 0;"><strong>Amount Paid:</strong> £{amount:.2f}</p>
                <p style="margin: 5px 0;"><strong>Payment ID:</strong> {webhook_data.session_id}</p>
              </div>
              
              <h3>What Happens Next?</h3>
              <p>A member of our team will contact you within 24 hours to:</p>
              <ul>
                <li>Confirm project details</li>
                <li>Gather any necessary information</li>
                <li>Provide timeline and next steps</li>
              </ul>
              
              <p style="margin-top: 30px;">If you have any questions, feel free to reply to this email or contact us at <a href="mailto:harry@superflycommerce.com">harry@superflycommerce.com</a></p>
              
              <p style="margin-top: 30px;">Best regards,<br><strong>Superfly Commerce Team</strong></p>
            </div>
          </body>
        </html>
        """
        
        customer_msg.attach(MIMEText(customer_html, 'html'))
        
        # Send email to MERCHANT (Harry)
        merchant_msg = MIMEMultipart('alternative')
        merchant_msg['Subject'] = f"🎉 New Order: {package_name} - £{amount:.2f}"
        merchant_msg['From'] = SMTP_USER
        merchant_msg['To'] = MERCHANT_EMAIL
        
        merchant_html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #22C55E; border-radius: 8px;">
              <h2 style="color: #22C55E;">New Order Received! 🎉</h2>
              
              <div style="background-color: #f0fdf4; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Order Details:</h3>
                <p style="margin: 5px 0;"><strong>Service:</strong> {package_name}</p>
                <p style="margin: 5px 0;"><strong>Amount:</strong> £{amount:.2f}</p>
                <p style="margin: 5px 0;"><strong>Payment Status:</strong> PAID ✅</p>
              </div>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Customer Information:</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> {customer_name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{customer_email}">{customer_email}</a></p>
                <p style="margin: 5px 0;"><strong>Payment ID:</strong> {webhook_data.session_id}</p>
              </div>
              
              <p style="background-color: #fef2f2; padding: 10px; border-left: 4px solid #ef4444; margin-top: 20px;">
                <strong>ACTION REQUIRED:</strong> Contact the customer within 24 hours to confirm project details and gather necessary information.
              </p>
            </div>
          </body>
        </html>
        """
        
        merchant_msg.attach(MIMEText(merchant_html, 'html'))
        
        # Send both emails
        if SMTP_USER and SMTP_PASSWORD:
            server = SMTP(SMTP_HOST, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            
            # Send to customer
            server.send_message(customer_msg)
            logger.info(f"Confirmation email sent to customer: {customer_email}")
            
            # Send to merchant
            server.send_message(merchant_msg)
            logger.info(f"Order notification sent to merchant: {MERCHANT_EMAIL}")
            
            server.quit()
        else:
            logger.warning("SMTP not configured - emails not sent")
            
    except Exception as e:
        logger.error(f"Failed to send confirmation emails: {str(e)}")
        # Don't raise exception - webhook should still succeed even if emails fail
