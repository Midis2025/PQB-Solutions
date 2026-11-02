import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServiceDetailedBlocks } from "@/components/services/ServiceDetailedBlocks";
import { WhyChooseServices } from "@/components/services/WhyChooseServices";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Accounting, Medical Billing & IT Solutions – PQB",
  description:
    "Explore PQB Solutions' accounting, taxation, bookkeeping, medical billing and IT support services designed to help businesses operate more efficiently.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: `${site.url}/services`,
    siteName: site.name,
    title: "Services | Accounting, Medical Billing & IT Solutions – PQB",
    description:
      "Explore PQB Solutions' accounting, taxation, bookkeeping, medical billing and IT support services designed to help businesses operate more efficiently.",
    images: [
      {
        url: "/images/services-hero-desk.webp",
        width: 1200,
        height: 630,
        alt: "PQB Solutions Business Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Accounting, Medical Billing & IT Solutions – PQB",
    description:
      "Explore PQB Solutions' accounting, taxation, bookkeeping, medical billing and IT support services designed to help businesses operate more efficiently.",
    images: ["/images/services-hero-desk.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "PQB Solutions Services",
  url: `${site.url}/services`,
  description:
    "Explore PQB Solutions' accounting, taxation, bookkeeping, medical billing and IT support services designed to help businesses operate more efficiently.",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Accounting, Taxation & Bookkeeping",
        description:
          "Reliable and accurate financial support to help you keep your business compliant, organised and financially healthy.",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Medical Billing & Solutions",
        description:
          "End-to-end medical billing support to help healthcare providers improve revenue cycles, reduce claim denials and maintain compliance.",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "IT Solutions",
        description:
          "Practical and reliable technology solutions to keep your business secure, connected and running smoothly.",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetailedBlocks />
      <WhyChooseServices />
      <ServicesCTA />
    </>
  );
}

