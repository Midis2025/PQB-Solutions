import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
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
        url: "/images/services-hero-team.webp",
        width: 1024,
        height: 682,
        alt: "PQB Solutions Business Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Accounting, Medical Billing & IT Solutions – PQB",
    description:
      "Explore PQB Solutions' accounting, taxation, bookkeeping, medical billing and IT support services designed to help businesses operate more efficiently.",
    images: ["/images/services-hero-team.webp"],
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
          "Comprehensive financial management support that keeps your accounts organised, timely, and compliant with regulatory standards.",
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
          "Structured medical billing workflows that help healthcare practices manage claims efficiently and maintain positive revenue cycles.",
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
          "Practical technology support designed to keep your business systems secure, connected, and operating with maximum reliability.",
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
      <WhyChooseServices />
      <ServicesCTA />
    </>
  );
}

