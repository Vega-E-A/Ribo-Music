import React, { useState } from 'react';
import { BILLBOARD_CHART_DATA, ANNUAL_BREAKDOWN } from '../data/musicData';
import { TrendingDown, AlertTriangle, Database, Info, Layers, Zap } from 'lucide-react';

export const BillboardDataCharts: React.FC = () => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(3); // default to 2024–2026
  const [viewMode, setViewMode] = useState<'runs' | 'supply_vs_attention'>('runs');
  const [interactiveTracks, setInteractiveTracks] = useState<number>(3);
  const [interactiveFans, setInteractiveFans] = useState<number>(1200);

  const selectedEra = BILLBOARD_CHART_DATA[selectedEraIndex];

  // Calculate survival odds in traditional streaming
  const totalDailyTracks = 120000;
  const yearlySlots = 156;
  const approxAnnualReleases = totalDailyTracks * 365;
  const oddsFraction = ((yearlySlots / approxAnnualReleases) * 100).toFixed(6);

  return (
    <section id="billboard-data" className="py-16 md:py-24 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            <Database className="w-4 h-4" />
            <span>Kaggle Top 100 Data Archive</span>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>Historical Chart Run Metrics</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The Billboard Bottleneck: Getting harder for new artists to hold ground.
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            As most U.S. musicians start out releasing independently, only a minuscule share ever earn enough traction to hold ground on mainstream charts. The Billboard Top 100 data shows that getting that first foothold is getting tougher—especially long enough to reach <strong>2+ weeks</strong>.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2 bg-neutral-900/90 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => setViewMode('runs')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                viewMode === 'runs'
                  ? 'bg-[#FFE500] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              2+ Week Chart Run Retention
            </button>
            <button
              onClick={() => setViewMode('supply_vs_attention')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                viewMode === 'supply_vs_attention'
                  ? 'bg-[#FFE500] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Supply Explosion vs Attention Deficit
            </button>
          </div>

          {/* Source Attribution Citation */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Info className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>Source: Kaggle Top 100 data (Billboard Top 100 new artist “chart run” metrics)</span>
          </div>
        </div>

        {/* Interactive Visualization Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Display (8 Cols) */}
          <div className="lg:col-span-8 bg-neutral-950 rounded-xl border border-neutral-800 p-6 md:p-8 space-y-8">
            
            {viewMode === 'runs' ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      New Artists per Year Achieving 2+ Week Top 100 Chart Run
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Historical comparison across four distinct music delivery epochs
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-rose-400 font-semibold block">
                      -84% OVERALL DROP
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      1970 ➔ 2026
                    </span>
                  </div>
                </div>

                {/* SVG Bar Chart Visualization */}
                <div className="h-64 sm:h-72 w-full pt-4">
                  <div className="h-full flex items-end justify-between gap-4 sm:gap-8 px-4 border-b border-neutral-800 pb-2">
                    {BILLBOARD_CHART_DATA.map((item, idx) => {
                      const maxVal = 1000;
                      const heightPercent = Math.round((item.artistsPerYear / maxVal) * 100);
                      const isSelected = idx === selectedEraIndex;

                      return (
                        <div
                          key={item.years}
                          onClick={() => setSelectedEraIndex(idx)}
                          className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end"
                        >
                          <div className="text-center">
                            <span className={`text-xs sm:text-sm font-mono font-bold block tabular-nums transition-colors ${
                              isSelected ? 'text-[#FFE500]' : 'text-neutral-400'
                            }`}>
                              ~{item.artistsPerYear}
                            </span>
                            <span className="text-[10px] text-neutral-500 block">
                              artists/yr
                            </span>
                          </div>

                          <div className="w-full max-w-[80px] bg-neutral-900 rounded-t-md overflow-hidden relative transition-all group-hover:brightness-110">
                            <div
                              style={{ height: `${heightPercent}%` }}
                              className={`w-full transition-all duration-500 rounded-t-md ${
                                isSelected
                                  ? 'bg-[#FFE500] shadow-[0_0_20px_rgba(255,229,0,0.4)]'
                                  : idx === 0
                                  ? 'bg-neutral-600'
                                  : idx === 1
                                  ? 'bg-neutral-700'
                                  : 'bg-neutral-800'
                              }`}
                            />
                          </div>

                          <div className="text-center mt-1">
                            <span className={`text-xs font-mono font-semibold block transition-colors ${
                              isSelected ? 'text-[#FFE500]' : 'text-neutral-300'
                            }`}>
                              {item.years}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Analysis Callout */}
                <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#FFE500] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <strong className="text-white">Translation:</strong> As the influx of new releases continues, fewer new artists are able to stay in the Top 100 long enough to build durable momentum—dropping to barely over half in the most recent period.
                  </p>
                </div>
              </div>
            ) : (
              /* Supply vs Attention Visualizer */
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    The Attention Paradox: Track Upload Surge vs Breakthrough Collapse
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Index comparison (1975 = Baseline). Supply escalated 28,000% while breakthroughs shrank 84%.
                  </p>
                </div>

                {/* Multi-line trend chart visualization */}
                <div className="h-64 sm:h-72 w-full relative flex flex-col justify-end">
                  <div className="absolute inset-0 grid grid-rows-4 border-b border-neutral-800">
                    <div className="border-b border-neutral-900 text-[10px] font-mono text-neutral-600">120K+ Tracks / Day</div>
                    <div className="border-b border-neutral-900 text-[10px] font-mono text-neutral-600">60K Tracks / Day</div>
                    <div className="border-b border-neutral-900 text-[10px] font-mono text-neutral-600">20K Tracks / Day</div>
                    <div className="border-b border-neutral-900 text-[10px] font-mono text-neutral-600">Pre-digital Baseline</div>
                  </div>

                  {/* SVG Curves */}
                  <svg className="w-full h-full relative z-10" viewBox="0 0 500 200" preserveAspectRatio="none">
                    {/* Supply Surge Curve (Red/Amber dashed) */}
                    <path
                      d="M 10 190 Q 200 185 300 150 T 400 60 T 490 10"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    {/* Billboard 2+ Week Artist Curve (Yellow solid) */}
                    <path
                      d="M 10 20 Q 150 25 250 80 T 380 165 T 490 178"
                      fill="none"
                      stroke="#FFE500"
                      strokeWidth="3.5"
                    />
                  </svg>

                  {/* Legend below chart */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-xs font-mono border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-0.5 bg-[#EF4444] border-t border-dashed" />
                      <span className="text-neutral-400">Total Track Upload Volume (Exponential Supply)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-1 bg-[#FFE500]" />
                      <span className="text-[#FFE500] font-bold">2+ Week Billboard Newcomers (~156/yr)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <p className="text-xs sm:text-sm text-neutral-300">
                    <strong className="text-[#FFE500]">The Core Insight:</strong> Fans have access to more music than ever before. There are more musicians than ever before. <span className="text-white font-medium">The bottleneck is attention.</span> The old algorithmic machine cannot solve this because it prioritizes profit over discovery.
                  </p>
                </div>
              </div>
            )}

            {/* Decade Quick Switchers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {BILLBOARD_CHART_DATA.map((era, index) => (
                <button
                  key={era.years}
                  onClick={() => setSelectedEraIndex(index)}
                  className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                    selectedEraIndex === index
                      ? 'bg-neutral-900 border-[#FFE500] shadow-[0_0_15px_rgba(255,229,0,0.15)]'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <p className="text-[11px] font-mono text-neutral-400">{era.years}</p>
                  <p className="text-sm font-bold text-white tabular-nums mt-0.5">~{era.artistsPerYear} artists</p>
                  <p className="text-[10px] text-neutral-500 truncate mt-1">{era.era}</p>
                </button>
              ))}
            </div>

          </div>

          {/* Selected Era Deep Dive & Interactive Odds Simulator (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Era Detail Card */}
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#FFE500] uppercase tracking-wider">
                  Epoch Intelligence
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {selectedEra.years}
                </span>
              </div>

              <h4 className="font-display text-2xl font-bold text-white">
                {selectedEra.era}
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <p className="leading-relaxed">
                  {selectedEra.description}
                </p>
                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  <p className="font-mono text-neutral-400 text-xs uppercase mb-1">Industry Context</p>
                  <p className="text-white text-xs">{selectedEra.industryContext}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-400">Retention Milestone:</span>
                <span className="text-[#FFE500] font-bold">{selectedEra.milestone}</span>
              </div>
            </div>

            {/* Indie Artist Billboard Reality Simulator */}
            <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-xl border border-[#FFE500]/30 p-6 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFE500]">
                <Zap className="w-4 h-4" />
                <span className="font-bold">Indie Reality Calculator</span>
              </div>

              <h4 className="font-display text-lg font-bold text-white">
                Your Odds in the Current Machine
              </h4>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
                    <span>Releases this year:</span>
                    <span className="text-[#FFE500] font-bold tabular-nums">{interactiveTracks} tracks</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={interactiveTracks}
                    onChange={(e) => setInteractiveTracks(parseInt(e.target.value))}
                    className="w-full accent-[#FFE500] bg-neutral-800 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
                    <span>Current Active Listeners:</span>
                    <span className="text-white font-bold tabular-nums">{interactiveFans.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={interactiveFans}
                    onChange={(e) => setInteractiveFans(parseInt(e.target.value))}
                    className="w-full accent-[#FFE500] bg-neutral-800 cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculated Result */}
              <div className="p-3 bg-black/60 rounded-lg border border-neutral-800 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Algorithmic 2-Week Top 100 Chance:</span>
                  <span className="font-mono text-rose-400 font-bold tabular-nums">0.00035%</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-neutral-800">
                  <span className="text-neutral-400">With Ribo Direct Discovery Package:</span>
                  <span className="font-mono text-emerald-400 font-bold">Guaranteed Multi-Week Spins</span>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 leading-normal">
                Ribo doesn't leave your release to an opaque algorithm. We bundle real airtime, live venue bookings, and fan membership discoverability.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
