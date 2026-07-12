export const READER_THEME = {
  primary: "#00B894",
  secondary: "#55EFC4",
  accent: "#FDCB6E",
  background: "#E8FFF8",
  night: "#1a4035",
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
