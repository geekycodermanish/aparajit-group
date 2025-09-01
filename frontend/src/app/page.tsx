import HomePage from '../components/home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://aparajitgroup.co.in"),
  title: {
    default: "Aparajit Group | Modern Construction & Engineering",
    template: "%s | Aparajit Group",
  },
  description:
    "Aparajit Group is a modern construction and engineering company delivering durable, technology-driven projects across commercial and infrastructure segments. We use BIM, drones, AI, modular methods, and sustainable materials to build faster, safer, and greener.",
  keywords: [
    "aparajit",
    "Aparajit Group",
    // "aparajit construction",
    // "construction company",
    // "modern construction",
    // "BIM",
    // "digital twins",
    // "drones in construction",
    // "AI in construction",
    // "modular construction",
    // "prefabrication",
    // "sustainable building materials",
    // "commercial construction",
    // "tension fabric buildings",
    // "building durability",
    // "construction safety",
  ],
  authors: [{ name: "Aparajit Group" }],
  creator: "Aparajit Group",
  publisher: "Aparajit Group",
  category: "Construction",
  alternates: {
    canonical: "https://aparajitgroup.co.in/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://aparajitgroup.co.in/",
    siteName: "Aparajit Group",
    title: "Aparajit Group | Modern Construction & Engineering",
    description:
      "Technology-first construction company using BIM, drones, AI, and sustainable methods to deliver durable, efficient, and safe projects.",
    locale: "en_IN",
    images: [
      {
        url: "https://aparajitgroup.co.in/images/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Aparajit Group — Modern Construction & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aparajit Group | Modern Construction & Engineering",
    description:
      "Modern, sustainable construction powered by BIM, drones, AI, and modular methods.",
    images: ["https://aparajitgroup.co.in/images/LOGO.png"],
    creator: "@aparajit", // update if you have an official handle
  },
  icons: {
    icon: [
      { url: "/images/LOGO.png" },
    ],
  },
  // Uncomment and fill when you verify the site:
  // verification: {
  //   google: "GOOGLE_SITE_VERIFICATION_TOKEN",
  //   other: { "msvalidate.01": "BING_VERIFICATION_TOKEN" },
  // },
};

export function HomeJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aparajit Group",
    url: "https://aparajitgroup.co.in/",
    alternateName: ["Aparajit", "Aparajit Construction", "Aparajit Group"],
    logo: "https://aparajitgroup.co.in/images/LOGO.png",
    sameAs: [
      // add real profiles when available
      // "https://www.linkedin.com/company/aparajitgroup",
      // "https://twitter.com/aparajit",
    ],
    keywords:
      "aparajit, Aparajit Group, construction company", //BIM, drones, AI, modular construction, sustainable materials, commercial construction, building durability, construction safety",
    areaServed: "IN",
    brand: {
      "@type": "Brand",
      name: "Aparajit",
    },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aparajit Group",
    url: "https://aparajitgroup.co.in/",
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://aparajitgroup.co.in/search?q={search_term_string}", // ensure a search page exists before keeping this
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script injection
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <HomePage />
    </>
  );
}