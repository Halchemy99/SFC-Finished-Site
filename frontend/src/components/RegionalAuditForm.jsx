import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import PartnerAccessGuide from './PartnerAccessGuide';

const RegionalAuditForm = ({ region, regionName }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productCategory: '',
    currentAmazonLinks: '',
    targetMarkets: [],
    monthlyRevenue: '',
    mainChallenges: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        targetMarkets: checked 
          ? [...prev.targetMarkets, value]
          : prev.targetMarkets.filter(m => m !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/regional-audit/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourceRegion: region,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or email us directly at harry@superflycommerce.com');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again or email us directly at harry@superflycommerce.com');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-[#22C55E]">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-20 h-20 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Audit Request Received! 🎉
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We'll analyze your Amazon presence and send you a detailed audit report within <strong>24-48 hours</strong>.
          </p>
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
            <h4 className="font-bold text-gray-900 mb-3">What happens next:</h4>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span>Our team reviews your Amazon listings & strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span>We identify quick wins & growth opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span>You receive a custom roadmap for {regionName} → UK/EU/USA launch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span>Book a call to discuss implementation (optional)</span>
              </li>
            </ul>
          </div>
          <PartnerAccessGuide region={region} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-2xl border-2 border-[#22C55E]">
      <CardHeader className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white">
        <CardTitle className="text-2xl sm:text-3xl">
          Get Your Free Amazon Audit
        </CardTitle>
        <CardDescription className="text-white/90 text-base sm:text-lg">
          Fill in your details below. We'll audit your Amazon presence and show you exactly how to expand into UK/EU/USA markets.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Company Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Product & Amazon Info</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Category *
              </label>
              <input
                type="text"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="e.g., Home & Kitchen, Beauty, Supplements"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Amazon Links (if any)
              </label>
              <textarea
                name="currentAmazonLinks"
                value={formData.currentAmazonLinks}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="Paste your Amazon product URLs (Amazon.in, Amazon.ae, etc.)&#10;One per line"
              />
              <p className="text-xs text-gray-500 mt-1">
                If you're not on Amazon yet, leave this blank
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Target Markets * (Select all that apply)
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="targetMarkets"
                    value="UK"
                    checked={formData.targetMarkets.includes('UK')}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#22C55E] focus:ring-[#22C55E] border-gray-300 rounded"
                  />
                  <span className="text-gray-700">🇬🇧 United Kingdom</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="targetMarkets"
                    value="EU"
                    checked={formData.targetMarkets.includes('EU')}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#22C55E] focus:ring-[#22C55E] border-gray-300 rounded"
                  />
                  <span className="text-gray-700">🇪🇺 European Union</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="targetMarkets"
                    value="USA"
                    checked={formData.targetMarkets.includes('USA')}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#22C55E] focus:ring-[#22C55E] border-gray-300 rounded"
                  />
                  <span className="text-gray-700">🇺🇸 United States</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Monthly Revenue (approximate)
              </label>
              <select
                name="monthlyRevenue"
                value={formData.monthlyRevenue}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
              >
                <option value="">Select range...</option>
                <option value="not-launched">Not launched yet</option>
                <option value="0-10k">$0 - $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>
          </div>

          {/* Challenges */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900">Your Main Challenges</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What are your biggest challenges right now? *
              </label>
              <textarea
                name="mainChallenges"
                value={formData.mainChallenges}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="e.g., Don't know how to navigate VAT, struggling with international shipping, need help with PPC..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Anything else we should know?
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="Timeline, budget, specific goals, etc."
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || formData.targetMarkets.length === 0}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            {loading ? 'Submitting...' : 'Get My Free Audit'}
            <Send className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-center text-sm text-gray-600">
            🔒 Your information is secure. We'll send your audit within 24-48 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegionalAuditForm;
