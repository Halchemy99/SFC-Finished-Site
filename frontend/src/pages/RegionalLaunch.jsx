import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, TrendingUp, Package, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';

const RegionalLaunch = () => {
  const { region } = useParams();

  // Regional configurations
  const regionalData = {
    india: {
      name: 'India',
      flag: '🇮🇳',
      targetMarkets: ['🇬🇧 UK', '🇪🇺 EU', '🇺🇸 USA'],
      heroTitle: 'Launch Your Indian Brand in the UK, EU & USA',
      heroSubtitle: 'We help Indian sellers break into international Amazon marketplaces with proven cross-border strategies.',
      challenges: [
        'Understanding VAT & import regulations',
        'Building trust with international buyers',
        'Competing against established local brands',
        'Managing international logistics & FBA',
        'Pricing for different currencies & markets',
        'Navigating cultural differences in marketing'
      ],
      advantages: [
        'Lower production costs = competitive pricing',
        'Growing "Made in India" brand appeal',
        'Strong manufacturing heritage',
        'English-speaking team advantage',
        'Untapped niche opportunities'
      ],
      successStory: {
        client: 'Pune-based Home Goods Brand',
        result: 'Launched in UK & achieved £25k/month in 90 days',
        quote: 'Superfly helped us navigate UK Amazon without the usual trial-and-error nightmare.'
      },
      localPartner: 'Yadnesh Kulkarni - Our Indian Brand Lead based in Pune',
      seoTitle: 'Launch Indian Products on Amazon UK, EU & USA | Superfly Commerce',
      seoDescription: 'Expert Amazon launch services for Indian sellers. Navigate VAT, FBA, and international compliance. Launch in UK/EU/USA markets with proven strategies.'
    },
    uae: {
      name: 'UAE & MENA',
      flag: '🇦🇪',
      targetMarkets: ['🇬🇧 UK', '🇪🇺 EU', '🇺🇸 USA'],
      heroTitle: 'Expand Your MENA Brand to Global Amazon Markets',
      heroSubtitle: 'Strategic launch services for UAE and MENA sellers ready to scale beyond the Middle East.',
      challenges: [
        'Understanding Western consumer behavior',
        'VAT & customs compliance differences',
        'Payment processing & currency management',
        'Building brand trust in new markets',
        'International shipping & FBA setup',
        'Marketing messaging for Western audiences'
      ],
      advantages: [
        'Strong e-commerce experience in MENA',
        'Premium product positioning',
        'Bilingual marketing capabilities',
        'Strategic geographic advantage',
        'Growing Middle Eastern brand recognition'
      ],
      successStory: {
        client: 'Dubai-based Beauty Brand',
        result: 'Successfully launched in UK with £40k first quarter revenue',
        quote: 'Superfly made our European expansion seamless and profitable from day one.'
      },
      localPartner: 'Fernando Clementin - LATAM & International Expansion Lead',
      seoTitle: 'UAE & MENA Sellers: Launch on Amazon UK, EU & USA | Superfly',
      seoDescription: 'Expand your MENA e-commerce brand to UK, EU, and USA Amazon markets. Expert guidance on compliance, FBA, and international growth strategies.'
    },
    mexico: {
      name: 'Mexico',
      flag: '🇲🇽',
      targetMarkets: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇺 EU'],
      heroTitle: 'Launch Your Mexican Brand on Amazon USA, UK & EU',
      heroSubtitle: 'Cross-border Amazon expertise for Mexican sellers targeting North American and European markets.',
      challenges: [
        'USMCA/trade agreement navigation',
        'US sales tax & VAT compliance',
        'Bilingual listing optimization',
        'Competing in saturated US market',
        'International shipping logistics',
        'Building credibility as a foreign seller'
      ],
      advantages: [
        'USMCA trade advantages for US market',
        'Growing Mexican brand recognition',
        'Artisan & authentic product appeal',
        'Bilingual team capabilities',
        'Competitive manufacturing costs'
      ],
      successStory: {
        client: 'Mexico City Food & Beverage Brand',
        result: 'Generated $60k/month in USA within 6 months',
        quote: 'Superfly understood both markets and helped us bridge the gap perfectly.'
      },
      localPartner: 'Fernando Clementin - LATAM Lead & Account Manager',
      seoTitle: 'Launch Mexican Products on Amazon USA, UK & EU | Superfly',
      seoDescription: 'Expert Amazon launch services for Mexican sellers. Navigate USMCA, FBA, and cross-border compliance to succeed in USA, UK & EU markets.'
    }
  };

  const data = regionalData[region] || regionalData.india;

  return (
    <>
      <SEO 
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={`amazon ${data.name.toLowerCase()}, international amazon launch, cross-border ecommerce, ${data.name.toLowerCase()} sellers, amazon uk launch, amazon usa expansion`}
        canonical={`https://www.superfly-commerce.com/launch/${region}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white pt-24 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-6xl">{data.flag}</span>
              <ArrowRight className="w-8 h-8" />
              <div className="flex gap-2">
                {data.targetMarkets.map((market, idx) => (
                  <span key={idx} className="text-3xl">{market.split(' ')[0]}</span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {data.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-95">
              {data.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold">
                  Book Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-bold">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Target Markets */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              We Help You Launch In
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">🇬🇧</div>
                  <CardTitle>United Kingdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ VAT registration & compliance</li>
                    <li>✓ UK FBA setup</li>
                    <li>✓ British consumer insights</li>
                    <li>✓ Localized marketing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow border-2 border-[#22C55E]">
                <CardHeader>
                  <Badge className="bg-[#22C55E] text-white mb-2">Most Popular</Badge>
                  <div className="text-6xl mb-4">🇪🇺</div>
                  <CardTitle>European Union</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Pan-EU FBA program</li>
                    <li>✓ Multi-country VAT</li>
                    <li>✓ German, French, Italian markets</li>
                    <li>✓ EU compliance (CE marking)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">🇺🇸</div>
                  <CardTitle>United States</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ US sales tax setup</li>
                    <li>✓ FBA USA logistics</li>
                    <li>✓ American market positioning</li>
                    <li>✓ Competitive analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Challenges We Solve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Common Challenges from {data.name}
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              We've helped dozens of {data.name}-based sellers overcome these exact obstacles:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.challenges.map((challenge, idx) => (
                <Card key={idx} className="bg-red-50 border-red-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 font-bold text-sm">!</span>
                      </div>
                      <p className="text-sm text-gray-700">{challenge}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Your Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Your Competitive Advantages
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Leverage what makes {data.name} brands unique:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.advantages.map((advantage, idx) => (
                <Card key={idx} className="bg-green-50 border-green-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 font-medium">{advantage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Story */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-[#22C55E]">
              <CardHeader>
                <Badge className="bg-[#22C55E] text-white mb-2 w-fit">Success Story</Badge>
                <CardTitle className="text-2xl">{data.successStory.client}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                  <p className="text-lg font-bold text-gray-900">{data.successStory.result}</p>
                </div>
                <blockquote className="border-l-4 border-[#22C55E] pl-4 italic text-gray-700">
                  "{data.successStory.quote}"
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* How We Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Launch Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-lg">1. Compliance Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">VAT, taxes, legal requirements handled</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-lg">2. FBA & Logistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">International shipping & fulfillment optimized</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-lg">3. Market Entry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Listings, PPC, and launch strategy</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <CardTitle className="text-lg">4. Scale & Optimize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Ongoing growth & expansion</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Local Partner */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-50 to-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Globe className="w-12 h-12 text-[#22C55E]" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Your Regional Partner</h3>
                    <p className="text-gray-700">{data.localPartner}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Launch from {data.name}?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We'll discuss your products, target markets, and create a custom launch roadmap.
            </p>
            <a href="/#contact">
              <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default RegionalLaunch;
