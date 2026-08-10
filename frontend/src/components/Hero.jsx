import React from 'react';
import { ArrowRight, Zap, Radio } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedGlobe from './AnimatedGlobe';
import MarketplaceMarquee from './MarketplaceMarquee';
import useCountUp from '../hooks/useCountUp';

const Stat = ({ end, suffix = '', decimals = 0, label, prefix = '' }) => {
  const [display, ref] = useCountUp(end, { suffix, decimals });
  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tight">
        {prefix}{display}
      </div>
      <div className="text-white/80 text-xs md:text-sm font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        className="relative bg-[#22C55E] pt-6 md:pt-10 pb-10 md:pb-16 px-4 overflow-hidden"
        data-testid="hero-section"
      >
        {/* Grain + gradient overlay for depth (fights the "flat AI green" look) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-emerald-300/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-emerald-700/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1.15fr,1fr] gap-8 md:gap-12 items-center">
            {/* Left */}
            <div className="text-white">
              {/* Live signal chip */}
              <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/25 mb-5 md:mb-6" data-testid="hero-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <Radio className="w-3.5 h-3.5" />
                <span className="text-[11px] md:text-xs font-black tracking-[0.15em] uppercase">
                  {t('hero.badge')}
                </span>
              </div>

              {/* Headline — editorial, badass, split-emphasis */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-5 leading-[1.02] tracking-tight" data-testid="hero-title">
                {t('hero.titlePre')}{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">{t('hero.titleAccent')}</span>
                  <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-black/25 -z-0 rounded-sm" />
                </span>
                <br />
                {t('hero.titlePost')}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/95 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>

              {/* Route strip */}
              <div className="hidden sm:flex flex-wrap items-center gap-3 mb-7 md:mb-8">
                {['IN → UK', 'MX → US', 'AE → DE', 'IN → US', 'MX → UK'].map((route) => (
                  <span
                    key={route}
                    className="text-[11px] md:text-xs font-mono font-bold text-white bg-black/25 border border-white/20 rounded px-2.5 py-1"
                    data-testid={`hero-route-${route.replace(/\s+/g, '')}`}
                  >
                    {route}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4" data-testid="hero-ctas">
                <a href="/#contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-white text-[#166534] hover:bg-white hover:text-black rounded-full px-6 md:px-9 py-6 md:py-7 text-base md:text-lg font-black shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                    {t('hero.cta1')} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-transparent border-2 border-white/70 text-white hover:bg-white/15 rounded-full px-6 md:px-9 py-6 md:py-7 text-base md:text-lg font-black backdrop-blur-sm">
                    <Zap className="mr-2 w-5 h-5" /> {t('hero.cta2')}
                  </Button>
                </Link>
              </div>

              <p className="text-[11px] md:text-xs font-mono text-white/70 mt-4 tracking-wider">
                {t('hero.microcopy')}
              </p>
            </div>

            {/* Right — Globe */}
            <div className="flex justify-center lg:justify-end items-center">
              <AnimatedGlobe />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16 max-w-5xl mx-auto pt-8 md:pt-10 border-t border-white/20" data-testid="hero-stats">
            <Stat end={45} suffix="+" label={t('hero.stat1')} />
            <Stat end={13} prefix="£" suffix="M" label={t('hero.stat2')} />
            <Stat end={96} suffix="%" label={t('hero.stat3')} />
            <Stat end={12} label={t('hero.stat4')} />
          </div>
        </div>
      </section>

      {/* Marketplace ticker */}
      <MarketplaceMarquee />
    </>
  );
};

export default Hero;
