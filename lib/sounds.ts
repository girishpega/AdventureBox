/**
 * Lightweight sound effects via Web Audio API.
 * No external audio files or libraries — tiny bundle footprint.
 * Sound activates only after the first user interaction (browser autoplay policy).
 */

export type SoundEvent =
  | "boxOpen"
  | "storyTransition"
  | "mazeSuccess"
  | "celebration"
  | "stickerReveal"
  | "colorTap"
  | "colorComplete";

let audioContext: AudioContext | null = null;
let soundEnabled = false;

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

/** Call on first user interaction to unlock audio. Safe to call repeatedly. */
export function enableSound(): void {
  if (typeof window === "undefined" || soundEnabled) return;

  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;

    audioContext = new Ctx();
    soundEnabled = true;
  } catch {
    // Gracefully degrade — silent experience is fine
  }
}

function playTone(
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  volume = 0.15,
  delay = 0
): void {
  if (!audioContext || !soundEnabled) return;

  try {
    if (audioContext.state === "suspended") {
      void audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(
      frequency,
      audioContext.currentTime + delay
    );

    gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(
      volume,
      audioContext.currentTime + delay + 0.02
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + delay + duration
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + delay);
    oscillator.stop(audioContext.currentTime + delay + duration);
  } catch {
    // Ignore playback failures
  }
}

function playChord(
  frequencies: number[],
  duration: number,
  volume = 0.1
): void {
  frequencies.forEach((freq, i) => {
    playTone(freq, duration, "sine", volume, i * 0.06);
  });
}

const SOUND_HANDLERS: Record<SoundEvent, () => void> = {
  boxOpen: () => {
    playTone(330, 0.15, "sine", 0.12, 0);
    playTone(440, 0.15, "sine", 0.12, 0.1);
    playTone(554, 0.25, "sine", 0.14, 0.2);
    playTone(660, 0.35, "triangle", 0.1, 0.35);
  },

  storyTransition: () => {
    playTone(523, 0.12, "sine", 0.1, 0);
    playTone(659, 0.18, "sine", 0.08, 0.08);
  },

  mazeSuccess: () => {
    playChord([523, 659, 784], 0.4, 0.12);
    playTone(1047, 0.3, "triangle", 0.1, 0.25);
  },

  celebration: () => {
    playChord([392, 494, 587], 0.35, 0.1);
    playChord([523, 659, 784], 0.4, 0.1);
    playTone(880, 0.5, "triangle", 0.08, 0.5);
  },

  stickerReveal: () => {
    playTone(784, 0.15, "sine", 0.12, 0);
    playTone(988, 0.15, "sine", 0.12, 0.12);
    playTone(1175, 0.3, "triangle", 0.1, 0.24);
  },

  colorTap: () => {
    playTone(600 + Math.random() * 200, 0.08, "sine", 0.06, 0);
  },

  colorComplete: () => {
    playChord([440, 554, 659], 0.35, 0.1);
    playTone(880, 0.25, "triangle", 0.08, 0.3);
  },
};

export function playSound(event: SoundEvent): void {
  if (!soundEnabled || !audioContext) return;
  SOUND_HANDLERS[event]?.();
}
