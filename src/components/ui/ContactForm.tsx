"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

type FieldName = "fullName" | "email" | "phone" | "company" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  ok: boolean;
  message?: string;
  errors?: FieldErrors;
};

const initialValues: Record<FieldName, string> = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");
    setErrors({});

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: formData.get("website") ?? "",
        }),
      });

      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setFeedback(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Thank you — your message has been received.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback(
        "We could not send your message right now. Please email us directly.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot field, hidden from users and assistive tech */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="sr-only">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Full Name*"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy("fullName")}
            className={`${inputClass} ${borderFor("fullName")}`}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email Address*"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={`${inputClass} ${borderFor("email")}`}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Phone Number*"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className={`${inputClass} ${borderFor("phone")}`}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="sr-only">
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company Name"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className={`${inputClass} ${borderFor("company")}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Message*"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          className={`${inputClass} ${borderFor("message")} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={status === "submitting" ? undefined : { scale: 1.01 }}
        whileTap={status === "submitting" ? undefined : { scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-500 to-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-float disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Submit Message
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </motion.button>

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
