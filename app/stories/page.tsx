import type { Metadata } from "next";
import { StoryLibrary } from "@/components/story/StoryLibrary";

export const metadata: Metadata = {
  title: "Story Library — AdventureBox",
  description: "Beautiful picture books for ages 4–6. Read together, one magical page at a time.",
};

export default function StoriesPage() {
  return <StoryLibrary />;
}
