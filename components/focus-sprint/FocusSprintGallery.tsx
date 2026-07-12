"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    id: "cover",
    label: "Book Cover",
    subtitle: "Ellie and the Tiny Lost Duck",
    image: "/focus-sprint/cover.png",
    text: null as string[] | null,
  },
  {
    id: "character-sheet",
    label: "Ellie Character Sheet",
    subtitle: "Official MVP character · 8 poses",
    image: "/focus-sprint/ellie-character-sheet.png",
    text: null,
  },
  {
    id: "icon",
    label: "AdventureBox Icon",
    subtitle: "The magical box",
    image: "/focus-sprint/adventurebox-icon.png",
    text: null,
  },
  {
    id: "page-1",
    label: "Page 1 of 5",
    subtitle: "The Peep",
    image: "/focus-sprint/page-01.png",
    text: ["Ellie heard a peep.", "Something tiny was calling."],
  },
  {
    id: "page-2",
    label: "Page 2 of 5",
    subtitle: "The Lost One",
    image: "/focus-sprint/page-02.png",
    text: ["A duckling sat alone.", "Ellie knelt down softly."],
  },
  {
    id: "page-3",
    label: "Page 3 of 5",
    subtitle: "The Search",
    image: "/focus-sprint/page-03.png",
    text: ["\"Where did you go?\"", "Tap the grass to help Ellie look."],
  },
  {
    id: "page-4",
    label: "Page 4 of 5",
    subtitle: "The Surprise",
    image: "/focus-sprint/page-04.png",
    text: ["Peep!", "The duck was in her trunk!"],
  },
  {
    id: "page-5",
    label: "Page 5 of 5",
    subtitle: "Best Friends",
    image: "/focus-sprint/page-05.png",
    text: ["Side by side they walked.", "The meadow glowed goodnight."],
  },
  {
    id: "moodboard",
    label: "Mood Board",
    subtitle: "8 inspiration references",
    image: null,
    text: null,
  },
];

const MOOD_INSPIRATION = [
  "/focus-sprint/moodboard/mood-inspiration-01-golden-meadow.png",
  "/focus-sprint/moodboard/mood-inspiration-02-tenderness.png",
  "/focus-sprint/moodboard/mood-inspiration-03-expressive-eyes.png",
  "/focus-sprint/moodboard/mood-inspiration-04-sunset-bedtime.png",
  "/focus-sprint/moodboard/mood-inspiration-05-paper-texture.png",
  "/focus-sprint/moodboard/mood-inspiration-06-playful-surprise.png",
  "/focus-sprint/moodboard/mood-inspiration-07-nursery-shelf.png",
  "/focus-sprint/moodboard/mood-inspiration-08-bedtime-ritual.png",
];

export function FocusSprintGallery() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const isFirst = index === 0;
  const isLast = index === SLIDES.length - 1;

  const goNext = useCallback(() => {
    if (!isLast) setIndex((i) => i + 1);
  }, [isLast]);

  const goPrev = useCallback(() => {
    if (!isFirst) setIndex((i) => i - 1);
  }, [isFirst]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#FFF9F0]">
      <header className="shrink-0 border-b border-black/5 bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#6C5CE7]">
              Product Owner Review
            </p>
            <h1 className="font-[family-name:var(--font-fredoka)] text-lg font-bold text-[#2D3436] sm:text-xl">
              {slide.label}
            </h1>
            <p className="text-sm text-[#636E72]">{slide.subtitle}</p>
          </div>
          <p className="shrink-0 font-[family-name:var(--font-fredoka)] text-sm font-semibold text-[#B2BEC3]">
            {index + 1} / {SLIDES.length}
          </p>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-8">
        {slide.id === "moodboard" ? (
          <div className="w-full max-w-5xl overflow-y-auto">
            <p className="mb-3 text-center font-[family-name:var(--font-fredoka)] text-sm font-semibold text-[#00B894]">
              Inspiration — What AdventureBox IS
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {MOOD_INSPIRATION.map((src, i) => (
                <div key={src} className="overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
                  <Image
                    src={src}
                    alt={`Inspiration ${i + 1}`}
                    width={400}
                    height={400}
                    className="h-auto w-full"
                    priority={i < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full max-w-3xl flex-col items-center">
            <div className="relative mb-6 w-full overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <Image
                src={slide.image!}
                alt={slide.label}
                width={1200}
                height={1500}
                className="h-auto w-full"
                priority
              />
              {slide.id === "cover" && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent px-6 pb-8 pt-24 text-center">
                  <p className="font-[family-name:var(--font-fredoka)] text-2xl font-bold leading-tight text-[#FFF9F0] sm:text-3xl">
                    Ellie and the
                    <br />
                    Tiny Lost Duck
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-fredoka)] text-sm text-[#FDCB6E]">
                    AdventureBox
                  </p>
                </div>
              )}
            </div>

            {slide.text && (
              <div className="max-w-lg text-center">
                {slide.text.map((line) => (
                  <p
                    key={line}
                    className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold leading-snug text-[#2D3436] sm:text-3xl md:text-4xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="shrink-0 border-t border-black/5 bg-white px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={isFirst}
            className="flex h-14 min-w-[120px] items-center justify-center rounded-full border border-[#2D3436]/10 bg-white font-[family-name:var(--font-fredoka)] text-base font-semibold text-[#636E72] transition-all hover:bg-[#F3F0FF] disabled:opacity-30 sm:min-w-[140px]"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isLast}
            className="flex h-14 min-w-[120px] flex-1 items-center justify-center rounded-full bg-[#FDCB6E] font-[family-name:var(--font-fredoka)] text-base font-bold text-[#2D1B00] shadow-[0_8px_24px_rgba(253,203,110,0.4)] transition-all hover:scale-[1.02] disabled:opacity-30 sm:min-w-[160px] sm:text-lg"
          >
            Next →
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-[#B2BEC3]">
          Arrow keys · {SLIDES.length} slides · Do not commit until approved
        </p>
      </footer>
    </div>
  );
}
