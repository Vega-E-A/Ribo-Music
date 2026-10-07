import { ChartEraData, MusicianProfile, RiboService } from '../types';

export const BILLBOARD_CHART_DATA: ChartEraData[] = [
  {
    era: 'Vinyl & FM Golden Age',
    years: '1970–1990',
    artistsPerYear: 977,
    description: 'Physical record store distribution and local FM radio curation gave hundreds of new acts runway to chart for multiple weeks.',
    retentionDropPercent: 0,
    dailyNewTracksEst: 250,
    industryContext: 'Record stores had limited shelf space, but regional DJ autonomy gave new bands 2+ weeks of organic momentum.',
    milestone: '977 new artists/year held 2+ weeks on Billboard'
  },
  {
    era: 'CD Boom & MTV Era',
    years: '1990–1999',
    artistsPerYear: 759,
    description: 'Major label consolidation and consolidated radio play began squeezing out regional independent breakouts.',
    retentionDropPercent: 22.3,
    dailyNewTracksEst: 1200,
    industryContext: 'Telecommunications Act of 1996 consolidated radio stations under conglomerates; independent gatekeeping tightened.',
    milestone: '759 new artists/year (-22% from prior decade)'
  },
  {
    era: 'Streaming & Algorithmic Shift',
    years: '2000–2020',
    artistsPerYear: 196,
    description: 'Digital explosion: streaming playlists replaced human tastemakers, favoring already established superstar catalogs.',
    retentionDropPercent: 79.9,
    dailyNewTracksEst: 40000,
    industryContext: 'In 2020, 90% of Spotify streaming revenue flowed directly to just the top 1% of artists.',
    milestone: '196 new artists/year (-80% drop from 1970-1990 baseline)'
  },
  {
    era: 'The Attention Bottleneck',
    years: '2024–2026',
    artistsPerYear: 156,
    description: 'Massive supply overload: over 120,000 tracks uploaded daily. Less than half of the few charting newcomers hold ground for 2 weeks.',
    retentionDropPercent: 84.0,
    dailyNewTracksEst: 125000,
    industryContext: 'New releases struggle to hold attention past 7 days without massive pay-to-play marketing budgets.',
    milestone: '156 new artists/year (-84% historical collapse)'
  }
];

export const ANNUAL_BREAKDOWN = [
  { year: 1975, newArtists: 1012, supplyIndex: 5 },
  { year: 1980, newArtists: 980, supplyIndex: 8 },
  { year: 1985, newArtists: 955, supplyIndex: 12 },
  { year: 1990, newArtists: 940, supplyIndex: 18 },
  { year: 1995, newArtists: 780, supplyIndex: 25 },
  { year: 1999, newArtists: 735, supplyIndex: 35 },
  { year: 2005, newArtists: 320, supplyIndex: 60 },
  { year: 2010, newArtists: 240, supplyIndex: 110 },
  { year: 2015, newArtists: 210, supplyIndex: 350 },
  { year: 2020, newArtists: 185, supplyIndex: 800 },
  { year: 2024, newArtists: 162, supplyIndex: 1250 },
  { year: 2026, newArtists: 156, supplyIndex: 1400 },
];

