import React from 'react';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="bg-[#22C55E] pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainable Amazon Collective</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cut Through Heavy Fees. Get Results.
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
              We're not an agency—we're a collective of Amazon specialists who believe in transparent pricing, performance-based partnerships, and cutting through the bloated retainer model.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">No Heavy Retainers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Performance-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Sustainability Rewards</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#22C55E] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                <Zap className="mr-2 w-5 h-5" /> View Pricing
              </Button>
            </div>
          </div>

          {/* Right Content - Circular Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer circles */}
              <div className="w-96 h-96 rounded-full border-8 border-white/20 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-8 border-white/30 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-white/40 flex items-center justify-center bg-[#22C55E]">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">AMAZON</div>
                      <div className="text-2xl font-semibold text-white mb-2">GROWTH</div>
                      <div className="text-sm text-white/90">Sustainable & Fair</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl">
          <div>
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/90">Global Specialists</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">£1M+</div>
            <div className="text-white/90">Revenue Driven</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">10%</div>
            <div className="text-white/90">Profits to Charity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
  </svg>
);

export default Hero;