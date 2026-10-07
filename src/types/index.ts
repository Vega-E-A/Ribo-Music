export interface ChartEraData {
  era: string;
  years: string;
  artistsPerYear: number;
  description: string;
  retentionDropPercent: number;
  dailyNewTracksEst: number;
  industryContext: string;
  milestone: string;
}

export interface MusicianProfile {
  id: string;
  name: string;
  genre: string;
  hometown: string;
  monthlyStreams: number;
  catalogSize: number;
  bio: string;
  trackTitle: string;
  tempo: number; // BPM for synth
  soundStyle: 'punk' | 'synthwave' | 'rock' | 'indie';
}

export interface ApplicationFormData {
  artistName: string;
  email: string;
  genre: string;
  links: string;
  yearsActive: string;
  statement: string;
  selectedServices: string[];
}

export interface RiboService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  includedFree: boolean;
}
