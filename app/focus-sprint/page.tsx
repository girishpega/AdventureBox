import type { Metadata } from "next";
import { FocusSprintGallery } from "@/components/focus-sprint/FocusSprintGallery";

export const metadata: Metadata = {
  title: "Focus Sprint Review — AdventureBox",
  description: "Product Owner visual review · Ellie and the Tiny Lost Duck",
  robots: "noindex, nofollow",
};

export default function FocusSprintReviewPage() {
  return <FocusSprintGallery />;
}
