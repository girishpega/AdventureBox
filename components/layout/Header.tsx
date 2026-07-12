import Link from "next/link";
import { Container } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-surface-cream/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary shadow-[var(--shadow-soft)] transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="4" y="10" width="16" height="10" rx="2" fill="#A29BFE" />
                <path d="M4 10 L12 5 L20 10" stroke="#FDCB6E" strokeWidth="2" fill="#A29BFE" />
                <rect x="10" y="14" width="4" height="4" rx="1" fill="#FDCB6E" />
              </svg>
            </span>
            <span className="font-[family-name:var(--font-fredoka)] text-xl font-bold text-text-primary sm:text-2xl">
              Adventure<span className="text-brand-primary">Box</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main navigation">
            <Link
              href="/for-parents"
              className="hidden text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary sm:inline"
            >
              For Parents
            </Link>
            <Link
              href="/#sticker-book"
              className="hidden text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary md:inline"
            >
              Sticker Book
            </Link>
            <Link
              href="/stories"
              className="hidden text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary md:inline"
            >
              Stories
            </Link>
            <Link
              href="/#themes"
              className="hidden text-sm font-semibold text-text-secondary transition-colors hover:text-brand-primary lg:inline"
            >
              Adventures
            </Link>
            <Link
              href="/adventure/princess"
              className="rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              ✨ Play Now
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
