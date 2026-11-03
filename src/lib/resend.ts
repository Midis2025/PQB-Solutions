import { Resend } from "resend";
import { site } from "@/lib/site";
import {
  generateContactEmailHtml,
  generateContactEmailText,
  type ContactEmailData,
} from "@/lib/email-templates/contact-notification";
import {
  generateUserConfirmationHtml,
  generateUserConfirmationText,
  type UserConfirmationData,
} from "@/lib/email-templates/user-confirmation";

/**
 * Returns a cached Resend client instance using the server-side environment variable.
 */
let resendInstance: Resend | null = null;

export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }
  if (!resendInstance) {
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

export type SendNotificationResult =
  | { success: true; id: string }
  | { success: false; error: string; code?: string };

/**
 * Sends the contact notification email to the website owner via Resend.
 */
export async function sendContactNotification(
  data: ContactEmailData
): Promise<SendNotificationResult> {
  const resend = getResendClient();

  // If no API key configured (e.g. initial setup or local dev without .env.local):
  if (!resend) {
    console.warn(
      "[resend] RESEND_API_KEY is not set. Simulating successful send in local environment.",
      {
        fullName: data.fullName,
        email: data.email,
        service: data.service,
        recipient: process.env.CONTACT_NOTIFICATION_EMAIL || site.email,
      }
    );

    // In non-production, return simulated success so the developer can verify form UX:
    if (process.env.NODE_ENV !== "production") {
      return {
        success: true,
        id: "simulated_dev_id",
      };
    }

    return {
      success: false,
      error: "Email notification service is not configured. Please set RESEND_API_KEY.",
      code: "MISSING_API_KEY",
    };
  }

  // Recipient: website owner email
  const recipient =
    process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || site.email;

  // Sender: verified domain email (or onboarding@resend.dev for test sandbox)
  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `PQB Solutions <notifications@pqbsolutions.com>`;

  const subject = `New Contact Form Enquiry – PQB Solutions`;
  const html = generateContactEmailHtml(data);
  const text = generateContactEmailText(data);

  try {
    const { data: result, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[resend] Email delivery failed:", {
        message: error.message,
        name: error.name,
      });
      return {
        success: false,
        error: error.message || "Failed to send email through Resend.",
      };
    }

    console.info("[resend] Notification email sent successfully", {
      id: result?.id,
      recipient,
      service: data.service,
    });

    return {
      success: true,
      id: result?.id || "ok",
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unexpected email delivery error.";
    console.error("[resend] Exception while dispatching email:", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Sends the autoresponder "Thank You for Reaching Out!" confirmation email to the visitor.
 */
export async function sendUserConfirmation(
  data: UserConfirmationData
): Promise<SendNotificationResult> {
  const resend = getResendClient();

  if (!resend) {
    if (process.env.NODE_ENV !== "production") {
      return { success: true, id: "simulated_autoresponder_id" };
    }
    return {
      success: false,
      error: "Email service not configured.",
      code: "MISSING_API_KEY",
    };
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `PQB Solutions <notifications@pqbsolutions.com>`;

  const subject = `Thank You for Reaching Out! – PQB Solutions`;
  const html = generateUserConfirmationHtml(data);
  const text = generateUserConfirmationText(data);

  try {
    const { data: result, error } = await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      replyTo: process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || site.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.warn("[resend] User confirmation delivery failed:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true, id: result?.id || "ok" };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Autoresponder delivery failed.";
    console.warn("[resend] Autoresponder exception:", errorMessage);
    return { success: false, error: errorMessage };
  }
}


