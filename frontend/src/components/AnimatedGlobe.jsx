import React from 'react';

/**
 * Cross-border Amazon Operators globe.
 * SVG earth with:
 *  - Rotating latitude/longitude grid
 *  - Origin pins (India, UAE, Mexico) — pulsing
 *  - Arcs travelling from origins to target markets (UK, EU/DE, USA)
 *  - Ambient orbit ring
 *
 * Pure SVG + CSS animation. No JS dependencies.
 */

const PINS = [
  // origins (green pulse) — spread geographically
  { id: 'mx', x: 178, y: 288, label: 'MX', kind: 'origin' },  // lower-left  (Mexico)
  { id: 'ae', x: 322, y: 270, label: 'AE', kind: 'origin' },  // mid-right   (UAE)
  { id: 'in', x: 372, y: 260, label: 'IN', kind: 'origin' },  // right       (India)
  // targets (white)
  { id: 'us', x: 192, y: 218, label: 'US', kind: 'target' },  // upper-left  (USA)
  { id: 'uk', x: 268, y: 190, label: 'UK', kind: 'target' },  // upper-mid   (UK)
  { id: 'de', x: 296, y: 208, label: 'DE', kind: 'target' },  // upper-right of UK (Germany)
];

// origin -> target arcs
const ARCS = [
  { from: 'in', to: 'uk', delay: 0 },
  { from: 'in', to: 'us', delay: 1.2 },
  { from: 'ae', to: 'de', delay: 2.4 },
  { from: 'mx', to: 'us', delay: 0.6 },
  { from: 'mx', to: 'uk', delay: 3.0 },
];

const pinById = (id) => PINS.find((p) => p.id === id);

// build a curved arc path between two points on the globe
const arcPath = (a, b) => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // curvature perpendicular to the line
  const nx = -dy / dist;
  const ny = dx / dist;
  const curveAmount = Math.min(dist * 0.45, 90);
  const cx = mx + nx * curveAmount;
  const cy = my + ny * curveAmount - 20; // lift slightly north for "over the earth" feel
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
};

const AnimatedGlobe = () => {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto" data-testid="animated-globe">
      <style>{`
        @keyframes sfc-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes sfc-pulse { 0%,100% { opacity: 1; r: 4; } 50% { opacity: 0.55; r: 7; } }
        @keyframes sfc-dash { to { stroke-dashoffset: -240; } }
        @keyframes sfc-fade { 0%,100% { opacity: 0.9; } 50% { opacity: 0.35; } }
        .sfc-grid { animation: sfc-spin 60s linear infinite; transform-origin: 250px 250px; }
        .sfc-ring-slow { animation: sfc-spin 120s linear infinite reverse; transform-origin: 250px 250px; }
        .sfc-pin-origin { animation: sfc-pulse 2.2s ease-in-out infinite; transform-origin: center; }
        .sfc-arc { stroke-dasharray: 6 8; animation: sfc-dash 6s linear infinite; }
        .sfc-glow { animation: sfc-fade 3.5s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
          <radialGradient id="earth" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
          </linearGradient>
          <filter id="softglow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* outer ambient orbit */}
        <circle cx="250" cy="250" r="235" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="2 6" className="sfc-ring-slow" />
        <circle cx="250" cy="250" r="215" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />

        {/* earth sphere */}
        <circle cx="250" cy="250" r="180" fill="url(#earth)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* rotating lat/long grid */}
        <g className="sfc-grid" opacity="0.55">
          {/* longitudes */}
          {[-60, -30, 0, 30, 60].map((deg) => (
            <ellipse key={`lon-${deg}`} cx="250" cy="250" rx={Math.abs(Math.cos((deg * Math.PI) / 180)) * 180} ry="180" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          ))}
          {/* latitudes */}
          {[-60, -30, 0, 30, 60].map((deg) => (
            <ellipse key={`lat-${deg}`} cx="250" cy={250 + Math.sin((deg * Math.PI) / 180) * 180 * 0.9} rx="180" ry={Math.abs(Math.cos((deg * Math.PI) / 180)) * 30} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          ))}
        </g>

        {/* arcs from origin -> target */}
        <g filter="url(#softglow)">
          {ARCS.map((arc, i) => {
            const a = pinById(arc.from);
            const b = pinById(arc.to);
            if (!a || !b) return null;
            return (
              <path
                key={`arc-${i}`}
                d={arcPath(a, b)}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                className="sfc-arc"
                style={{ animationDelay: `${arc.delay}s` }}
              />
            );
          })}
        </g>

        {/* pins */}
        <g>
          {PINS.map((p) => {
            const isOrigin = p.kind === 'origin';
            const outer = isOrigin ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.35)';
            const core = '#ffffff';
            return (
              <g key={p.id}>
                <circle cx={p.x} cy={p.y} r="10" fill={outer} className={isOrigin ? 'sfc-glow' : ''} />
                <circle cx={p.x} cy={p.y} r="4" fill={core} className={isOrigin ? 'sfc-pin-origin' : ''} />
                <text x={p.x + 12} y={p.y + 4} fontSize="11" fontWeight="700" fill="#ffffff" opacity="0.95">
                  {p.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* center label — subtle text under the equator */}
        <g>
          <text x="250" y="405" fontSize="10" fontWeight="800" fill="#ffffff" opacity="0.75" textAnchor="middle" letterSpacing="4">
            CROSS-BORDER
          </text>
          <text x="250" y="420" fontSize="8" fontWeight="600" fill="#ffffff" opacity="0.55" textAnchor="middle" letterSpacing="3">
            AMAZON OPERATIONS
          </text>
        </g>
      </svg>

      {/* corner data chips for personality */}
      <div className="hidden md:flex absolute top-2 right-2 items-center gap-2 bg-black/30 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-white text-[11px] font-bold tracking-widest">LIVE · 45 BRANDS</span>
      </div>
      <div className="hidden md:block absolute bottom-3 left-3 bg-black/30 backdrop-blur-md border border-white/25 rounded-lg px-3 py-1.5">
        <span className="text-white text-[11px] font-mono">IN→UK · MX→US · AE→DE</span>
      </div>
    </div>
  );
};

export default AnimatedGlobe;
