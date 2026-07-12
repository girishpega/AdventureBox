import { STORY_SCENES } from "./illustrations";

interface StoryIllustrationPlaceholderProps {
  storySlug: string;
  pageIndex: number;
  className?: string;
  interactive?: boolean;
}

export function StoryIllustrationPlaceholder({
  storySlug,
  pageIndex,
  className = "",
  interactive = false,
}: StoryIllustrationPlaceholderProps) {
  const scenes = STORY_SCENES[storySlug] ?? STORY_SCENES["pip-and-the-sleepy-star-parade"];
  const scene = scenes[pageIndex] ?? scenes[0];

  return (
    <div
      className={[
        "relative h-full w-full overflow-hidden",
        interactive ? "animate-wiggle" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {scene(pageIndex)}
      </svg>
    </div>
  );
}
