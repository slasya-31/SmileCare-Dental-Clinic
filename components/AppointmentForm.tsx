"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck } from "lucide-react";
import ServiceDetails from "@/components/ServiceDetails";
import { serviceOptions } from "@/components/site-data";
import { supabase } from "@/lib/supabase";

type Errors = Partial<Record<"name" | "phone" | "email" | "date" | "time" | "service", string>>;

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: serviceOptions[0],
    message: ""
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedService = useMemo(() => form.service, [form.service]);

  function validate() {
    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!form.date) nextErrors.date = "Preferred date is required.";
    if (!form.time) nextErrors.time = "Preferred time is required.";
    if (!form.service) nextErrors.service = "Select a service.";
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setSubmitted(false);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("appointments").insert({
      full_name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      preferred_date: form.date,
      preferred_time: form.time,
      service_required: form.service,
      message: form.message.trim() || null,
      status: "confirmed"
    });

    setSubmitting(false);

    if (error) {
      const tableMissing = error.message.toLowerCase().includes("could not find the table");
      setSubmitError(
        tableMissing
          ? "Database table is not created yet. Run the Supabase SQL Editor script, then refresh this page and submit again."
          : `We could not save your appointment right now. ${error.message}`
      );
      return;
    }

    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      service: serviceOptions[0],
      message: ""
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-clinic-100 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clinic-50 text-clinic-700">
            <CalendarCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-clinic-900">Book Appointment</h2>
            <p className="text-sm text-slate-600">Fill in your details and our team will contact you.</p>
          </div>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm font-semibold text-green-800">
            Appointment confirmed. Your details have been saved successfully.
          </div>
        ) : null}

        {submitError ? (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700">
            {submitError}
          </div>
        ) : null}

        <div className="mt-6 grid gap-5">
          <Field label="Full Name" error={errors.name}>
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
              placeholder="Your full name"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone Number" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
                placeholder="+91 98765 43210"
              />
            </Field>
            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred Date" error={errors.date}>
              <input
                type="date"
                value={form.date}
                onChange={(event) => setForm({ ...form, date: event.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
              />
            </Field>
            <Field label="Preferred Time" error={errors.time}>
              <input
                type="time"
                value={form.time}
                onChange={(event) => setForm({ ...form, time: event.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
              />
            </Field>
          </div>

          <Field label="Service Required" error={errors.service}>
            <select
              value={form.service}
              onChange={(event) => setForm({ ...form, service: event.target.value })}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
            >
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </Field>

          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              rows={5}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-clinic-500 focus:ring-2 focus:ring-clinic-100"
              placeholder="Tell us about your concern"
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-clinic-600 px-6 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clinic-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {submitting ? "Saving Appointment..." : "Book Appointment"}
          </button>
        </div>
      </form>

      <div>
        <h2 className="mb-4 text-2xl font-bold text-clinic-900">Selected Service Details</h2>
        <ServiceDetails compact selectedTitle={selectedService} />
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-clinic-900">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}
