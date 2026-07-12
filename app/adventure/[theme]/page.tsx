import { notFound } from "next/navigation";
import { AdventureLayout } from "@/components/layout";
import { AdventureFlow } from "@/components/adventure";
import { getThemeById } from "@/lib/themes";
import { getAdventureByThemeId, isPlayableTheme } from "@/lib/adventures";

interface AdventurePageProps {
  params: Promise<{ theme: string }>;
}

export async function generateStaticParams() {
  return [
    { theme: "princess" },
    { theme: "dinosaurs" },
    { theme: "space" },
    { theme: "animals" },
  ];
}

export async function generateMetadata({ params }: AdventurePageProps) {
  const { theme: themeId } = await params;
  const theme = getThemeById(themeId);

  if (!theme) {
    return { title: "Adventure Not Found" };
  }

  return {
    title: `${theme.name} Adventure — AdventureBox`,
    description: theme.tagline,
  };
}

export default async function AdventurePage({ params }: AdventurePageProps) {
  const { theme: themeId } = await params;
  const theme = getThemeById(themeId);

  if (!theme) {
    notFound();
  }

  if (isPlayableTheme(themeId)) {
    const adventure = getAdventureByThemeId(theme.id)!;
    return <AdventureFlow adventure={adventure} theme={theme} />;
  }

  return <AdventureLayout theme={theme} />;
}
