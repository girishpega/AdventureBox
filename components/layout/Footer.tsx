import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-primary/10 bg-surface-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-[family-name:var(--font-fredoka)] text-sm font-semibold text-text-primary">
            AdventureBox
          </p>
          <p className="text-center text-sm text-text-muted">
            Magical adventures for curious kids. Built with wonder.
          </p>
          <p className="text-xs text-text-muted">v0.1.0 — Foundation Sprint</p>
        </div>
      </Container>
    </footer>
  );
}
