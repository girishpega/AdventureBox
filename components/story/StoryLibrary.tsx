import Link from "next/link";
import { Header } from "@/components/layout";
import { getPublishedStories } from "@/lib/stories";
import { StoryCard } from "./StoryCard";

export function StoryLibrary() {
  const stories = getPublishedStories();

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-b from-surface-cream via-surface-warm to-surface-cream">
      <Header />

      <div className="flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Link
              href="/"
              className="mb-4 inline-block font-[family-name:var(--font-fredoka)] text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary/80"
            >
              ← WonderBerry
            </Link>
            <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
              Story Library
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-lg text-text-secondary">
              Pick a book and begin your adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} size="large" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
