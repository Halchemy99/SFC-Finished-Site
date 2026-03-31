import React from 'react';

const MarketplaceBanner = () => {
  const platforms = [
    { name: 'Walmart', color: '#0071CE' },
    { name: 'Temu', color: '#FF6E30' },
    { name: 'Shopify', color: '#96BF48' },
    { name: 'OnBuy', color: '#FF6B00' },
    { name: 'Wayfair', color: '#7C2B82' },
    { name: 'Blinkit', color: '#F8CB46' },
    { name: 'Ocado', color: '#70146C' },
    { name: 'Flipkart', color: '#2874F0' },
    { name: 'Bol.com', color: '#0000A4' },
    { name: 'H&B', color: '#1E824C' },
    { name: 'Noon', color: '#FED141' },
    { name: 'Faire', color: '#000000' },
    { name: 'Mercado Libre', color: '#FFE600' },
    { name: 'TikTok Shop', color: '#000000' }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200 mt-[65px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-4">
          {/* Label */}
          <div className="flex-shrink-0 hidden lg:block">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Also on
            </span>
          </div>
          
          {/* Desktop: Horizontal logos */}
          <div className="hidden md:flex items-center gap-4 flex-1 overflow-x-auto scrollbar-hide">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3 py-1 bg-white rounded border border-gray-200 hover:border-gray-300 transition-all group"
                title={platform.name}
              >
                <span className="text-xs font-bold text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide flex-1">
            <div className="flex items-center gap-3" style={{ minWidth: 'max-content' }}>
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2.5 py-0.5 bg-white rounded border border-gray-200"
                >
                  <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
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
