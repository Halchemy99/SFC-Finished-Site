import React from 'react';

const MarketplaceBanner = () => {
  const platforms = [
    'Walmart',
    'Temu',
    'Shopify',
    'OnBuy',
    'Wayfair',
    'Blinkit',
    'Ocado',
    'Flipkart',
    'Bol.com',
    'Holland & Barrett',
    'Noon',
    'Faire',
    'Mercado Libre',
    'TikTok Shop'
  ];

  return (
    <div className="bg-[#1a2332] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-3">
          <h3 className="text-white text-sm font-semibold mb-1">Also active on</h3>
          <p className="text-gray-400 text-xs">
            We work across every major marketplace — if your customers are there, so are we.
          </p>
        </div>
        
        {/* Desktop: Wrapping pills */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mt-3">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="px-4 py-1.5 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700 hover:border-[#22C55E] hover:text-[#22C55E] transition-colors"
            >
              {platform}
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide mt-3">
          <div className="flex gap-2 pb-2" style={{ minWidth: 'max-content' }}>
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="px-4 py-1.5 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700 whitespace-nowrap"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBanner;
