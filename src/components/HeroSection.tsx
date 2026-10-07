import React from 'react';
import { ArrowRight, Play, Square, Sparkles, CheckCircle2, Video, ExternalLink } from 'lucide-react';
import ribbyImg from '../assets/images/ribby_female_portrait_1791394045997.jpg';

interface HeroSectionProps {
  onOpenPortal: () => void;
  onExploreData: () => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
  audioStep: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPortal,
  onExploreData,
  isAudioPlaying,
  toggleAudio,
  audioStep
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-20 border-b border-[#262626] cyber-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFE500]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
              <span>Billboard Top 100 Kaggle Intelligence</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>The Discovery Bottleneck</span>
              <span aria-hidden="true" className="text-neutral-600">/</span>
              <span>Artist Ownership</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              The Undiscovered Majority meets a <span className="text-[#FFE500] underline decoration-[#FFE500]/40 decoration-4 underline-offset-8">harder Billboard reality.</span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              We’ve all heard: <em className="text-white font-medium">“There is no good new music.”</em> But the real problem isn’t supply—it’s discovery. With over 120,000 tracks uploaded every single day, the bottleneck is attention. In 2020, <strong>90% of streaming revenue went to just 1% of artists</strong>.
            </p>

            {/* Quick Reality Stats Strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-2 border-y border-neutral-800/80">
              <div>
                <p className="text-xs font-mono text-neutral-400">1970–1990 Breakthroughs</p>
                <p className="text-2xl font-bold font-mono text-white tabular-nums">~977<span className="text-xs text-neutral-500 font-normal ml-1">/yr</span></p>
                <p className="text-[11px] text-neutral-500">2+ week Top 100 runs</p>
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-400">2024–2026 Collapse</p>
                <p className="text-2xl font-bold font-mono text-[#FFE500] tabular-nums">~156<span className="text-xs text-[#FFE500]/70 font-normal ml-1">/yr</span></p>
                <p className="text-[11px] text-rose-400">-84% drop in foothold</p>
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-400">Ribo Musician Cost</p>
                <p className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">$0<span className="text-xs text-emerald-400/80 font-normal ml-1">FREE</span></p>
                <p className="text-[11px] text-neutral-500">Keep 100% of rights</p>
              </div>
            </div>

            {/* Action Zone */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPortal}
                className="px-6 py-3.5 bg-[#FFE500] hover:bg-[#FFF066] active:translate-y-0.5 text-black font-display font-bold text-sm uppercase tracking-wider rounded-lg shadow-[0_0_25px_rgba(255,229,0,0.35)] flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap"
              >
                <span>Enter Musician Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreData}
                className="px-5 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 text-sm font-medium rounded-lg cursor-pointer transition-all whitespace-nowrap"
              >
                Inspect Top 100 Data
              </button>

              <a
                href="https://ribointeractive.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-neutral-900 hover:bg-[#FFE500]/10 text-[#FFE500] border border-[#FFE500]/40 hover:border-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 cursor-pointer transition-all whitespace-nowrap shadow-[0_0_15px_rgba(255,229,0,0.15)]"
              >
                <Video className="w-4 h-4 text-[#FFE500]" />
                <span>Make your own Ribby Video!</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Synthesizer Preview Button */}
              <button
                onClick={toggleAudio}
                className={`px-4 py-3.5 rounded-lg border text-xs font-mono flex items-center gap-2 cursor-pointer transition-all ${
                  isAudioPlaying
                    ? 'border-[#FFE500] bg-[#FFE500]/15 text-[#FFE500]'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {isAudioPlaying ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>Mute Movement Track</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-[#FFE500]" />
                    <span>Play Rebel Anthem</span>
                  </>
                )}
              </button>
            </div>

            {/* Visualizer Bar when sound is active */}
            {isAudioPlaying && (
              <div className="pt-2 flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#FFE500] mr-2">LIVE SYNTH WAVE:</span>
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-1.5 rounded-xs transition-all duration-75 ${
                      i === audioStep
                        ? 'bg-[#FFE500] scale-y-125 shadow-[0_0_8px_#FFE500]'
                        : (i % 4 === 0 ? 'bg-neutral-600 h-3' : 'bg-neutral-800 h-2')
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Trust statement */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#FFE500] shrink-0" />
              <span>Free to apply for artists · No upfront fees or rights assignment · Backed by real venues</span>
            </div>

          </div>

          {/* Right Column: Hero Visual - Ribby the Rebel Rabbit */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden border-2 border-[#FFE500]/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-neutral-950">
              
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={ribbyImg}
                  alt="Ribby the Rebel Rabbit female punk-rock frontwoman holding microphone on stage in front of neon RIBO sign"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Cyberpunk gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30 pointer-events-none" />

                {/* Neon Banner on top of image */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-md border border-[#FFE500]/50 px-3 py-1 rounded text-[11px] font-mono font-bold text-[#FFE500] uppercase tracking-wider">
                    RIBBY · THE REBEL RABBIT
                  </div>
                  <div className="bg-[#FFE500] text-black px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    STAGE-READY
                  </div>
                </div>

                {/* Bottom Card Overlay with Lore */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/85 backdrop-blur-md border border-neutral-800">
                  <p className="font-display text-white text-base font-bold flex items-center justify-between">
                    <span>“Freedom Sounds Better.”</span>
                    <Sparkles className="w-4 h-4 text-[#FFE500]" />
                  </p>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                    Ribby escaped the corporate algorithmic system. Now she helps independent artists break free, keep their master rights, and build real connections with real fans.
                  </p>
                  <a
                    href="https://ribointeractive.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,229,0,0.3)] cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Make your own Ribby Video!</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="mt-2.5 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>OWN THE MUSIC</span>
                    <span className="text-[#FFE500]">KEEP THE RIGHTS</span>
                    <span>PLAY YOUR WAY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent backdrop marker */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#FFE500]/20 rounded-xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
