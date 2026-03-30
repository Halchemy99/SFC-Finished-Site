import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setError("No payment session found");
      setLoading(false);
      return;
    }

    // Fetch payment status from backend
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/stripe/checkout-status/${sessionId}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to verify payment');
        }
        
        const data = await response.json();
        setPaymentData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#22C55E] mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verifying Payment...
          </h1>
          <p className="text-gray-600">Please wait while we confirm your payment.</p>
        </div>
      </div>
    );
  }

  if (error || !paymentData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Verification Failed
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {error || "We couldn't verify your payment. Please contact support."}
            </p>
            <Link to="/pricing">
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white">
                Return to Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const amount = paymentData.amount_total / 100; // Convert from pence
  const packageName = paymentData.metadata?.package_name || "Service";

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <CheckCircle className="w-20 h-20 text-[#22C55E] mx-auto mb-6" />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. We've received your payment.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-4 text-center">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">{packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-semibold">£{amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span className="font-semibold text-[#22C55E]">
                  {paymentData.payment_status === 'paid' ? 'PAID ✓' : paymentData.payment_status}
                </span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-3 text-center text-gray-900">
              What Happens Next?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-2">✓</span>
                <span>Check your email for payment confirmation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-2">✓</span>
                <span>Our team will contact you within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-2">✓</span>
                <span>We'll confirm project details and gather necessary information</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-2">✓</span>
                <span>You'll receive a project timeline and next steps</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <p className="text-gray-600 mb-8">
            If you have any questions, please email us at{' '}
            <a 
              href="mailto:harry@superflycommerce.com" 
              className="text-[#22C55E] hover:underline font-semibold"
            >
              harry@superflycommerce.com
            </a>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-[#22C55E] text-[#22C55E] hover:bg-green-50"
              >
                Return to Homepage
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white"
              >
                Explore More Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
