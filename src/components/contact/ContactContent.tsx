"use client";

import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactPageForm } from "@/components/contact/ContactPageForm";
import { site } from "@/lib/site";

const contactRows = [
  {
    label: "Email Us",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Call Us",
    value: site.phone,
    href: null as string | null,
    icon: Phone,
  },
  {
    label: "Our Location",
    value: "[Your Business Address, City, Country]",
    href: null as string | null,
    icon: MapPin,
  },
];

export function ContactContent() {
  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-white py-16 lg:py-24"
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1px_1fr] lg:gap-14">
          {/* ——— Left Column: Contact Form ——— */}
          <div>
            <Reveal direction="up" distance={20}>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-9 rounded-full bg-brand-500" />
                <span className="text-xs font-bold tracking-[0.22em] text-brand-600 uppercase">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h2
                id="contact-form-heading"
                className="mt-3.5 font-serif text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-[2.45rem] lg:leading-[1.2]"
              >
                Send Us a Message
              </h2>

              {/* Description */}
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500 max-w-lg">
                Fill out the form below and a member of our team will get back to
                you as soon as possible.
              </p>
            </Reveal>

            <Reveal direction="up" distance={16} delay={0.1}>
              <div className="mt-8">
                <ContactPageForm />
              </div>
            </Reveal>
          </div>

          {/* ——— Vertical Divider (desktop only) ——— */}
          <div
            aria-hidden="true"
            className="hidden lg:block bg-slate-200/80 rounded-full"
          />

          {/* ——— Right Column: Contact Information + Consultation CTA ——— */}
          <div className="relative flex flex-col gap-10">
            {/* Subtle pale teal organic decorative wave at top right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 -z-10 h-64 w-64 rounded-bl-[120px] bg-[#EAF7F5]/70"
            />

            {/* Contact Information Header */}
            <Reveal direction="left" distance={20} delay={0.08}>
              <h2 className="font-serif text-xl font-bold text-ink-900 sm:text-2xl lg:text-[1.7rem]">
                Contact Information
              </h2>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-500">
                Reach out to us through any of the channels below.
              </p>
            </Reveal>

            {/* Contact Rows */}
            <div className="flex flex-col gap-6">
              {contactRows.map((row, index) => (
                <Reveal
                  key={row.label}
                  direction="left"
                  distance={16}
                  delay={0.12 + index * 0.06}
                >
                  <div className="flex items-start gap-4">
                    {/* Pale teal square icon */}
                    <div
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#EAF7F5] text-brand-500"
                    >
                      <row.icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-serif text-[1.05rem] font-bold text-ink-900 leading-snug">
                        {row.label}
                      </h3>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="mt-0.5 block text-[0.9rem] text-ink-500 break-words transition-colors hover:text-brand-500"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[0.9rem] text-ink-500 break-words">
                          {row.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ——— Consultation CTA Card ——— */}
            <Reveal direction="left" distance={16} delay={0.3}>
              <div className="rounded-2xl border border-brand-200/70 bg-[#EAF7F5] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center text-brand-500 pt-0.5"
                  >
                    <CalendarDays size={26} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[1.12rem] font-bold text-ink-900 leading-snug">
                      Prefer a Direct Discussion?
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-600">
                      Book a convenient time to speak with our team about your
                      requirements.
                    </p>
                    <div className="mt-4">
                      <a
                        href="#contact-form-heading"
                        className="group inline-flex items-center gap-2 rounded-lg border border-brand-500 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-2xs transition-all duration-300 hover:bg-brand-50/70 hover:text-brand-600 sm:rounded-xl"
                      >
                        <span>Schedule a Consultation</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
