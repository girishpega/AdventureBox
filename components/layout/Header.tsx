import Link from "next/link";
import { Container } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-surface-cream/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-lg shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
              📦
            </span>
            <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary sm:text-2xl">
              Adventure<span className="text-brand-primary">Box</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex" aria-label="Main navigation">
            <a href="#themes" className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary">
              Themes
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary">
              How it works
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
