import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BillboardDataCharts } from './components/BillboardDataCharts';
import { RevenueComparisonChart } from './components/RevenueComparisonChart';
import { RiboServicesSection } from './components/RiboServicesSection';
import { RibbyLoreSection } from './components/RibbyLoreSection';
import { FanDiscoverySection } from './components/FanDiscoverySection';
import { MusicianPortal } from './components/MusicianPortal';
import { Footer } from './components/Footer';
import { audioSynth } from './utils/audioSynth';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioStep, setAudioStep] = useState<number>(0);

  useEffect(() => {
    // Bind note trigger step callback from synth
    audioSynth.setOnNote((step) => {
      setAudioStep(step);
    });

    return () => {
      audioSynth.stop();
    };
  }, []);

  const handleToggleAudio = () => {
    if (isAudioPlaying) {
      audioSynth.stop();
      setIsAudioPlaying(false);
    } else {
      audioSynth.play('synthwave', 128);
      setIsAudioPlaying(true);
    }
  };

  const handlePlayCustomTrack = (style: 'punk' | 'synthwave' | 'rock' | 'indie', bpm: number = 128) => {
    audioSynth.play(style, bpm);
    setIsAudioPlaying(true);
  };

  const handleNavigateToSection = (tab: string) => {
    setActiveTab(tab);
    const elementMap: Record<string, string> = {
      overview: 'billboard-data',
      revenue: 'revenue-reality',
      services: 'ribo-services',
      ribby: 'ribby-lore',
      fan: 'fan-pass'
    };

    const targetId = elementMap[tab];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#FFE500] selection:text-black">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateToSection}
        onOpenPortal={() => setIsPortalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={handleToggleAudio}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenPortal={() => setIsPortalOpen(true)}
          onExploreData={() => handleNavigateToSection('overview')}
          isAudioPlaying={isAudioPlaying}
          toggleAudio={handleToggleAudio}
          audioStep={audioStep}
        />

        {/* Billboard Top 100 Kaggle Intelligence & Bottleneck Interactive Graph */}
        <BillboardDataCharts />

        {/* 90/1 Streaming Inequality vs Ribo Model Revenue Calculator */}
        <RevenueComparisonChart />

        {/* The Ribo Full Package Breakdown */}
        <RiboServicesSection onOpenPortal={() => setIsPortalOpen(true)} />

        {/* Ribby the Rebel Rabbit Interactive Dossier & Lore */}
        <RibbyLoreSection />

        {/* $12.99 Fan Discovery Pass & Community Preview */}
        <FanDiscoverySection
          onPlayTrack={handlePlayCustomTrack}
          isAudioPlaying={isAudioPlaying}
        />
      </main>

      {/* Musician Log-on & Launchpad Interactive Modal */}
      <MusicianPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onPlayTrack={handlePlayCustomTrack}
        isAudioPlaying={isAudioPlaying}
      />

      {/* Quiet Clean Footer */}
      <Footer
        onOpenPortal={() => setIsPortalOpen(true)}
        setActiveTab={handleNavigateToSection}
      />
    </div>
  );
}
