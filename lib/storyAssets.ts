export const READER_THEME = {
  primary: "#C94B6E",
  secondary: "#5AAF6E",
  accent: "#F5B942",
  background: "#FFF8F0",
  text: "#3D2C2E",
  night: "#3D2C2E",
} as const;

export function coverUrl(slug: string): string {
  return `/stories/${slug}/cover.webp`;
}

export function pageUrl(slug: string, pageIndex: number): string {
  const pageNumber = String(pageIndex + 1).padStart(2, "0");
  return `/stories/${slug}/page${pageNumber}.webp`;
}

export function stickerUrl(slug: string): string {
  return `/stories/${slug}/sticker.webp`;
}
