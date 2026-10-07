/**
 * Web Audio API Synth Engine for Ribo Cyberpunk Audio Player
 * Generates energetic retro-synth / rebel bass riffs in real-time
 */

class RiboSynthEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private step: number = 0;
  private style: 'punk' | 'synthwave' | 'rock' | 'indie' = 'synthwave';
  private onNoteCallback: ((noteIndex: number) => void) | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setOnNote(callback: (noteIndex: number) => void) {
    this.onNoteCallback = callback;
  }

  public play(style: 'punk' | 'synthwave' | 'rock' | 'indie' = 'synthwave', bpm: number = 128) {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
    }
    this.style = style;
    this.isPlaying = true;
    this.step = 0;

    const intervalMs = (60 / bpm / 2) * 1000; // 16th notes
    this.intervalId = window.setInterval(() => {
      this.triggerStep();
    }, intervalMs);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private triggerStep() {
    if (!this.ctx || !this.isPlaying) return;

    const t = this.ctx.currentTime;
    const currentStep = this.step % 16;
    this.step++;

    if (this.onNoteCallback) {
      this.onNoteCallback(currentStep);
    }

    // Melodic notes base frequencies (A minor / D minor cyberpunk scales)
    const notesPunk = [110, 110, 130.81, 146.83, 110, 164.81, 146.83, 130.81];
    const notesSynth = [110, 130.81, 164.81, 220, 196, 164.81, 146.83, 164.81];
    const notesRock = [98, 98, 123.47, 146.83, 98, 146.83, 164.81, 130.81];

    const currentNotes = this.style === 'punk' ? notesPunk : (this.style === 'rock' ? notesRock : notesSynth);
    const noteFreq = currentNotes[currentStep % currentNotes.length];

    // Bass synth voice
    if (currentStep % 2 === 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = this.style === 'punk' ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(noteFreq, t);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(this.style === 'punk' ? 1200 : 800, t);
      filter.frequency.exponentialRampToValueAtTime(150, t + 0.18);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    }

    // Drum beat (Kick on 0, 4, 8, 12; Snare on 4, 12; Hi-hat on every odd step)
    if (currentStep % 4 === 0) {
      // Kick
      const kickOsc = this.ctx.createOscillator();
      const kickGain = this.ctx.createGain();
      kickOsc.frequency.setValueAtTime(150, t);
      kickOsc.frequency.exponentialRampToValueAtTime(30, t + 0.12);

      kickGain.gain.setValueAtTime(0.35, t);
      kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      kickOsc.connect(kickGain);
      kickGain.connect(this.ctx.destination);

      kickOsc.start(t);
      kickOsc.stop(t + 0.16);
    }

    if (currentStep === 4 || currentStep === 12) {
      // Snare (Noise burst + tonal punch)
      const snareNoise = this.ctx.createBufferSource();
      const bufferSize = this.ctx.sampleRate * 0.1;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      snareNoise.buffer = buffer;

      const snareFilter = this.ctx.createBiquadFilter();
      snareFilter.type = 'highpass';
      snareFilter.frequency.value = 1000;

      const snareGain = this.ctx.createGain();
      snareGain.gain.setValueAtTime(0.18, t);
      snareGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      snareNoise.connect(snareFilter);
      snareFilter.connect(snareGain);
      snareGain.connect(this.ctx.destination);

      snareNoise.start(t);
      snareNoise.stop(t + 0.13);
    }

    // High Hat tick on odd steps
    if (currentStep % 2 !== 0) {
      const hatOsc = this.ctx.createOscillator();
      const hatGain = this.ctx.createGain();
      hatOsc.type = 'square';
      hatOsc.frequency.setValueAtTime(7500, t);

      hatGain.gain.setValueAtTime(0.04, t);
      hatGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      hatOsc.connect(hatGain);
      hatGain.connect(this.ctx.destination);

      hatOsc.start(t);
      hatOsc.stop(t + 0.06);
    }
  }
}

export const audioSynth = new RiboSynthEngine();
