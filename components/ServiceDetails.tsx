import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { detailedServices } from "@/components/site-data";

type ServiceDetailsProps = {
  compact?: boolean;
  selectedTitle?: string;
};

export default function ServiceDetails({ compact = false, selectedTitle }: ServiceDetailsProps) {
  const services = selectedTitle
    ? detailedServices.filter((service) => service.title === selectedTitle)
    : detailedServices;

  return (
    <div className="grid gap-8">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article key={service.id} id={service.id} className="scroll-mt-28 overflow-hidden rounded-lg border border-clinic-100 bg-white shadow-sm">
            {!compact ? (
              <div className="relative h-64 w-full">
                <Image src={service.image} alt={`${service.title} at SmileCare Dental Clinic`} fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" />
              </div>
            ) : null}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clinic-50 text-clinic-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-clinic-900">{service.title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{service.summary}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {service.sections.map((section) => (
                  <div key={section.title} className="rounded-lg bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-clinic-600" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-clinic-900">{section.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {service.gallery && !compact ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {["Before", "Treatment Plan", "After"].map((label) => (
                    <div key={label} className="rounded-lg border border-dashed border-clinic-200 bg-clinic-50 p-6 text-center text-sm font-semibold text-clinic-700">
                      {label} Gallery Placeholder
                    </div>
                  ))}
                </div>
              ) : null}
              <Link href="/appointment" className="mt-6 inline-flex items-center gap-2 rounded-full bg-clinic-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinic-700">
                Book Appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
