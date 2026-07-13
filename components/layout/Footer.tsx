import Link from "next/link";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-primary/8 bg-surface-white py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <p className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-text-primary">
              Wonder<span className="text-brand-primary">Berry</span>
            </p>
            <p className="mt-1 font-[family-name:var(--font-fredoka)] text-base text-brand-primary">
              Little Stories.
            </p>
            <p className="font-[family-name:var(--font-fredoka)] text-base text-brand-secondary">
              Big Wonder.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/stories"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Stories
            </Link>
            <Link
              href="/stories"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Collections
            </Link>
            <Link
              href="/for-parents"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              For Parents
            </Link>
            <Link
              href="/for-parents"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Privacy
            </Link>
            <Link
              href="/for-parents"
              className="font-semibold text-text-secondary transition-colors hover:text-brand-primary"
            >
              Contact
            </Link>
          </nav>

          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} WonderBerry Publishing. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            wonderberrypublishing@gmail.com
          </p>
        </div>
      </Container>
    </footer>
  );
}
