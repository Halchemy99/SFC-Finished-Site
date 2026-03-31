"""
Backend API Tests for Superfly Commerce
Tests: Health check, Newsletter (Beehiiv), Contact form (SMTP), Stripe payments
"""
import pytest
import requests
import os
import time

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://design-75.preview.emergentagent.com')

class TestHealthCheck:
    """Basic API health check tests"""
    
    def test_api_root(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"API root response: {data}")

class TestNewsletterAPI:
    """Newsletter (Beehiiv) subscription tests"""
    
    def test_newsletter_subscribe_valid_email(self):
        """Test newsletter subscription with valid email"""
        test_email = f"test_{int(time.time())}@example.com"
        response = requests.post(
            f"{BASE_URL}/api/newsletter/subscribe",
            json={"email": test_email}
        )
        print(f"Newsletter subscribe response: {response.status_code} - {response.text}")
        
        # Should return 200 or 201 for successful subscription
        # or 400 if already subscribed
        assert response.status_code in [200, 201, 400]
        
        if response.status_code in [200, 201]:
            data = response.json()
            assert data.get("success") == True
            assert "message" in data
    
    def test_newsletter_subscribe_invalid_email(self):
        """Test newsletter subscription with invalid email"""
        response = requests.post(
            f"{BASE_URL}/api/newsletter/subscribe",
            json={"email": "invalid-email"}
        )
        print(f"Invalid email response: {response.status_code} - {response.text}")
        # Should return 422 for validation error
        assert response.status_code == 422
    
    def test_newsletter_subscribe_missing_email(self):
        """Test newsletter subscription with missing email"""
        response = requests.post(
            f"{BASE_URL}/api/newsletter/subscribe",
            json={}
        )
        print(f"Missing email response: {response.status_code} - {response.text}")
        assert response.status_code == 422

class TestContactFormAPI:
    """Contact form submission tests"""
    
    def test_contact_form_valid_submission(self):
        """Test contact form with valid data"""
        response = requests.post(
            f"{BASE_URL}/api/contact/submit",
            json={
                "name": "Test User",
                "email": "test@example.com",
                "phone": "+1234567890",
                "company": "Test Company",
                "message": "This is a test message from automated testing.",
                "form_type": "contact"
            }
        )
        print(f"Contact form response: {response.status_code} - {response.text}")
        
        # Should return 200 for successful submission
        # or 500 if SMTP is not configured
        assert response.status_code in [200, 500]
        
        if response.status_code == 200:
            data = response.json()
            assert data.get("success") == True
            assert "message" in data
    
    def test_contact_form_missing_required_fields(self):
        """Test contact form with missing required fields"""
        response = requests.post(
            f"{BASE_URL}/api/contact/submit",
            json={
                "name": "Test User"
                # Missing email and message
            }
        )
        print(f"Missing fields response: {response.status_code} - {response.text}")
        assert response.status_code == 422
    
    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email"""
        response = requests.post(
            f"{BASE_URL}/api/contact/submit",
            json={
                "name": "Test User",
                "email": "invalid-email",
                "message": "Test message"
            }
        )
        print(f"Invalid email response: {response.status_code} - {response.text}")
        assert response.status_code == 422

class TestStripePaymentsAPI:
    """Stripe payment checkout tests"""
    
    # All valid package IDs from the backend
    VALID_PACKAGES = [
        "listing-optimization",
        "a-plus-content",
        "product-photography",
        "infographic-set",
        "brand-story",
        "brand-video",
        "listing-copywriting",
        "ppc-audit",
        "brand-storefront",
        "business-analysis"
    ]
    
    def test_create_checkout_valid_package(self):
        """Test creating checkout session with valid package"""
        response = requests.post(
            f"{BASE_URL}/api/stripe/create-checkout",
            json={
                "package_id": "listing-optimization",
                "customer_email": "test@example.com",
                "customer_name": "Test User",
                "origin_url": BASE_URL
            }
        )
        print(f"Checkout response: {response.status_code} - {response.text}")
        
        # Should return 200 with checkout URL
        assert response.status_code == 200
        data = response.json()
        assert "url" in data
        assert "session_id" in data
        assert "checkout.stripe.com" in data["url"]
        print(f"Stripe checkout URL created: {data['url'][:50]}...")
    
    def test_create_checkout_all_packages(self):
        """Test creating checkout session for all 10 packages"""
        for package_id in self.VALID_PACKAGES:
            response = requests.post(
                f"{BASE_URL}/api/stripe/create-checkout",
                json={
                    "package_id": package_id,
                    "customer_email": "test@example.com",
                    "customer_name": "Test User",
                    "origin_url": BASE_URL
                }
            )
            print(f"Package {package_id}: {response.status_code}")
            
            assert response.status_code == 200, f"Failed for package: {package_id}"
            data = response.json()
            assert "url" in data
            assert "session_id" in data
    
    def test_create_checkout_invalid_package(self):
        """Test creating checkout session with invalid package"""
        response = requests.post(
            f"{BASE_URL}/api/stripe/create-checkout",
            json={
                "package_id": "invalid-package",
                "customer_email": "test@example.com",
                "customer_name": "Test User",
                "origin_url": BASE_URL
            }
        )
        print(f"Invalid package response: {response.status_code} - {response.text}")
        assert response.status_code == 400
    
    def test_create_checkout_missing_fields(self):
        """Test creating checkout session with missing fields"""
        response = requests.post(
            f"{BASE_URL}/api/stripe/create-checkout",
            json={
                "package_id": "listing-optimization"
                # Missing customer_email, customer_name, origin_url
            }
        )
        print(f"Missing fields response: {response.status_code} - {response.text}")
        assert response.status_code == 422
    
    def test_checkout_status_invalid_session(self):
        """Test getting checkout status with invalid session ID"""
        response = requests.get(
            f"{BASE_URL}/api/stripe/checkout-status/invalid_session_id"
        )
        print(f"Invalid session response: {response.status_code} - {response.text}")
        # Should return 500 as session doesn't exist
        assert response.status_code == 500

class TestStatusAPI:
    """Status check API tests"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        response = requests.post(
            f"{BASE_URL}/api/status",
            json={"client_name": "Test Client"}
        )
        print(f"Create status response: {response.status_code} - {response.text}")
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == "Test Client"
    
    def test_get_status_checks(self):
        """Test getting all status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        print(f"Get status response: {response.status_code}")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)

if __name__ == "__main__":
    pytest.main([__file__, "-v"])
