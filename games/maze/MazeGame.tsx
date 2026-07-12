"use client";

import { useCallback, useEffect, useState } from "react";
import type { MazeGameProps, MazePosition } from "./types";
import {
  getAdjacentPositions,
  isValidCell,
  positionsEqual,
} from "./types";

export function MazeGame({
  grid,
  start,
  goal,
  playerEmoji,
  goalEmoji,
  hint,
  colors,
  onComplete,
}: MazeGameProps) {
  const [playerPos, setPlayerPos] = useState<MazePosition>(start);
  const [completed, setCompleted] = useState(false);
  const [bounceCell, setBounceCell] = useState<MazePosition | null>(null);
  const [trail, setTrail] = useState<MazePosition[]>([start]);

  const rows = grid.length;
  const cols = grid[0].length;

  const moveTo = useCallback(
    (target: MazePosition) => {
      if (completed) return;

      const adjacent = getAdjacentPositions(playerPos);
      const isAdjacent = adjacent.some((pos) => positionsEqual(pos, target));

      if (!isAdjacent || !isValidCell(grid, target.row, target.col)) {
        setBounceCell(target);
        setTimeout(() => setBounceCell(null), 300);
        return;
      }

      setPlayerPos(target);
      setTrail((prev) => {
        const exists = prev.some((p) => positionsEqual(p, target));
        return exists ? prev : [...prev, target];
      });

      if (positionsEqual(target, goal)) {
        setCompleted(true);
        setTimeout(onComplete, 1200);
      }
    },
    [completed, grid, goal, onComplete, playerPos]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const keyMap: Record<string, MazePosition> = {
        ArrowUp: { row: playerPos.row - 1, col: playerPos.col },
        ArrowDown: { row: playerPos.row + 1, col: playerPos.col },
        ArrowLeft: { row: playerPos.row, col: playerPos.col - 1 },
        ArrowRight: { row: playerPos.row, col: playerPos.col + 1 },
      };

      const target = keyMap[e.key];
      if (target) {
        e.preventDefault();
        moveTo(target);
      }
    },
    [moveTo, playerPos]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const resetMaze = () => {
    setPlayerPos(start);
    setCompleted(false);
    setTrail([start]);
    setBounceCell(null);
  };

  const isOnTrail = (row: number, col: number) =>
    trail.some((p) => p.row === row && p.col === col);

  const isAdjacentToPlayer = (row: number, col: number) =>
    getAdjacentPositions(playerPos).some((p) => p.row === row && p.col === col);

  const getCellStyle = (row: number, col: number) => {
    const isWall = grid[row][col] === 0;
    const isStart = positionsEqual({ row, col }, start);
    const isGoal = positionsEqual({ row, col }, goal);
    const isPlayer = positionsEqual({ row, col }, playerPos);
    const onTrail = isOnTrail(row, col);

    if (isWall) {
      return {
        backgroundColor: colors.wall,
        opacity: 0.55,
      };
    }
    if (isPlayer) {
      return { backgroundColor: colors.player, opacity: 0.2 };
    }
    if (isGoal && !completed) {
      return { backgroundColor: colors.goal, opacity: 0.4 };
    }
    if (isStart) {
      return { backgroundColor: colors.start, opacity: 0.3 };
    }
    if (onTrail) {
      return { backgroundColor: colors.pathHighlight, opacity: 0.25 };
    }
    return { backgroundColor: colors.path };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {hint && (
        <p className="text-center text-lg font-semibold text-text-secondary">
          {hint}
        </p>
      )}

      <div
        className="relative rounded-[var(--radius-card)] bg-white p-3 shadow-[var(--shadow-card)] sm:p-4"
        role="application"
        aria-label="Maze game. Use arrow keys or tap adjacent paths to move."
      >
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(48px, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(48px, 1fr))`,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isWall = cell === 0;
              const isPlayer = positionsEqual(
                { row: rowIndex, col: colIndex },
                playerPos
              );
              const isGoal = positionsEqual(
                { row: rowIndex, col: colIndex },
                goal
              );
              const isBouncing =
                bounceCell &&
                bounceCell.row === rowIndex &&
                bounceCell.col === colIndex;
              const canTap =
                !isWall &&
                !isPlayer &&
                isAdjacentToPlayer(rowIndex, colIndex) &&
                !completed;

              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  type="button"
                  disabled={isWall || completed}
                  onClick={() => moveTo({ row: rowIndex, col: colIndex })}
                  className={[
                    "relative flex items-center justify-center rounded-xl transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1",
                    isWall ? "cursor-default" : "cursor-pointer",
                    canTap ? "hover:scale-105 active:scale-95" : "",
                    isBouncing ? "animate-bounce-gentle" : "",
                    completed && isGoal ? "animate-pulse-glow" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    ...getCellStyle(rowIndex, colIndex),
                    minWidth: 48,
                    minHeight: 48,
                  }}
                  aria-label={
                    isWall
                      ? "Wall"
                      : isPlayer
                        ? "Unicorn is here"
                        : isGoal
                          ? "Rainbow star goal"
                          : canTap
                            ? "Move here"
                            : "Path"
                  }
                >
                  {isPlayer && (
                    <span
                      className={[
                        "text-2xl sm:text-3xl",
                        completed ? "animate-celebrate" : "animate-float",
                      ].join(" ")}
                      role="img"
                      aria-hidden="true"
                    >
                      {playerEmoji}
                    </span>
                  )}
                  {isGoal && !isPlayer && (
                    <span
                      className={[
                        "text-xl sm:text-2xl",
                        completed ? "animate-sparkle" : "",
                      ].join(" ")}
                      role="img"
                      aria-hidden="true"
                    >
                      {goalEmoji}
                    </span>
                  )}
                  {!isWall && !isPlayer && !isGoal && (rowIndex + colIndex) % 3 === 0 && (
                    <span className="text-xs opacity-40" aria-hidden="true">
                      🌸
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {completed && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[var(--radius-card)] bg-white/60 backdrop-blur-sm">
            <div className="animate-celebrate text-center">
              <span className="text-5xl" role="img" aria-label="Celebration">
                🎉
              </span>
              <p className="mt-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                You found it!
              </p>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={resetMaze}
        className="text-sm font-semibold text-text-secondary underline-offset-2 transition-all hover:scale-105 hover:text-text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        aria-label="Try the maze again"
      >
        Try again ✨
      </button>
    </div>
  );
}
