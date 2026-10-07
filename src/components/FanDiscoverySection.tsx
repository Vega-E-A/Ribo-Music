import React, { useState } from 'react';
import { Compass, Sparkles, Check, Headphones, Heart, Award, ArrowRight } from 'lucide-react';
import studioImg from '../assets/images/artist_rebel_studio_1791393579508.jpg';

interface FanDiscoverySectionProps {
  onPlayTrack: (style: 'punk' | 'synthwave' | 'rock' | 'indie') => void;
  isAudioPlaying: boolean;
}

export const FanDiscoverySection: React.FC<FanDiscoverySectionProps> = ({ onPlayTrack, isAudioPlaying }) => {
  const [membershipSimulated, setMembershipSimulated] = useState<boolean>(false);
  const [selectedVibe, setSelectedVibe] = useState<'synthwave' | 'punk' | 'rock'>('synthwave');

  return (
    <section id="fan-pass" className="py-16 md:py-24 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            <Compass className="w-4 h-4" />
            <span>Fan Ecosystem</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>$12.99 Annual Membership</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Where Passion Is Rewarded, Not Exploited.
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Mainstream streaming turns music fans into passive data points and starves 99% of musicians. For just <strong>$12.99 a year</strong>, the Ribo Fan Pass unlocks a dedicated app engineered purely for discovering real new talent.
          </p>
        </div>

        {/* Feature Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual & Interactive Fan App Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Ribo Fan Discovery Feed
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {membershipSimulated ? 'MEMBERSHIP ACTIVE' : 'PREVIEW MODE'}
                </span>
              </div>

              {/* Discovery Feed Preview Cards */}
              <div className="space-y-3">
                <div
                  onClick={() => { setSelectedVibe('synthwave'); onPlayTrack('synthwave'); }}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    selectedVibe === 'synthwave'
                      ? 'bg-neutral-900 border-[#FFE500]'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#FFE500]/10 border border-[#FFE500]/30 flex items-center justify-center font-display font-bold text-[#FFE500]">
                      NN
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Neon Nomad · “Two Weeks Or Bust”</h4>
                      <p className="text-xs text-neutral-400 font-mono">Darksynth / Indie · Austin, TX · Week 4 on Ribo Air</p>
                    </div>
                  </div>
                  <button className="text-xs font-mono text-[#FFE500] hover:underline">
                    {isAudioPlaying && selectedVibe === 'synthwave' ? 'Playing' : 'Listen Now'}
                  </button>
                </div>

                <div
                  onClick={() => { setSelectedVibe('punk'); onPlayTrack('punk'); }}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    selectedVibe === 'punk'
                      ? 'bg-neutral-900 border-[#FFE500]'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-display font-bold text-rose-400">
                      KS
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Kira & The Static · “Burn The Playlist”</h4>
                      <p className="text-xs text-neutral-400 font-mono">Cyber Riot Punk · Detroit, MI · Live Showcase Debut</p>
                    </div>
                  </div>
                  <button className="text-xs font-mono text-[#FFE500] hover:underline">
                    {isAudioPlaying && selectedVibe === 'punk' ? 'Playing' : 'Listen Now'}
                  </button>
                </div>

                <div
                  onClick={() => { setSelectedVibe('rock'); onPlayTrack('rock'); }}
                  className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    selectedVibe === 'rock'
                      ? 'bg-neutral-900 border-[#FFE500]'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-display font-bold text-purple-400">
                      V9
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Vessel 99 · “Undiscovered Majority”</h4>
                      <p className="text-xs text-neutral-400 font-mono">Alternative Grunge · Seattle, WA · Direct Fan Funded</p>
                    </div>
                  </div>
                  <button className="text-xs font-mono text-[#FFE500] hover:underline">
                    {isAudioPlaying && selectedVibe === 'rock' ? 'Playing' : 'Listen Now'}
                  </button>
                </div>
              </div>
            </div>

            {/* Studio visual preview */}
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 aspect-[16/6] bg-neutral-900">
              <img
                src={studioImg}
                alt="Musician production studio with guitar and audio mixing console"
                className="w-full h-full object-cover brightness-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-[#FFE500]">COMMUNITY DIRECT</p>
                  <p className="text-sm font-bold text-white">Every Dollar Directly Powers Independent Artists</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Perks Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 rounded-xl border-2 border-[#FFE500]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(255,229,0,0.1)]">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider">
                  ANNUAL FAN PASS
                </span>
                <span className="px-2 py-0.5 bg-[#FFE500] text-black text-[10px] font-bold rounded uppercase">
                  UNLIMITED DISCOVERY
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tabular-nums">$12.99</span>
                  <span className="text-neutral-400 text-sm font-mono">/ year</span>
                </div>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Just ~$1.08 per month. 100% committed to real indie music.
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-4 space-y-3 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                  <span>Uncensored, algorithm-free independent artist discovery app.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                  <span>Priority guest-list and venue booking access to Ribo club dates.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                  <span>Direct fan-to-artist tipping and limited vinyl/merch drops.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                  <span>Early airplay voting and real tastemaker influence.</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <button
                onClick={() => setMembershipSimulated(!membershipSimulated)}
                className="w-full py-3.5 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,229,0,0.3)] transition-all cursor-pointer text-center"
              >
                {membershipSimulated ? '✓ Fan Pass Activated (Simulated)' : 'Join the Movement for $12.99/yr'}
              </button>

              <p className="text-[11px] text-neutral-400 text-center">
                Are you a musician? Artists do not pay for Ribo—apply for free below.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
