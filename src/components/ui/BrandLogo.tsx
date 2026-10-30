import Image from "next/image";

type BrandLogoProps = {
  /**
   * "dark" renders the full-colour mark for light backgrounds; "light" renders
   * the recoloured mark (navy lifted to white, teal brightened) for dark ones.
   */
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

/** Intrinsic ratio of the supplied artwork: 720 x 287. */
const LOGO_WIDTH = 240;
const LOGO_HEIGHT = 96;

export function BrandLogo({
  tone = "dark",
  className = "",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={tone === "dark" ? "/images/pqb-logo.webp" : "/images/pqb-logo-light.webp"}
      alt="PQB Solutions"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes="(max-width: 640px) 112px, 128px"
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}
