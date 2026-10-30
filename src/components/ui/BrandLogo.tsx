import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * The teal mark reads on every surface the site uses — white, soft grey and
 * deep navy — so a single asset covers the header and the footer.
 * Intrinsic ratio of the supplied artwork: 720 x 387.
 *
 * The colour is part of the filename on purpose: /_next/image responses are
 * cached hard by the browser, so swapping the artwork behind a stable name
 * leaves people staring at the previous logo. Give a new mark a new filename.
 */
const LOGO_WIDTH = 240;
const LOGO_HEIGHT = 129;

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/pqb-logo-teal.webp"
      alt="PQB Solutions"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 84px, 92px"
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}
