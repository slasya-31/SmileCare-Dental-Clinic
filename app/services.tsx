import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import ServiceDetails from "@/components/ServiceDetails";
import { breadcrumbSchema, pageMetadata, servicesSchema } from "@/components/seo-data";
import { allServices } from "@/components/site-data";

export const metadata: Metadata = pageMetadata("/services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/services")} />
      <JsonLd data={servicesSchema()} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            level="h1"
            title="Dental Services"
            description="SmileCare Dental Clinic provides preventive, cosmetic, restorative, and emergency dental care with modern tools and patient-focused planning."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {allServices.map((service) => (
              <span key={service} className="rounded-full bg-clinic-50 px-4 py-2 text-sm font-semibold text-clinic-700">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceDetails />
        </div>
      </section>
    </>
  );
}
