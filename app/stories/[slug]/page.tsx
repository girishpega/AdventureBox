import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryReader } from "@/components/story";
import { getAllStorySlugs, getStoryBySlug } from "@/lib/stories";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return { title: "Story Not Found — AdventureBox" };
  }

  return {
    title: `${story.title} — AdventureBox`,
    description: story.subtitle ?? "A bedtime story.",
  };
}

export default async function StoryReaderPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryReader story={story} />;
}
