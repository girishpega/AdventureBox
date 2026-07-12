import { getPublishedStories } from "@/lib/stories";
import { StoryCard } from "./StoryCard";

export function StoryLibrary() {
  const stories = getPublishedStories();

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-surface-cream">
      <div className="shrink-0 px-4 pb-3 pt-5 text-center sm:px-6 sm:pt-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-primary sm:text-sm">
          🐘 Ellie Collection
        </p>
        <h1 className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-text-primary sm:text-3xl">
          Pick a story
        </h1>
      </div>

      <div className="flex min-h-0 flex-1 items-center px-4 pb-5 sm:px-6 sm:pb-6">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:max-w-4xl lg:gap-6">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
