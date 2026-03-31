import React, { useEffect } from 'react';
import { Check, ArrowRight, Zap, Clock, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ServiceCTA from '../components/ServiceCTA';

const QuickWins = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const packages = [
    {
      name: 'Listing Optimization Sprint',
      price: '£500',
      duration: '2 weeks',
      features: [
        'SEO keyword research',
        'Title & bullet optimization',
        'Product description rewrite',
        'Backend search terms',
        'Competitor analysis'
      ]
    },
    {
      name: 'A+ Content Package',
      price: '£800',
      duration: '3 weeks',
      features: [
        'Custom A+ content design',
        'Brand story module',
        'Comparison charts',
        'Lifestyle imagery',
        'Mobile optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-600 mb-4">Quick Win Packages</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Fast Results, <span className="text-[#22C55E]">Fixed Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get immediate improvements to your Amazon listings with our proven sprint packages. No long-term contracts, just quick wins.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <Card key={idx} className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-[#22C55E]">{pkg.price}</span>
                  <span className="text-gray-500">• {pkg.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#22C55E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study - Hidden (placeholder data) */}
        {/* <div className="bg-white rounded-3xl p-12 shadow-xl">
          <Badge className="bg-green-100 text-[#22C55E] mb-6">Case Study</Badge>
          <h2 className="text-4xl font-bold mb-6">EcoHome Essentials: 156% Sales Increase</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="EcoHome case study"
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
                  EcoHome Essentials was struggling with poor visibility for their sustainable kitchen products. 
                  Their listings had minimal traffic and a conversion rate of just 4.2%.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-[#22C55E]" />
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  We implemented our Listing Optimization Sprint and A+ Content Package simultaneously. 
                  This included comprehensive keyword research, compelling copy, and beautiful A+ content 
                  showcasing their sustainability story.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">156%</div>
                  <div className="text-sm text-gray-600">Sales Increase</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">+8.2%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#22C55E]">Top 5</div>
                  <div className="text-sm text-gray-600">Keywords Ranked</div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-[#22C55E]">
                <p className="text-gray-700 italic mb-3">
                  "Superfly's quick win package delivered results faster than we imagined. 
                  Our sales doubled within two months!"
                </p>
                <p className="text-sm font-semibold">— Sarah Mitchell, Founder</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Prominent CTA for Pricing and Case Studies */}
        <ServiceCTA className="mb-16" />

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-8 py-6 text-lg font-semibold">
            Start Your Quick Win Today <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickWins;
