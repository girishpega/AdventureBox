import Link from "next/link";
import { Footer, Header } from "@/components/layout";
import {
  Button,
  Container,
  Heading,
  PlaceholderIllustration,
  ThemeCard,
} from "@/components/ui";
import { themes } from "@/lib/themes";

const HOW_IT_WORKS = [
  {
    title: "Pick a theme",
    description: "Choose a magical world — princess castles, dinosaur jungles, and more.",
    emoji: "🎁",
  },
  {
    title: "Open your box",
    description: "Tap the treasure box and watch the adventure come alive.",
    emoji: "✨",
  },
  {
    title: "Play together",
    description: "A short story, a fun challenge, and a celebration — all in one box.",
    emoji: "🌈",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />
          </div>

          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10 text-center lg:text-left">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary">
                  ✨ Ready to play
                </span>
                <Heading as="h1" gradient className="mb-6">
                  Every child deserves a box of adventures
                </Heading>
                <p className="mx-auto mb-8 max-w-xl text-lg text-text-secondary sm:text-xl lg:mx-0">
                  Open a magical box, follow the story, play a mini-game, and
                  celebrate — a complete adventure your child will love.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Link href="/adventure/princess">
                    <Button size="lg" className="min-h-[56px] min-w-[220px] text-lg">
                      🦄 Start Adventure
                    </Button>
                  </Link>
                  <a href="#themes">
                    <Button variant="ghost" size="lg">
                      More themes
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-lg">
                <Link
                  href="/adventure/princess"
                  className="animate-float block transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Start the Princess adventure"
                >
                  <PlaceholderIllustration theme="box" />
                </Link>
                <div className="absolute -right-4 -top-4 animate-sparkle">
                  <PlaceholderIllustration theme="sparkle" className="h-20 w-20" />
                </div>
              </div>
            </div>
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
                A tiny adventure in three magical steps — perfect for ages 4–8.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.title}
                  className="animate-card-float rounded-[var(--radius-card)] bg-surface-white p-8 text-center shadow-[var(--shadow-card)]"
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
            <div className="text-center">
              <Heading as="h2" className="mb-4 text-white">
                Ready for wonder?
              </Heading>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
                The Princess adventure is waiting. Open the box and let the magic begin.
              </p>
              <Link href="/adventure/princess">
                <Button
                  variant="theme"
                  size="lg"
                  className="min-h-[56px] min-w-[220px] bg-white text-lg text-brand-primary hover:bg-white/95"
                >
                  ✨ Play Now
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