export const RIBO_SERVICES: RiboService[] = [
  {
    id: 'streaming',
    title: 'Streaming & 100% Rights',
    tagline: 'Keep 100% Master Ownership',
    description: 'Distribute directly through Ribo. No corporate middleman eating your royalties or demanding 360-deal rights grab.',
    icon: 'Radio',
    includedFree: true
  },
  {
    id: 'marketing',
    title: 'Algorithmic-Free Marketing',
    tagline: 'Dedicated Grassroots Reach',
    description: 'Targeted fan discovery campaigns powered by genuine tastemakers, not pay-to-play algorithmic black boxes.',
    icon: 'Flame',
    includedFree: true
  },
  {
    id: 'airtime',
    title: 'Airtime & Station Spotlights',
    tagline: 'Guaranteed Multi-Week Spins',
    description: 'Curated Ribo station rotation giving new singles the 2+ week continuous airplay needed to build real listener loyalty.',
    icon: 'Volume2',
    includedFree: true
  },
  {
    id: 'venue_bookings',
    title: 'Venue Bookings & Club Circuit',
    tagline: 'Real Stage Time',
    description: 'Direct booking leverage with underground and mid-tier live venues. Connect your digital release to real live ticket sales.',
    icon: 'MapPin',
    includedFree: true
  },
  {
    id: 'merchandising',
    title: 'Merchandising & Rebel Gear',
    tagline: 'Custom Apparel & Physical Drops',
    description: 'Zero upfront production costs. Custom vinyl, shirts, pick necklaces, and patches sold directly to dedicated fans.',
    icon: 'ShoppingBag',
    includedFree: true
  },
  {
    id: 'hands_on_support',
    title: '1-on-1 Artist Support',
    tagline: 'Human Guidance, Not Chatbots',
    description: 'Direct artist mentorship and release strategy from veterans who escaped major label contracts.',
    icon: 'Users',
    includedFree: true
  }
];

export const PRESET_MUSICIANS: MusicianProfile[] = [
  {
    id: 'ribby-crew-1',
    name: 'Kira & The Static',
    genre: 'Cyberpunk Riot Punk',
    hometown: 'Detroit, MI',
    monthlyStreams: 24500,
    catalogSize: 8,
    bio: 'Distorted basslines and ferocious lyricism against algorithmic homogeny. Looking for stage time and independent tour support.',
    trackTitle: 'Burn The Playlist',
    tempo: 140,
    soundStyle: 'punk'
  },
  {
    id: 'ribby-crew-2',
    name: 'Neon Nomad',
    genre: 'Darksynth / Indie Rock',
    hometown: 'Austin, TX',
    monthlyStreams: 18200,
    catalogSize: 12,
    bio: 'Analog modular synths colliding with raw vintage guitars. Trapped behind Spotify playlist gatekeepers for 3 years.',
    trackTitle: 'Two Weeks Or Bust',
    tempo: 120,
    soundStyle: 'synthwave'
  },
  {
    id: 'ribby-crew-3',
    name: 'Vessel 99',
    genre: 'Alternative Grunge',
    hometown: 'Seattle, WA',
    monthlyStreams: 31000,
    catalogSize: 6,
    bio: 'Heavy riffs with introspective melodies. 90% of my streaming income went to label distribution fees last year.',
    trackTitle: 'Undiscovered Majority',
    tempo: 110,
    soundStyle: 'rock'
  }
];

export const RIBBY_LORE_ITEMS = [
  {
    id: 'jacket',
    title: 'Maroon Leather Jacket',
    tag: 'WORN, BOLD, STAGE-READY',
    detail: 'Scuffed through hundreds of basement gigs and venue lockouts. Studded with DIY rebellion pins and the scars of rejecting predatory label contracts.'
  },
  {
    id: 'necklace',
    title: 'Ribo Pick Necklace',
    tag: 'REMINDER OF WHAT MATTERS',
    detail: 'Carried close to her heart. When algorithms push generic trends, the pick is a physical reminder that true music starts with authentic human hands.'
  },
  {
    id: 'authentic',
    title: 'DIY. Authentic.',
    tag: 'BUILT BY ARTISTS, FOR ARTISTS',
    detail: 'Hand-stenciled RIBO typography across the back. No corporate sponsors, no vanity metrics. An uncompromising commitment to artist ownership.'
  },
  {
    id: 'headphones',
    title: 'Stay Connected',
    tag: 'TUNED IN TO THE MOVEMENT',
    detail: 'Studio-grade monitors glowing with the rebel purple badge. Tuned into fresh underground frequencies while tuning out mainstream algorithmic noise.'
  }
];
