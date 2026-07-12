import type { ReactNode } from "react";

type SceneRenderer = (i: number) => ReactNode;

export const PIP_SCENES: SceneRenderer[] = [
  (i) => (
    <>
      <defs>
        <linearGradient id={`pip-bg-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0620" />
          <stop offset="40%" stopColor="#1a1040" />
          <stop offset="100%" stopColor="#2d1b69" />
        </linearGradient>
        <radialGradient id={`pip-moon-${i}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9F0" />
          <stop offset="100%" stopColor="#E8E0FF" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#pip-bg-${i})`} />
      <ellipse cx="320" cy="80" rx="35" ry="40" fill={`url(#pip-moon-${i})`} opacity="0.9" />
      {[80, 160, 240, 320, 200, 280].map((x, n) => (
        <g key={n} transform={`translate(${x}, ${180 + (n % 3) * 60})`}>
          <ellipse cx="0" cy="20" rx="45" ry="18" fill="white" opacity="0.12" />
          <circle cx="0" cy="0" r="14" fill="#FDCB6E" opacity="0.5" />
        </g>
      ))}
    </>
  ),
  (i) => (
    <>
      <defs>
        <radialGradient id={`pip-glow-${i}`} cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#FDCB6E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0a0620" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`pip-bg-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f0828" />
          <stop offset="100%" stopColor="#1a1040" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#pip-bg-${i})`} />
      <rect width="400" height="500" fill={`url(#pip-glow-${i})`} />
      <circle cx="200" cy="250" r="45" fill="#FDCB6E" opacity="0.95" />
      <path d="M175 220 L162 195 L182 212" fill="#A29BFE" opacity="0.85" />
      <path d="M225 220 L238 195 L218 212" fill="#A29BFE" opacity="0.85" />
      <circle cx="200" cy="285" r="14" fill="#FFEAA7" opacity="0.9" />
    </>
  ),
  () => (
    <>
      <rect width="400" height="500" fill="#120830" />
      <circle cx="280" cy="220" r="50" fill="#FDCB6E" opacity="0.7" />
      <circle cx="130" cy="260" r="28" fill="#FDCB6E" opacity="0.95" />
      <path d="M118 252 L108 242" stroke="#FDCB6E" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  () => (
    <>
      <rect width="400" height="500" fill="#2d1b69" />
      {[60, 130, 200, 270, 340].map((x, n) => (
        <circle key={n} cx={x} cy={280 - n * 15} r={14 + n} fill={["#FDCB6E", "#FD79A8", "#FDCB6E", "#A29BFE", "#55EFC4"][n]} opacity="0.9" />
      ))}
    </>
  ),
  () => (
    <>
      <rect width="400" height="500" fill="#1a1040" />
      <ellipse cx="200" cy="300" rx="120" ry="80" fill="white" opacity="0.08" />
      <circle cx="200" cy="310" r="22" fill="#FDCB6E" opacity="0.85" />
      {[80, 120, 160, 200, 240].map((x, n) => (
        <circle key={n} cx={x} cy={200 - n * 5} r={4} fill="#FDCB6E" opacity={0.6 - n * 0.08} />
      ))}
    </>
  ),
];

export const ELLIE_SCENES: SceneRenderer[] = [
  // Page 1 — Ellie hears a peep
  (i) => (
    <>
      <defs>
        <linearGradient id={`ellie-sky-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#74B9FF" />
          <stop offset="100%" stopColor="#E8FFF8" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#ellie-sky-${i})`} />
      <ellipse cx="200" cy="480" rx="220" ry="40" fill="#55EFC4" opacity="0.5" />
      <ellipse cx="200" cy="320" rx="90" ry="70" fill="#B2BEC3" />
      <ellipse cx="200" cy="280" rx="70" ry="55" fill="#DFE6E9" />
      <circle cx="175" cy="265" r="8" fill="#2D3436" />
      <circle cx="225" cy="265" r="8" fill="#2D3436" />
      <circle cx="177" cy="263" r="2" fill="white" />
      <circle cx="227" cy="263" r="2" fill="white" />
      <path d="M260 290 Q300 270 310 310 Q290 340 260 320" fill="#B2BEC3" />
      <text x="310" y="200" fill="#FDCB6E" fontSize="14" opacity="0.8">peep!</text>
      {[[80, 400, "#FD79A8"], [320, 420, "#FDCB6E"], [150, 430, "#6C5CE7"]].map(([x, y, c], n) => (
        <circle key={n} cx={x as number} cy={y as number} r="6" fill={c as string} opacity="0.7" />
      ))}
    </>
  ),
  // Page 2 — Lost duckling
  () => (
    <>
      <rect width="400" height="500" fill="#E8FFF8" />
      <ellipse cx="200" cy="460" rx="200" ry="30" fill="#55EFC4" opacity="0.4" />
      <ellipse cx="130" cy="350" rx="60" ry="45" fill="#B2BEC3" opacity="0.9" />
      <circle cx="280" cy="380" r="18" fill="#FDCB6E" />
      <circle cx="280" cy="372" r="12" fill="#FFEAA7" />
      <circle cx="275" cy="370" r="3" fill="#2D3436" />
      <path d="M268 385 L262 395 L278 392" fill="#E17055" />
      <ellipse cx="130" cy="310" rx="8" ry="12" fill="#636E72" opacity="0.5" />
    </>
  ),
  // Page 3 — Search (interaction)
  () => (
    <>
      <rect width="400" height="500" fill="#DFF9F0" />
      <ellipse cx="200" cy="200" rx="80" ry="60" fill="#B2BEC3" />
      <path d="M280 220 Q320 200 330 250" stroke="#B2BEC3" strokeWidth="20" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="350" rx="50" ry="35" fill="#00B894" opacity="0.6" />
      <ellipse cx="300" cy="340" rx="45" ry="30" fill="#00B894" opacity="0.6" />
      <ellipse cx="200" cy="400" rx="55" ry="35" fill="#00B894" opacity="0.5" />
      <text x="170" y="420" fill="#2D3436" fontSize="12" opacity="0.5">?</text>
    </>
  ),
  // Page 4 — Funny trunk reveal
  () => (
    <>
      <rect width="400" height="500" fill="#FFF9F0" />
      <ellipse cx="200" cy="280" rx="85" ry="65" fill="#B2BEC3" />
      <circle cx="175" cy="260" r="10" fill="#2D3436" />
      <circle cx="225" cy="260" r="10" fill="#2D3436" />
      <circle cx="178" cy="257" r="3" fill="white" />
      <circle cx="228" cy="257" r="3" fill="white" />
      <ellipse cx="200" cy="290" rx="20" ry="12" fill="#636E72" opacity="0.3" />
      <path d="M270 270 Q310 250 315 200 Q300 180 280 200" fill="#B2BEC3" />
      <circle cx="305" cy="195" r="16" fill="#FDCB6E" />
      <circle cx="305" cy="188" r="10" fill="#FFEAA7" />
      <ellipse cx="305" cy="175" rx="8" ry="5" fill="#74B9FF" opacity="0.6" />
      <text x="320" y="160" fill="#E17055" fontSize="16">SPLASH!</text>
    </>
  ),
  // Page 5 — Best friends
  (i) => (
    <>
      <defs>
        <linearGradient id={`ellie-sunset-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FD79A8" />
          <stop offset="50%" stopColor="#FDCB6E" />
          <stop offset="100%" stopColor="#E8FFF8" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#ellie-sunset-${i})`} />
      <ellipse cx="200" cy="450" rx="180" ry="25" fill="#55EFC4" opacity="0.4" />
      <ellipse cx="170" cy="340" rx="70" ry="55" fill="#B2BEC3" />
      <circle cx="240" cy="370" r="20" fill="#FDCB6E" />
      <circle cx="240" cy="362" r="13" fill="#FFEAA7" />
      <path d="M220 360 L200 350" stroke="#B2BEC3" strokeWidth="8" strokeLinecap="round" />
      <text x="170" y="120" fill="#FD79A8" fontSize="20" opacity="0.6">♥</text>
      <text x="220" y="100" fill="#FDCB6E" fontSize="16" opacity="0.5">♥</text>
    </>
  ),
];

export const STORY_SCENES: Record<string, SceneRenderer[]> = {
  "pip-and-the-sleepy-star-parade": PIP_SCENES,
  "ellie-and-the-tiny-lost-duck": ELLIE_SCENES,
};
