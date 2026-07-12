import Image from "next/image";

interface StoryBundleImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** cover = fill frame (library cards). contain = full artwork (reader). */
  fit?: "cover" | "contain";
}

export function StoryBundleImage({
  src,
  alt,
  className = "",
  priority = false,
  fit = "cover",
}: StoryBundleImageProps) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={fit === "contain" ? "(max-width: 768px) 100vw, 56rem" : "(max-width: 768px) 100vw, 50vw"}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
