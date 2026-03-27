import React from 'react';
import { Check, TrendingUp, Users, Video, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const TikTokOffer = () => {
  const benefits = [
    'Full TikTok account management',
    'Content strategy & planning',
    'UGC content coordination',
    'Ad campaign setup & optimization',
    'Analytics & performance reporting',
    'Weekly strategy calls'
  ];

  const requirements = [
    'Minimum £1,000 budget for ads/content/UGC',
    'Commitment to 4-month program',
    'Product must be TikTok-suitable',
    'Willingness to test & iterate'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 px-6 py-2 text-base">
            🎉 Limited Time Offer
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Free TikTok Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
              For 4 Months
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Launch your brand on TikTok with zero management fees. You only pay for ads, content, and UGC.
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-50 px-6 py-3 rounded-full">
            <span className="text-purple-700 font-semibold">Worth £3,000+ in management fees</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What's Included */}
          <Card className="border-2 border-purple-200 bg-white shadow-xl">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl mb-2">What You Get FREE</CardTitle>
              <CardDescription className="text-base">
                Full-service TikTok management for 4 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-900 font-semibold">
                  💰 Normal Value: £750/month × 4 months = £3,000
                </p>
                <p className="text-sm text-purple-700 mt-1">
                  You pay: £0 management fees
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="border-2 border-gray-200 bg-white shadow-xl">
            <CardHeader>
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <CardTitle className="text-3xl mb-2">Your Investment</CardTitle>
              <CardDescription className="text-base">
                What you need to commit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">£1,000</div>
                <p className="text-gray-600">Minimum budget for ads + content + UGC</p>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Requirements:</h4>
                <ul className="space-y-3">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Budget Breakdown:</strong> Your £1,000+ covers TikTok ads, content creation, 
                  and UGC creators. We manage everything for FREE.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Fill out our TikTok interest form' },
              { step: '02', title: 'Strategy Call', desc: 'We plan your 4-month TikTok launch' },
              { step: '03', title: 'Launch', desc: 'We execute content, ads, and UGC' },
              { step: '04', title: 'Scale', desc: 'Optimize based on performance data' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Dominate TikTok?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Limited spots available. This offer is for serious brands ready to invest in TikTok growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                Apply Now - Free Management
              </Button>
            </a>
            <a href="https://www.tiktok.com/@superflycollective" target="_blank" rel="noopener noreferrer">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                View Our TikTok
              </Button>
            </a>
          </div>
          
          <p className="mt-8 text-sm opacity-75">
            ⚡ Spots are limited • 🎯 First-come, first-served • 💎 Worth £3,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default TikTokOffer;
