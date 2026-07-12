import type { ReactNode } from "react";
import type { StoryScene } from "@/types/adventure";

interface StoryIllustrationProps {
  type: StoryScene["illustration"];
  className?: string;
}

export function StoryIllustration({ type, className = "" }: StoryIllustrationProps) {
  const illustrations: Record<string, ReactNode> = {
    garden: (
      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
        <rect width="300" height="240" rx="20" fill="#E8FFF8" />
        <ellipse cx="150" cy="210" rx="140" ry="30" fill="#55EFC4" opacity="0.35" />
        <rect x="20" y="130" width="35" height="70" rx="8" fill="#E84393" opacity="0.25" />
        <rect x="245" y="120" width="35" height="80" rx="8" fill="#E84393" opacity="0.25" />
        <circle cx="38" cy="115" r="28" fill="#FD79A8" opacity="0.5" />
        <circle cx="262" cy="105" r="32" fill="#FD79A8" opacity="0.5" />
        <circle cx="150" cy="75" r="22" fill="#FDCB6E" opacity="0.7" />
        <text x="55" y="55" fontSize="18">🌸</text>
        <text x="215" y="48" fontSize="18">🌺</text>
        <text x="125" y="35" fontSize="14">✨</text>
        <text x="95" y="175" fontSize="52">👸</text>
        <text x="165" y="190" fontSize="44">🦄</text>
        <text x="140" y="130" fontSize="14" fill="#E84393" fontWeight="bold">Sparkles!</text>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
        <rect width="300" height="240" rx="20" fill="#F0EEFF" />
        <circle cx="150" cy="110" r="90" fill="#FDCB6E" opacity="0.12" className="animate-pulse-glow" />
        <circle cx="150" cy="110" r="60" fill="#FDCB6E" opacity="0.2" />
        <path d="M150 35 L162 95 L222 102 L162 108 L150 168 L138 108 L78 102 L138 95 Z" fill="#FDCB6E" stroke="#E84393" strokeWidth="2" className="animate-twinkle" />
        <path d="M150 60 L155 88 L183 91 L155 94 L150 122 L145 94 L117 91 L145 88 Z" fill="#FD79A8" />
        <text x="30" y="45" fontSize="18" className="animate-sparkle">✨</text>
        <text x="250" y="55" fontSize="18" className="animate-sparkle">✨</text>
        <text x="50" y="210" fontSize="18" className="animate-sparkle">✨</text>
        <text x="235" y="200" fontSize="18" className="animate-sparkle">✨</text>
        <text x="115" y="210" fontSize="40">🦄</text>
        <rect x="0" y="185" width="300" height="55" fill="#55EFC4" opacity="0.2" />
        <text x="15" y="215" fontSize="20">🌿</text>
        <text x="265" y="215" fontSize="20">🌿</text>
      </svg>
    ),
    happy: (
      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
        <rect width="300" height="240" rx="20" fill="#FFF0F6" />
        <circle cx="150" cy="120" r="100" fill="#FDCB6E" opacity="0.15" className="animate-pulse-glow" />
        <path d="M20 60 Q75 30 150 45 Q225 30 280 60" stroke="#E84393" strokeWidth="3" fill="none" opacity="0.4" />
        <text x="75" y="55" fontSize="28">🌈</text>
        <text x="30" y="90" fontSize="20" className="animate-sparkle">⭐</text>
        <text x="245" y="85" fontSize="20" className="animate-sparkle">⭐</text>
        <text x="130" y="100" fontSize="22" className="animate-sparkle">✨</text>
        <text x="60" y="175" fontSize="56">👸</text>
        <text x="155" y="185" fontSize="50" className="animate-wiggle">🦄</text>
        <text x="210" y="130" fontSize="36" className="animate-twinkle">⭐</text>
        <ellipse cx="150" cy="200" rx="80" ry="15" fill="#55EFC4" opacity="0.3" />
        <text x="35" y="220" fontSize="18">🌸</text>
        <text x="250" y="220" fontSize="18">🌺</text>
        <text x="115" y="225" fontSize="13" fill="#E84393" fontWeight="bold">The garden glows!</text>
      </svg>
    ),
  };

  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      {illustrations[type] ?? illustrations.garden}
    </div>
  );
}
