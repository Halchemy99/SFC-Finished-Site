import React from 'react';
import { useTranslation } from 'react-i18next';

const BrandSlider = () => {
  const { t } = useTranslation();

  const brands = [
    { name: 'LEON', logo: '/brands/leon.png' },
    { name: 'Hair Guru', logo: '/brands/hair-guru.png' },
    { name: 'Six Pack', logo: '/brands/six-pack.png' },
    { name: 'Reborn', logo: '/brands/reborn.png' },
    { name: 'Presto Coffee', logo: '/brands/presto-coffee.png' },
    // Duplicate for seamless loop
    { name: 'LEON', logo: '/brands/leon.png' },
    { name: 'Hair Guru', logo: '/brands/hair-guru.png' },
    { name: 'Six Pack', logo: '/brands/six-pack.png' },
    { name: 'Reborn', logo: '/brands/reborn.png' },
    { name: 'Presto Coffee', logo: '/brands/presto-coffee.png' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted by Leading Brands
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Brands We've Helped <span className="text-[#22C55E]">Grow on Amazon</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Animated Slider */}
          <div className="flex animate-slide">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-64 px-8 flex items-center justify-center"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#22C55E]">50+</div>
            <div className="text-sm text-gray-600 mt-1">Brands Supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#22C55E]">£12M+</div>
            <div className="text-sm text-gray-600 mt-1">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#22C55E]">200%</div>
            <div className="text-sm text-gray-600 mt-1">Avg. Growth Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#22C55E]">98%</div>
            <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandSlider;
