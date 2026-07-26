import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Smile, Twitter } from "lucide-react";
import { businessHours, contactInfo, featuredServices, navLinks } from "@/components/site-data";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter }
];

export default function Footer() {
  return (
    <footer className="bg-clinic-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-clinic-700">
              <Smile className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold">{contactInfo.name}</span>
              <span className="text-sm text-clinic-100">{contactInfo.tagline}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-clinic-100">
            Modern dental clinic offering preventive, cosmetic, restorative, and emergency dental care.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-clinic-700"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-clinic-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-clinic-100">
            {featuredServices.map((service) => (
              <li key={service.title}>
                <Link href={service.href} className="transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Contact Information</h2>
          <ul className="mt-4 space-y-3 text-sm text-clinic-100">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <Link href="/contact" className="transition hover:text-white">
                {contactInfo.address}
              </Link>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex gap-2 transition hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="flex gap-2 transition hover:text-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
          </ul>
          <h2 className="mt-6 font-semibold">Business Hours</h2>
          <ul className="mt-3 space-y-2 text-sm text-clinic-100">
            {businessHours.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-clinic-100">
        Copyright &copy; 2026 SmileCare Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
}
