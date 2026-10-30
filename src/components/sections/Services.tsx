import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Understated backdrop: soft teal curves left, dotted field right */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-mint-50/70 via-white to-mint-50/70" />
        <div className="absolute -left-56 -top-32 size-[34rem] rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-48 size-[30rem] rounded-full bg-brand-100/30 blur-3xl" />
        <div className="absolute -left-80 top-1/4 size-[40rem] rounded-full border border-brand-200/30" />
        <div className="absolute right-0 top-16 h-56 w-64 [background-image:radial-gradient(circle,var(--color-brand-300)_1.1px,transparent_1.1px)] [background-size:14px_14px] opacity-25 [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_72%)]" />
        <div className="absolute bottom-16 right-0 h-56 w-64 [background-image:radial-gradient(circle,var(--color-brand-300)_1.1px,transparent_1.1px)] [background-size:14px_14px] opacity-25 [mask-image:radial-gradient(ellipse_at_bottom_right,#000,transparent_72%)]" />
      </div>

      <div className="shell relative">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title={
            <>
              Comprehensive Solutions for{" "}
              <span className="text-brand-500">Your Business</span>
            </>
          }
          description="We provide end-to-end services designed to streamline your operations and support your growth."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.12}
              className={`h-full ${
                // centre the odd card out while the grid is two-up
                index === services.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.875rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                  : ""
              }`}
            >
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
                highlights={service.highlights}
                icon={<service.icon size={24} strokeWidth={1.8} />}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
