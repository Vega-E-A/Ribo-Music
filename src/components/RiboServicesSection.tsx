import React from 'react';
import { RIBO_SERVICES } from '../data/musicData';
import { Radio, Flame, Volume2, MapPin, ShoppingBag, Users, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import concertImg from '../assets/images/cyberpunk_concert_stage_1791393569513.jpg';

interface RiboServicesSectionProps {
  onOpenPortal: () => void;
}

export const RiboServicesSection: React.FC<RiboServicesSectionProps> = ({ onOpenPortal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio': return <Radio className="w-5 h-5 text-[#FFE500]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#FFE500]" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-[#FFE500]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#FFE500]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#FFE500]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#FFE500]" />;
      default: return <Radio className="w-5 h-5 text-[#FFE500]" />;
    }
  };

  return (
    <section id="ribo-services" className="py-16 md:py-24 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
              <span>The Full Artist Package</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Zero Cost · 100% Free Application</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Turning Fresh Releases into Real Opportunities.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              At Ribo Music, artists and fans come first. We empower emerging artists with a comprehensive suite designed to break through the attention bottleneck without signing away your catalog.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://www.ribomusic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-mono rounded-lg flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>www.ribomusic.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenPortal}
              className="px-5 py-2.5 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Apply for Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Stage Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[21/9] sm:aspect-[24/8] min-h-[220px]">
          <img
            src={concertImg}
            alt="Cyberpunk underground concert stage with neon yellow RIBO sign and cheering crowd"
            className="w-full h-full object-cover object-center brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent p-6 sm:p-10 flex flex-col justify-center max-w-xl">
            <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider mb-2">
              REAL STAGES · REAL COMMUNITY
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              “Freedom Sounds Better.”
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Streaming alone doesn't pay the rent. Ribo bridges digital streams into physical venue ticket sales, airtime rotation, and loyal fans.
            </p>
          </div>
        </div>

        {/* Asymmetric Bento-Grid for the 6 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RIBO_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-neutral-950 rounded-xl border border-neutral-800 hover:border-[#FFE500]/50 p-6 space-y-4 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(255,229,0,0.06)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-[#FFE500]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Included Free</span>
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                    0{index + 1}. Pillar
                  </span>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#FFE500] transition-colors mt-0.5">
                    {service.title}
                  </h4>
                  <p className="text-xs font-mono text-[#FFE500]/80 mt-0.5">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>Ribo Commitment</span>
                <span className="text-neutral-400">100% Artist Retained</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-[#FFE500]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display text-xl font-bold text-white">
              Ready to break through the 2-week Billboard wall?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Artists never pay for Ribo. Simply submit your track and artist bio for free review.
            </p>
          </div>
          <button
            onClick={onOpenPortal}
            className="px-6 py-3 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,229,0,0.3)] transition-all cursor-pointer whitespace-nowrap"
          >
            Open Musician Launchpad
          </button>
        </div>

      </div>
    </section>
  );
};
