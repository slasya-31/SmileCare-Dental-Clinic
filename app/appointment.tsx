import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbSchema, pageMetadata } from "@/components/seo-data";

export const metadata: Metadata = pageMetadata("/appointment");

export default function AppointmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/appointment")} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            level="h1"
            title="Book Your Appointment"
            description="Choose your preferred date, time, and service. Service details will appear when you select an option."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
