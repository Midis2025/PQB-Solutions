import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactNotification, sendUserConfirmation } from "@/lib/resend";

// Valid dropdown service options
export const PERMITTED_SERVICES = [
  "Accounting, Taxation & Bookkeeping",
  "Medical Billing & Solutions",
  "IT Solutions",
  "General Enquiry",
  "Other",
] as const;

// Phone number regex pattern allowing standard domestic and international formats
const PHONE_PATTERN = /^[+()\d\s.-]{7,25}$/;

/**
 * Server-side Zod validation schema
 */
const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(254, "Email address cannot exceed 254 characters."),
  businessName: z
    .string()
    .trim()
    .max(150, "Business name cannot exceed 150 characters.")
    .optional()
    .or(z.literal("")),
  company: z // Accepted alias from older / alternative form variants
    .string()
    .trim()
    .max(150, "Company name cannot exceed 150 characters.")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .refine((val) => !val || PHONE_PATTERN.test(val), {
      message: "Please enter a valid phone number.",
    })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .optional()
    .transform((val) => {
      if (!val) return "General Enquiry";
      return val;
    })
    .refine(
      (val) => PERMITTED_SERVICES.includes(val as (typeof PERMITTED_SERVICES)[number]),
      {
        message: "Please select a valid service from the list.",
      }
    ),
  message: z
    .string()
    .trim()
    .min(1, "Please enter your message.")
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message cannot exceed 5000 characters."),
  website: z.string().optional(), // Honeypot field
});

/**
 * Basic in-memory rate limiting map for edge/serverless mitigation.
 * Limits each IP to 5 submissions per 10-minute sliding window.
 */
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxSubmissions = 6;

  // Periodic cleanup of expired entries
  if (rateLimitMap.size > 200) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.expiresAt < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  const record = rateLimitMap.get(ip);
  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  record.count += 1;
  return record.count > maxSubmissions;
}

export async function POST(request: Request) {
  // 1. IP & Rate limiting check
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  if (isRateLimited(clientIp)) {
    console.warn(`[contact] Rate limit exceeded for IP: ${clientIp}`);
    return NextResponse.json(
      {
        ok: false,
        success: false,
        message: "Too many submissions. Please wait a few minutes before trying again.",
      },
      { status: 429 }
    );
  }

  // 2. Parse JSON body
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        success: false,
        message: "Invalid request body.",
      },
      { status: 400 }
    );
  }

  // 3. Honeypot check (silently drop bot submissions)
  if (
    rawBody &&
    typeof rawBody === "object" &&
    "website" in rawBody &&
    Boolean(rawBody.website)
  ) {
    console.info(`[contact] Honeypot triggered by ${clientIp}. Ignoring submission.`);
    return NextResponse.json({
      ok: true,
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  }

  // 4. Schema validation with Zod
  const result = contactSchema.safeParse(rawBody);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        success: false,
        message: "Please check the submitted information.",
        errors: fieldErrors,
      },
      { status: 422 }
    );
  }

  const { fullName, email, phone, businessName, company, service, message } = result.data;
  const resolvedBusinessName = businessName || company || "";

  // 5. Send admin notification email via Resend
  const emailResult = await sendContactNotification({
    fullName,
    businessName: resolvedBusinessName,
    email,
    phone,
    service,
    message,
  });

  if (!emailResult.success) {
    return NextResponse.json(
      {
        ok: false,
        success: false,
        message:
          "Unable to deliver your enquiry at this moment. Please email Support@pqbsolutions.com directly.",
        errorCode: emailResult.code,
      },
      { status: 502 }
    );
  }

  // 6. Optionally dispatch user confirmation autoresponder in the background
  void sendUserConfirmation({ fullName, email }).catch((err) => {
    console.warn("[contact] Autoresponder background send error:", err);
  });

  // 7. Successful submission response
  return NextResponse.json({
    ok: true,
    success: true,
    message: "Your enquiry has been submitted successfully.",
  });
}
