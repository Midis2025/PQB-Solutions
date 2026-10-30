type BrandLogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function BrandLogo({ tone = "dark", className = "" }: BrandLogoProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`text-[1.9rem] font-extrabold tracking-[-0.03em] ${
          tone === "dark" ? "text-deep-800" : "text-white"
        }`}
      >
        PQB
      </span>
      <span
        className={`mt-1 text-[0.58rem] font-semibold tracking-[0.34em] ${
          tone === "dark" ? "text-ink-500" : "text-brand-100/70"
        }`}
      >
        SOLUTIONS
      </span>
    </span>
  );
}
