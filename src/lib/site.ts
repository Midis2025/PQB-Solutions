import type { LucideIcon } from "lucide-react";
import {
  Calculator,
  ChartColumn,
  Cpu,
  Factory,
  GraduationCap,
  House,
  HeartPulse,
  Headset,
  Rocket,
  MoreHorizontal,
  Settings,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  UserRoundPlus,
  Users,
} from "lucide-react";

export const site = {
  name: "PQB Solutions",
  tagline: "Accounting, Medical Billing & IT Solutions",
  url: "https://www.pqbsolutions.com",
  director: "Parul Sharma",
  directorTitle: "Director, PQB Solutions",
  email: "Support@pqbsolutions.com",
  phone: "+1 (XXX) XXX-XXXX",
  phoneHref: "tel:+1XXXXXXXXX",
  address: "[Your Business Address]",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "accounting",
    title: "Accounting, Taxation & Bookkeeping",
    shortTitle: "Accounting & Taxation",
    description:
      "Accurate financial management to keep your business compliant and profitable.",
    icon: Calculator,
    image: "/images/accounting-services.webp",
    imageAlt:
      "Accountant at a desk using a calculator beside financial statements, charts and a laptop",
    highlights: [
      "Bookkeeping & reconciliations",
      "Tax planning and filing",
      "Payroll and compliance reporting",
    ],
  },
  {
    id: "medical-billing",
    title: "Medical Billing & Solutions",
    shortTitle: "Medical Billing",
    description:
      "Streamlined billing processes to maximize revenue and minimize denials.",
    icon: UserRoundPlus,
    image: "/images/medical-billing.webp",
    imageAlt:
      "Stethoscope resting on medical billing forms on a clipboard beside a laptop in a bright office",
    highlights: [
      "Claims submission & follow-up",
      "Denial management and appeals",
      "Coding accuracy and audits",
    ],
  },
  {
    id: "it-solutions",
    title: "IT Solutions",
    shortTitle: "IT Solutions",
    description:
      "Innovative IT services to enhance efficiency, security, and business growth.",
    icon: Settings,
    image: "/images/it-solutions.webp",
    imageAlt:
      "Hands typing on a laptop showing a cloud security dashboard with charts and data panels",
    highlights: [
      "Managed IT and support",
      "Cloud migration & automation",
      "Security and data protection",
    ],
  },
];

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const advantages: Advantage[] = [
  {
    title: "Experienced Team",
    description: "Skilled professionals with domain expertise.",
    icon: Users,
  },
  {
    title: "Accurate & Reliable",
    description: "Committed to precision and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Solutions",
    description: "Tailored services for your unique needs.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    description: "Dedicated support whenever you need it.",
    icon: Headset,
  },
];

export type Industry = { label: string; icon: LucideIcon };

export const industries: Industry[] = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Finance", icon: ChartColumn },
  { label: "Retail", icon: ShoppingCart },
  { label: "Technology", icon: Cpu },
  { label: "Manufacturing", icon: Factory },
  { label: "Education", icon: GraduationCap },
  { label: "Real Estate", icon: House },
  { label: "And More", icon: MoreHorizontal },
];

export type Testimonial = {
  /** Stable unique key — the placeholder names are intentionally identical. */
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

/**
 * PLACEHOLDER CONTENT — these are not real client reviews.
 * Names are intentionally left as "Client Name" so nothing reads as a genuine
 * endorsement. Replace with approved, attributable testimonials before launch.
 */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "PQB Solutions has been an invaluable partner for our business. Their attention to detail and commitment to excellence have made a significant difference in our operations.",
    name: "Client Name",
    role: "Business Owner",
    avatar: "/images/avatar-client-one.webp",
  },
  {
    id: "testimonial-2",
    quote:
      "Placeholder testimonial — a short quote about accuracy, responsiveness and the difference the billing team has made will sit here once approved copy is supplied.",
    name: "Client Name",
    role: "Practice Manager",
    avatar: "/images/avatar-client-two.webp",
  },
  {
    id: "testimonial-3",
    quote:
      "Placeholder testimonial — a short quote about having accounting, billing and IT handled under one roof will sit here once approved copy is supplied.",
    name: "Client Name",
    role: "Operations Director",
    avatar: "/images/avatar-client-three.webp",
  },
];

export type HeroStat = { value: string; label: string; icon: LucideIcon };

export const heroStats: HeroStat[] = [
  { value: "100%", label: "Client Focused", icon: Users },
  { value: "Reliable", label: "& Accurate Services", icon: ShieldCheck },
  { value: "Tailored", label: "Solutions", icon: Settings2 },
];
