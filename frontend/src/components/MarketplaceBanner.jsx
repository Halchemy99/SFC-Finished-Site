import React from 'react';
import { Link } from 'react-router-dom';

const MarketplaceBanner = () => {
  const platforms = [
    { name: 'Walmart', slug: 'walmart', color: '#0071CE', textColor: '#FFC220' },
    { name: 'Temu', slug: 'temu', color: '#FF6E30', textColor: '#FFFFFF' },
    { name: 'Shopify', slug: 'shopify', color: '#96BF48', textColor: '#FFFFFF' },
    { name: 'Mercado Libre', slug: 'mercadolibre', color: '#FFE600', textColor: '#000000' },
    { name: 'Blinkit', slug: 'blinkit', color: '#F8CB46', textColor: '#000000' },
    { name: 'Ocado', slug: 'ocado', color: '#70146C', textColor: '#FFFFFF' },
    { name: 'Flipkart', slug: 'flipkart', color: '#2874F0', textColor: '#FFFFFF' },
    { name: 'Bol.com', slug: 'bolcom', color: '#0000A4', textColor: '#FFFFFF' },
    { name: 'H&B', slug: 'hb', color: '#1E824C', textColor: '#FFFFFF' },
    { name: 'Noon', slug: 'noon', color: '#FED141', textColor: '#000000' },
    { name: 'Faire', slug: 'faire', color: '#000000', textColor: '#FFFFFF' },
    { name: 'TikTok Shop', slug: 'tiktok', color: '#000000', textColor: '#FE2C55' }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-100 mt-[65px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="flex items-center gap-4">
          {/* Label */}
          <div className="flex-shrink-0 hidden lg:block">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Also on
            </span>
          </div>
          
          {/* Desktop: Horizontal logos with brand colors on hover */}
          <div className="hidden md:flex items-center gap-3 flex-1 overflow-x-auto scrollbar-hide">
            {platforms.map((platform, idx) => (
              <Link
                key={idx}
                to={`/marketplace/${platform.slug}`}
                className="flex-shrink-0 px-3 py-1 bg-white rounded border border-gray-100 transition-all cursor-pointer"
                title={platform.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = platform.color;
                  e.currentTarget.style.borderColor = platform.color;
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = platform.textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#f3f4f6';
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.color = '#374151';
                }}
              >
                <span className="text-xs font-bold text-gray-700 whitespace-nowrap transition-colors">
                  {platform.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile: Compact pill showing platform count */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link to="/marketplace/walmart">
              <div className="px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
                <span className="text-xs font-bold text-gray-700">
                  12+ Marketplaces 🌍
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBanner;

