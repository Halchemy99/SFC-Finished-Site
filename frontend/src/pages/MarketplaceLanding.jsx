import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const MarketplaceLanding = () => {
  const { platform } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    // If already on homepage, just scroll
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = '/#contact';
    }
  };
  
  const marketplaceData = {
    walmart: {
      name: t('marketplace.walmart.name'),
      icon: '🏪',
      color: '#0071CE',
      bgGradient: 'from-blue-600 to-blue-700',
      pricing: t('marketplace.walmart.pricing'),
      pricingNote: t('marketplace.walmart.pricingNote'),
      description: t('marketplace.walmart.description'),
      why: t('marketplace.walmart.why', { returnObjects: true }),
      what: t('marketplace.walmart.what', { returnObjects: true }),
      synthesis: t('marketplace.walmart.synthesis'),
      cta: t('marketplace.walmart.cta')
    },
    mercadolibre: {
      name: t('marketplace.mercadolibre.name'),
      icon: '🛒',
      color: '#FFE600',
      bgGradient: 'from-yellow-400 to-yellow-500',
      pricing: t('marketplace.mercadolibre.pricing'),
      pricingNote: t('marketplace.mercadolibre.pricingNote'),
      description: t('marketplace.mercadolibre.description'),
      why: t('marketplace.mercadolibre.why', { returnObjects: true }),
      what: t('marketplace.mercadolibre.what', { returnObjects: true }),
      synthesis: t('marketplace.mercadolibre.synthesis'),
      cta: t('marketplace.mercadolibre.cta')
    },
    temu: {
      name: t('marketplace.temu.name'),
      icon: '🎁',
      color: '#FF6B00',
      bgGradient: 'from-orange-500 to-red-500',
      pricing: t('marketplace.temu.pricing'),
      pricingNote: t('marketplace.temu.pricingNote'),
      description: t('marketplace.temu.description'),
      why: t('marketplace.temu.why', { returnObjects: true }),
      what: t('marketplace.temu.what', { returnObjects: true }),
      synthesis: t('marketplace.temu.synthesis'),
      cta: t('marketplace.temu.cta')
    },
    shopify: {
      name: t('marketplace.shopify.name'),
      icon: '🛍️',
      color: '#96BF48',
      bgGradient: 'from-green-500 to-green-600',
      pricing: t('marketplace.shopify.pricing'),
      pricingNote: t('marketplace.shopify.pricingNote'),
      description: t('marketplace.shopify.description'),
      why: t('marketplace.shopify.why', { returnObjects: true }),
      what: t('marketplace.shopify.what', { returnObjects: true }),
      synthesis: t('marketplace.shopify.synthesis'),
      cta: t('marketplace.shopify.cta'),
      special: true
    }
  };

  const mp = marketplaceData[platform] || marketplaceData.walmart;

  return (
    <>
      <SEO 
        title={`${mp.name} Management | Superfly Commerce`}
        description={mp.description}
      />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        
        {/* Hero */}
        <div className={`bg-gradient-to-br ${mp.bgGradient} text-white pt-16 pb-24 px-4`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">{mp.icon}</div>
            <Badge className="bg-white/20 text-white text-sm px-4 py-2 mb-6">
              {t('marketplace.growthSynthesis')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {mp.name} Management
            </h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8 max-w-3xl mx-auto">
              {mp.description}
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-5xl font-bold">{mp.pricing}</span>
              <span className="text-xl opacity-90">{mp.pricingNote}</span>
            </div>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-2xl"
            >
              {mp.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 -mt-12">
          
          {/* Synthesis Message */}
          <Card className="mb-12 border-4" style={{ borderColor: mp.color }}>
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: `${mp.color}20` }}>
                    🤝
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{t('marketplace.synthesisTitle')}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {mp.synthesis}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why This Marketplace */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('marketplace.whyTitle')} {mp.name}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mp.why.map((point, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: mp.color }} />
                      <p className="text-lg font-medium">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('marketplace.whatsIncluded')}
            </h2>
            <Card className="border-2" style={{ borderColor: mp.color }}>
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">
                  {mp.what.map((item) => (
                    <div key={item} className="flex items-center gap-4 py-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: mp.color }}>
                        <Zap className="w-4 h-4" />
                      </div>
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing CTA */}
          <Card className={`mb-16 bg-gradient-to-br ${mp.bgGradient} text-white border-0`}>
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {t('marketplace.readyTitle')}
              </h2>
              <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                {mp.special ? t('marketplace.specialNote') : t('marketplace.performanceNote')}
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-6xl font-bold">{mp.pricing}</span>
                <span className="text-2xl opacity-90">{mp.pricingNote}</span>
              </div>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-2xl"
              >
                {t('nav.bookCall')} <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </CardContent>
          </Card>

          {/* Other Marketplaces */}
          <div className="mb-16 text-center">
            <h3 className="text-xl font-semibold mb-6">{t('marketplace.weAlsoManage')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(marketplaceData).filter(key => key !== platform).map(key => (
                <Link key={key} to={`/marketplace/${key}`}>
                  <Badge className="text-lg px-6 py-3 cursor-pointer hover:scale-105 transition-transform" style={{ backgroundColor: marketplaceData[key].color }}>
                    {marketplaceData[key].icon} {marketplaceData[key].name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MarketplaceLanding;
