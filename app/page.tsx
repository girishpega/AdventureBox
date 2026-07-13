import Link from "next/link";
import { Footer, Header } from "@/components/layout";
import { StoryCard } from "@/components/story/StoryCard";
import { Button, Container, Heading } from "@/components/ui";
import { getPublishedStories } from "@/lib/stories";

const WHY_FAMILIES = [
  {
    emoji: "🌙",
    title: "Gentle bedtime stories",
    description: "Calm, cozy tales perfect for winding down together.",
  },
  {
    emoji: "❤️",
    title: "Original lovable characters",
    description: "Meet Ellie and friends in stories children adore.",
  },
  {
    emoji: "📖",
    title: "Read together in minutes",
    description: "Short, beautiful stories that fit any evening routine.",
  },
  {
    emoji: "✨",
    title: "Beautiful illustrations",
    description: "Every page is a work of art, crafted with care.",
  },
];

const PARENT_PROMISE = [
  "No ads",
  "No overstimulation",
  "No endless scrolling",
  "Just wonderful stories.",
];

export default function HomePage() {
  const publishedStories = getPublishedStories();

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-primary/8 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lavender/15 blur-3xl" />
          </div>

          <Container>
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <span className="mb-6 inline-block text-5xl sm:text-6xl" role="img" aria-label="Strawberry">
                🍓
              </span>
              <Heading as="h1" gradient className="mb-3">
                WonderBerry
              </Heading>
              <p className="mb-1 font-[family-name:var(--font-fredoka)] text-xl font-semibold text-brand-primary sm:text-2xl">
                Little Stories.
              </p>
              <p className="mb-6 font-[family-name:var(--font-fredoka)] text-xl font-semibold text-brand-secondary sm:text-2xl">
                Big Wonder.
              </p>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                A cozy home for bedtime adventures.
              </p>
              <Link href="/stories">
                <Button
                  size="lg"
                  className="min-h-[56px] min-w-[200px] animate-gentle-bounce bg-gradient-to-r from-brand-primary to-brand-primary/90 text-lg shadow-[var(--shadow-button)] hover:from-brand-primary/95 hover:to-brand-primary/85"
                >
                  Read Tonight
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Featured Collection */}
        <section className="bg-gradient-to-b from-surface-warm to-surface-cream py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-3xl" role="img" aria-label="Elephant">
                🐘
              </span>
              <Heading as="h2" className="mb-3">
                Meet Ellie
              </Heading>
              <p className="mx-auto max-w-xl text-lg text-text-secondary">
                Nine beautiful stories about a little elephant with a big heart.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {publishedStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </Container>
        </section>

        {/* Why Families Love WonderBerry */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-3">
                Why Families Love WonderBerry
              </Heading>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8">
              {WHY_FAMILIES.map((item) => (
                <div
                  key={item.title}
                  className="hover-lift rounded-[var(--radius-card)] bg-surface-white p-8 text-center shadow-[var(--shadow-card)]"
                >
                  <span className="mb-4 block text-4xl">{item.emoji}</span>
                  <h3 className="mb-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Parent Promise */}
        <section className="bg-gradient-to-br from-brand-lavender/20 via-surface-lavender/50 to-brand-sky/10 py-16 sm:py-20">
          <Container size="sm">
            <div className="text-center">
              <Heading as="h2" className="mb-8">
                Our Promise to Parents
              </Heading>
              <ul className="space-y-4">
                {PARENT_PROMISE.map((item) => (
                  <li
                    key={item}
                    className="font-[family-name:var(--font-fredoka)] text-xl font-semibold text-text-primary sm:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
