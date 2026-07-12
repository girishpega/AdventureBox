import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryReader } from "@/components/story";
import { getPublishedStoryBySlug, getPublishedStorySlugs } from "@/lib/stories";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getPublishedStoryBySlug(slug);

  if (!story) {
    return { title: "Story Not Found — WonderBerry" };
  }

  return {
    title: `${story.title} — WonderBerry`,
    description: `A bedtime story for ages ${story.age}.`,
  };
}

export default async function StoryReaderPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getPublishedStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryReader story={story} />;
}
