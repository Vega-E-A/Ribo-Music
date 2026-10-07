import React, { useState } from 'react';
import { DollarSign, ShieldCheck, PieChart, Users, TrendingUp, Sparkles } from 'lucide-react';

export const RevenueComparisonChart: React.FC = () => {
  const [monthlyStreams, setMonthlyStreams] = useState<number>(35000);
  const [dedicatedFans, setDedicatedFans] = useState<number>(250);

  // Traditional Spotify math:
  // ~$0.0035 per stream * 0.8 (distributor/aggregators) = ~$0.0028
  const traditionalStreamGross = monthlyStreams * 0.0035;
  const traditionalDistributorCut = traditionalStreamGross * 0.25;
  const traditionalArtistTake = Math.round(traditionalStreamGross - traditionalDistributorCut);

  // Ribo model math:
  // Direct streaming pool + Fan Discovery Pool share ($12.99/yr membership = ~$1.08/mo per fan)
  // Plus merch profit assist (~$15 per 10% of dedicated fans) + venue booking leverage
  const riboStreamTake = Math.round(monthlyStreams * 0.0055);
  const riboFanPassPool = Math.round(dedicatedFans * 0.75); // Direct cut of active discovering fan pool
  const riboMerchVenueAssist = Math.round(dedicatedFans * 0.15 * 25); // 15% fans buy merch/tickets
  const riboTotalMonthly = riboStreamTake + riboFanPassPool + riboMerchVenueAssist;

  const multiplier = (riboTotalMonthly / (traditionalArtistTake || 1)).toFixed(1);

  return (
    <section id="revenue-reality" className="py-16 md:py-24 border-b border-[#262626] bg-[#070707] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            <PieChart className="w-4 h-4" />
            <span>Economic Disparity Analysis</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>The 90/1 Wealth Concentration</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            90% of Streaming Revenue Goes to Just 1% of Artists.
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            In 2020, streaming industry analytics exposed the brutal reality: the overwhelming majority of independent musicians are cut off from viable income while funding corporate algorithms that don't serve them. Ribo was built to flip this equation.
          </p>
        </div>

        {/* 90/1 Infographic Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Legacy Model Card */}
          <div className="bg-neutral-950 border border-red-500/30 rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
                  The Legacy Corporate Trap
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  1% Gets 90% of the Pot
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded text-xs font-mono font-bold">
                EXTRACTIVE
              </span>
            </div>

            {/* Split Visualizer */}
            <div className="space-y-3">
              <div className="h-6 w-full rounded-md overflow-hidden flex">
                <div style={{ width: '90%' }} className="bg-rose-500 flex items-center justify-center text-[11px] font-mono font-bold text-white">
                  90% to Top 1% Superstars & Labels
                </div>
                <div style={{ width: '10%' }} className="bg-neutral-800 flex items-center justify-center text-[10px] font-mono text-neutral-400">
                  10%
                </div>
              </div>
              <div className="flex justify-between text-xs text-neutral-400 font-mono">
                <span>Top 1% Catalog Monopolies</span>
                <span>The 99% Undiscovered Majority</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Artists surrender master rights or pay predatory distributor cuts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Payouts average fractions of a penny (~$0.003/stream).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>No physical marketing, no radio/airtime support, zero venue leverage.</span>
              </li>
            </ul>
          </div>

          {/* Ribo Model Card */}
          <div className="bg-neutral-950 border border-[#FFE500]/50 rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-[0_0_30px_rgba(255,229,0,0.08)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider block">
                  The Ribo Movement
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Artists & Fans Come First
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-[#FFE500]/15 text-[#FFE500] border border-[#FFE500]/40 rounded text-xs font-mono font-bold">
                100% FAIR
              </span>
            </div>

            {/* Split Visualizer */}
            <div className="space-y-3">
              <div className="h-6 w-full rounded-md overflow-hidden flex">
                <div style={{ width: '100%' }} className="bg-[#FFE500] flex items-center justify-center text-[11px] font-mono font-bold text-black">
                  Artists Keep Rights + Direct Fan Discovery Revenue ($12.99 Pass)
                </div>
              </div>
              <div className="flex justify-between text-xs text-neutral-400 font-mono">
                <span>Free Musician Access</span>
                <span>Direct Fan Support Pool</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                <span><strong>Zero upfront fees</strong> to apply or join as an approved artist.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                <span><strong>Full Launch Package:</strong> Streaming, airtime, marketing, merch, & venue bookings.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                <span>Fans pay <strong>$12.99/year</strong> to unlock talent discovery, rewarding true passion.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Interactive Earnings Simulator */}
        <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <span>Live Musician Revenue Simulator</span>
                <Sparkles className="w-5 h-5 text-[#FFE500]" />
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                See how the same fan footprint performs under corporate streaming vs Ribo's holistic model.
              </p>
            </div>
            
            <div className="bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800 text-right">
              <span className="text-[11px] font-mono text-neutral-400 block">Ribo Leverage Boost</span>
              <span className="text-lg font-mono font-bold text-[#FFE500] tabular-nums">
                ~{multiplier}x Revenue Potential
              </span>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-400">Monthly Streams:</span>
                <span className="text-[#FFE500] font-bold tabular-nums text-sm">
                  {monthlyStreams.toLocaleString()} streams
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={monthlyStreams}
                onChange={(e) => setMonthlyStreams(parseInt(e.target.value))}
                className="w-full accent-[#FFE500] bg-neutral-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>5k</span>
                <span>100k</span>
                <span>250k</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-400">Dedicated Discovering Fans:</span>
                <span className="text-white font-bold tabular-nums text-sm">
                  {dedicatedFans.toLocaleString()} members
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={dedicatedFans}
                onChange={(e) => setDedicatedFans(parseInt(e.target.value))}
                className="w-full accent-[#FFE500] bg-neutral-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>50 fans</span>
                <span>1,000 fans</span>
                <span>2,000 fans</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Traditional Output */}
            <div className="p-5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-400">Corporate Streaming Net Payout</span>
                <span className="text-xs text-rose-400 font-mono">~$0.0028/stream</span>
              </div>
              <div className="text-3xl font-display font-extrabold text-neutral-300 tabular-nums">
                ${traditionalArtistTake.toLocaleString()}
                <span className="text-xs font-mono text-neutral-500 ml-1 font-normal">/month</span>
              </div>
              <div className="text-xs text-neutral-400 space-y-1 pt-2 border-t border-neutral-800">
                <div className="flex justify-between">
                  <span>Gross pool value:</span>
                  <span className="font-mono">${Math.round(traditionalStreamGross)}</span>
                </div>
                <div className="flex justify-between text-rose-400">
                  <span>Distributor & fee deductions:</span>
                  <span className="font-mono">-${Math.round(traditionalDistributorCut)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tour & venue booking support:</span>
                  <span className="text-neutral-500">$0 (None)</span>
                </div>
              </div>
            </div>

            {/* Ribo Output */}
            <div className="p-5 rounded-lg bg-[#FFE500]/5 border border-[#FFE500]/40 space-y-4 shadow-[0_0_20px_rgba(255,229,0,0.05)]">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-[#FFE500] font-bold">Ribo Ecosystem Total Return</span>
                <span className="text-xs text-emerald-400 font-mono">Full Package Value</span>
              </div>
              <div className="text-3xl font-display font-extrabold text-[#FFE500] tabular-nums">
                ${riboTotalMonthly.toLocaleString()}
                <span className="text-xs font-mono text-neutral-400 ml-1 font-normal">/month estimated</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1 pt-2 border-t border-neutral-800">
                <div className="flex justify-between">
                  <span>Direct streaming allocation:</span>
                  <span className="font-mono font-bold">${riboStreamTake}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fan discovery pass pool ($12.99/yr):</span>
                  <span className="font-mono font-bold">${riboFanPassPool}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Venue booking & merch assistance:</span>
                  <span className="font-mono font-bold">+${riboMerchVenueAssist}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
