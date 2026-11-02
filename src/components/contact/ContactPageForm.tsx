"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";

type FieldName = "fullName" | "businessName" | "email" | "phone" | "service" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<string, string>>;
};

const serviceOptions = [
  "Accounting, Taxation & Bookkeeping",
  "Medical Billing & Solutions",
  "IT Solutions",
  "General Enquiry",
  "Other",
];

const initialValues: Record<FieldName, string> = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputBase =
  "w-full rounded-xl border bg-white pl-11 pr-4 py-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export function ContactPageForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service")?.toLowerCase();
    if (!serviceParam) return;

    let selectedService = "";
    if (serviceParam.includes("account") || serviceParam.includes("tax") || serviceParam.includes("book")) {
      selectedService = "Accounting, Taxation & Bookkeeping";
    } else if (serviceParam.includes("med") || serviceParam.includes("bill")) {
      selectedService = "Medical Billing & Solutions";
    } else if (serviceParam.includes("it") || serviceParam.includes("tech")) {
      selectedService = "IT Solutions";
    }

    if (selectedService) {
      requestAnimationFrame(() => {
        setValues((v) => ({ ...v, service: selectedService }));
      });
    }
  }, []);

  const update = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const borderFor = (field: FieldName) =>
    errors[field] ? "border-red-400" : "border-ink-900/12";

  const describedBy = (field: FieldName) =>
    errors[field] ? `${field}-error` : undefined;

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (values.fullName.trim().length < 2) errs.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      errs.email = "Please enter a valid email address.";
    if (values.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(values.phone.trim()))
      errs.phone = "Please enter a valid phone number.";
    if (!values.service) errs.service = "Please select a service.";
    if (values.message.trim().length < 10)
      errs.message = "Please tell us a little more (at least 10 characters).";
    return errs;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setFeedback("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setFeedback("");
    setErrors({});

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          company: values.businessName,
          service: values.service,
          message: values.message,
          website: formData.get("website") ?? "",
        }),
      });

      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.ok) {
        setErrors((data.errors ?? {}) as FieldErrors);
        setStatus("error");
        setFeedback(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Thank you — your message has been received.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback("We could not send your message right now. Please email us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Row 1: Full Name + Business Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-fullName" className="mb-1.5 block text-sm font-semibold text-ink-800">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User
              size={16}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your full name"
              value={values.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={describedBy("fullName")}
              className={`${inputBase} ${borderFor("fullName")}`}
            />
          </div>
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="contact-businessName" className="mb-1.5 block text-sm font-semibold text-ink-800">
            Business Name
          </label>
          <div className="relative">
            <Building2
              size={16}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              id="contact-businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              placeholder="Enter your business name"
              value={values.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              className={`${inputBase} border-ink-900/12`}
            />
          </div>
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-ink-800">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail
              size={16}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              className={`${inputBase} ${borderFor("email")}`}
            />
          </div>
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-ink-800">
            Phone Number
          </label>
          <div className="relative">
            <Phone
              size={16}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              className={`${inputBase} ${borderFor("phone")}`}
            />
          </div>
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="contact-service" className="mb-1.5 block text-sm font-semibold text-ink-800">
          Service Required <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-service"
            name="service"
            required
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            className={`w-full appearance-none rounded-xl border bg-white px-4 py-3.5 pr-10 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 ${
              values.service ? "text-ink-900" : "text-ink-300"
            } ${borderFor("service")}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400"
          />
        </div>
        {errors.service ? (
          <p id="service-error" className="mt-1.5 text-xs text-red-600">
            {errors.service}
          </p>
        ) : null}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-ink-800">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare
            size={16}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-4 text-ink-400"
          />
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your requirement..."
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            className={`${inputBase} ${borderFor("message")} resize-y pt-3.5`}
          />
        </div>
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={status === "submitting" ? undefined : { scale: 1.01 }}
        whileTap={status === "submitting" ? undefined : { scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className="group mt-1 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-lg bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-600 hover:gap-3 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:rounded-xl sm:px-8 sm:py-3.5"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </>
        )}
      </motion.button>

      {/* Feedback */}
      <AnimatePresence>
        {feedback ? (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="status"
            aria-live="polite"
            className={`flex items-start gap-2 rounded-xl px-4 py-3 text-[0.82rem] ${
              status === "success"
                ? "bg-brand-50 text-brand-800"
                : "bg-red-50 text-red-700"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
            )}
            {feedback}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
