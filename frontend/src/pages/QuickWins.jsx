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
