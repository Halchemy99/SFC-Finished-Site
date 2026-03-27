import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();

  const tiers = [
    {
      name: 'Starter Sprint',
      price: '£500',
      period: 'one-time',
      description: 'Perfect for getting your first listing optimized',
      features: [
        '1 product listing optimization',
        'Keyword research & SEO',
        'Basic A+ content',
        'Competitor analysis',
        '2 weeks delivery'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Growth Package',
      price: '£1,500',
      period: 'one-time',
      description: 'Comprehensive optimization for serious sellers',
      features: [
        'Up to 5 product listings',
        'Advanced A+ content design',
        'PPC campaign setup',
        'Brand storefront design',
        'Monthly performance report',
        '4 weeks delivery'
      ],
      cta: 'Start Growing',
      popular: true
    },
    {
      name: 'Performance Retainer',
      price: '£2,500',
      period: '/month',
      description: 'Performance-based monthly management',
      features: [
        'Full account management',
        'Unlimited listing optimization',
        'PPC management & optimization',
        'Monthly strategy sessions',
        'Revenue-share model available',
        'Dedicated specialist',
        'Weekly reporting'
      ],
      cta: 'Book Discovery Call',
      popular: false
    },
    {
      name: 'Enterprise Collective',
      price: 'Custom',
      period: 'pricing',
      description: 'Full-service collective for scaling brands',
      features: [
        'Multi-specialist team',
        'Custom growth strategy',
        'International expansion',
        'Video & photography',
        'Analytics & BI dashboard',
        'Priority support',
        'Quarterly business reviews'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  const oneOffServices = [
    {
      name: 'A+ Content Design',
      price: '£300',
      description: 'Professional A+ content for one product',
      icon: '🎨'
    },
    {
      name: 'Product Photography',
      price: '£500',
      description: 'Professional product shoot (up to 10 images)',
      icon: '📸'
    },
    {
      name: 'Listing Copywriting',
      price: '£150',
      description: 'SEO-optimized title, bullets, and description',
      icon: '✍️'
    },
    {
      name: 'PPC Audit & Setup',
      price: '£400',
      description: 'Complete PPC audit with campaign setup',
      icon: '🎯'
    },
    {
      name: 'Brand Storefront',
      price: '£800',
      description: 'Custom Amazon Storefront design',
      icon: '🏪'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-[#22C55E] mb-4">Transparent Pricing</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Simple, <span className="text-[#22C55E]">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No long-term contracts. Just honest pricing for real results.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`relative border-2 ${
              tier.popular ? 'border-[#22C55E] shadow-xl' : 'border-gray-200'
            }`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white">
                  MOST POPULAR
                </Badge>
              )}
              
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-2">{tier.period}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className={`w-full rounded-full ${
                  tier.popular 
                    ? 'bg-[#22C55E] hover:bg-[#16A34A] text-white' 
                    : 'bg-white border-2 border-[#22C55E] text-[#22C55E] hover:bg-green-50'
                }`}>
                  {tier.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* One-Off Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              One-Off <span className="text-[#22C55E]">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Need something specific? Choose from our à la carte services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {oneOffServices.map((service, idx) => (
              <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-[#22C55E] mb-2">{service.price}</div>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-white border border-[#22C55E] text-[#22C55E] hover:bg-green-50 rounded-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Not sure which package is right for you?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free discovery call and we'll help you choose the best option for your business.
          </p>
          <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
            Book Free Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;