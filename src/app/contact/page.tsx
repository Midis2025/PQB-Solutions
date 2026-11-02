import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactContent } from "@/components/contact/ContactContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact PQB Solutions | Get in Touch",
  description:
    "Contact PQB Solutions to discuss accounting, medical billing and IT services. Send us an enquiry and our team will help you explore the right solutions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${site.url}/contact`,
    siteName: site.name,
    title: "Contact PQB Solutions | Get in Touch",
    description:
      "Contact PQB Solutions to discuss accounting, medical billing and IT services. Send us an enquiry and our team will help you explore the right solutions.",
    images: [
      {
        url: "/images/contact-hero-team.webp",
        width: 1024,
        height: 683,
        alt: "PQB Solutions professional team collaborating around a conference table with laptops and financial documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PQB Solutions | Get in Touch",
    description:
      "Contact PQB Solutions to discuss accounting, medical billing and IT services. Send us an enquiry and our team will help you explore the right solutions.",
    images: ["/images/contact-hero-team.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact PQB Solutions",
  url: `${site.url}/contact`,
  description:
    "Contact PQB Solutions to discuss accounting, medical billing and IT services.",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactHero />
      <ContactContent />
    </>
  );
}
