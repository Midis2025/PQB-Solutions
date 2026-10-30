"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: readonly string[];
  /** Rendered by the parent server component — icon components are not serializable. */
  icon: ReactNode;
  priorityImage?: boolean;
};

export function ServiceCard({
  id,
  title,
  description,
  image,
  imageAlt,
  highlights,
  icon,
  priorityImage = false,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      id={id}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-ink-900/6 bg-white shadow-card transition-shadow duration-300 hover:shadow-float"
    >
      <div className="relative aspect-[2.25] w-full overflow-hidden bg-mint-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading={priorityImage ? "eager" : "lazy"}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-7 pb-7">
        {/*
          Circular badge straddling the image/content boundary. The thick white
          ring reads as a notch cut out of the photograph above it.
        */}
        <span
          aria-hidden="true"
          className="-mt-7 mb-5 grid size-14 place-items-center rounded-full bg-brand-500 text-white shadow-soft ring-[6px] ring-white transition-colors duration-300 group-hover:bg-deep-800"
        >
          {icon}
        </span>

        <h3 className="text-pretty text-[1.3rem] leading-[1.25] text-ink-900">
          {title}
        </h3>

        <p className="mt-3.5 text-[0.95rem] leading-[1.65] text-ink-500">
          {description}
        </p>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2.5 border-t border-ink-900/8 pt-5">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[0.88rem] text-ink-700"
                  >
                    <Check
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-auto inline-flex items-center gap-2.5 self-start pt-7 text-[0.95rem] font-semibold text-brand-500 transition-colors hover:text-brand-700"
        >
          {open ? "Show Less" : "Learn More"}
          <ArrowRight
            size={17}
            className={`transition-transform duration-300 ${
              open ? "-rotate-90" : "group-hover:translate-x-1.5"
            }`}
          />
        </button>
      </div>
    </motion.article>
  );
}
