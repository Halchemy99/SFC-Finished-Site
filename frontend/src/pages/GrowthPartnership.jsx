import React from 'react';
import { Check, ArrowRight, TrendingUp, Target, Award, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const GrowthPartnership = () => {
  const benefits = [
    { title: 'Aligned Incentives', desc: 'We only win when you win', icon: '🤝' },
    { title: 'Zero Risk Start', desc: 'Low base fee, pay for results', icon: '🛡️' },
    { title: 'Full Transparency', desc: 'Real-time performance dashboards', icon: '📊' },
    { title: 'Dedicated Team', desc: 'Your own Amazon growth specialists', icon: '👥' }
  ];

  const pricingTiers = [
    {
      revenue: 'Under £50k/month',
      base: '£700',
      share: '15%',
      features: ['1 specialist', 'Monthly reports', 'Email support']
    },
    {
      revenue: '£50k-£150k/month',
      base: '£1,200',
      share: '12%',
      features: ['2 specialists', 'Weekly reports', 'Priority support'],
      popular: true
    },
    {
      revenue: '£150k+/month',
      base: '£2,000',
      share: '10%',
      features: ['Full team', 'Daily reports', '24/7 support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Growth Share Partnership</Badge>
          <h1 className="text-5xl font-bold mb-6">
            We Only Succeed <span className="text-[#22C55E]">When You Succeed</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Performance-based model where we share in your growth. Low base fee + percentage of incremental sales growth.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20 bg-white rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-6">How Revenue Share Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We establish your baseline revenue, then take a percentage only of the GROWTH we generate.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Baseline Set', desc: 'Your current monthly revenue' },
              { step: '02', title: 'We Optimize', desc: 'Full account management & growth' },
              { step: '03', title: 'Track Growth', desc: 'Monitor incremental revenue' },
              { step: '04', title: 'Share Success', desc: 'You keep 85-90% of growth' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Performance-Based Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <Card key={idx} className={`border-2 ${
                tier.popular ? 'border-[#22C55E] shadow-xl' : 'border-gray-200'
              } relative`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white">
                    MOST POPULAR
                  </Badge>
                )}
                <CardHeader className="pt-8">
                  <CardDescription className="text-sm text-gray-500 mb-2">{tier.revenue}</CardDescription>
                  <CardTitle className="text-3xl mb-2">
                    {tier.base}<span className="text-base text-gray-500">/month</span>
                  </CardTitle>
                  <div className="text-2xl font-bold text-[#22C55E]">
                    + {tier.share} <span className="text-base text-gray-600">of growth</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#22C55E]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact">
                    <Button className={`w-full rounded-full ${
                      tier.popular 
                        ? 'bg-[#22C55E] hover:bg-[#16A34A] text-white'
                        : 'bg-white border-2 border-[#22C55E] text-[#22C55E] hover:bg-green-50'
                    }`}>
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Revenue Share?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardHeader>
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <Badge className="bg-green-100 text-[#22C55E] mb-6">Case Study</Badge>
          <h2 className="text-4xl font-bold mb-6">Pure Wellness Co: £1.3M Annual Revenue Growth</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Pure Wellness case study"
                className="rounded-2xl w-full h-96 object-cover mb-6"
              />
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#22C55E]" />
                  The Challenge
                </h3>
                <p className="text-gray-700">
                  Pure Wellness Co wanted to scale from £800k to £2M+ annual revenue but couldn't afford traditional agency retainers of £3-5k/month.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#22C55E]" />
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  We partnered on a revenue-share model: £1,200/month base + 12% of incremental growth. 
                  Full account management, product launches, and international expansion.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">£1.3M</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">12</div>
                  <div className="text-sm text-gray-600">Launches</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">+45%</div>
                  <div className="text-sm text-gray-600">Market Share</div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-[#22C55E]">
                <p className="text-gray-700 italic mb-3">
                  "The performance-based model meant Superfly was as invested in our success as we were. Game changer."
                </p>
                <p className="text-sm font-semibold">— Elena Rodriguez, Co-Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready for Aligned Growth?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss a revenue-share partnership that makes sense for your business.
          </p>
          <a href="/#contact">
            <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrowthPartnership;