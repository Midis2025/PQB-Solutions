import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** Rendered on the <h2> so a section's aria-labelledby can resolve to it. */
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      <span
        className={`eyebrow ${tone === "dark" ? "text-brand-300" : "text-brand-600"}`}
      >
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`text-balance text-[1.95rem] leading-[1.16] tracking-[-0.018em] sm:text-4xl lg:text-[2.75rem] xl:text-[3.05rem] ${
          tone === "dark" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-pretty text-[0.97rem] leading-relaxed ${
            tone === "dark" ? "text-brand-100/80" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
