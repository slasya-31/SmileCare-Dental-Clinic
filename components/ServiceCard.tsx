import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  };
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="group rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clinic-50 text-clinic-700 transition group-hover:bg-clinic-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-clinic-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clinic-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
