import { site } from "@/lib/site";
import { PQB_LOGO_BASE64 } from "./logo-base64";

export type AdminNotificationData = {
  fullName: string;
  businessName?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  hubspotUrl?: string;
  submittedAt?: string;
};

/**
 * Escapes user-supplied text for HTML injection / XSS safety in email clients.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Generates the responsive Admin Notification HTML email matching the approved design.
 */
export function generateAdminNotificationHtml(data: AdminNotificationData): string {
  const fullName = escapeHtml(data.fullName.trim());
  const businessName = data.businessName?.trim() ? escapeHtml(data.businessName.trim()) : "";
  const email = escapeHtml(data.email.trim());
  const phone = data.phone?.trim() ? escapeHtml(data.phone.trim()) : "";
  const service = escapeHtml(data.service.trim());
  const message = escapeHtml(data.message.trim());
  const logoSrc = process.env.EMAIL_LOGO_URL?.trim() || PQB_LOGO_BASE64;
  const hubspotActionUrl =
    data.hubspotUrl ||
    `mailto:${email}?subject=${encodeURIComponent("Re: PQB Solutions Contact Form Enquiry")}`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission – PQB Solutions</title>
  <style type="text/css">
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #EEF8F6; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; border-radius: 16px !important; }
      .email-wrapper { padding: 12px 8px !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .heading-title { font-size: 24px !important; line-height: 1.2 !important; }
      .details-table td { padding: 10px 14px !important; }
      .details-label { width: 34% !important; font-size: 12px !important; }
      .details-value { font-size: 13px !important; }
      .btn-hubspot { width: 100% !important; text-align: center !important; padding: 14px 20px !important; box-sizing: border-box !important; }
      .corner-wave-tl, .corner-wave-br { width: 130px !important; height: 60px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #EEF8F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #142C3D;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #EEF8F6;">
    <tr>
      <td align="center" class="email-wrapper" style="padding: 36px 14px;">
        
        <table role="presentation" class="email-container" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 30px rgba(20, 44, 61, 0.07); position: relative; border: 1px solid #D5EBE7;">
          
          <!-- Top Decorative Corner Wave -->
          <tr>
            <td style="padding: 0; margin: 0; line-height: 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left" style="width: 190px; vertical-align: top; padding: 0; line-height: 0;">
                    <svg class="corner-wave-tl" width="190" height="85" viewBox="0 0 190 85" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                      <path d="M0 0 H190 C150 16 95 62 0 85 V0 Z" fill="#24A69A" opacity="0.35" />
                      <path d="M0 0 H155 C120 14 75 52 0 72 V0 Z" fill="#24A69A" />
                      <path d="M0 0 H120 C85 10 50 38 0 56 V0 Z" fill="#142C3D" />
                    </svg>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 6px 36px 18px 36px;">
              <a href="${site.url}" target="_blank" style="text-decoration: none; display: inline-block;">
                <img src="${logoSrc}" alt="PQB Solutions" width="160" height="62" style="display: block; border: 0; max-width: 160px; height: auto;" />
              </a>
            </td>
          </tr>

          <!-- Center Icon Badge -->
          <tr>
            <td align="center" style="padding: 8px 36px 14px 36px;">
              <div style="position: relative; display: inline-block;">
                <div style="width: 66px; height: 66px; background-color: #EAF7F5; border-radius: 18px; display: table-cell; vertical-align: middle; text-align: center; border: 1px solid #CDEEE9;">
                  <svg width="34" height="26" viewBox="0 0 24 18" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;">
                    <rect x="1" y="2" width="22" height="15" rx="3" />
                    <polyline points="2 4 12 11 22 4" />
                  </svg>
                </div>
                <div style="position: absolute; top: -6px; right: -8px; line-height: 0;">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round">
                    <line x1="8" y1="1" x2="8" y2="4" />
                    <line x1="14" y1="4" x2="11.5" y2="6" />
                    <line x1="15" y1="10" x2="12" y2="9.5" />
                  </svg>
                </div>
              </div>
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" class="content-padding" style="padding: 6px 36px 14px 36px;">
              <h1 class="heading-title" style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 29px; font-weight: 700; color: #142C3D; letter-spacing: -0.015em; line-height: 1.25;">
                New Contact Form Submission
              </h1>
              <div style="width: 44px; height: 3.5px; background-color: #24A69A; border-radius: 99px; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td class="content-padding" style="padding: 12px 36px 18px 36px;">
              <p style="margin: 0 0 5px 0; font-size: 15px; font-weight: 700; color: #142C3D;">
                Hello Team,
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569;">
                You have received a new enquiry through the PQB Solutions website contact form.
              </p>
            </td>
          </tr>

          <!-- Enquiry Details Card -->
          <tr>
            <td class="content-padding" style="padding: 8px 36px 26px 36px;">
              <table class="details-table" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border: 1px solid #DDF0EC; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 10px rgba(20, 44, 61, 0.03);">
                
                <!-- Card Header -->
                <tr>
                  <td colspan="2" style="background-color: #F0F9F8; padding: 13px 20px; border-bottom: 1px solid #DDF0EC;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 10px; line-height: 0;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <line x1="10" y1="9" x2="8" y2="9" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle;">
                          <span style="font-size: 14px; font-weight: 700; color: #142C3D;">
                            Enquiry Details
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Name -->
                <tr>
                  <td class="details-label" width="30%" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Name:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" width="70%" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 500; color: #142C3D; vertical-align: middle;">
                    ${fullName}
                  </td>
                </tr>

                <!-- Business Name (if provided) -->
                ${
                  businessName
                    ? `<tr>
                  <td class="details-label" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="4" y="2" width="16" height="20" rx="2" />
                            <path d="M9 22v-4h6v4" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Business:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 500; color: #142C3D; vertical-align: middle;">
                    ${businessName}
                  </td>
                </tr>`
                    : ""
                }

                <!-- Email -->
                <tr>
                  <td class="details-label" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Email:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; font-size: 14px; vertical-align: middle;">
                    <a href="mailto:${email}" style="color: #142C3D; text-decoration: none; font-weight: 500;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td class="details-label" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Phone:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 500; color: #142C3D; vertical-align: middle;">
                    ${phone || '<span style="color:#94A3B8; font-style:italic;">Not provided</span>'}
                  </td>
                </tr>

                <!-- Service Interest -->
                <tr>
                  <td class="details-label" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; vertical-align: middle;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Service Interest:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" style="padding: 13px 20px; border-bottom: 1px solid #F1F5F9; font-size: 14px; font-weight: 500; color: #142C3D; vertical-align: middle;">
                    ${service}
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td class="details-label" style="padding: 14px 20px; vertical-align: top;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </td>
                        <td style="vertical-align: middle; font-size: 13px; font-weight: 700; color: #142C3D;">Message:</td>
                      </tr>
                    </table>
                  </td>
                  <td class="details-value" style="padding: 14px 20px; vertical-align: top;">
                    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 14px; font-size: 13.5px; line-height: 1.55; color: #1E293B; word-break: break-word; white-space: pre-wrap;">${message}</div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- CTA Button: "View Enquiry in HubSpot →" -->
          <tr>
            <td align="center" class="content-padding" style="padding: 0 36px 32px 36px;">
              <a href="${hubspotActionUrl}" class="btn-hubspot" target="_blank" style="display: inline-block; background-color: #008075; color: #FFFFFF; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 32px; border-radius: 50px; box-shadow: 0 4px 12px rgba(0, 128, 117, 0.28); letter-spacing: 0.01em;">
                View Enquiry in HubSpot &rarr;
              </a>
            </td>
          </tr>

          <!-- Footer Divider -->
          <tr>
            <td style="padding: 0 36px;">
              <div style="border-top: 1px solid #EAF2F1;"></div>
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding: 22px 36px 0 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align: middle; width: 100px;">
                    <img src="${logoSrc}" alt="PQB Solutions" width="96" height="37" style="display: block; border: 0; max-width: 96px; height: auto;" />
                  </td>
                  <td style="width: 24px; text-align: center; color: #CBD5E1; font-size: 18px; line-height: 1; vertical-align: middle;">|</td>
                  <td style="vertical-align: middle; font-size: 12px; color: #475569; font-weight: 500;">
                    Accounting &nbsp;|&nbsp; Medical Billing &nbsp;|&nbsp; IT Solutions
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom Decorative Corner Wave -->
          <tr>
            <td style="padding: 0; margin: 0; line-height: 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>&nbsp;</td>
                  <td align="right" style="width: 190px; vertical-align: bottom; padding: 0; line-height: 0;">
                    <svg class="corner-wave-br" width="190" height="85" viewBox="0 0 190 85" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                      <path d="M190 85 H0 C40 69 95 23 190 0 V85 Z" fill="#24A69A" opacity="0.35" />
                      <path d="M190 85 H35 C70 71 115 33 190 13 V85 Z" fill="#24A69A" />
                      <path d="M190 85 H70 C105 75 140 47 190 29 V85 Z" fill="#142C3D" />
                    </svg>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- Copyright -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin-top: 14px;">
          <tr>
            <td align="center" style="font-size: 11px; color: #94A3B8;">
              &copy; ${new Date().getFullYear()} PQB Solutions. All rights reserved.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

/**
 * Plain-text fallback version for admin notification.
 */
export function generateAdminNotificationText(data: AdminNotificationData): string {
  const submittedAt = data.submittedAt || new Date().toLocaleString("en-US", {
    timeZone: "America/Edmonton",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `NEW CONTACT FORM SUBMISSION – PQB SOLUTIONS
==================================================

Hello Team,

You have received a new enquiry through the PQB Solutions website contact form.

ENQUIRY DETAILS:
----------------
• Name:             ${data.fullName}
• Business Name:    ${data.businessName || "Not provided"}
• Email:            ${data.email}
• Phone:            ${data.phone || "Not provided"}
• Service Interest: ${data.service}
• Received At:      ${submittedAt}

MESSAGE:
--------
${data.message}

--------------------------------------------------
Reply directly to the visitor at: ${data.email}

PQB Solutions
Accounting | Medical Billing | IT Solutions
Website: ${site.url}
`;
}

