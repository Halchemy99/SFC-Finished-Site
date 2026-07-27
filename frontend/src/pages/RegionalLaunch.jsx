import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, TrendingUp, Package, Shield, Zap, Rocket, Target, Trophy } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import RegionalAuditForm from '../components/RegionalAuditForm';

const RegionalLaunch = () => {
  const { region } = useParams();
  const [animatedStat, setAnimatedStat] = useState(0);

  // Animated counter effect for hero stats
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStat(prev => (prev < 100 ? prev + 2 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Regional configurations
  const regionalData = {
    india: {
      name: 'India',
      flag: '🇮🇳',
      emoji: '🚀',
      targetMarkets: ['🇬🇧 UK', '🇪🇺 EU', '🇺🇸 USA'],
      heroTitle: 'Take Your Indian Brand Global',
      heroSubtitle: 'From Pune to London. From Mumbai to New York. We help Indian sellers conquer international Amazon marketplaces (chai not included ☕)',
      funFact: 'Indian brands are crushing it globally. Time for yours to join the party.',
      challenges: [
        { icon: '📋', text: 'Understanding VAT & import regulations', tip: 'Spoiler: It\'s not as scary as it sounds' },
        { icon: '🤝', text: 'Building trust with international buyers', tip: 'Your product quality speaks louder than your accent' },
        { icon: '🏆', text: 'Competing against established local brands', tip: 'David beat Goliath. You can too.' },
        { icon: '📦', text: 'Managing international logistics & FBA', tip: 'Amazon does the heavy lifting, literally' },
        { icon: '💰', text: 'Pricing for different currencies & markets', tip: 'Currency converter = your new best friend' },
        { icon: '🎯', text: 'Navigating cultural differences in marketing', tip: 'British people love tea too, you know' }
      ],
      advantages: [
        { icon: '💪', text: 'Lower production costs = competitive pricing', boost: '+35% margin advantage' },
        { icon: '🌟', text: 'Growing "Made in India" brand appeal', boost: 'Trending globally' },
        { icon: '🏭', text: 'Strong manufacturing heritage', boost: 'Quality recognized worldwide' },
        { icon: '🗣️', text: 'English-speaking team advantage', boost: 'No language barriers' },
        { icon: '🎁', text: 'Untapped niche opportunities', boost: 'First-mover wins' }
      ],
      successStory: {
        client: 'Pune-based Home Goods Brand',
        result: '£25k/month in 90 days 🎉',
        quote: 'Superfly helped us navigate UK Amazon without the usual trial-and-error nightmare. No more sleepless nights!',
        emoji: '🏡'
      },
      seoTitle: 'Launch Indian Products on Amazon UK, EU & USA | Superfly Commerce',
      seoDescription: 'Expert Amazon launch services for Indian sellers. Navigate VAT, FBA, and international compliance. Launch in UK/EU/USA markets with proven strategies.'
    },
    uae: {
      name: 'UAE & MENA',
      flag: '🇦🇪',
      emoji: '✈️',
      targetMarkets: ['🇬🇧 UK', '🇪🇺 EU', '🇺🇸 USA'],
      heroTitle: 'Go West, Young Brand',
      heroSubtitle: 'Dubai to London. Abu Dhabi to LA. Your MENA brand deserves a global stage (sand dunes sold separately 🏜️)',
      funFact: 'MENA e-commerce expertise + Western markets = 💰💰💰',
      challenges: [
        { icon: '🧠', text: 'Understanding Western consumer behavior', tip: 'Different markets, same human desires' },
        { icon: '💳', text: 'VAT & customs compliance differences', tip: 'We\'ve cracked the code for you' },
        { icon: '💸', text: 'Payment processing & currency management', tip: 'AED, GBP, EUR, USD - we speak them all' },
        { icon: '🌟', text: 'Building brand trust in new markets', tip: 'Quality translates across borders' },
        { icon: '📦', text: 'International shipping & FBA setup', tip: 'Let Amazon\'s robots do the work' },
        { icon: '📣', text: 'Marketing messaging for Western audiences', tip: 'Authenticity > Localization' }
      ],
      advantages: [
        { icon: '🚀', text: 'Strong e-commerce experience in MENA', boost: 'Battle-tested strategies' },
        { icon: '👑', text: 'Premium product positioning', boost: 'Luxury plays well globally' },
        { icon: '🗣️', text: 'Bilingual marketing capabilities', boost: 'Arabic + English = powerhouse' },
        { icon: '🌍', text: 'Strategic geographic advantage', boost: 'Bridge between East & West' },
        { icon: '✨', text: 'Growing Middle Eastern brand recognition', boost: 'Your heritage is your superpower' }
      ],
      successStory: {
        client: 'Dubai-based Beauty Brand',
        result: '£40k first quarter revenue 💄',
        quote: 'Superfly made our European expansion seamless and profitable from day one. No desert mirages here!',
        emoji: '💅'
      },
      seoTitle: 'UAE & MENA Sellers: Launch on Amazon UK, EU & USA | Superfly',
      seoDescription: 'Expand your MENA e-commerce brand to UK, EU, and USA Amazon markets. Expert guidance on compliance, FBA, and international growth strategies.'
    },
    mexico: {
      name: 'Mexico',
      flag: '🇲🇽',
      emoji: '🌮',
      targetMarkets: ['🇺🇸 USA', '🇬🇧 UK', '🇪🇺 EU'],
      heroTitle: '¡Vámonos! Take Your Mexican Brand North (and East)',
      heroSubtitle: 'Mexico City to Miami. Guadalajara to Germany. Cross-border success without the red tape (piñatas optional 🎉)',
      funFact: 'Mexican craftsmanship + global demand = your ticket to scale',
      challenges: [
        { icon: '📜', text: 'USMCA/trade agreement navigation', tip: 'Free trade = free money (almost)' },
        { icon: '🚚', text: 'Cross-border logistics & customs', tip: 'FBA handles this like a boss' },
        { icon: '💵', text: 'Currency fluctuations (MXN/USD/EUR)', tip: 'Hedge with volume' },
        { icon: '🎯', text: 'USA market competition', tip: 'Your authenticity is your edge' },
        { icon: '🗣️', text: 'Language barriers in non-US markets', tip: 'We translate, you profit' },
        { icon: '✅', text: 'Compliance & product certifications', tip: 'CE, FCC, FDA - we know the alphabet soup' }
      ],
      advantages: [
        { icon: '🤝', text: 'USMCA benefits (zero tariffs on many products)', boost: 'Instant cost advantage' },
        { icon: '🎨', text: 'Authentic Mexican craftsmanship', boost: 'Unique sells' },
        { icon: '🌎', text: 'Proximity to USA (logistics advantage)', boost: 'Faster shipping = happier customers' },
        { icon: '🌶️', text: 'Growing Hispanic market appeal in USA', boost: '60M+ Hispanics in USA alone' },
        { icon: '💪', text: 'Competitive pricing + quality manufacturing', boost: 'Best of both worlds' }
      ],
      successStory: {
        client: 'Guadalajara Artisan Collective',
        result: '$85k/month USA sales 🎊',
        quote: 'We went from local market to Amazon USA in 4 months. Superfly navigated USMCA like pros. ¡Increíble!',
        emoji: '🎨'
      },
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
        {/* Hero Section - Now with personality! */}
        <div className="bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803D] text-white pt-24 pb-16 px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-8xl animate-bounce">{data.emoji}</div>
            <div className="absolute bottom-10 right-10 text-8xl animate-pulse">{data.flag}</div>
            <div className="absolute top-1/2 left-1/4 text-6xl animate-spin-slow">🌍</div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Animated fun fact badge */}
            <div className="inline-block mb-6 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold animate-pulse">
              💡 {data.funFact}
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-6 transform transition-all hover:scale-110 duration-300">
              <span className="text-6xl animate-bounce" style={{animationDelay: '0s'}}>{data.flag}</span>
              <Rocket className="w-10 h-10 animate-pulse" />
              <div className="flex gap-2">
                {data.targetMarkets.map((market, idx) => (
                  <span 
                    key={idx} 
                    className="text-3xl hover:scale-125 transition-transform cursor-default"
                    style={{animationDelay: `${idx * 0.2}s`}}
                  >
                    {market.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              {data.heroSubtitle}
            </p>
            
            {/* Animated stat counter */}
            <div className="mb-8 flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold">{animatedStat}+</div>
                <div className="text-sm opacity-90">Brands Launched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">£{(animatedStat * 10).toLocaleString()}k+</div>
                <div className="text-sm opacity-90">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">{animatedStat}%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 hover:scale-105 transition-all rounded-full px-8 py-6 text-lg font-bold shadow-2xl">
                  Book Free Strategy Call <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 hover:scale-105 transition-all rounded-full px-8 py-6 text-lg font-bold">
                  View Pricing <ArrowRight className="ml-2 w-5 h-5" />
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

          {/* Challenges We Solve - Now with helpful tips! */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Challenges? We Got You 💪
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Here's what scares most {data.name}-based sellers (and how we make it easy):
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.challenges.map((challenge, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-xl transition-all hover:scale-105 group">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{challenge.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2">{challenge.text}</h4>
                    <div className="bg-white/80 rounded-lg p-3 mt-3 border border-orange-200">
                      <p className="text-xs text-gray-600 italic">💡 {challenge.tip}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Your Superpowers - Everyone has them! */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Your Secret Weapons 🚀
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              What makes {data.name} brands absolutely crush it globally:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.advantages.map((advantage, idx) => (
                <Card key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-2xl transition-all hover:scale-105 group">
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-3 group-hover:rotate-12 transition-transform">{advantage.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2">{advantage.text}</h4>
                    <div className="bg-[#22C55E]/10 rounded-lg px-3 py-2 mt-3 border border-green-300">
                      <p className="text-xs font-semibold text-[#16A34A]">⚡ {advantage.boost}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Story - Real Results from Real Brands */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 border-2 border-[#22C55E] hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-[#22C55E] text-white text-lg px-4 py-1">Real Success Story</Badge>
                  <Trophy className="w-8 h-8 text-yellow-500 animate-pulse" />
                </div>
                <CardTitle className="text-3xl flex items-center gap-3">
                  {data.successStory.client}
                  <span className="text-4xl">{data.successStory.emoji}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-6 bg-white/60 rounded-xl p-4">
                  <div className="text-5xl">{data.flag}</div>
                  <ArrowRight className="w-8 h-8 text-[#22C55E]" />
                  <div className="text-5xl">💰</div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-[#16A34A]">{data.successStory.result}</div>
                    <div className="text-sm text-gray-600">From zero to hero</div>
                  </div>
                </div>
                
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#22C55E] pl-6 py-2 bg-white/40 rounded-r-lg">
                  "{data.successStory.quote}"
                </blockquote>
                
                <div className="mt-6 text-center">
                  <a href="/#contact">
                    <Button size="lg" className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl hover:scale-105 transition-all">
                      Get Results Like This <Target className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
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

          {/* Audit Request Form */}
          <div className="mb-16">
            <RegionalAuditForm region={region} regionName={data.name} />
          </div>

        </div>
      </div>
    </>
  );
};

export default RegionalLaunch;

// Custom CSS for animations
const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
