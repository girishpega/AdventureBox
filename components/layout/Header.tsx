import Link from "next/link";
import { Container } from "@/components/ui";

function BerryLogo() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary/80 shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <ellipse cx="16" cy="18" rx="10" ry="11" fill="#E85A7E" />
        <ellipse cx="12" cy="14" rx="4" ry="4.5" fill="#F06B8E" opacity="0.6" />
        <ellipse cx="20" cy="15" rx="3.5" ry="4" fill="#F06B8E" opacity="0.5" />
        <circle cx="11" cy="16" r="1.2" fill="#C94B6E" opacity="0.4" />
        <circle cx="16" cy="20" r="1" fill="#C94B6E" opacity="0.3" />
        <circle cx="21" cy="17" r="1" fill="#C94B6E" opacity="0.35" />
        <path
          d="M16 7 C14 4 18 3 16 7"
          stroke="#5AAF6E"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="16" cy="6" rx="3" ry="2" fill="#5AAF6E" opacity="0.8" />
      </svg>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/8 bg-surface-cream/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <BerryLogo />
            <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary sm:text-2xl">
              Wonder<span className="text-brand-primary">Berry</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8" aria-label="Main navigation">
            <Link
              href="/"
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Home
            </Link>
            <Link
              href="/stories"
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Stories
            </Link>
            <Link
              href="/for-parents"
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              For Parents
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
