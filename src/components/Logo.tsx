import Image from "next/image";
import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  /** Colour of the monogram box. Defaults to the brand wine. */
  mark?: string;
  /** Colour of the strokes inside the box. Defaults to cream. */
  line?: string;
};

/**
 * MHL monogram — inline SVG recreation of the Maayoit Healthcare Limited mark.
 * Use when you need a themeable monogram (e.g. cream-on-wine for dark backgrounds)
 * or when the full lockup would be too heavy. For light-background full-brand
 * display, prefer `MhlLogoImage` which uses the official PNG asset.
 */
export function MhlMark({
  className,
  mark = "var(--wine)",
  line = "var(--cream)",
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="100" height="120" fill={mark} />
      <rect
        x="4"
        y="4"
        width="92"
        height="112"
        fill="none"
        stroke={line}
        strokeWidth="1.25"
      />
      <g
        stroke={line}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M 18 62 L 18 24 L 34 46 L 50 24 L 50 62" />
        <path d="M 82 24 L 82 62" />
        <path d="M 50 44 L 82 44" />
        <path d="M 34 46 L 34 98 L 82 98" />
      </g>
    </svg>
  );
}

type LogoImageProps = {
  className?: string;
  /** Pixel height of the rendered image. */
  height?: number;
  /** Alt text; defaults to a brand description. */
  alt?: string;
  /** Whether to load eagerly (use true for above-the-fold headers). */
  priority?: boolean;
};

/**
 * Official Maayoit Healthcare Limited brand lockup — monogram + three-line
 * wordmark. Sourced from `/public/logo.png`. Intended for light backgrounds;
 * on dark surfaces prefer `MhlMark` with inverted colours.
 */
export function MhlLogoImage({
  className,
  height = 40,
  alt = "Maayoit Healthcare Limited",
  priority = false,
}: LogoImageProps) {
  // Original asset is 422×126 — preserve aspect ratio from `height`.
  const width = Math.round((422 / 126) * height);
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={cn("w-auto", className)}
      style={{ height }}
    />
  );
}
