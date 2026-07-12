import Link from "next/link";
import { Footer, Header } from "@/components/layout";
import { Button, Container, Heading } from "@/components/ui";

const TRUST_POINTS = [
  {
    emoji: "🚫",
    title: "No ads",
    description:
      "Zero advertisements, ever. Your child explores without interruptions or distractions.",
  },
  {
    emoji: "🔒",
    title: "No accounts",
    description:
      "No sign-up, no login, no email required. Open the box and play — that's it.",
  },
  {
    emoji: "💬",
    title: "No online chat",
    description:
      "No messaging, no strangers, no social features. A closed, safe adventure every time.",
  },
  {
    emoji: "🛡️",
    title: "Child-safe content",
    description:
      "Every story, game, and activity is hand-crafted for children ages 4–10. No scary surprises.",
  },
  {
    emoji: "⏱️",
    title: "Short adventures",
    description:
      "Each box takes 3–5 minutes. A complete experience — not an endless scroll.",
  },
  {
    emoji: "❤️",
    title: "Built by a parent",
    description:
      "AdventureBox was created by a parent who wanted something safe, joyful, and worth screen time.",
  },
];

export default function ForParentsPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <Container size="sm">
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-bold text-brand-primary">
                💛 For Parents
              </span>
              <Heading as="h1" gradient className="mb-4">
                Safe magic you can trust
              </Heading>
              <p className="mx-auto max-w-xl text-lg text-text-secondary">
                AdventureBox is designed for families first. Here&apos;s what that
                means for you and your child.
              </p>
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="animate-card-float rounded-[var(--radius-card)] bg-surface-white p-6 shadow-[var(--shadow-card)]"
                >
                  <span className="mb-3 block text-3xl" aria-hidden="true">
                    {point.emoji}
                  </span>
                  <h2 className="mb-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                    {point.title}
                  </h2>
                  <p className="text-text-secondary">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-8 text-center">
              <p className="mb-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                How it works
              </p>
              <p className="mx-auto mb-6 max-w-lg text-text-secondary">
                Your child picks a theme, opens a magical box, follows a short
                story, plays a mini-game, creates something, and celebrates with
                a sticker. Everything stays on your device — no data leaves your
                browser.
              </p>
              <Link href="/adventure/princess">
                <Button size="lg" className="min-h-[56px] min-w-[200px]">
                  🦄 Try the Princess Adventure
                </Button>
              </Link>
            </div>

            <p className="mt-10 text-center text-sm text-text-muted">
              Questions or feedback? AdventureBox is a weekend project built with
              love for families like yours.
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
