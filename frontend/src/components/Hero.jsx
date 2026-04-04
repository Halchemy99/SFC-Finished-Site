import React from 'react';
import { CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#22C55E] pt-6 md:pt-8 pb-8 md:pb-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge with Amazon Logo - Mobile Optimized */}
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/30 backdrop-blur-md rounded-full px-3 md:px-6 py-2 md:py-3 border border-white/40 shadow-lg">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-bold tracking-wide">
                  Sustainable <span className="text-[#FF9900]">Amazon</span> Solutions
                </span>
              </div>
              {/* Amazon Smile Logo - Responsive */}
              <div className="flex items-center bg-white/20 rounded-full p-1.5 md:p-2 backdrop-blur-sm">
                <img 
                  src="https://customer-assets.emergentagent.com/job_design-75/artifacts/wdflto9v_Amazons-innovative-logo%20-%20Editado.png" 
                  alt="Amazon"
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                  style={{ filter: 'brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                />
              </div>
            </div>

            {/* Main Heading - Mobile Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 leading-tight">
              {t('hero.title')}
            </h1>

            {/* Subheading - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-white/95 leading-relaxed font-medium">
              {t('hero.subtitle')}
            </p>

            {/* Features - Compact on mobile */}
            <div className="grid grid-cols-1 gap-2 md:gap-4 mb-6 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-5 py-2 md:py-3">
                <div className="bg-white/20 rounded-full p-1 md:p-1.5">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-sm md:text-lg">{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-5 py-2 md:py-3">
                <div className="bg-white/20 rounded-full p-1 md:p-1.5">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-sm md:text-lg">{t('hero.feature2')}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 md:px-5 py-2 md:py-3">
                <div className="bg-white/20 rounded-full p-1 md:p-1.5">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="font-semibold text-sm md:text-lg">{t('hero.feature3')}</span>
              </div>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
              <a href="/#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-6 md:px-10 py-4 md:py-7 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all">
                  {t('hero.cta1')} <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </a>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-transparent border-2 md:border-3 border-white text-white hover:bg-white/20 rounded-full px-6 md:px-10 py-4 md:py-7 text-base md:text-lg font-bold backdrop-blur-sm">
                  <Zap className="mr-2 w-5 h-5 md:w-6 md:h-6" /> {t('hero.cta2')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Hide on mobile, show on tablet+ */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center">
            <div className="relative w-[600px] h-[600px]">
              {/* SVG Doughnut Visualization */}
              <svg viewBox="0 0 500 500" className="w-full h-full transform hover:scale-105 transition-transform duration-700">
                {/* Outer Ring - Sustainable Growth */}
                <circle
                  cx="250"
                  cy="250"
                  r="220"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="35"
                  className="animate-pulse"
                  style={{ animationDuration: '4s' }}
                />
                
                {/* Ring 4 - Brand & Strategy */}
                <circle
                  cx="250"
                  cy="250"
                  r="185"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="30"
                />
                
                {/* Ring 3 - Content & Creative */}
                <circle
                  cx="250"
                  cy="250"
                  r="155"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="25"
                />
                
                {/* Ring 2 - PPC & Advertising */}
                <circle
                  cx="250"
                  cy="250"
                  r="130"
                  fill="none"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="20"
                />
                
                {/* Ring 1 - Listing Optimization */}
                <circle
                  cx="250"
                  cy="250"
                  r="110"
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="15"
                />
                
                {/* Center Circle - Your Brand */}
                <circle
                  cx="250"
                  cy="250"
                  r="95"
                  fill="rgba(255,255,255,0.2)"
                  className="animate-pulse"
                  style={{ animationDuration: '3s' }}
                />
                
                {/* Center Text */}
                <text
                  x="250"
                  y="240"
                  fontSize="20"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  YOUR
                </text>
                <text
                  x="250"
                  y="265"
                  fontSize="28"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  BRAND
                </text>
                
                {/* Ring Labels */}
                {/* Listing Optimization */}
                <text
                  x="250"
                  y="145"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="middle"
                  opacity="0.9"
                >
                  LISTING OPTIMIZATION
                </text>
                
                {/* PPC & Advertising */}
                <text
                  x="420"
                  y="255"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="end"
                  opacity="0.9"
                >
                  PPC &
                </text>
                <text
                  x="420"
                  y="270"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="end"
                  opacity="0.9"
                >
                  ADVERTISING
                </text>
                
                {/* Content & Creative */}
                <text
                  x="250"
                  y="365"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="middle"
                  opacity="0.9"
                >
                  CONTENT & CREATIVE
                </text>
                
                {/* Brand & Strategy */}
                <text
                  x="80"
                  y="255"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="start"
                  opacity="0.9"
                >
                  BRAND &
                </text>
                <text
                  x="80"
                  y="270"
                  fontSize="11"
                  fontWeight="600"
                  fill="white"
                  textAnchor="start"
                  opacity="0.9"
                >
                  STRATEGY
                </text>
                
                {/* Sustainable Growth - Outer Label */}
                <text
                  x="250"
                  y="480"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  textAnchor="middle"
                  letterSpacing="2"
                >
                  SUSTAINABLE GROWTH
                </text>
              </svg>
              
              {/* Connecting dots for visual interest */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute bottom-[10%] left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '2.5s' }}></div>
                <div className="absolute top-1/2 right-[10%] w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-1/2 left-[10%] w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '3.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Mobile: 2 columns, Tablet: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-24 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-3">45+</div>
            <div className="text-white/90 text-sm md:text-lg font-medium">{t('hero.stat1')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-3">£13M</div>
            <div className="text-white/90 text-sm md:text-lg font-medium">{t('hero.stat2')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-3">96%</div>
            <div className="text-white/90 text-sm md:text-lg font-medium">{t('hero.stat3')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-3">999x</div>
            <div className="text-white/90 text-sm md:text-lg font-medium">{t('hero.stat4')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
