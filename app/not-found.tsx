import Link from "next/link";
import { Container, Heading, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-cream px-4">
      <Container size="sm" className="text-center">
        <span className="mb-4 block text-6xl">🍓</span>
        <Heading as="h1" className="mb-4">
          Page not found
        </Heading>
        <p className="mb-8 text-lg text-text-secondary">
          This story seems to have wandered off the shelf. Let&apos;s head back
          home.
        </p>
        <Link href="/">
          <Button size="lg">Back to WonderBerry</Button>
        </Link>
      </Container>
    </div>
  );
}
