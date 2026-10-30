import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  /** Honeypot — real users never fill this in. */
  website?: unknown;
};

type FieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "message", string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s.-]{7,20}$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Silently accept bot submissions so they get no useful signal.
  if (asTrimmedString(payload.website)) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }

  const fullName = asTrimmedString(payload.fullName);
  const email = asTrimmedString(payload.email);
  const phone = asTrimmedString(payload.phone);
  const company = asTrimmedString(payload.company);
  const message = asTrimmedString(payload.message);

  const errors: FieldErrors = {};

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (!PHONE_PATTERN.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (message.length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 },
    );
  }

  // Delivery hook: connect an email provider / CRM here before going live.
  // Nothing is persisted by default so no personal data is written to disk.
  console.info("[contact] enquiry received", {
    fullName,
    email,
    phone,
    company: company || "—",
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thank you — your message has been received. We'll be in touch shortly.",
  });
}
