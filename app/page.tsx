import Link from "next/link";
import { Footer, Header } from "@/components/layout";
import { StickerBook } from "@/components/sticker-book/StickerBook";
import { StoryCard } from "@/components/story/StoryCard";
import {
  Button,
  Container,
  Heading,
  PlaceholderIllustration,
  ThemeCard,
} from "@/components/ui";
import { getPublishedStories } from "@/lib/stories";
import { themes } from "@/lib/themes";

const HOW_IT_WORKS = [
  {
    title: "Pick a story",
    description: "Choose a gentle Ellie adventure — perfect for bedtime.",
    emoji: "📘",
  },
  {
    title: "Read together",
    description: "Beautiful artwork on every page. Tap, turn, and wonder.",
    emoji: "✨",
  },
  {
    title: "Collect stickers",
    description: "Finish a story and earn a sticker for your book.",
    emoji: "⭐",
  },
];

export default function HomePage() {
  const publishedStories = getPublishedStories();

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden">
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />
          </div>

          <Container>
            <div className="relative z-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary">
                🐘 Ellie Collection
              </span>
              <Heading as="h1" gradient className="mb-4">
                Meet Ellie
              </Heading>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary sm:text-xl">
                A premium children&apos;s story library — four Ellie adventures,
                beautiful on every page.
              </p>

              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-4xl lg:gap-6">
                {publishedStories.map((story) => (
                  <StoryCard key={story.slug} story={story} />
                ))}
              </div>

              <div className="mt-8">
                <Link href="/stories">
                  <Button variant="ghost" size="lg" className="min-h-[48px]">
                    Browse Story Library →
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section id="sticker-book" className="bg-surface-cream py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-4">
                ⭐ My Sticker Book
              </Heading>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Complete adventures to collect magical stickers. Can you collect them all?
              </p>
            </div>

            <StickerBook />
          </Container>
        </section>

        <section id="themes" className="bg-surface-white py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-4">
                Pick your adventure
              </Heading>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Each box is a complete journey. Tap to begin.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {themes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))}
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-4">
                How it works
              </Heading>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                A tiny adventure in magical steps — perfect for ages 4–8.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.title}
                  className="animate-card-float rounded-[var(--radius-card)] bg-surface-cream p-8 text-center shadow-[var(--shadow-card)]"
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

        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-16 text-white sm:py-20">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="text-center lg:text-left">
                <Heading as="h2" className="mb-4 text-white">
                  Ready for wonder?
                </Heading>
                <p className="mx-auto mb-8 max-w-xl text-lg text-white/90 lg:mx-0">
                  Open a magical box, play a mini-game, and create something beautiful.
                </p>
                <Link href="/adventure/princess">
                  <Button
                    variant="theme"
                    size="lg"
                    className="min-h-[56px] min-w-[220px] bg-white text-lg text-brand-primary transition-transform hover:scale-105 hover:bg-white/95 active:scale-95"
                  >
                    ✨ Start Adventure
                  </Button>
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                <Link
                  href="/adventure/princess"
                  className="animate-float block transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Start the Princess adventure"
                >
                  <PlaceholderIllustration theme="box" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
