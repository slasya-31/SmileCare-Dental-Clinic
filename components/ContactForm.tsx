"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name", "email", "message"];
    const missing = required.some((key) => !String(data.get(key) || "").trim());
    if (missing) {
      setError("Please complete your name, email, and message.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-clinic-100 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl font-bold text-clinic-900">Contact Us</h2>
      {error ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p> : null}
      {submitted ? <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-800">Thank you. Your message is ready for our team.</p> : null}
      <div className="mt-6 grid gap-4">
        <input name="name" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100" placeholder="Full name" />
        <input name="email" type="email" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100" placeholder="Email address" />
        <input name="phone" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100" placeholder="Phone number" />
        <textarea name="message" rows={5} className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100" placeholder="How can we help?" />
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-clinic-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clinic-700">
          Send Message
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
