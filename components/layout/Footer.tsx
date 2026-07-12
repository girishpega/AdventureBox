import Link from "next/link";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-primary/10 bg-surface-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-[family-name:var(--font-fredoka)] text-sm font-semibold text-text-primary">
            AdventureBox
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/for-parents"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              For Parents
            </Link>
            <Link
              href="/#sticker-book"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Sticker Book
            </Link>
          </div>
          <p className="text-center text-sm text-text-muted">
            Magical adventures for curious kids.
          </p>
          <p className="text-xs text-text-muted">v0.2.1</p>
        </div>
      </Container>
    </footer>
  );
}
