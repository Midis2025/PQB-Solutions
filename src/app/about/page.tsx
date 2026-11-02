import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { OurCoreValues } from "@/components/about/OurCoreValues";
import { OurApproach } from "@/components/about/OurApproach";
import { AboutCTA } from "@/components/about/AboutCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About PQB Solutions | Our Story, Mission & Values",
  description:
    "Learn about PQB Solutions, our approach and our commitment to providing practical accounting, medical billing and IT solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${site.url}/about`,
    siteName: site.name,
    title: "About PQB Solutions | Our Story, Mission & Values",
    description:
      "Learn about PQB Solutions, our approach and our commitment to providing practical accounting, medical billing and IT solutions.",
    images: [
      {
        url: "/images/about-team.webp",
        width: 1024,
        height: 576,
        alt: "PQB Solutions corporate team collaboration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PQB Solutions | Our Story, Mission & Values",
    description:
      "Learn about PQB Solutions, our approach and our commitment to providing practical accounting, medical billing and IT solutions.",
    images: ["/images/about-team.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About PQB Solutions",
  url: `${site.url}/about`,
  description:
    "Learn about PQB Solutions, our approach and our commitment to providing practical accounting, medical billing and IT solutions.",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurCoreValues />
      <OurApproach />
      <AboutCTA />
    </>
  );
}

