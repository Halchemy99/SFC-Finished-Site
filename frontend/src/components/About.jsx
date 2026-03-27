import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  const features = [
    'Global collective of Amazon specialists',
    'Performance-based retainers',
    'Transparent pricing with no hidden fees',
    'Sustainability discounts',
    '10% of profits donated'
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-[#22C55E] rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainable Amazon Collective</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              We're Not an Agency.{' '}
              <span className="text-[#22C55E]">We're a Collective.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're Amazon specialists who cut through heavy agency fees with transparent, performance-based partnerships.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
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

export default About;