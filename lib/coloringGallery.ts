/**
 * Local gallery for saved coloring pages.
 */

export interface SavedColoring {
  id: string;
  adventureId: string;
  title: string;
  emoji: string;
  /** SVG snapshot or region color map as JSON */
  dataUrl: string;
  savedAt: string;
}

const STORAGE_KEY = "adventurebox-coloring-gallery";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getSavedColorings(): SavedColoring[] {
  if (!isBrowser()) return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedColoring[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveColoring(
  coloring: Omit<SavedColoring, "savedAt">
): SavedColoring | null {
  if (!isBrowser()) return null;

  const entry: SavedColoring = {
    ...coloring,
    savedAt: new Date().toISOString(),
  };

  try {
    const existing = getSavedColorings().filter((c) => c.id !== coloring.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...existing]));
    return entry;
  } catch {
    return entry;
  }
}
