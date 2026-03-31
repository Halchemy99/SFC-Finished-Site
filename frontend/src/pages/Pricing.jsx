import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Star, Zap, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCheckout from '../components/ServiceCheckout';

const Pricing = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTiers = [
    {
      name: 'Starter Partnership',
      basePrice: '£650',
      period: '/month',
      description: 'Perfect for brands ready to test performance-based growth',
      features: [
        'Base retainer: £650/month',
        '+ % of monthly revenue growth',
        'Full Amazon account management',
        'Listing optimization & PPC',
        'Monthly strategy calls',
        'Performance reporting'
      ],
      cta: 'Discuss This Plan',
      popular: false,
      badge: null
    },
    {
      name: 'Growth Partnership',
      basePrice: '£1,100',
      period: '/month',
      description: 'For established brands scaling with skin in the game',
      features: [
        'Base retainer: £1,100/month',
        '+ % of monthly revenue growth',
        'Everything in Starter, plus:',
        'A+ Content & Brand Store',
        'Advanced PPC strategies',
        'Quarterly business reviews',
        'Priority support'
      ],
      cta: 'Discuss This Plan',
      popular: true,
      badge: 'Most Popular'
    },
    {
      name: 'Scale Partnership',
      basePrice: '£1,800',
      period: '/month',
      description: 'Aggressive growth for brands doing £50k+ monthly revenue',
      features: [
        'Base retainer: £1,800/month',
        '+ % of monthly revenue growth',
        'Everything in Growth, plus:',
        'Dedicated account manager',
        'International expansion support',
        'Custom analytics & automation',
        'White-glove service'
      ],
      cta: 'Discuss This Plan',
      popular: false,
      badge: null
    },
    {
      name: 'Pure Revenue Share',
      basePrice: '£0',
      period: 'base fee',
      description: 'High risk, high reward - we only win when you win',
      features: [
        'No monthly retainer',
        '10% of all revenue above £10,000/month',
        'Full-service Amazon management',
        'We eat what we kill mentality',
        'Perfect for ambitious startups',
        'Subject to application approval'
      ],
      cta: 'Apply for Revenue Share',
      popular: false,
      badge: 'High Risk/Reward'
    }
  ];

  const oneOffServices = [
    {
      name: t('pricing.services.listingOptimization.name'),
      price: '£200',
      packageId: 'listing-optimization',
      description: t('pricing.services.listingOptimization.description'),
      detailedDescription: t('pricing.services.listingOptimization.detailedDescription'),
      icon: '🚀',
      scope: [
        t('pricing.services.listingOptimization.scope1'),
        t('pricing.services.listingOptimization.scope2'),
        t('pricing.services.listingOptimization.scope3'),
        t('pricing.services.listingOptimization.scope4'),
        t('pricing.services.listingOptimization.scope5'),
        t('pricing.services.listingOptimization.scope6')
      ]
    },
    {
      name: 'A+ Content Package',
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
          <Badge className="bg-green-100 text-[#22C55E] mb-4">{t('pricing.badge')}</Badge>
          <h1 className="text-5xl font-bold mb-6">
            {t('pricing.title')} <span className="text-[#22C55E]">{t('pricing.titleGreen')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Performance-Based Partnerships Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Performance-Based Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We grow when you grow. Choose a partnership model that aligns our success with yours.
            </p>
            <Badge className="bg-orange-100 text-orange-600 mt-4 px-4 py-2 text-sm">
              Skin in the Game Pricing
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTiers.map((tier, idx) => (
              <Card key={idx} className={`relative hover:shadow-2xl transition-all ${
                tier.popular ? 'border-2 border-[#22C55E] shadow-xl scale-105' : ''
              }`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#22C55E] text-white px-4 py-1">
                      <Star className="w-3 h-3 inline mr-1" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.basePrice}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                  <CardDescription className="mt-4">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/#contact" className="w-full">
                    <Button className={`w-full rounded-full py-6 text-lg font-semibold ${
                      tier.popular ? 'bg-[#22C55E] hover:bg-[#16A34A]' : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}>
                      {tier.cta} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* One-Off Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('pricing.oneOffTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('pricing.oneOffSubtitle')}
            </p>
            <Badge className="bg-blue-100 text-blue-600 mt-4 px-4 py-2 text-sm">
              {t('pricing.oneOffBadge')}
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneOffServices.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-[#22C55E]">{service.price}</span>
                  </div>
                  <CardDescription className="mt-4">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-6 font-semibold"
                  >
                    Book Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Availability Status */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertCircle className="w-5 h-5" />
                Amazon Academy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Currently <strong>FULL</strong> until May 2026. Join waiting list for next cohort.</p>
              <Link to="/services/amazon-academy">
                <Button variant="outline" className="mt-4 border-orange-300 text-orange-600 hover:bg-orange-100">
                  Join Waiting List
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Zap className="w-5 h-5" />
                Expert Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700"><strong>Coming Soon</strong> - Bringing specialized Amazon talent closer within reach.</p>
              <Link to="/services/expert-matching">
                <Button variant="outline" className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Not Sure Which to Choose?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free 30-minute discovery call and we'll recommend the best path for your business.
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold">
              Book Free Discovery Call
            </Button>
          </a>
        </div>
      </div>

      {/* Checkout Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <ServiceCheckout
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;