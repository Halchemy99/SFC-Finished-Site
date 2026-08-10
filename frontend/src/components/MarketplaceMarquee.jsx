import React from 'react';

/**
 * Infinite marquee of marketplaces we operate across.
 * Uses CSS-only translate animation (no JS timers).
 */

const ITEMS = [
  { code: 'IN', label: 'Amazon.in' },
  { code: 'AE', label: 'Amazon.ae' },
  { code: 'MX', label: 'Amazon.com.mx' },
  { code: 'UK', label: 'Amazon.co.uk' },
  { code: 'DE', label: 'Amazon.de' },
  { code: 'US', label: 'Amazon.com' },
  { code: 'FR', label: 'Amazon.fr' },
  { code: 'IT', label: 'Amazon.it' },
  { code: 'ES', label: 'Amazon.es' },
  { code: 'JP', label: 'Amazon.co.jp' },
  { code: 'AU', label: 'Amazon.com.au' },
  { code: 'CA', label: 'Amazon.ca' },
];

const Row = ({ ariaHidden = false }) => (
  <div className="flex items-center gap-10 pr-10 shrink-0" aria-hidden={ariaHidden || undefined}>
    {ITEMS.map((m, i) => (
      <div key={`${m.code}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-[10px] font-black tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 rounded px-1.5 py-0.5">
          {m.code}
        </span>
        <span className="text-white/85 text-sm font-semibold">{m.label}</span>
        <span className="text-white/25 text-lg leading-none">·</span>
      </div>
    ))}
  </div>
);

const MarketplaceMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black border-y border-white/10 py-3" data-testid="marketplace-marquee">
      <style>{`
        @keyframes sfc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sfc-marquee-track { animation: sfc-marquee 40s linear infinite; will-change: transform; }
        .sfc-marquee-fade-l, .sfc-marquee-fade-r { pointer-events: none; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2; }
        .sfc-marquee-fade-l { left: 0; background: linear-gradient(90deg, #000 0%, transparent 100%); }
        .sfc-marquee-fade-r { right: 0; background: linear-gradient(-90deg, #000 0%, transparent 100%); }
      `}</style>
      <div className="sfc-marquee-fade-l" />
      <div className="sfc-marquee-fade-r" />
      <div className="flex sfc-marquee-track">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
};

export default MarketplaceMarquee;
