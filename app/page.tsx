import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import BusinessHours from "@/components/BusinessHours";
import ImagePanel from "@/components/ImagePanel";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { breadcrumbSchema, pageMetadata } from "@/components/seo-data";
import { contactInfo, featuredServices, testimonials } from "@/components/site-data";

export const metadata: Metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/")} />
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-80 bg-clinic-100" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-clinic-700 shadow-sm">
              {contactInfo.tagline}
            </span>
            <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-clinic-900 sm:text-5xl lg:text-6xl">
              Your Smile, Our Priority
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Welcome to SmileCare Dental Clinic, where advanced dental care meets compassionate service. We help patients of all ages achieve healthy, confident smiles in a comfortable and modern environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-clinic-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clinic-700 focus:outline-none focus:ring-2 focus:ring-clinic-600 focus:ring-offset-2"
              >
                Book an Appointment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-clinic-200 bg-white px-6 py-3 font-semibold text-clinic-700 transition hover:-translate-y-0.5 hover:border-clinic-500 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-clinic-600 focus:ring-offset-2"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </Link>
            </div>
          </div>
          <ImagePanel
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
            alt="Professional dentist treating a patient in a bright modern dental clinic interior"
            label="Bright, clean, and welcoming environment"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our services"
            title="Modern dental care for every smile"
            description="Explore our focused treatment areas and book the service that matches your dental needs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow="Schedule a visit"
              title="Schedule Your Dental Checkup Today"
              description="Don't wait to care for your smile. Whether you need a routine checkup, cosmetic treatment, or emergency dental care, our experienced team is here to help. Book your appointment today and take the first step toward better oral health."
            />
            <Link href="/appointment" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-clinic-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clinic-700">
              Book Appointment
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <BusinessHours />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Patients trust SmileCare Dental Clinic"
            description="Real patient experiences from clean, comfortable, and professional dental visits."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex gap-1 text-yellow-400" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="mt-5 text-lg font-bold text-clinic-900">{testimonial.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">&ldquo;{testimonial.review}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
