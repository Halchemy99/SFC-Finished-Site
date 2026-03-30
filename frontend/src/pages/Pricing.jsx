import React, { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCheckout from '../components/ServiceCheckout';

const Pricing = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  const tiers = [
    {
      name: 'Starter Sprint',
      price: 'From £800',
      period: '',
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
      price: '£1,800',
      period: 'one-time',
      description: 'Full month of explosive growth',
      features: [
        'Full month PPC & account audit',
        'Campaign optimization & changes',
        '30 infographic images included',
        'A+ content revamp',
        'Brand story revamp',
        'SEO listing optimization (up to 5 products)',
        'Ongoing support during month'
      ],
      cta: 'Start Growing',
      popular: true
    },
    {
      name: 'Performance Retainer',
      price: 'From £700',
      period: '/month + % growth',
      description: 'Base price + % of incremental sales growth',
      features: [
        'Full account management',
        'Unlimited listing optimization',
        'PPC management & optimization',
        'Monthly strategy sessions',
        'Revenue-share on growth only',
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
      name: 'Listing Optimization Sprint',
      price: '£200',
      packageId: 'listing-optimization',
      description: 'Listing optimization for up to 5 listings',
      detailedDescription: 'Complete listing optimization for up to 5 Amazon product listings with keyword research and SEO.',
      icon: '🚀',
      scope: [
        'Up to 5 product listings',
        'Keyword research & SEO',
        'Title optimization',
        'Bullet point optimization',
        'Backend search terms',
        '7-10 business days delivery'
      ]
    },
    {
      name: 'A+ Content Design',
      price: '£300',
      packageId: 'a-plus-content',
      description: 'Professional A+ content for one product',
      detailedDescription: 'Complete A+ content module design for a single Amazon product listing.',
      icon: '🎨',
      scope: [
        '1 product A+ content only',
        '5 custom modules maximum',
        'Up to 2 design revisions',
        'Mobile-optimized layout',
        '7-10 business days delivery',
        'Source files included'
      ]
    },
    {
      name: 'Product Photography',
      price: '£500',
      packageId: 'product-photography',
      description: 'Professional product shoot',
      detailedDescription: 'Studio product photography session with professional editing.',
      icon: '📸',
      scope: [
        'Up to 10 edited images',
        'White background shots only',
        '1 product, multiple angles',
        'High-resolution files (300 DPI)',
        'Amazon-compliant formatting',
        '14 business days turnaround'
      ]
    },
    {
      name: 'Amazon Infographic Set',
      price: '£175',
      packageId: 'infographic-set',
      description: 'Up to 6 custom infographics',
      detailedDescription: 'Professional infographic design for Amazon listings (not photography).',
      icon: '📊',
      scope: [
        'Up to 6 custom infographics',
        'Product feature highlights',
        'Comparison charts',
        'Lifestyle mockups',
        'Amazon size requirements',
        '7-10 business days delivery'
      ]
    },
    {
      name: 'Brand Story Element',
      price: '£125',
      packageId: 'brand-story',
      description: 'Goes above A+ content',
      detailedDescription: 'Premium brand story module that sits above your A+ content.',
      icon: '📖',
      scope: [
        '1 brand story module',
        'Custom brand narrative',
        'Professional design',
        'Mobile-optimized',
        '5-7 business days delivery',
        'Includes copywriting'
      ]
    },
    {
      name: 'Brand Video',
      price: '£400',
      packageId: 'brand-video',
      description: 'Up to 45 seconds',
      detailedDescription: 'Professional video editing from your supplied files (non-studio).',
      icon: '🎬',
      scope: [
        'Up to 45 seconds final video',
        'Editing from YOUR supplied files',
        'No studio filming included',
        'Music & transitions',
        'Amazon video specs',
        '10-14 business days delivery'
      ]
    },
    {
      name: 'Listing Copywriting',
      price: '£150',
      packageId: 'listing-copywriting',
      description: 'SEO-optimized title, bullets, and description',
      detailedDescription: 'Comprehensive listing copy for one product with keyword optimization.',
      icon: '✍️',
      scope: [
        '1 product listing only',
        'Title optimization (200 chars)',
        '5 bullet points',
        'Product description',
        'Backend search terms',
        '3-5 business days delivery'
      ]
    },
    {
      name: 'PPC Audit & Setup',
      price: '£400',
      packageId: 'ppc-audit',
      description: 'Complete PPC audit with campaign setup',
      detailedDescription: 'Comprehensive PPC audit and initial campaign configuration.',
      icon: '🎯',
      scope: [
        'Current campaign audit',
        'Up to 3 new campaigns setup',
        'Keyword research (50 keywords)',
        'Bid strategy recommendations',
        'Does NOT include ad spend',
        '5-7 business days delivery'
      ]
    },
    {
      name: 'Brand Storefront',
      price: '£800',
      packageId: 'brand-storefront',
      description: 'Custom Amazon Storefront design',
      detailedDescription: 'Complete Amazon Brand Store design with up to 5 pages.',
      icon: '🏪',
      scope: [
        'Up to 5 storefront pages',
        'Custom page layouts',
        'Brand story integration',
        'Product category sections',
        '2 rounds of revisions',
        '14-21 business days delivery'
      ]
    },
    {
      name: 'Full Business Analysis',
      price: '£1,500',
      packageId: 'business-analysis',
      description: 'Deloitte-level strategic report',
      detailedDescription: 'Comprehensive business analysis with detailed report and strategy call.',
      icon: '📈',
      scope: [
        '15-20 page detailed report',
        '3-hour strategy process call',
        'Market analysis & insights',
        'Growth opportunities',
        'Competitive benchmarking',
        '14-21 business days delivery'
      ]
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
                  <Button 
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-white border border-[#22C55E] text-[#22C55E] hover:bg-green-50 rounded-full"
                  >
                    Order Now
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
          <a href="/#contact">
            <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Book Free Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Checkout Modal */}
      {selectedService && (
        <ServiceCheckout 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default Pricing;