import React, { useState } from 'react';
import { PRESET_MUSICIANS, RIBO_SERVICES } from '../data/musicData';
import { MusicianProfile } from '../types';
import { 
  User, CheckCircle2, Radio, Send, ExternalLink, 
  Sparkles, Sliders, Music, Disc3, ShieldAlert, X
} from 'lucide-react';

interface MusicianPortalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayTrack: (style: 'punk' | 'synthwave' | 'rock' | 'indie', bpm: number) => void;
  isAudioPlaying: boolean;
}

export const MusicianPortal: React.FC<MusicianPortalProps> = ({
  isOpen,
  onClose,
  onPlayTrack,
  isAudioPlaying
}) => {
  const [selectedProfile, setSelectedProfile] = useState<MusicianProfile>(PRESET_MUSICIANS[0]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'apply' | 'soundboard'>('dashboard');
  
  // Application Form State
  const [formName, setFormName] = useState(PRESET_MUSICIANS[0].name);
  const [formEmail, setFormEmail] = useState('artist@rebelsound.com');
  const [formGenre, setFormGenre] = useState(PRESET_MUSICIANS[0].genre);
  const [formLinks, setFormLinks] = useState('https://open.spotify.com/artist/example');
  const [formPitch, setFormPitch] = useState('We have 3 unreleased singles ready for a durable 2+ week push without selling our master rights.');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Audio settings
  const [customBpm, setCustomBpm] = useState(128);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `RIBO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(id);
    setIsSubmitted(true);
  };

  const handleSelectPreset = (musician: MusicianProfile) => {
    setSelectedProfile(musician);
    setFormName(musician.name);
    setFormGenre(musician.genre);
    setCustomBpm(musician.tempo);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0B0B0B] border-2 border-[#FFE500]/60 rounded-2xl shadow-[0_0_50px_rgba(255,229,0,0.2)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FFE500] flex items-center justify-center font-display font-black text-black text-lg">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-bold text-white">
                  Musician Launchpad & Portal
                </h3>
                <span className="text-[10px] font-mono font-bold bg-[#FFE500]/20 text-[#FFE500] px-2 py-0.5 rounded uppercase">
                  Zero Cost
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Experience Ribo Music · Own The Music · Keep The Rights
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center border-b border-neutral-800 px-4 sm:px-6 bg-[#080808]">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-3 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'border-[#FFE500] text-[#FFE500]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            1. Artist Experience Console
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`px-4 py-3 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'apply'
                ? 'border-[#FFE500] text-[#FFE500]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            2. Free Application Form (ribomusic.com)
          </button>
          <button
            onClick={() => setActiveTab('soundboard')}
            className={`px-4 py-3 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'soundboard'
                ? 'border-[#FFE500] text-[#FFE500]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            3. Live Rebel Soundboard
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: ARTIST EXPERIENCE CONSOLE */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Preset Artist Switcher */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Test-Drive with an Indie Artist Profile:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRESET_MUSICIANS.map((musician) => (
                    <button
                      key={musician.id}
                      onClick={() => handleSelectPreset(musician)}
                      className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                        selectedProfile.id === musician.id
                          ? 'bg-neutral-900 border-[#FFE500] shadow-[0_0_15px_rgba(255,229,0,0.15)]'
                          : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white block">{musician.name}</span>
                        <span className="text-[10px] font-mono text-[#FFE500]">{musician.soundStyle}</span>
                      </div>
                      <span className="text-[11px] text-neutral-400 block mt-1">{musician.genre}</span>
                      <span className="text-[10px] text-neutral-500 font-mono block mt-1">
                        {musician.monthlyStreams.toLocaleString()} monthly streams
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Profile Dashboard */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#FFE500]">ACTIVE ROSTER PROFILE</span>
                    <h4 className="font-display text-2xl font-bold text-white mt-0.5">
                      {selectedProfile.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">
                      {selectedProfile.genre} · {selectedProfile.hometown}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onPlayTrack(selectedProfile.soundStyle, selectedProfile.tempo)}
                      className="px-4 py-2 bg-[#FFE500] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all hover:bg-[#FFF066] cursor-pointer"
                    >
                      <Music className="w-3.5 h-3.5" />
                      <span>{isAudioPlaying ? 'Restart Sound' : `Play Track: “${selectedProfile.trackTitle}”`}</span>
                    </button>
                  </div>
                </div>

                {/* Rights & Ribo Package Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 block">Master Ownership</span>
                    <span className="text-lg font-mono font-bold text-emerald-400 block mt-1">100% ARTIST OWNED</span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">No 360 rights surrender</span>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 block">Ribo Station Airplay</span>
                    <span className="text-lg font-mono font-bold text-[#FFE500] block mt-1">2+ WEEKS SECURED</span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">Continuous runway for discovery</span>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 block">Venue Showcase Circuit</span>
                    <span className="text-lg font-mono font-bold text-white block mt-1">ACTIVE SLOTS</span>
                    <span className="text-[10px] text-neutral-500 block mt-0.5">Underground club network</span>
                  </div>
                </div>

                {/* Why This Breaks the Algorithmic Monopoly */}
                <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <h5 className="text-xs font-mono font-bold text-white flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
                    <span>The Ribo Difference for {selectedProfile.name}</span>
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Under standard streaming algorithms, {selectedProfile.name}'s release would compete against 120,000 new daily uploads with a 0.0003% chance of holding the Billboard Top 100 for 2 weeks. With Ribo, curated airtime and direct fan pass discovery ensure sustained listener retention.
                  </p>
                </div>
              </div>

              {/* Action Banner to Apply */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#FFE500]/10 border border-[#FFE500]/40">
                <div className="text-xs text-neutral-200">
                  <strong className="text-[#FFE500]">Ready to apply for your own project?</strong> Free application at www.ribomusic.com.
                </div>
                <button
                  onClick={() => setActiveTab('apply')}
                  className="px-4 py-2 bg-[#FFE500] text-black font-display font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#FFF066] transition-all cursor-pointer whitespace-nowrap"
                >
                  Go to Free Application
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: FREE APPLICATION FORM */}
          {activeTab === 'apply' && (
            <div className="max-w-2xl mx-auto space-y-6">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmitApplication} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-5">
                  <div>
                    <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider block">
                      Artist Entry Form · Zero Cost
                    </span>
                    <h4 className="font-display text-2xl font-bold text-white mt-1">
                      Join the Undiscovered Majority Movement
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Artists never pay for Ribo. We review releases based on musicality and potential, not algorithmic follower count.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-neutral-300 block mb-1">
                        Artist or Band Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFE500]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-neutral-300 block mb-1">
                          Contact Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFE500]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-neutral-300 block mb-1">
                          Primary Genre *
                        </label>
                        <input
                          type="text"
                          required
                          value={formGenre}
                          onChange={(e) => setFormGenre(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFE500]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-neutral-300 block mb-1">
                        Link to Music (Spotify, SoundCloud, Bandcamp, or Unreleased Demo) *
                      </label>
                      <input
                        type="url"
                        required
                        value={formLinks}
                        onChange={(e) => setFormLinks(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFE500]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-neutral-300 block mb-1">
                        Tell Ribby & Ribo About Your Vision *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formPitch}
                        onChange={(e) => setFormPitch(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFE500]"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs text-neutral-400">
                    <span className="text-[#FFE500] font-bold">100% Free:</span> By submitting, you retain all copyrights, masters, and publishing. Ribo never takes ownership.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FFE500] hover:bg-[#FFF066] text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(255,229,0,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Application to Ribo</span>
                  </button>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="bg-neutral-950 border-2 border-[#FFE500] rounded-xl p-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#FFE500]/20 border border-[#FFE500] mx-auto flex items-center justify-center text-[#FFE500]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider">
                      APPLICATION RECEIVED · ZERO FEES
                    </span>
                    <h4 className="font-display text-2xl font-bold text-white mt-1">
                      Welcome to the Rebel Roster, {formName}!
                    </h4>
                    <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
                      Your submission has been queued for human tastemaker review. You will receive an assessment within 48 hours.
                    </p>
                  </div>

                  <div className="inline-block p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-left font-mono text-xs space-y-1">
                    <p className="text-neutral-400">Application Pass ID: <strong className="text-[#FFE500]">{submissionId}</strong></p>
                    <p className="text-neutral-400">Official Portal: <span className="text-white">www.ribomusic.com</span></p>
                    <p className="text-neutral-400">Status: <span className="text-emerald-400">Pending Tastemaker Review</span></p>
                  </div>

                  <div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono text-neutral-400 hover:text-white underline cursor-pointer"
                    >
                      Submit Another Track
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: LIVE REBEL SOUNDBOARD */}
          {activeTab === 'soundboard' && (
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#FFE500] font-bold uppercase tracking-wider block">
                  Web Audio Synthesizer
                </span>
                <h4 className="font-display text-2xl font-bold text-white mt-1">
                  Rebel Sonic Playground
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Experience real-time synthesized cyberpunk rhythms and test the sonic energy of the Ribo soundscape.
                </p>
              </div>

              {/* Sound Style Trigger Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => onPlayTrack('synthwave', customBpm)}
                  className="p-5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FFE500] text-left transition-all cursor-pointer group"
                >
                  <Disc3 className="w-6 h-6 text-[#FFE500] mb-2 group-hover:rotate-45 transition-transform" />
                  <h5 className="font-bold text-white text-sm">Darksynth Odyssey</h5>
                  <p className="text-xs text-neutral-400 font-mono mt-1">128 BPM · Analog Bass Arpeggio</p>
                  <span className="text-[11px] font-mono text-[#FFE500] mt-3 inline-block">Trigger Synth</span>
                </button>

                <button
                  onClick={() => onPlayTrack('punk', customBpm)}
                  className="p-5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FFE500] text-left transition-all cursor-pointer group"
                >
                  <Disc3 className="w-6 h-6 text-rose-400 mb-2 group-hover:rotate-45 transition-transform" />
                  <h5 className="font-bold text-white text-sm">Cyber Riot Punk</h5>
                  <p className="text-xs text-neutral-400 font-mono mt-1">140 BPM · Distortion Sawtooth Riff</p>
                  <span className="text-[11px] font-mono text-rose-400 mt-3 inline-block">Trigger Punk</span>
                </button>

                <button
                  onClick={() => onPlayTrack('rock', customBpm)}
                  className="p-5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FFE500] text-left transition-all cursor-pointer group"
                >
                  <Disc3 className="w-6 h-6 text-purple-400 mb-2 group-hover:rotate-45 transition-transform" />
                  <h5 className="font-bold text-white text-sm">Underground Alt Rock</h5>
                  <p className="text-xs text-neutral-400 font-mono mt-1">112 BPM · Deep Sub Grooves</p>
                  <span className="text-[11px] font-mono text-purple-400 mt-3 inline-block">Trigger Rock</span>
                </button>
              </div>

              {/* Tempo Slider */}
              <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-400">Synth Engine Tempo:</span>
                  <span className="text-[#FFE500] font-bold tabular-nums">{customBpm} BPM</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="160"
                  value={customBpm}
                  onChange={(e) => setCustomBpm(parseInt(e.target.value))}
                  className="w-full accent-[#FFE500] bg-neutral-800 cursor-pointer"
                />
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
