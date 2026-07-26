import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import BusinessHours from "@/components/BusinessHours";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbSchema, pageMetadata } from "@/components/seo-data";
import { contactInfo } from "@/components/site-data";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/contact")} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            level="h1"
            title="Get in Touch with SmileCare Dental Clinic"
            description="We're here to answer your questions, schedule appointments, and help you achieve a healthier smile. Contact us today-we'd love to hear from you!"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <article className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-clinic-900">Contact Information</h2>
              <div className="mt-6 space-y-5 text-slate-700">
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-clinic-900">Visit Our Clinic</h3>
                    <p className="mt-1">{contactInfo.name}</p>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex gap-3 transition hover:text-clinic-700">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-clinic-900">Phone</span>
                    {contactInfo.phone}
                  </span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex gap-3 transition hover:text-clinic-700">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-clinic-900">Email</span>
                    {contactInfo.email}
                  </span>
                </a>
              </div>
            </article>
            <BusinessHours />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-clinic-100 shadow-soft">
            <div className="flex min-h-[360px] items-center justify-center bg-clinic-50 p-8 text-center">
              <div>
                <MapPin className="mx-auto h-12 w-12 text-clinic-600" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-clinic-900">Google Maps Placeholder</h2>
                <p className="mt-3 text-slate-600">Embedded map location: near DBR Hospital, Korlagunta</p>
                <p className="mt-1 text-slate-600">{contactInfo.address}</p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=near+DBR+Hospital+Korlagunta+Tirupati"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-clinic-600 px-6 py-3 font-semibold text-white transition hover:bg-clinic-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
