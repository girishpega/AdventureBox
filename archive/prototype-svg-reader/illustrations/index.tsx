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

export const ELLIE_BUBBLE_SCENES: SceneRenderer[] = [
  // Page 1 — A bubble floated by
  (i) => (
    <>
      <defs>
        <linearGradient id={`bubble-sky-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#74B9FF" />
          <stop offset="100%" stopColor="#E8FFF8" />
        </linearGradient>
        <radialGradient id={`bubble-glow-${i}`} cx="40%" cy="25%" r="30%">
          <stop offset="0%" stopColor="#A29BFE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#74B9FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#bubble-sky-${i})`} />
      <ellipse cx="200" cy="480" rx="220" ry="40" fill="#55EFC4" opacity="0.5" />
      <circle cx="160" cy="120" r="28" fill={`url(#bubble-glow-${i})`} stroke="#A29BFE" strokeWidth="1.5" opacity="0.85" />
      <circle cx="160" cy="120" r="18" fill="white" opacity="0.15" />
      <ellipse cx="200" cy="340" rx="90" ry="70" fill="#B2BEC3" />
      <ellipse cx="200" cy="300" rx="70" ry="55" fill="#DFE6E9" />
      <ellipse cx="155" cy="295" rx="35" ry="42" fill="#B2BEC3" />
      <ellipse cx="245" cy="295" rx="35" ry="42" fill="#B2BEC3" />
      <ellipse cx="155" cy="300" rx="22" ry="28" fill="#FAB1A0" opacity="0.6" />
      <ellipse cx="245" cy="300" rx="22" ry="28" fill="#FAB1A0" opacity="0.6" />
      <circle cx="175" cy="285" r="8" fill="#6D4C41" />
      <circle cx="225" cy="285" r="8" fill="#6D4C41" />
      <circle cx="177" cy="283" r="2" fill="white" />
      <circle cx="227" cy="283" r="2" fill="white" />
      <path d="M260 310 Q295 280 300 240" stroke="#B2BEC3" strokeWidth="18" fill="none" strokeLinecap="round" />
      {[[80, 420, "#FD79A8"], [320, 430, "#FDCB6E"], [140, 440, "#6C5CE7"]].map(([x, y, c], n) => (
        <circle key={n} cx={x as number} cy={y as number} r="5" fill={c as string} opacity="0.65" />
      ))}
    </>
  ),
  // Page 2 — Bigger than Ellie's head
  (i) => (
    <>
      <defs>
        <radialGradient id={`big-bubble-${i}`} cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#A29BFE" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#74B9FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#55EFC4" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="#E8FFF8" />
      <ellipse cx="200" cy="470" rx="200" ry="30" fill="#55EFC4" opacity="0.4" />
      <circle cx="200" cy="200" r="95" fill={`url(#big-bubble-${i})`} stroke="#A29BFE" strokeWidth="2" opacity="0.9" />
      <ellipse cx="175" cy="175" rx="25" ry="15" fill="white" opacity="0.25" />
      <ellipse cx="200" cy="420" rx="75" ry="58" fill="#B2BEC3" />
      <ellipse cx="200" cy="385" rx="58" ry="45" fill="#DFE6E9" />
      <ellipse cx="162" cy="380" rx="28" ry="34" fill="#B2BEC3" />
      <ellipse cx="238" cy="380" rx="28" ry="34" fill="#B2BEC3" />
      <ellipse cx="162" cy="385" rx="18" ry="22" fill="#FAB1A0" opacity="0.55" />
      <ellipse cx="238" cy="385" rx="18" ry="22" fill="#FAB1A0" opacity="0.55" />
      <circle cx="180" cy="372" r="9" fill="#6D4C41" />
      <circle cx="220" cy="372" r="9" fill="#6D4C41" />
      <circle cx="182" cy="370" r="2.5" fill="white" />
      <circle cx="222" cy="370" r="2.5" fill="white" />
      <path d="M248 400 Q275 360 280 320" stroke="#B2BEC3" strokeWidth="16" fill="none" strokeLinecap="round" />
    </>
  ),
  // Page 3 — It followed her everywhere
  () => (
    <>
      <rect width="400" height="500" fill="#DFF9F0" />
      <ellipse cx="200" cy="460" rx="200" ry="30" fill="#55EFC4" opacity="0.35" />
      <ellipse cx="280" cy="280" rx="70" ry="55" fill="#B2BEC3" />
      <ellipse cx="280" cy="250" rx="55" ry="42" fill="#DFE6E9" />
      <ellipse cx="252" cy="248" rx="26" ry="32" fill="#B2BEC3" />
      <ellipse cx="308" cy="248" rx="26" ry="32" fill="#B2BEC3" />
      <ellipse cx="252" cy="252" rx="16" ry="20" fill="#FAB1A0" opacity="0.5" />
      <ellipse cx="308" cy="252" rx="16" ry="20" fill="#FAB1A0" opacity="0.5" />
      <circle cx="265" cy="240" r="7" fill="#6D4C41" />
      <circle cx="295" cy="240" r="7" fill="#6D4C41" />
      <circle cx="267" cy="238" r="2" fill="white" />
      <circle cx="297" cy="238" r="2" fill="white" />
      <path d="M320 265 Q350 250 355 220" stroke="#B2BEC3" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx="120" cy="200" r="55" fill="#A29BFE" opacity="0.2" stroke="#A29BFE" strokeWidth="1.5" />
      <circle cx="120" cy="200" r="35" fill="white" opacity="0.12" />
      <path d="M60 320 Q80 300 100 320" stroke="#FD79A8" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M340 350 Q360 330 380 350" stroke="#FDCB6E" strokeWidth="2" fill="none" opacity="0.5" />
    </>
  ),
  // Page 4 — Bump!
  () => (
    <>
      <rect width="400" height="500" fill="#FFF9F0" />
      <ellipse cx="200" cy="460" rx="200" ry="30" fill="#55EFC4" opacity="0.35" />
      <ellipse cx="200" cy="310" rx="85" ry="65" fill="#B2BEC3" />
      <ellipse cx="200" cy="275" rx="65" ry="50" fill="#DFE6E9" />
      <ellipse cx="168" cy="270" rx="30" ry="36" fill="#B2BEC3" />
      <ellipse cx="232" cy="270" rx="30" ry="36" fill="#B2BEC3" />
      <ellipse cx="168" cy="275" rx="19" ry="23" fill="#FAB1A0" opacity="0.55" />
      <ellipse cx="232" cy="275" rx="19" ry="23" fill="#FAB1A0" opacity="0.55" />
      <circle cx="182" cy="258" r="10" fill="#6D4C41" />
      <circle cx="218" cy="258" r="10" fill="#6D4C41" />
      <circle cx="185" cy="255" r="3" fill="white" />
      <circle cx="221" cy="255" r="3" fill="white" />
      <path d="M248 285 Q290 260 295 210 Q275 195 255 215" stroke="#B2BEC3" strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="300" cy="195" r="50" fill="#A29BFE" opacity="0.25" stroke="#A29BFE" strokeWidth="2" />
      <circle cx="300" cy="195" r="30" fill="white" opacity="0.15" />
      <text x="310" y="140" fill="#E17055" fontSize="18" fontWeight="bold">BUMP!</text>
      <path d="M330 170 L345 155 M345 170 L330 155" stroke="#FDCB6E" strokeWidth="2" opacity="0.7" />
    </>
  ),
  // Page 5 — Ellie went very still
  () => (
    <>
      <rect width="400" height="500" fill="#E8FFF8" />
      <ellipse cx="200" cy="470" rx="200" ry="30" fill="#55EFC4" opacity="0.4" />
      <ellipse cx="200" cy="330" rx="80" ry="62" fill="#B2BEC3" />
      <ellipse cx="200" cy="295" rx="62" ry="48" fill="#DFE6E9" />
      <ellipse cx="165" cy="290" rx="29" ry="35" fill="#B2BEC3" />
      <ellipse cx="235" cy="290" rx="29" ry="35" fill="#B2BEC3" />
      <ellipse cx="165" cy="295" rx="18" ry="22" fill="#FAB1A0" opacity="0.5" />
      <ellipse cx="235" cy="295" rx="18" ry="22" fill="#FAB1A0" opacity="0.5" />
      <circle cx="180" cy="280" r="8" fill="#6D4C41" />
      <circle cx="220" cy="280" r="8" fill="#6D4C41" />
      <circle cx="182" cy="278" r="2" fill="white" />
      <circle cx="222" cy="278" r="2" fill="white" />
      <path d="M245 305 Q275 280 280 230" stroke="#B2BEC3" strokeWidth="16" fill="none" strokeLinecap="round" />
      <circle cx="285" cy="215" r="42" fill="#A29BFE" opacity="0.22" stroke="#74B9FF" strokeWidth="1.5" />
      <circle cx="285" cy="215" r="26" fill="white" opacity="0.12" />
      <ellipse cx="100" cy="380" rx="45" ry="30" fill="#00B894" opacity="0.45" />
      <ellipse cx="300" cy="390" rx="40" ry="28" fill="#00B894" opacity="0.4" />
    </>
  ),
  // Page 6 — Interaction (wobble)
  () => (
    <>
      <rect width="400" height="500" fill="#DFF9F0" />
      <ellipse cx="200" cy="460" rx="200" ry="30" fill="#55EFC4" opacity="0.35" />
      <ellipse cx="200" cy="320" rx="82" ry="63" fill="#B2BEC3" />
      <ellipse cx="200" cy="285" rx="63" ry="49" fill="#DFE6E9" />
      <path d="M168 278 Q175 268 182 278" stroke="#636E72" strokeWidth="2" fill="none" />
      <path d="M218 278 Q225 268 232 278" stroke="#636E72" strokeWidth="2" fill="none" />
      <ellipse cx="168" cy="280" rx="28" ry="34" fill="#B2BEC3" />
      <ellipse cx="232" cy="280" rx="28" ry="34" fill="#B2BEC3" />
      <ellipse cx="168" cy="285" rx="18" ry="22" fill="#FAB1A0" opacity="0.55" />
      <ellipse cx="232" cy="285" rx="18" ry="22" fill="#FAB1A0" opacity="0.55" />
      <path d="M248 300 Q285 275 290 220" stroke="#B2BEC3" strokeWidth="17" fill="none" strokeLinecap="round" />
      <ellipse cx="295" cy="200" rx="48" ry="42" fill="#A29BFE" opacity="0.28" stroke="#A29BFE" strokeWidth="2" />
      <ellipse cx="295" cy="200" rx="30" ry="26" fill="white" opacity="0.15" />
      <path d="M310 175 Q325 160 340 175" stroke="#FDCB6E" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M250 175 Q265 155 280 175" stroke="#FD79A8" strokeWidth="2" fill="none" opacity="0.6" />
    </>
  ),
  // Page 7 — It would not pop
  () => (
    <>
      <rect width="400" height="500" fill="#FFF9F0" />
      <ellipse cx="200" cy="470" rx="200" ry="30" fill="#55EFC4" opacity="0.35" />
      <ellipse cx="200" cy="315" rx="84" ry="64" fill="#B2BEC3" />
      <ellipse cx="200" cy="280" rx="64" ry="50" fill="#DFE6E9" />
      <ellipse cx="166" cy="275" rx="29" ry="35" fill="#B2BEC3" />
      <ellipse cx="234" cy="275" rx="29" ry="35" fill="#B2BEC3" />
      <ellipse cx="166" cy="280" rx="18" ry="22" fill="#FAB1A0" opacity="0.5" />
      <ellipse cx="234" cy="280" rx="18" ry="22" fill="#FAB1A0" opacity="0.5" />
      <circle cx="181" cy="265" r="9" fill="#6D4C41" />
      <circle cx="219" cy="265" r="9" fill="#6D4C41" />
      <circle cx="183" cy="263" r="2.5" fill="white" />
      <circle cx="221" cy="263" r="2.5" fill="white" />
      <path d="M250 295 Q295 270 300 210 Q280 190 260 215" stroke="#B2BEC3" strokeWidth="18" fill="none" strokeLinecap="round" />
      <ellipse cx="305" cy="195" rx="55" ry="48" fill="#A29BFE" opacity="0.22" stroke="#74B9FF" strokeWidth="2" />
      <ellipse cx="305" cy="195" rx="35" ry="30" fill="white" opacity="0.12" />
      <text x="155" y="420" fill="#636E72" fontSize="28" opacity="0.4">?</text>
    </>
  ),
  // Page 8 — Then tiny bubbles!
  (i) => (
    <>
      <defs>
        <radialGradient id={`burst-${i}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FDCB6E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E8FFF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#burst-${i})`} />
      <ellipse cx="200" cy="470" rx="200" ry="30" fill="#55EFC4" opacity="0.35" />
      <ellipse cx="200" cy="360" rx="78" ry="60" fill="#B2BEC3" />
      <ellipse cx="200" cy="328" rx="60" ry="46" fill="#DFE6E9" />
      <circle cx="182" cy="318" r="10" fill="#6D4C41" />
      <circle cx="218" cy="318" r="10" fill="#6D4C41" />
      <circle cx="184" cy="316" r="3" fill="white" />
      <circle cx="220" cy="316" r="3" fill="white" />
      <ellipse cx="168" cy="323" rx="27" ry="33" fill="#B2BEC3" />
      <ellipse cx="232" cy="323" rx="27" ry="33" fill="#B2BEC3" />
      {[
        [120, 150, "#A29BFE", 14],
        [180, 100, "#74B9FF", 12],
        [250, 130, "#FD79A8", 16],
        [300, 180, "#55EFC4", 11],
        [80, 220, "#FDCB6E", 10],
        [320, 250, "#A29BFE", 13],
        [150, 200, "#55EFC4", 9],
        [220, 170, "#FD79A8", 11],
        [280, 100, "#74B9FF", 10],
        [100, 280, "#FDCB6E", 8],
        [340, 140, "#55EFC4", 9],
        [60, 160, "#FD79A8", 10],
      ].map(([x, y, c, r], n) => (
        <circle key={n} cx={x as number} cy={y as number} r={r as number} fill={c as string} opacity="0.65" stroke="white" strokeWidth="0.5" />
      ))}
    </>
  ),
  // Page 9 — They danced in the light
  (i) => (
    <>
      <defs>
        <linearGradient id={`dance-light-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDCB6E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E8FFF8" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#dance-light-${i})`} />
      <ellipse cx="200" cy="460" rx="200" ry="30" fill="#55EFC4" opacity="0.4" />
      <ellipse cx="200" cy="330" rx="76" ry="58" fill="#B2BEC3" />
      <ellipse cx="200" cy="298" rx="58" ry="45" fill="#DFE6E9" />
      <path d="M175 288 Q185 278 195 288" stroke="#636E72" strokeWidth="2" fill="none" />
      <path d="M205 288 Q215 278 225 288" stroke="#636E72" strokeWidth="2" fill="none" />
      <ellipse cx="168" cy="293" rx="27" ry="33" fill="#B2BEC3" />
      <ellipse cx="232" cy="293" rx="27" ry="33" fill="#B2BEC3" />
      <ellipse cx="168" cy="298" rx="17" ry="21" fill="#FAB1A0" opacity="0.55" />
      <ellipse cx="232" cy="298" rx="17" ry="21" fill="#FAB1A0" opacity="0.55" />
      <path d="M245 310 Q270 290 275 260" stroke="#B2BEC3" strokeWidth="15" fill="none" strokeLinecap="round" />
      {[
        [100, 180, "#A29BFE"], [160, 140, "#74B9FF"], [240, 120, "#FD79A8"],
        [300, 160, "#55EFC4"], [70, 260, "#FDCB6E"], [330, 240, "#A29BFE"],
        [130, 100, "#55EFC4"], [270, 200, "#FDCB6E"], [190, 80, "#74B9FF"],
        [350, 300, "#FD79A8"], [50, 190, "#A29BFE"], [310, 100, "#55EFC4"],
      ].map(([x, y, c], n) => (
        <circle key={n} cx={x as number} cy={y as number} r={7 + (n % 4)} fill={c as string} opacity="0.7" />
      ))}
    </>
  ),
  // Page 10 — Float on, little friends
  (i) => (
    <>
      <defs>
        <linearGradient id={`bubble-sunset-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FD79A8" />
          <stop offset="45%" stopColor="#FDCB6E" />
          <stop offset="100%" stopColor="#E8FFF8" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#bubble-sunset-${i})`} />
      <ellipse cx="200" cy="450" rx="180" ry="25" fill="#55EFC4" opacity="0.4" />
      <ellipse cx="200" cy="340" rx="72" ry="55" fill="#B2BEC3" />
      <ellipse cx="200" cy="310" rx="55" ry="42" fill="#DFE6E9" />
      <ellipse cx="168" cy="305" rx="26" ry="32" fill="#B2BEC3" />
      <ellipse cx="232" cy="305" rx="26" ry="32" fill="#B2BEC3" />
      <ellipse cx="168" cy="310" rx="16" ry="20" fill="#FAB1A0" opacity="0.5" />
      <ellipse cx="232" cy="310" rx="16" ry="20" fill="#FAB1A0" opacity="0.5" />
      <circle cx="182" cy="298" r="7" fill="#6D4C41" />
      <circle cx="218" cy="298" r="7" fill="#6D4C41" />
      <circle cx="184" cy="296" r="2" fill="white" />
      <circle cx="220" cy="296" r="2" fill="white" />
      <path d="M255 320 Q285 300 295 270" stroke="#B2BEC3" strokeWidth="14" fill="none" strokeLinecap="round" />
      {[
        [100, 120, "#A29BFE"], [180, 80, "#74B9FF"], [260, 100, "#FD79A8"],
        [320, 150, "#55EFC4"], [140, 60, "#FDCB6E"], [300, 70, "#A29BFE"],
        [220, 50, "#55EFC4"], [80, 160, "#FD79A8"],
      ].map(([x, y, c], n) => (
        <circle key={n} cx={x as number} cy={y as number} r={6} fill={c as string} opacity="0.55" />
      ))}
      <text x="170" y="130" fill="#FD79A8" fontSize="18" opacity="0.5">♥</text>
      <text x="230" y="110" fill="#FDCB6E" fontSize="14" opacity="0.45">♥</text>
    </>
  ),
];

export const STORY_SCENES: Record<string, SceneRenderer[]> = {
  "pip-and-the-sleepy-star-parade": PIP_SCENES,
  "ellie-and-the-tiny-lost-duck": ELLIE_SCENES,
  "ellie-and-the-bubble-that-wouldnt-pop": ELLIE_BUBBLE_SCENES,
};
