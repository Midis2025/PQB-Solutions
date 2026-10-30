import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems, services, site } from "@/lib/site";

/** Cached so the build can prerender the footer with a stable copyright year. */
async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCopyrightYear();

  return (
    <footer className="bg-deep-900 text-brand-100/70">
      <div className="shell">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-16">
          <div>
            <BrandLogo tone="light" className="h-11" />
            <p className="mt-5 max-w-xs text-[0.85rem] leading-relaxed">
              Accounting, medical billing, and IT solutions delivered under one
              roof — so you can focus on growing your business.
            </p>
          </div>

          <nav aria-labelledby="footer-links-heading">
            <h2
              id="footer-links-heading"
              className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-white"
            >
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.85rem] transition-colors hover:text-brand-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-heading">
            <h2
              id="footer-services-heading"
              className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-white"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="text-[0.85rem] transition-colors hover:text-brand-300"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[0.8rem] font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.85rem]">
              <li className="flex items-start gap-3">
                <Mail size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-brand-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-400" />
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-brand-300"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-400" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-[0.78rem]">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-[0.78rem] transition-colors hover:text-brand-300"
          >
            Back to top
            <span
              aria-hidden="true"
              className="grid size-7 place-items-center rounded-full border border-white/15"
            >
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
