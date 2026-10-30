import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const details = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    label: "Location",
    value: site.address,
    href: null,
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-deep-800 py-20 lg:py-28"
    >
      {/* Dotted world-map backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/world-map-dots.svg')] bg-[length:auto_80%] bg-[position:50%_45%] bg-no-repeat opacity-[0.13] [mask-image:linear-gradient(to_right,#000_0%,#000_38%,transparent_72%)] lg:bg-[length:auto_92%] lg:bg-[position:22%_50%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 size-96 rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="max-w-md">
            <Reveal className="flex flex-col gap-3">
              <span className="eyebrow text-brand-300">Get in Touch</span>
              <h2
                id="contact-heading"
                className="text-[1.9rem] leading-[1.18] text-white sm:text-4xl lg:text-[2.7rem]"
              >
                Let&apos;s Grow Your Business Together
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-[0.92rem] leading-relaxed text-brand-100/75">
                Have questions or need a customized solution? Our team is here to
                help.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-9 space-y-5">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/18 text-brand-200"
                    >
                      <detail.icon size={18} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.78rem] font-medium text-brand-100/60">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="-my-2 inline-block break-words py-2 text-[0.92rem] text-white transition-colors hover:text-brand-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="break-words text-[0.92rem] text-white">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal direction="left" distance={28} delay={0.12}>
            <div className="rounded-3xl bg-white p-6 shadow-float sm:p-8">
              <h3 className="text-[1.25rem]">Send Us a Message</h3>
              <p className="mt-1.5 text-[0.82rem] text-ink-500">
                Fields marked with an asterisk are required.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
