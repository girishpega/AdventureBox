import type { ThemeId } from "@/types";

interface PlaceholderIllustrationProps {
  theme?: ThemeId | "box" | "sparkle";
  className?: string;
}

const illustrations: Record<string, React.ReactNode> = {
  princess: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="#FFF0F6" />
      <path d="M100 40 L120 90 L170 90 L130 120 L145 170 L100 140 L55 170 L70 120 L30 90 L80 90 Z" fill="#FDCB6E" stroke="#E84393" strokeWidth="3" />
      <rect x="75" y="130" width="50" height="40" rx="8" fill="#E84393" />
      <path d="M60 90 Q100 60 140 90" stroke="#FD79A8" strokeWidth="4" fill="none" />
      <circle cx="85" cy="75" r="6" fill="#E84393" />
      <circle cx="115" cy="75" r="6" fill="#E84393" />
    </svg>
  ),
  dinosaurs: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="#E8FFF8" />
      <ellipse cx="100" cy="150" rx="70" ry="20" fill="#55EFC4" opacity="0.4" />
      <path d="M50 130 Q60 80 90 70 Q120 60 140 90 Q155 110 145 130 Q130 145 100 140 Q70 145 50 130" fill="#00B894" />
      <circle cx="125" cy="95" r="8" fill="#2D3436" />
      <circle cx="127" cy="93" r="3" fill="white" />
      <path d="M45 120 Q30 100 35 80 Q40 70 50 85" fill="#00B894" />
      <path d="M55 75 L50 55 L65 70" fill="#00B894" />
      <path d="M75 75 L70 50 L85 68" fill="#00B894" />
      <path d="M95 72 L92 48 L107 65" fill="#00B894" />
    </svg>
  ),
  space: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="#F0EEFF" />
      <circle cx="40" cy="40" r="3" fill="#FDCB6E" />
      <circle cx="160" cy="60" r="2" fill="#FDCB6E" />
      <circle cx="120" cy="30" r="2" fill="#A29BFE" />
      <circle cx="70" cy="55" r="2" fill="#A29BFE" />
      <path d="M60 140 L90 80 L100 80 L130 140 Z" fill="#6C5CE7" />
      <rect x="85" y="70" width="30" height="15" rx="4" fill="#A29BFE" />
      <circle cx="100" cy="65" r="12" fill="#74B9FF" />
      <path d="M130 110 L160 100 L155 115 Z" fill="#FD79A8" />
      <path d="M60 110 L30 100 L35 115 Z" fill="#FD79A8" />
      <ellipse cx="100" cy="155" rx="8" ry="15" fill="#FDCB6E" opacity="0.6" />
    </svg>
  ),
  animals: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="#FFF5EE" />
      <ellipse cx="100" cy="160" rx="60" ry="15" fill="#55EFC4" opacity="0.3" />
      <circle cx="100" cy="110" r="45" fill="#E17055" />
      <circle cx="70" cy="75" r="18" fill="#E17055" />
      <circle cx="130" cy="75" r="18" fill="#E17055" />
      <circle cx="70" cy="75" r="10" fill="#FAB1A0" />
      <circle cx="130" cy="75" r="10" fill="#FAB1A0" />
      <circle cx="88" cy="105" r="6" fill="#2D3436" />
      <circle cx="112" cy="105" r="6" fill="#2D3436" />
      <ellipse cx="100" cy="118" rx="8" ry="6" fill="#2D3436" />
      <path d="M55 130 Q100 145 145 130" stroke="#2D3436" strokeWidth="3" fill="none" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="#F3F0FF" />
      <rect x="45" y="70" width="110" height="90" rx="12" fill="#6C5CE7" />
      <path d="M45 70 L100 40 L155 70" stroke="#A29BFE" strokeWidth="8" fill="#A29BFE" />
      <rect x="85" y="100" width="30" height="30" rx="6" fill="#FDCB6E" />
      <circle cx="100" cy="55" r="8" fill="#FD79A8" className="animate-sparkle" />
      <circle cx="70" cy="50" r="4" fill="#FDCB6E" opacity="0.7" />
      <circle cx="130" cy="48" r="5" fill="#55EFC4" opacity="0.7" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="200" height="200" rx="24" fill="transparent" />
      <path d="M100 30 L105 85 L160 90 L105 95 L100 150 L95 95 L40 90 L95 85 Z" fill="#FDCB6E" />
      <path d="M50 50 L52 65 L67 67 L52 69 L50 84 L48 69 L33 67 L48 65 Z" fill="#FD79A8" opacity="0.7" />
      <path d="M150 120 L152 130 L162 132 L152 134 L150 144 L148 134 L138 132 L148 130 Z" fill="#6C5CE7" opacity="0.7" />
    </svg>
  ),
};

export function PlaceholderIllustration({
  theme = "box",
  className = "",
}: PlaceholderIllustrationProps) {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`} aria-hidden="true">
      {illustrations[theme]}
    </div>
  );
}
