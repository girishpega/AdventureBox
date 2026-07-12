import Link from "next/link";
import { Footer, Header } from "@/components/layout";
import { Button, Container, Heading } from "@/components/ui";

const TRUST_POINTS = [
  {
    emoji: "🚫",
    title: "No ads",
    description:
      "Zero advertisements, ever. Your child reads without interruptions or distractions.",
  },
  {
    emoji: "🔒",
    title: "No accounts",
    description:
      "No sign-up, no login, no email required. Open a story and read — that's it.",
  },
  {
    emoji: "💬",
    title: "No online chat",
    description:
      "No messaging, no strangers, no social features. A closed, safe experience every time.",
  },
  {
    emoji: "🛡️",
    title: "Child-safe content",
    description:
      "Every story is hand-crafted for children ages 4–8. No scary surprises.",
  },
  {
    emoji: "⏱️",
    title: "Short stories",
    description:
      "Each story takes just a few minutes. A complete experience — not an endless scroll.",
  },
  {
    emoji: "❤️",
    title: "Built by a parent",
    description:
      "WonderBerry was created by a parent who wanted something safe, joyful, and worth screen time.",
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
                WonderBerry is designed for families first. Here&apos;s what that
                means for you and your child.
              </p>
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="hover-lift rounded-[var(--radius-card)] bg-surface-white p-6 shadow-[var(--shadow-card)]"
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

            <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-brand-primary/8 to-brand-secondary/10 p-8 text-center">
              <p className="mb-2 font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary">
                How it works
              </p>
              <p className="mx-auto mb-6 max-w-lg text-text-secondary">
                Pick a story, read together page by page, and enjoy beautiful
                illustrations. Everything stays on your device — no data leaves your
                browser.
              </p>
              <Link href="/stories">
                <Button size="lg" className="min-h-[56px] min-w-[200px]">
                  📖 Browse Stories
                </Button>
              </Link>
            </div>

            <p className="mt-10 text-center text-sm text-text-muted">
              Questions or feedback? WonderBerry is built with love for families
              like yours.
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
