import React from 'react';

const MarketplaceBanner = () => {
  const platforms = [
    { name: 'Walmart', color: '#0071CE', textColor: '#FFC220' },
    { name: 'Temu', color: '#FF6E30', textColor: '#FFFFFF' },
    { name: 'Shopify', color: '#96BF48', textColor: '#FFFFFF' },
    { name: 'Mercado Libre', color: '#FFE600', textColor: '#000000' },
    { name: 'Blinkit', color: '#F8CB46', textColor: '#000000' },
    { name: 'Ocado', color: '#70146C', textColor: '#FFFFFF' },
    { name: 'Flipkart', color: '#2874F0', textColor: '#FFFFFF' },
    { name: 'Bol.com', color: '#0000A4', textColor: '#FFFFFF' },
    { name: 'H&B', color: '#1E824C', textColor: '#FFFFFF' },
    { name: 'Noon', color: '#FED141', textColor: '#000000' },
    { name: 'Faire', color: '#000000', textColor: '#FFFFFF' },
    { name: 'TikTok Shop', color: '#000000', textColor: '#FE2C55' }
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
              <div
                key={idx}
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
              </div>
            ))}
          </div>

          {/* Mobile: Show brand colors always */}
          <div className="md:hidden overflow-x-auto scrollbar-hide flex-1">
            <div className="flex items-center gap-3" style={{ minWidth: 'max-content' }}>
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2.5 py-0.5 rounded border"
                  style={{ backgroundColor: platform.color, borderColor: platform.color }}
                >
                  <span className="text-xs font-bold whitespace-nowrap" style={{ color: platform.textColor }}>
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBanner;
