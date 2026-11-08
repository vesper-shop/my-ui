import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const SR = 48000;
const LENGTH = 86;
const BEAT = 60 / 120;
const BAR = BEAT * 4;
const CUTS = [4, 20, 36, 52, 68, 76];
const OUT = fileURLToPath(new URL("../assets/audio/soundtrack.m4a", import.meta.url));

const left = new Float32Array(SR * LENGTH);
const right = new Float32Array(SR * LENGTH);
const chords = [
  [53, 57, 60, 64],
  [52, 55, 59, 62],
  [50, 53, 57, 60, 64],
  [55, 60, 62, 65],
];
const roots = [41, 40, 38, 43];
const stabs = [0, 3, 6, 10, 12];
const bassLine = [0, 0, 12, 0, 0, 12, 0, 10];
const bars = Math.floor(LENGTH / BAR);
let seed = 23;

for (let bar = 0; bar < bars; bar += 1) {
  const barStart = bar * BAR;
  const chord = chords[bar % 4];
  const root = roots[bar % 4];
  const isIntro = barStart < 4;
  const isOutro = barStart >= 82;

  for (let step = 0; step < 16; step += 1) {
    const swing = step % 2 === 1 ? 0.025 : 0;
    const start = Math.floor((barStart + (step * BEAT) / 4 + swing) * SR);

    if (stabs.includes(step)) {
      for (const note of chord) {
        const frequency = 440 * 2 ** ((note - 69) / 12);
        for (let i = 0; i < BEAT * 0.9 * SR && start + i < left.length; i += 1) {
          const t = i / SR;
          const index = 1.6 * Math.exp(-t * 9);
          const value =
            0.03 *
            Math.exp(-t * 3.2) *
            Math.sin(2 * Math.PI * frequency * t + index * Math.sin(2 * Math.PI * frequency * t));
          left[start + i] += value;
          right[start + i] += value * 0.85;
        }
      }
    }

    if (step % 4 === 0 && !isIntro) {
      for (let i = 0; i < 0.3 * SR && start + i < left.length; i += 1) {
        const t = i / SR;
        const value =
          0.45 * Math.exp(-t * 12) * Math.sin(2 * Math.PI * (48 + 80 * Math.exp(-t * 35)) * t);
        left[start + i] += value;
        right[start + i] += value;
      }
    }

    if ((step === 4 || step === 12 || step === 15) && !isIntro) {
      const level = step === 15 ? 0.06 : 0.2;
      for (let i = 0; i < 0.16 * SR && start + i < left.length; i += 1) {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        const t = i / SR;
        const value =
          level * Math.exp(-t * 24) * ((seed / 2 ** 32) * 2 - 1) +
          level * 0.6 * Math.exp(-t * 30) * Math.sin(2 * Math.PI * 190 * t);
        left[start + i] += value;
        right[start + i] += value;
      }
    }

    for (let i = 0; i < 0.025 * SR && start + i < left.length; i += 1) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const value =
        (step % 4 === 2 ? 0.07 : 0.035) * Math.exp(-(i / SR) * 150) * ((seed / 2 ** 32) * 2 - 1);
      left[start + i] += value * 0.6;
      right[start + i] += value;
    }

    if (step % 2 === 0 && !isIntro && !isOutro) {
      const frequency = 440 * 2 ** ((root + bassLine[step / 2] - 69) / 12);
      for (let i = 0; i < BEAT * 0.45 * SR && start + i < left.length; i += 1) {
        const t = i / SR;
        const pluck = Math.exp(-t * 7);
        const value =
          0.22 *
          pluck *
          (Math.sin(2 * Math.PI * frequency * t) +
            0.35 * Math.exp(-t * 40) * Math.sin(6 * Math.PI * frequency * t));
        left[start + i] += value;
        right[start + i] += value;
      }
    }
  }
}

for (const cut of CUTS) {
  const hit = Math.floor(cut * SR);
  for (const note of [65, 69, 72, 76]) {
    const frequency = 440 * 2 ** ((note - 69) / 12);
    for (let i = 0; i < 0.5 * SR && hit + i < left.length; i += 1) {
      const t = i / SR;
      const phase = (frequency * t) % 1;
      const value = 0.05 * Math.min(1, t / 0.01) * Math.exp(-t * 5) * (2 * phase - 1);
      left[hit + i] += value;
      right[hit + i] += value;
    }
  }
}

let peak = 0;
for (let i = 0; i < left.length; i += 1) {
  const t = i / SR;
  const fade = Math.min(1, t / 0.2, (LENGTH - t) / 2.5);
  left[i] *= fade;
  right[i] *= fade;
  peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
}

const gain = 10 ** (-1 / 20) / peak;
const pcm = Buffer.alloc(44 + left.length * 4);
pcm.write("RIFF", 0);
pcm.writeUInt32LE(36 + left.length * 4, 4);
pcm.write("WAVEfmt ", 8);
pcm.writeUInt32LE(16, 16);
pcm.writeUInt16LE(1, 20);
pcm.writeUInt16LE(2, 22);
pcm.writeUInt32LE(SR, 24);
pcm.writeUInt32LE(SR * 4, 28);
pcm.writeUInt16LE(4, 32);
pcm.writeUInt16LE(16, 34);
pcm.write("data", 36);
pcm.writeUInt32LE(left.length * 4, 40);
for (let i = 0; i < left.length; i += 1) {
  pcm.writeInt16LE(Math.round(left[i] * gain * 32767), 44 + i * 4);
  pcm.writeInt16LE(Math.round(right[i] * gain * 32767), 46 + i * 4);
}

const dir = mkdtempSync(join(tmpdir(), "my-ui-soundtrack-"));
const wav = join(dir, "soundtrack.wav");
writeFileSync(wav, pcm);
execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", wav, "-c:a", "aac", "-b:a", "192k", OUT]);
rmSync(dir, { recursive: true });
console.log(`Wrote ${OUT}`);
