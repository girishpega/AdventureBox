import { Footer, Header } from "@/components/layout";
import {
  Badge,
  Button,
  Container,
  Heading,
  PlaceholderIllustration,
  ThemeCard,
} from "@/components/ui";
import { themes } from "@/lib/themes";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Pick a theme",
    description: "Choose from princess castles, dinosaur jungles, space rockets, or animal forests.",
    emoji: "🎁",
  },
  {
    step: "2",
    title: "Open your box",
    description: "Tap the magical box and watch it shake, glow, and reveal your adventure.",
    emoji: "✨",
  },
  {
    step: "3",
    title: "Live the adventure",
    description: "Story, play, create, and celebrate — a complete journey in 8–15 minutes.",
    emoji: "🌈",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />
          </div>

          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10 text-center lg:text-left">
                <Badge className="mb-4">Sprint v0.1.0</Badge>
                <Heading as="h1" gradient className="mb-6">
                  Every child deserves a box of adventures
                </Heading>
                <p className="mx-auto mb-8 max-w-xl text-lg text-text-secondary sm:text-xl lg:mx-0">
                  AdventureBox delivers complete themed journeys — story, play,
                  create, and celebrate — in a format children experience as
                  magic.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <a href="#themes">
                    <Button size="lg">Choose your adventure</Button>
                  </a>
                  <a href="#how-it-works">
                    <Button variant="ghost" size="lg">
                      See how it works
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative z-10 mx-auto w-full max-w-md animate-float lg:max-w-lg">
                <PlaceholderIllustration theme="box" />
                <div className="absolute -right-4 -top-4 animate-sparkle">
                  <PlaceholderIllustration theme="sparkle" className="h-20 w-20" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Themes */}
        <section id="themes" className="bg-surface-white py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-4">
                Pick your adventure theme
              </Heading>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Each box is a complete experience. Tap a theme to preview the
                adventure layout.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {themes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <Container>
            <div className="mb-12 text-center">
              <Heading as="h2" className="mb-4">
                How AdventureBox works
              </Heading>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Not a library. Not a chat. A complete adventure in five beats.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--radius-card)] bg-surface-white p-8 text-center shadow-[var(--shadow-card)]"
                >
                  <span className="mb-4 block text-4xl">{item.emoji}</span>
                  <span className="mb-2 inline-block rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-bold text-brand-primary">
                    Step {item.step}
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-[var(--radius-2xl)] bg-surface-lavender px-6 py-4">
                {["Open", "Story", "Play", "Create", "Celebrate"].map(
                  (beat, i) => (
                    <span key={beat} className="flex items-center gap-2">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-primary shadow-sm">
                        {beat}
                      </span>
                      {i < 4 && (
                        <span className="text-text-muted">→</span>
                      )}
                    </span>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-16 text-white sm:py-20">
          <Container>
            <div className="text-center">
              <Heading as="h2" className="mb-4 text-white">
                Ready for wonder?
              </Heading>
              <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
                AdventureBox is being built one magical box at a time. Start by
                exploring a theme above.
              </p>
              <a href="#themes">
                <Button
                  variant="theme"
                  size="lg"
                  className="bg-white text-brand-primary hover:bg-white/95"
                >
                  Explore themes
                </Button>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
