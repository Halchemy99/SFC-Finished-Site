import React from 'react';
import { CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#22C55E] pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{t('hero.feature3')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/#contact">
                <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                  {t('hero.cta1')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                  <Zap className="mr-2 w-5 h-5" /> {t('hero.cta2')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Amazon Logo */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="flex flex-col items-center gap-6">
              {/* Amazon Logo */}
              <div className="w-64 h-32 flex items-center justify-center">
                <svg viewBox="0 0 200 80" className="w-full h-full">
                  {/* Amazon smile/arrow */}
                  <path
                    d="M80 50 Q 100 55, 120 50"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Arrow tip */}
                  <polygon points="120,50 115,45 115,55" fill="white" />
                  
                  {/* Amazon text */}
                  <text
                    x="100"
                    y="35"
                    fontSize="28"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                  >
                    amazon
                  </text>
                </svg>
              </div>
              
              {/* Scroll for more text */}
              <div className="flex items-center gap-3 text-white/90 animate-bounce">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-sm font-medium uppercase tracking-wider">Scroll for More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mt-20 max-w-3xl">
          <div>
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/90">{t('hero.stat1')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">£1M+</div>
            <div className="text-white/90">{t('hero.stat2')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
