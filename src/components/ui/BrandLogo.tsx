import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * The teal mark reads on every surface the site uses — white, soft grey and
 * deep navy — so a single asset covers the header and the footer.
 * Intrinsic ratio of the supplied artwork: 720 x 387.
 */
const LOGO_WIDTH = 240;
const LOGO_HEIGHT = 129;

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/pqb-logo.webp"
      alt="PQB Solutions"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 84px, 92px"
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}
