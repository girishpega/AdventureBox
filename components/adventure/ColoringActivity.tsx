"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui";
import { saveColoring } from "@/lib/coloringGallery";
import { enableSound, playSound } from "@/lib/sounds";
import type { ColoringConfig } from "@/types/adventure";
import type { ThemeColors } from "@/types";

interface ColoringActivityProps {
  coloring: ColoringConfig;
  adventureId: string;
  colors: ThemeColors;
  onComplete: () => void;
}

interface HistoryEntry {
  regionId: string;
  previousColor: string | null;
}

export function ColoringActivity({
  coloring,
  adventureId,
  colors,
  onComplete,
}: ColoringActivityProps) {
  const [selectedColor, setSelectedColor] = useState(coloring.palette[0]);
  const [fills, setFills] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const completedRef = useRef(false);

  const allFilled = useMemo(
    () => coloring.regions.every((r) => fills[r.id]),
    [coloring.regions, fills]
  );

  const handleRegionTap = useCallback(
    (regionId: string) => {
      enableSound();
      playSound("colorTap");

      setFills((prev) => {
        const previousColor = prev[regionId] ?? null;
        if (previousColor === selectedColor) return prev;

        setHistory((h) => [...h, { regionId, previousColor }]);
        return { ...prev, [regionId]: selectedColor };
      });
    },
    [selectedColor]
  );

  const handleUndo = useCallback(() => {
    enableSound();
    setHistory((h) => {
      if (h.length === 0) return h;
      const last = h[h.length - 1];
      setFills((prev) => {
        const next = { ...prev };
        if (last.previousColor === null) {
          delete next[last.regionId];
        } else {
          next[last.regionId] = last.previousColor;
        }
        return next;
      });
      return h.slice(0, -1);
    });
  }, []);

  const handleReset = useCallback(() => {
    enableSound();
    setFills({});
    setHistory([]);
    completedRef.current = false;
  }, []);

  const saveAndComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    enableSound();
    playSound("colorComplete");

    if (svgRef.current) {
      try {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgRef.current);
        const dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
        saveColoring({
          id: `${adventureId}-crown`,
          adventureId,
          title: coloring.title,
          emoji: coloring.emoji,
          dataUrl,
        });
      } catch {
        // Saving is nice-to-have; don't block celebration
      }
    }

    setTimeout(onComplete, 800);
  }, [adventureId, coloring.emoji, coloring.title, onComplete]);

  useEffect(() => {
    if (allFilled && !completedRef.current) {
      saveAndComplete();
    }
  }, [allFilled, saveAndComplete]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex items-center gap-2" aria-hidden="true">
        <span className="animate-sparkle text-xl">✨</span>
        <span className="text-3xl">{coloring.emoji}</span>
        <span className="animate-sparkle text-xl">✨</span>
      </div>

      <h2
        className="mb-2 text-center font-[family-name:var(--font-fredoka)] text-2xl font-bold sm:text-3xl"
        style={{ color: colors.primary }}
      >
        {coloring.title}
      </h2>
      <p className="mb-6 text-center text-lg text-text-secondary">
        {coloring.hint}
      </p>

      <div
        className="relative mb-6 w-full max-w-sm rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-card)] sm:max-w-md sm:p-6"
        role="application"
        aria-label="Tap-to-fill coloring activity"
      >
        <svg
          ref={svgRef}
          viewBox={coloring.viewBox}
          className="mx-auto w-full max-w-[280px] animate-fade-in-up"
          aria-label="Unicorn crown coloring page"
        >
          {coloring.regions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              fill={fills[region.id] ?? "#FFFFFF"}
              stroke="#2D3436"
              strokeWidth={2}
              strokeLinejoin="round"
              className="cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              onClick={() => handleRegionTap(region.id)}
              role="button"
              tabIndex={0}
              aria-label={`Color ${region.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleRegionTap(region.id);
                }
              }}
            />
          ))}
          {coloring.outlinePaths?.map((path, i) => (
            <path
              key={`outline-${i}`}
              d={path}
              fill="none"
              stroke="#2D3436"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              pointerEvents="none"
            />
          ))}
        </svg>

        {allFilled && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[var(--radius-card)] bg-white/70 backdrop-blur-sm">
            <div className="animate-celebrate text-center">
              <span className="text-5xl" role="img" aria-label="Beautiful crown">
                ✨
              </span>
              <p className="mt-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                Beautiful!
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3"
        role="toolbar"
        aria-label="Color palette"
      >
        {coloring.palette.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => {
              enableSound();
              setSelectedColor(color);
            }}
            className={[
              "h-12 w-12 rounded-full border-4 transition-all duration-200 sm:h-14 sm:w-14",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
              "hover:scale-110 active:scale-95",
              selectedColor === color
                ? "scale-110 border-text-primary shadow-[var(--shadow-card-hover)] animate-pulse-glow"
                : "border-white shadow-[var(--shadow-soft)]",
            ].join(" ")}
            style={{ backgroundColor: color }}
            aria-label={`Select color ${color}`}
            aria-pressed={selectedColor === color}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="ghost"
          size="md"
          onClick={handleUndo}
          disabled={history.length === 0}
          className="min-h-[48px] min-w-[100px] transition-transform hover:scale-105 active:scale-95"
          aria-label="Undo last color"
        >
          ↩ Undo
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={handleReset}
          disabled={Object.keys(fills).length === 0}
          className="min-h-[48px] min-w-[100px] transition-transform hover:scale-105 active:scale-95"
          aria-label="Reset coloring"
        >
          🔄 Reset
        </Button>
      </div>

      <p className="mt-4 text-sm text-text-muted">
        {allFilled
          ? "Saving your crown..."
          : `${Object.keys(fills).length} of ${coloring.regions.length} parts colored`}
      </p>
    </div>
  );
}
