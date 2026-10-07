import React, { useState } from 'react';
import { RIBBY_LORE_ITEMS } from '../data/musicData';
import { Sparkles, Radio, Shield, HeartHandshake, Eye, Video, ExternalLink } from 'lucide-react';
import ribbyImg from '../assets/images/ribby_female_portrait_1791394045997.jpg';

export const RibbyLoreSection: React.FC = () => {
  const [activeLoreId, setActiveLoreId] = useState<string>('jacket');

  const activeItem = RIBBY_LORE_ITEMS.find((item) => item.id === activeLoreId) || RIBBY_LORE_ITEMS[0];

  return (
    <section id="ribby-lore" className="py-16 md:py-24 border-b border-[#262626] bg-[#070707] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            <Sparkles className="w-4 h-4" />
            <span>Character Dossier</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>The Mascot of Freedom</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Ribby the Rebel Rabbit
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Ribby escaped the corporate algorithmic cage. Now she leads the charge helping independent artists break free from extractive 360-contracts, retain their master rights, and build genuine community with real fans.
          </p>
        </div>

        {/* Interactive Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual with Hotspot Selector (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFE500]/40 bg-neutral-950 shadow-[0_0_40px_rgba(255,229,0,0.1)] aspect-[3/4]">
              <img
                src={ribbyImg}
                alt="Ribby the Rebel Rabbit female punk-rock frontwoman with guitar and microphone"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

              {/* Interactive Hotspot Buttons on the Mascot */}
              {/* Jacket Hotspot */}
              <button
                onClick={() => setActiveLoreId('jacket')}
                className={`absolute top-[48%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                  activeLoreId === 'jacket'
                    ? 'border-[#FFE500] bg-[#FFE500] text-black scale-110 shadow-[0_0_15px_#FFE500]'
                    : 'border-white bg-black/60 text-white hover:border-[#FFE500] hover:scale-105'
                }`}
                title="Inspect Maroon Jacket"
              >
                <span className="text-xs font-mono font-bold">01</span>
              </button>

              {/* Pick Necklace Hotspot */}
              <button
                onClick={() => setActiveLoreId('necklace')}
                className={`absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                  activeLoreId === 'necklace'
                    ? 'border-[#FFE500] bg-[#FFE500] text-black scale-110 shadow-[0_0_15px_#FFE500]'
                    : 'border-white bg-black/60 text-white hover:border-[#FFE500] hover:scale-105'
                }`}
                title="Inspect Pick Necklace"
              >
                <span className="text-xs font-mono font-bold">02</span>
              </button>

              {/* Headphones Hotspot */}
              <button
                onClick={() => setActiveLoreId('headphones')}
                className={`absolute top-[28%] left-[62%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                  activeLoreId === 'headphones'
                    ? 'border-[#FFE500] bg-[#FFE500] text-black scale-110 shadow-[0_0_15px_#FFE500]'
                    : 'border-white bg-black/60 text-white hover:border-[#FFE500] hover:scale-105'
                }`}
                title="Inspect Headphones"
              >
                <span className="text-xs font-mono font-bold">04</span>
              </button>

              {/* Back / Authentic Hotspot */}
              <button
                onClick={() => setActiveLoreId('authentic')}
                className={`absolute top-[65%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                  activeLoreId === 'authentic'
                    ? 'border-[#FFE500] bg-[#FFE500] text-black scale-110 shadow-[0_0_15px_#FFE500]'
                    : 'border-white bg-black/60 text-white hover:border-[#FFE500] hover:scale-105'
                }`}
                title="Inspect DIY Patch"
              >
                <span className="text-xs font-mono font-bold">03</span>
              </button>

              {/* Legend Indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 rounded-lg border border-neutral-800 text-xs font-mono flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1.5 text-[#FFE500]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Hotspots Active</span>
                </span>
                <span className="text-neutral-500">Click 01–04 to inspect</span>
              </div>
            </div>
          </div>

          {/* Right Column: Gear Details & Rebel Manifesto (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gear Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {RIBBY_LORE_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLoreId(item.id)}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                    activeLoreId === item.id
                      ? 'bg-neutral-900 border-[#FFE500] shadow-[0_0_12px_rgba(255,229,0,0.2)]'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#FFE500] block">0{idx + 1}. ITEM</span>
                  <span className="text-xs font-bold text-white block mt-0.5">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Active Lore Spotlight Box */}
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#FFE500]/10 text-[#FFE500] border border-[#FFE500]/30 rounded text-xs font-mono font-bold uppercase tracking-wider">
                  {activeItem.tag}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  REBEL ARCHIVE
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {activeItem.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {activeItem.detail}
              </p>
            </div>

            {/* Rebel Manifesto Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-1.5">
                <Shield className="w-5 h-5 text-[#FFE500]" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Own The Music</h4>
                <p className="text-xs text-neutral-400">
                  Never surrender your masters or publishing copyright to middlemen.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-1.5">
                <Radio className="w-5 h-5 text-[#FFE500]" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Keep The Rights</h4>
                <p className="text-xs text-neutral-400">
                  Total autonomy over licensing, sync rights, merchandise, and live performances.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 space-y-1.5">
                <HeartHandshake className="w-5 h-5 text-[#FFE500]" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Play Your Way</h4>
                <p className="text-xs text-neutral-400">
                  Direct connection with passionate fans who pay to discover, not consume passively.
                </p>
              </div>
            </div>

            {/* Make Your Own Ribby Video Feature Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-[#FFE500]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_25px_rgba(255,229,0,0.1)]">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
                    <span>Interactive Ribby Studio</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    Generate and customize your own scenes and stories with Ribby the Rebel Rabbit.
                  </p>
                </div>
              </div>
              <a
                href="https://ribointeractive.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_15px_rgba(255,229,0,0.3)] shrink-0"
              >
                <span>Make your own Ribby Video!</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
