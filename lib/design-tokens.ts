export const colors = {
  brand: {
    primary: "#C94B6E",
    secondary: "#F5B942",
    accent: "#5AAF6E",
    sky: "#7EC8E3",
    lavender: "#C5B4E3",
    mint: "#5AAF6E",
  },
  surface: {
    cream: "#FFF8F0",
    white: "#FFFFFF",
    lavender: "#F5F0FA",
    warm: "#FFF5EE",
    peach: "#FFF5EE",
  },
  text: {
    primary: "#3D2C2E",
    secondary: "#6B5A5C",
    inverse: "#FFFFFF",
    muted: "#A8989A",
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
  soft: "0 4px 20px rgba(201, 75, 110, 0.1)",
  card: "0 8px 32px rgba(61, 44, 46, 0.06)",
  cardHover: "0 16px 48px rgba(201, 75, 110, 0.14)",
  button: "0 4px 14px rgba(201, 75, 110, 0.3)",
  warm: "0 12px 40px rgba(245, 185, 66, 0.12)",
} as const;
