import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Star, Zap, AlertCircle, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCheckout from '../components/ServiceCheckout';
import ServiceCaseStudyModal from '../components/ServiceCaseStudyModal';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const Pricing = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const [caseStudyModal, setCaseStudyModal] = useState({ isOpen: false, service: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTiers = [
    {
      id: 'starter-partnership',
      name: t('pricing.partnerships.starter.name'),
      basePrice: t('pricing.partnerships.starter.price'),
      period: t('pricing.partnerships.starter.priceNote'),
      description: t('pricing.partnerships.starter.description'),
      features: t('pricing.partnerships.starter.features', { returnObjects: true }),
      cta: t('pricing.partnerships.starter.cta'),
      popular: false,
      badge: null
    },
    {
      id: 'growth-partnership',
      name: t('pricing.partnerships.growth.name'),
      basePrice: t('pricing.partnerships.growth.price'),
      period: t('pricing.partnerships.growth.priceNote'),
      description: t('pricing.partnerships.growth.description'),
      features: t('pricing.partnerships.growth.features', { returnObjects: true }),
      cta: t('pricing.partnerships.growth.cta'),
      popular: true,
      badge: t('pricing.partnerships.growth.badge')
    },
    {
      id: 'scale-partnership',
      name: t('pricing.partnerships.scale.name'),
      basePrice: t('pricing.partnerships.scale.price'),
      period: t('pricing.partnerships.scale.priceNote'),
      description: t('pricing.partnerships.scale.description'),
      features: t('pricing.partnerships.scale.features', { returnObjects: true }),
      cta: t('pricing.partnerships.scale.cta'),
      popular: false,
      badge: null
    },
    {
      id: 'pure-revenue-share',
      name: t('pricing.revenueShare.title'),
      basePrice: '£0',
      period: 'base fee',
      description: t('pricing.revenueShare.subtitle'),
      features: t('pricing.revenueShare.features', { returnObjects: true }),
      cta: t('pricing.revenueShare.cta'),
      popular: false,
      badge: t('pricing.revenueShare.badge')
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
      name: t('pricing.services.aPlusContent.name'),
      price: '£300',
      packageId: 'a-plus-content',
      description: t('pricing.services.aPlusContent.description'),
      detailedDescription: t('pricing.services.aPlusContent.detailedDescription'),
      icon: '🎨',
      scope: [
        t('pricing.services.aPlusContent.scope1'),
        t('pricing.services.aPlusContent.scope2'),
        t('pricing.services.aPlusContent.scope3'),
        t('pricing.services.aPlusContent.scope4'),
        t('pricing.services.aPlusContent.scope5'),
        t('pricing.services.aPlusContent.scope6')
      ]
    },
    {
      name: t('pricing.services.photography.name'),
      price: '£500',
      packageId: 'product-photography',
      description: t('pricing.services.photography.description'),
      detailedDescription: t('pricing.services.photography.detailedDescription'),
      icon: '📸',
      scope: [
        t('pricing.services.photography.scope1'),
        t('pricing.services.photography.scope2'),
        t('pricing.services.photography.scope3'),
        t('pricing.services.photography.scope4'),
        t('pricing.services.photography.scope5'),
        t('pricing.services.photography.scope6')
      ]
    },
    {
      name: t('pricing.services.infographics.name'),
      price: '£175',
      packageId: 'infographic-set',
      description: t('pricing.services.infographics.description'),
      detailedDescription: t('pricing.services.infographics.detailedDescription'),
      icon: '📊',
      scope: [
        t('pricing.services.infographics.scope1'),
        t('pricing.services.infographics.scope2'),
        t('pricing.services.infographics.scope3'),
        t('pricing.services.infographics.scope4'),
        t('pricing.services.infographics.scope5'),
        t('pricing.services.infographics.scope6')
      ]
    },
    {
      name: t('pricing.services.brandStory.name'),
      price: '£125',
      packageId: 'brand-story',
      description: t('pricing.services.brandStory.description'),
      detailedDescription: t('pricing.services.brandStory.detailedDescription'),
      icon: '📖',
      scope: [
        t('pricing.services.brandStory.scope1'),
        t('pricing.services.brandStory.scope2'),
        t('pricing.services.brandStory.scope3'),
        t('pricing.services.brandStory.scope4'),
        t('pricing.services.brandStory.scope5'),
        t('pricing.services.brandStory.scope6')
      ]
    },
    {
      name: t('pricing.services.brandVideo.name'),
      price: '£400',
      packageId: 'brand-video',
      description: t('pricing.services.brandVideo.description'),
      detailedDescription: t('pricing.services.brandVideo.detailedDescription'),
      icon: '🎬',
      scope: [
        t('pricing.services.brandVideo.scope1'),
        t('pricing.services.brandVideo.scope2'),
        t('pricing.services.brandVideo.scope3'),
        t('pricing.services.brandVideo.scope4'),
        t('pricing.services.brandVideo.scope5'),
        t('pricing.services.brandVideo.scope6')
      ]
    },
    {
      name: t('pricing.services.copywriting.name'),
      price: '£150',
      packageId: 'listing-copywriting',
      description: t('pricing.services.copywriting.description'),
      detailedDescription: t('pricing.services.copywriting.detailedDescription'),
      icon: '✍️',
      scope: [
        t('pricing.services.copywriting.scope1'),
        t('pricing.services.copywriting.scope2'),
        t('pricing.services.copywriting.scope3'),
        t('pricing.services.copywriting.scope4'),
        t('pricing.services.copywriting.scope5'),
        t('pricing.services.copywriting.scope6')
      ]
    },
    {
      name: t('pricing.services.ppcAudit.name'),
      price: '£400',
      packageId: 'ppc-audit',
      description: t('pricing.services.ppcAudit.description'),
      detailedDescription: t('pricing.services.ppcAudit.detailedDescription'),
      icon: '🎯',
      scope: [
        t('pricing.services.ppcAudit.scope1'),
        t('pricing.services.ppcAudit.scope2'),
        t('pricing.services.ppcAudit.scope3'),
        t('pricing.services.ppcAudit.scope4'),
        t('pricing.services.ppcAudit.scope5'),
        t('pricing.services.ppcAudit.scope6')
      ]
    },
    {
      name: t('pricing.services.brandStorefront.name'),
      price: '£800',
      packageId: 'brand-storefront',
      description: t('pricing.services.brandStorefront.description'),
      detailedDescription: t('pricing.services.brandStorefront.detailedDescription'),
      icon: '🏪',
      scope: [
        t('pricing.services.brandStorefront.scope1'),
        t('pricing.services.brandStorefront.scope2'),
        t('pricing.services.brandStorefront.scope3'),
        t('pricing.services.brandStorefront.scope4'),
        t('pricing.services.brandStorefront.scope5'),
        t('pricing.services.brandStorefront.scope6')
      ]
    },
    {
      name: t('pricing.services.businessAnalysis.name'),
      price: '£1,500',
      packageId: 'business-analysis',
      description: t('pricing.services.businessAnalysis.description'),
      detailedDescription: t('pricing.services.businessAnalysis.detailedDescription'),
      icon: '📈',
      scope: [
        t('pricing.services.businessAnalysis.scope1'),
        t('pricing.services.businessAnalysis.scope2'),
        t('pricing.services.businessAnalysis.scope3'),
        t('pricing.services.businessAnalysis.scope4'),
        t('pricing.services.businessAnalysis.scope5'),
        t('pricing.services.businessAnalysis.scope6')
      ]
    }
  ];

  // Case Studies for each service (YOU WILL FILL THESE IN ONE BY ONE)
  const caseStudies = {
    'listing-optimization': {
      clientName: '[Client Name - TBD]',
      industry: '[Industry - TBD]',
      productType: '[Product Type - TBD]',
      challenge: '[Describe the challenge this client faced before using this service - TBD]',
      solution: [
        '[What we did step 1 - TBD]',
        '[What we did step 2 - TBD]',
        '[What we did step 3 - TBD]'
      ],
      results: [
        { metric: 'Conversion Rate', value: '[+X%]', timeframe: '[timeframe]' },
        { metric: 'Sales Increase', value: '[+X%]', timeframe: '[timeframe]' },
        { metric: 'Ranking', value: '[Position X to Y]', timeframe: '[timeframe]' }
      ],
      testimonial: {
        quote: '[Client testimonial quote - TBD]',
        author: '[Client Name]',
        role: '[Client Role/Company]'
      },
      images: [
        // { url: '[before image URL]', label: 'Before' },
        // { url: '[after image URL]', label: 'After' }
      ]
    },
    'a-plus-content': null, // Add case study data here
    'product-photography': null,
    'infographic-set': null,
    'brand-story': null,
    'brand-video': null,
    'listing-copywriting': null,
    'ppc-audit': null,
    'brand-storefront': null,
    'business-analysis': null
  };

  const handleViewExample = (service) => {
    const caseStudy = caseStudies[service.packageId];
    if (caseStudy) {
      setCaseStudyModal({ isOpen: true, service, caseStudy });
    } else {
      // No case study available yet
      alert(t('pricing.caseStudySoon'));
    }
  };

  const handleBuyFromModal = (service) => {
    setCaseStudyModal({ isOpen: false, service: null, caseStudy: null });
    setSelectedService(service);
  };

  return (
    <>
      <SEO 
        title="Amazon PPC Pricing | Performance-Based Agency Rates 2026"
        description="Transparent Amazon PPC management pricing from £650/month. Performance-based revenue-share options. No hidden fees. Free consultation included."
        keywords="amazon ppc pricing, amazon agency cost, performance based pricing, amazon ppc management rates, amazon advertising pricing 2026"
        canonical="https://www.superfly-commerce.com/pricing"
      />
      <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-6">
          <Badge className="bg-green-100 text-[#22C55E] mb-4 text-xs sm:text-sm">{t('pricing.badge')}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t('pricing.title')} <span className="text-[#22C55E]">{t('pricing.titleGreen')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Performance-Based Partnerships Section - Mobile Optimized */}
        <div className="mb-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('pricing.partnershipsTitle')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              {t('pricing.partnershipsSubtitle')}
            </p>
            <Badge className="bg-orange-100 text-orange-600 mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              {t('pricing.partnershipsBadge')}
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {partnershipTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 90} y={30}>
              <Card className={`relative h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                tier.popular ? 'border-2 border-[#22C55E] shadow-xl md:scale-105' : ''
              }`}>
                {tier.badge && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#22C55E] text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                      <Star className="w-3 h-3 inline mr-1" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl sm:text-2xl">{tier.name}</CardTitle>
                  <div className="mt-3 sm:mt-4">
                    <span className="text-3xl sm:text-4xl font-bold">{tier.basePrice}</span>
                    <span className="text-sm sm:text-base text-gray-500">{tier.period}</span>
                  </div>
                  <CardDescription className="mt-3 sm:mt-4 text-sm sm:text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={`${tier.id}-feature-${i}`} className="flex items-start gap-2">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="/#contact" className="w-full">
                    <Button className={`w-full rounded-full py-4 sm:py-6 text-base sm:text-lg font-semibold ${
                      tier.popular ? 'bg-[#22C55E] hover:bg-[#16A34A]' : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}>
                      {tier.cta} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* One-Off Services Section - Mobile Optimized */}
        <div className="mb-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t('pricing.oneOffTitle')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              {t('pricing.oneOffSubtitle')}
            </p>
            <Badge className="bg-blue-100 text-blue-600 mt-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              {t('pricing.oneOffBadge')}
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {oneOffServices.map((service, i) => (
              <Reveal key={service.packageId} delay={i * 80} y={28}>
              <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
                  <CardTitle className="text-lg sm:text-xl">{service.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl sm:text-3xl font-bold text-[#22C55E]">{service.price}</span>
                  </div>
                  <CardDescription className="mt-3 sm:mt-4 text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <ul className="space-y-2">
                    {service.scope.map((item, i) => (
                      <li key={`${service.packageId}-scope-${i}`} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5 sm:mt-1" />
                        <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-col gap-2 sm:gap-3 pt-3">
                  <Button
                    onClick={() => handleViewExample(service)}
                    variant="outline"
                    className="w-full border-2 border-[#22C55E] text-[#22C55E] hover:bg-green-50 rounded-full py-4 sm:py-5 text-sm sm:text-base font-semibold"
                  >
                    <Eye className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    {t('pricing.seeExamples')}
                  </Button>
                  <Button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full py-5 sm:py-6 text-sm sm:text-base font-semibold"
                  >
                    {t('pricing.buyNow')} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </CardFooter>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Availability Status - Mobile Optimized */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <AlertCircle className="w-5 h-5" />
                {t('pricing.amazonAcademy.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t('pricing.amazonAcademy.status')}</p>
              <Link to="/services/amazon-academy">
                <Button variant="outline" className="mt-4 border-orange-300 text-orange-600 hover:bg-orange-100">
                  {t('pricing.amazonAcademy.cta')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Zap className="w-5 h-5" />
                {t('pricing.expertMatching.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t('pricing.expertMatching.status')}</p>
              <Link to="/services/expert-matching">
                <Button variant="outline" className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-100">
                  {t('pricing.expertMatching.cta')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{t('pricing.finalCta.title')}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pricing.finalCta.subtitle')}
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold">
              {t('pricing.finalCta.button')}
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

      {/* Case Study Modal */}
      <ServiceCaseStudyModal
        isOpen={caseStudyModal.isOpen}
        onClose={() => setCaseStudyModal({ isOpen: false, service: null, caseStudy: null })}
        service={caseStudyModal.service}
        caseStudy={caseStudyModal.caseStudy}
        onBuyNow={handleBuyFromModal}
      />
    </div>
    </>
  );
};

export default Pricing;