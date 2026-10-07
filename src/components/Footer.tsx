import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPortal: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal, setActiveTab }) => {
  return (
    <footer className="bg-[#050505] border-t border-neutral-900 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-neutral-900 pb-8">
          <div>
            <span className="font-display text-2xl font-black text-[#FFE500] tracking-tight block">
              RIBO MUSIC
            </span>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              The Undiscovered Majority meets a harder Billboard reality. Empowering independent artists to keep their master rights and build durable momentum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setActiveTab('overview')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Billboard Data
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={() => setActiveTab('revenue')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Revenue Split
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={() => setActiveTab('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={() => setActiveTab('ribby')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ribby Lore
            </button>
            <span className="text-neutral-700">·</span>
            <a
              href="https://ribointeractive.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE500] hover:underline flex items-center gap-1 font-bold"
            >
              <span>Make your own Ribby Video!</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="https://www.ribomusic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE500] hover:underline flex items-center gap-1"
            >
              <span>www.ribomusic.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Ribo Music. All rights reserved. Built for independent artists.</p>
          <div className="flex items-center gap-4">
            <span>Own The Music</span>
            <span>·</span>
            <span>Keep The Rights</span>
            <span>·</span>
            <span>Play Your Way</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
