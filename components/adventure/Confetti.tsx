"use client";

import { useMemo } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
  rotation: number;
}

const CONFETTI_COLORS = [
  "#E84393",
  "#FDCB6E",
  "#55EFC4",
  "#74B9FF",
  "#FD79A8",
  "#6C5CE7",
];

interface ConfettiProps {
  active: boolean;
  count?: number;
}

function createConfettiPieces(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: ((i * 37 + 13) % 100),
    delay: ((i * 17) % 20) / 10,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    size: 6 + (i % 8),
    rotation: (i * 47) % 360,
  }));
}

export function Confetti({ active, count = 50 }: ConfettiProps) {
  const pieces = useMemo(
    () => (active ? createConfettiPieces(count) : []),
    [active, count]
  );

  if (!active || pieces.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="animate-confetti-fall absolute top-0"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            borderRadius: piece.id % 2 === 0 ? "50%" : "2px",
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
