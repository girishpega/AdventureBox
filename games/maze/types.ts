export type MazeCell = 0 | 1;

export interface MazePosition {
  row: number;
  col: number;
}

export interface MazeGameProps {
  grid: MazeCell[][];
  start: MazePosition;
  goal: MazePosition;
  playerEmoji: string;
  goalEmoji: string;
  hint?: string;
  colors: {
    wall: string;
    path: string;
    pathHighlight: string;
    start: string;
    goal: string;
    player: string;
    decoration: string;
  };
  onComplete: () => void;
}

export const DIRECTIONS: MazePosition[] = [
  { row: -1, col: 0 },
  { row: 1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
];

export function positionsEqual(a: MazePosition, b: MazePosition): boolean {
  return a.row === b.row && a.col === b.col;
}

export function isValidCell(
  grid: MazeCell[][],
  row: number,
  col: number
): boolean {
  return (
    row >= 0 &&
    row < grid.length &&
    col >= 0 &&
    col < grid[0].length &&
    grid[row][col] === 1
  );
}

export function getAdjacentPositions(position: MazePosition): MazePosition[] {
  return DIRECTIONS.map((dir) => ({
    row: position.row + dir.row,
    col: position.col + dir.col,
  }));
}
