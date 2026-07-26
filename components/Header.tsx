"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, Phone, Smile, X } from "lucide-react";
import { useState } from "react";
import { contactInfo, navLinks } from "@/components/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-clinic-100 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clinic-600 text-white">
            <Smile className="h-6 w-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-lg font-bold leading-5 text-clinic-900">{contactInfo.name}</span>
            <span className="text-xs font-medium text-clinic-600">{contactInfo.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-clinic-50 hover:text-clinic-700 ${
                  active ? "bg-clinic-50 text-clinic-700" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm font-semibold text-clinic-700">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contactInfo.phone}
          </a>
          <Link href="/appointment" className="inline-flex items-center gap-2 rounded-full bg-clinic-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-clinic-700">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-clinic-100 text-clinic-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-clinic-100 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-clinic-50 hover:text-clinic-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
