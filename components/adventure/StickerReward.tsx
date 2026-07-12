import type { StickerReward as StickerRewardType } from "@/types/adventure";

interface StickerRewardProps {
  sticker: StickerRewardType;
  animate?: boolean;
  flip?: boolean;
}

export function StickerReward({
  sticker,
  animate = true,
  flip = false,
}: StickerRewardProps) {
  return (
    <div
      className={[
        "mx-auto rounded-[var(--radius-card)] border-4 border-dashed bg-white p-8 text-center shadow-[var(--shadow-card-hover)]",
        animate ? "animate-sticker-pop" : "",
        flip ? "animate-sticker-flip" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ borderColor: "#FDCB6E" }}
      role="img"
      aria-label={`Sticker earned: ${sticker.label}`}
    >
      <p className="text-sm font-bold uppercase tracking-widest text-text-muted">
        ✨ New Sticker! ✨
      </p>
      <div className="my-4 text-7xl sm:text-8xl">{sticker.emoji}</div>
      <h3 className="font-[family-name:var(--font-fredoka)] text-2xl font-bold text-text-primary">
        {sticker.label}
      </h3>
      <p className="mt-2 text-base text-text-secondary">{sticker.description}</p>
    </div>
  );
}
