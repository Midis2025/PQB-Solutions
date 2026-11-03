import type { LucideIcon } from "lucide-react";
import {
  Calculator,
  ChartNoAxesColumnIncreasing,
  Factory,
  GraduationCap,
  House,
  HeartPulse,
  Headset,
  Laptop,
  Rocket,
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
  phone: "+1 (825) 522-0889",
  phoneHref: "tel:+18255220889",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "18255220889",
  whatsappDefaultMessage:
    "Hello PQB Solutions! I would like to know more about your services.",
  address: "39-2803 14 Ave NW, Edmonton, Alberta T6T 2K4",
  addressLine1: "39-2803 14 Ave NW",
  addressLine2: "Edmonton, Alberta T6T 2K4",
  city: "Edmonton",
  province: "Alberta",
  postalCode: "T6T 2K4",
  country: "Canada",
  mapUrl: "https://maps.google.com/?q=39-2803+14+Ave+NW,+Edmonton,+AB+T6T+2K4",
} as const;

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    href: "/about#approach",
    dropdown: [
      { label: "Our Approach", href: "/about#approach" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Core Values", href: "/about#values" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
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

export type Industry = {
  id: string;
  name: string;
  label: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    description: "Billing, compliance, and revenue cycle solutions.",
    href: "#services",
  },
  {
    id: "finance",
    name: "Finance",
    label: "Finance",
    icon: ChartNoAxesColumnIncreasing,
    description: "Accurate reporting and financial management.",
    href: "#services",
  },
  {
    id: "retail",
    name: "Retail",
    label: "Retail",
    icon: ShoppingCart,
    description: "Scalable accounting and operational support.",
    href: "#services",
  },
  {
    id: "technology",
    name: "Technology",
    label: "Technology",
    icon: Laptop,
    description: "IT, infrastructure, and digital solutions.",
    href: "#services",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    label: "Manufacturing",
    icon: Factory,
    description: "Cost control and process efficiency.",
    href: "#services",
  },
  {
    id: "education",
    name: "Education",
    label: "Education",
    icon: GraduationCap,
    description: "Back-office and financial operations support.",
    href: "#services",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    label: "Real Estate",
    icon: House,
    description: "Accounting, compliance, and portfolio management.",
    href: "#services",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "James Wilson",
    role: "Small Business Owner | United Kingdom",
    quote:
      "PQB Solutions has made managing our accounts so much easier. The team is responsive, understands what we need, and keeps everything organised. It has taken a lot of pressure off our day-to-day operations.",
  },
  {
    id: "testimonial-2",
    name: "Emily Carter",
    role: "Healthcare Practice Manager | United States",
    quote:
      "We were looking for a team that could help us manage our billing more efficiently, and PQB has been a great support. Communication has been smooth, and the team is always available when we need assistance.",
  },
  {
    id: "testimonial-3",
    name: "Oliver Thompson",
    role: "Business Director | Australia",
    quote:
      "What I appreciate most is that the team doesn't just provide a solution and disappear. They take the time to understand the issue and make sure everything is working properly. It's been a good experience working with them.",
  },
  {
    id: "testimonial-4",
    name: "Sophie Mitchell",
    role: "Operations Manager | Canada",
    quote:
      "Working with PQB Solutions has been a positive experience. Their team is professional, easy to communicate with, and genuinely willing to help. Having one team to support different parts of our business makes things much simpler.",
  },
  {
    id: "testimonial-5",
    name: "Daniel Anderson",
    role: "Managing Partner | United States",
    quote:
      "The team has been helpful throughout the process. Whenever we've had a question or needed something clarified, they've been approachable and quick to respond. That level of support makes a real difference.",
  },
];

export type HeroStat = { value: string; label: string; icon: LucideIcon };

export const heroStats: HeroStat[] = [
  { value: "100%", label: "Client Focused", icon: Users },
  { value: "Reliable", label: "& Accurate Services", icon: ShieldCheck },
  { value: "Tailored", label: "Solutions", icon: Settings2 },
];
