import { businessHours, contactInfo, detailedServices, navLinks } from "@/components/site-data";

export const siteUrl = "https://smilecare.example.com";
export const ogImage =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80";

export const pages = [
  {
    path: "/",
    title: "Home",
    description:
      "Your Smile, Our Priority. Visit SmileCare Dental Clinic for preventive, cosmetic, restorative, and emergency dental care in Tirupati."
  },
  {
    path: "/about",
    title: "About Our Dental Clinic",
    description:
      "Learn about SmileCare Dental Clinic, our mission, dental team, modern facilities, and commitment to compassionate patient care."
  },
  {
    path: "/services",
    title: "Dental Services",
    description:
      "Explore dental checkups, cosmetic dentistry, orthodontics, and dental implants at SmileCare Dental Clinic in Tirupati."
  },
  {
    path: "/contact",
    title: "Contact Us",
    description:
      "Contact SmileCare Dental Clinic near DBR Hospital Road, Korlagunta, Tirupati for appointments, directions, phone, and email support."
  },
  {
    path: "/appointment",
    title: "Book a Dental Appointment",
    description:
      "Book an appointment at SmileCare Dental Clinic for dental checkups, cosmetic dentistry, orthodontics, or dental implants."
  }
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata(path: string) {
  const page = pages.find((item) => item.path === path) ?? pages[0];
  const fullTitle =
    path === "/"
      ? "SmileCare Dental Clinic | Healthy Smiles, Happy Lives"
      : `${page.title} | SmileCare Dental Clinic`;

  return {
    title: {
      absolute: fullTitle
    },
    description: page.description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: absoluteUrl(path),
      siteName: contactInfo.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "SmileCare Dental Clinic dentist treating a patient in a modern clinic"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [ogImage]
    }
  };
}

export const dentalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#dentist`,
  name: contactInfo.name,
  slogan: contactInfo.tagline,
  description:
    "Modern dental clinic offering preventive, cosmetic, restorative, and emergency dental care.",
  url: siteUrl,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  image: ogImage,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near DBR Hospital Road, Korlagunta",
    addressLocality: "Tirupati",
    postalCode: "517501",
    addressCountry: "IN"
  },
  openingHoursSpecification: businessHours
    .filter((item) => item.time !== "Closed")
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.day === "Mon-Fri" ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : ["Saturday"],
      opens: item.day === "Mon-Fri" ? "09:00" : "09:00",
      closes: item.day === "Mon-Fri" ? "18:00" : "14:00"
    })),
  medicalSpecialty: ["Dentistry", "Cosmetic Dentistry", "Orthodontics", "Dental Implants"],
  areaServed: "Tirupati",
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://twitter.com/"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: contactInfo.name,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#dentist`
  }
};

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: detailedServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.summary,
        url: `${absoluteUrl("/services")}#${service.id}`
      }
    }))
  };
}

export function breadcrumbSchema(path: string) {
  const current = pages.find((page) => page.path === path) ?? pages[0];
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/")
    }
  ];

  if (path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: current.title,
      item: absoluteUrl(path)
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
  };
}

export const internalLinks = navLinks.map((link) => absoluteUrl(link.href));
