import type { Metadata } from "next";
import Image from "next/image";
import ImagePanel from "@/components/ImagePanel";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbSchema, pageMetadata } from "@/components/seo-data";
import { teamMembers } from "@/components/site-data";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("/about")} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              level="h1"
              title="About SmileCare Dental Clinic"
              description="Providing compassionate, modern dental care to help every patient achieve a healthy, confident smile."
            />
          </div>
          <ImagePanel
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
            alt="Modern SmileCare Dental Clinic treatment room"
            label="Comfortable care, advanced treatment"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Our Story",
              text: "SmileCare Dental Clinic was founded with a simple goal-to provide exceptional dental care in a comfortable and welcoming environment. We combine advanced technology with personalized treatment to ensure every patient receives the highest standard of care. Whether you're visiting for a routine checkup or a complete smile makeover, our team is committed to making your experience stress-free and rewarding."
            },
            {
              title: "Our Mission",
              text: "To improve oral health and build lasting relationships by delivering safe, affordable, and patient-focused dental care with honesty, compassion, and excellence."
            },
            {
              title: "Our Vision",
              text: "To be the trusted dental clinic in our community, known for exceptional care, advanced treatments, and beautiful, healthy smiles."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-clinic-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Meet our team" title="Dental professionals who care clearly" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-lg border border-clinic-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative h-64 w-full">
                  <Image src={member.image} alt={`${member.name}, ${member.role} at SmileCare Dental Clinic`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-clinic-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-clinic-900">Our Clinic</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Our clinic features modern treatment rooms, digital diagnostic equipment, advanced sterilization protocols, and a relaxing waiting area designed to provide a comfortable experience for patients of all ages.
            </p>
          </article>
          <article className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-clinic-900">Our Commitment</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We believe every smile is unique. Our team takes time to understand your concerns, explain treatment options, and create personalized care plans that support your long-term oral health.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
