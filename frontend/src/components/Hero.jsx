import React from 'react';
import { CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#22C55E] pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Sustainable Amazon Collective</span>
            </div>

            {/* Main Heading - Stronger */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Amazon Growth<br/>
              <span className="text-white/90">Without The</span><br/>
              Agency Tax
            </h1>

            {/* Subheading - More impactful */}
            <p className="text-xl lg:text-2xl mb-10 text-white/95 leading-relaxed font-medium">
              Performance-based partnerships. Transparent pricing. Real specialists who actually know Amazon—not account managers reading from playbooks.
            </p>

            {/* Features - More compelling */}
            <div className="grid grid-cols-1 gap-4 mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
                <div className="bg-white/20 rounded-full p-1.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">Pay for results, not retainers</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
                <div className="bg-white/20 rounded-full p-1.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">Direct access to Amazon specialists</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
                <div className="bg-white/20 rounded-full p-1.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">Built for sustainable, long-term growth</span>
              </div>
            </div>

            {/* CTA Buttons - More prominent */}
            <div className="flex flex-wrap gap-5">
              <a href="/#contact">
                <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all">
                  Start Growing Today <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button className="bg-transparent border-3 border-white text-white hover:bg-white/20 rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm">
                  <Zap className="mr-2 w-6 h-6" /> See Transparent Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Doughnut Economics Style Visualization - BIGGER */}
          <div className="flex justify-center lg:justify-end items-center">
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

        {/* Stats - More prominent */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-3">5+</div>
            <div className="text-white/90 text-lg font-medium">Amazon Specialists</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-3">£3M</div>
            <div className="text-white/90 text-lg font-medium">Annual Revenue Driven</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-3">94%</div>
            <div className="text-white/90 text-lg font-medium">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-3">600+</div>
            <div className="text-white/90 text-lg font-medium">Tickets Resolved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
