import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { industries, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "Accurate accounting and bookkeeping, efficient medical billing, and innovative IT solutions for growing businesses — all under one roof at PQB Solutions.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description:
    "PQB Solutions provides accounting, taxation and bookkeeping, medical billing, and IT solutions to businesses across industries.",
  areaServed: industries.map((industry) => industry.label),
  founder: { "@type": "Person", name: site.director, jobTitle: "Director" },
  address: { "@type": "PostalAddress", streetAddress: site.address },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}
