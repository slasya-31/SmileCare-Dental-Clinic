import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import { dentalClinicSchema, ogImage, siteUrl, websiteSchema } from "@/components/seo-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmileCare Dental Clinic | Healthy Smiles, Happy Lives",
    template: "%s | SmileCare Dental Clinic"
  },
  description:
    "Modern dental clinic offering preventive, cosmetic, restorative, and emergency dental care.",
  applicationName: "SmileCare Dental Clinic",
  authors: [{ name: "SmileCare Dental Clinic" }],
  creator: "SmileCare Dental Clinic",
  publisher: "SmileCare Dental Clinic",
  keywords: [
    "SmileCare Dental Clinic",
    "dentist in Tirupati",
    "dentist",
    "dental checkups",
    "cosmetic dentistry",
    "orthodontics",
    "dental implants"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SmileCare Dental Clinic | Healthy Smiles, Happy Lives",
    description:
      "Modern dental clinic offering preventive, cosmetic, restorative, and emergency dental care.",
    url: siteUrl,
    siteName: "SmileCare Dental Clinic",
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
    title: "SmileCare Dental Clinic | Healthy Smiles, Happy Lives",
    description:
      "Modern dental clinic offering preventive, cosmetic, restorative, and emergency dental care.",
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={dentalClinicSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
