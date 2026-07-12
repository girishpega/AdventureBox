export const colors = {
  brand: {
    primary: "#6C5CE7",
    secondary: "#FD79A8",
    accent: "#FDCB6E",
    sky: "#74B9FF",
    mint: "#55EFC4",
  },
  surface: {
    cream: "#FFF9F0",
    white: "#FFFFFF",
    lavender: "#F3F0FF",
    peach: "#FFF5EE",
  },
  text: {
    primary: "#2D3436",
    secondary: "#636E72",
    inverse: "#FFFFFF",
    muted: "#B2BEC3",
  },
  theme: {
    princess: {
      primary: "#E84393",
      secondary: "#FD79A8",
      accent: "#FDCB6E",
      background: "#FFF0F6",
    },
    dinosaurs: {
      primary: "#00B894",
      secondary: "#55EFC4",
      accent: "#FDCB6E",
      background: "#E8FFF8",
    },
    space: {
      primary: "#6C5CE7",
      secondary: "#A29BFE",
      accent: "#FDCB6E",
      background: "#F0EEFF",
    },
    animals: {
      primary: "#E17055",
      secondary: "#FAB1A0",
      accent: "#FDCB6E",
      background: "#FFF5EE",
    },
  },
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const radii = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
} as const;

export const shadows = {
  soft: "0 4px 20px rgba(108, 92, 231, 0.12)",
  card: "0 8px 32px rgba(45, 52, 54, 0.08)",
  cardHover: "0 12px 40px rgba(108, 92, 231, 0.18)",
  button: "0 4px 14px rgba(108, 92, 231, 0.35)",
} as const;
