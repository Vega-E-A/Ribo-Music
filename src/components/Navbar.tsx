import React from 'react';
import { Volume2, VolumeX, Video, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPortal: () => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPortal,
  isAudioPlaying,
  toggleAudio
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => setActiveTab('overview')}
          className="text-left font-display text-2xl font-extrabold tracking-tight text-[#FFE500] hover:text-white transition-colors cursor-pointer"
        >
          RIBO MUSIC
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'text-[#FFE500] font-semibold border-b-2 border-[#FFE500] pb-0.5'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Billboard Bottleneck
          </button>
          <button
            onClick={() => setActiveTab('revenue')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'revenue'
                ? 'text-[#FFE500] font-semibold border-b-2 border-[#FFE500] pb-0.5'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Revenue Reality
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'services'
                ? 'text-[#FFE500] font-semibold border-b-2 border-[#FFE500] pb-0.5'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            The Ribo Package
          </button>
          <button
            onClick={() => setActiveTab('ribby')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'ribby'
                ? 'text-[#FFE500] font-semibold border-b-2 border-[#FFE500] pb-0.5'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Ribby Lore
          </button>
          <button
            onClick={() => setActiveTab('fan')}
            className={`transition-colors cursor-pointer ${
              activeTab === 'fan'
                ? 'text-[#FFE500] font-semibold border-b-2 border-[#FFE500] pb-0.5'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Fan Pass ($12.99)
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://ribointeractive.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#FFE500] hover:text-black hover:bg-[#FFE500] border border-[#FFE500]/50 rounded-md transition-all cursor-pointer whitespace-nowrap shadow-[0_0_10px_rgba(255,229,0,0.15)]"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Make your own Ribby Video!</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? 'Mute rebel soundtrack' : 'Play rebel soundtrack'}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isAudioPlaying
                ? 'border-[#FFE500] bg-[#FFE500]/10 text-[#FFE500]'
                : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenPortal}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#FFE500] hover:bg-[#FFF066] active:translate-y-0.5 transition-all rounded-md shadow-[0_0_15px_rgba(255,229,0,0.3)] whitespace-nowrap cursor-pointer"
          >
            Musician Launchpad
          </button>
        </div>
      </div>
    </header>
  );
};
