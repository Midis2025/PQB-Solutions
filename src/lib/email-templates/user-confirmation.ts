import { site } from "@/lib/site";
import { PQB_LOGO_BASE64 } from "./logo-base64";

export type UserConfirmationData = {
  fullName: string;
  email: string;
};

/**
 * Escapes user-supplied text for HTML injection / XSS safety.
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
 * Generates the responsive User Confirmation ("Thank You for Reaching Out!") HTML email.
 */
export function generateUserConfirmationHtml(data: UserConfirmationData): string {
  const rawFirstName = data.fullName.trim().split(/\s+/)[0] || data.fullName.trim();
  const firstName = escapeHtml(rawFirstName);
  const logoSrc = process.env.EMAIL_LOGO_URL?.trim() || PQB_LOGO_BASE64;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Reaching Out – PQB Solutions</title>
  <style type="text/css">
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #EEF8F6; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; border-radius: 16px !important; }
      .email-wrapper { padding: 12px 8px !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .heading-title { font-size: 25px !important; line-height: 1.22 !important; }
      .service-col {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
        padding: 10px 8px !important;
        border-right: none !important;
        border-bottom: 1px solid #DDF0EC !important;
      }
      .service-col-last { border-bottom: none !important; }
      .btn-website { width: 100% !important; text-align: center !important; padding: 14px 20px !important; box-sizing: border-box !important; }
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

          <!-- Center Circular Badge: Envelope with Confirmed Checkmark -->
          <tr>
            <td align="center" style="padding: 8px 36px 14px 36px;">
              <div style="width: 68px; height: 68px; background-color: #EAF7F5; border-radius: 50%; display: table-cell; vertical-align: middle; text-align: center; border: 1px solid #CDEEE9; position: relative;">
                <svg width="34" height="26" viewBox="0 0 24 18" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;">
                  <rect x="1" y="2" width="22" height="15" rx="3" />
                  <polyline points="2 4 12 11 22 4" />
                </svg>
                <div style="position: absolute; bottom: 8px; right: 10px; width: 18px; height: 18px; background-color: #008075; border-radius: 50%; border: 2px solid #FFFFFF; text-align: center; line-height: 18px;">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-top: -2px;">
                    <polyline points="2.5 6 5 8.5 9.5 3.5" />
                  </svg>
                </div>
              </div>
            </td>
          </tr>

          <!-- Heading: "Thank You for Reaching Out!" -->
          <tr>
            <td align="center" class="content-padding" style="padding: 6px 36px 14px 36px;">
              <h1 class="heading-title" style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 30px; font-weight: 700; color: #142C3D; letter-spacing: -0.015em; line-height: 1.25;">
                Thank You for Reaching Out!
              </h1>
              <div style="width: 44px; height: 3.5px; background-color: #24A69A; border-radius: 99px; margin: 12px auto 0 auto;"></div>
            </td>
          </tr>

          <!-- Greeting & Reassurance -->
          <tr>
            <td class="content-padding" style="padding: 12px 36px 18px 36px;">
              <p style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700; color: #142C3D;">
                Dear ${firstName},
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569;">
                Thank you for contacting PQB Solutions. We&apos;ve successfully received your enquiry and our team will get back to you shortly, typically within 1 business day.
              </p>
            </td>
          </tr>

          <!-- 3 Services Highlight Card -->
          <tr>
            <td class="content-padding" style="padding: 6px 36px 20px 36px;">
              <div style="background-color: #F0F9F8; border-radius: 16px; border: 1px solid #DDF0EC; padding: 18px 16px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <!-- Service 1: Accounting -->
                    <td class="service-col" width="33.33%" align="center" style="vertical-align: top; padding: 4px 10px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                        <tr>
                          <td style="vertical-align: top; padding-right: 10px;">
                            <div style="width: 40px; height: 40px; background-color: #EAF7F5; border: 1px solid #CDEEE9; border-radius: 10px; text-align: center; line-height: 40px;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-top: 9px;">
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                                <line x1="8" y1="6" x2="16" y2="6" />
                                <line x1="16" y1="14" x2="16" y2="18" />
                                <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
                              </svg>
                            </div>
                          </td>
                          <td style="vertical-align: middle; text-align: left;">
                            <span style="font-size: 13px; font-weight: 700; color: #142C3D; line-height: 1.35; display: block;">
                              Accounting, Taxation &amp; Bookkeeping
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>

                    <!-- Service 2: Medical Billing -->
                    <td class="service-col" width="33.33%" align="center" style="vertical-align: top; padding: 4px 10px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                        <tr>
                          <td style="vertical-align: top; padding-right: 10px;">
                            <div style="width: 40px; height: 40px; background-color: #EAF7F5; border: 1px solid #CDEEE9; border-radius: 10px; text-align: center; line-height: 40px;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-top: 9px;">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h4.27" />
                              </svg>
                            </div>
                          </td>
                          <td style="vertical-align: middle; text-align: left;">
                            <span style="font-size: 13px; font-weight: 700; color: #142C3D; line-height: 1.35; display: block;">
                              Medical Billing &amp; Solutions
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>

                    <!-- Service 3: IT Solutions -->
                    <td class="service-col service-col-last" width="33.33%" align="center" style="vertical-align: top; padding: 4px 10px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                        <tr>
                          <td style="vertical-align: top; padding-right: 10px;">
                            <div style="width: 40px; height: 40px; background-color: #EAF7F5; border: 1px solid #CDEEE9; border-radius: 10px; text-align: center; line-height: 40px;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#24A69A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-top: 9px;">
                                <rect x="3" y="4" width="18" height="12" rx="2" />
                                <line x1="2" y1="20" x2="22" y2="20" />
                              </svg>
                            </div>
                          </td>
                          <td style="vertical-align: middle; text-align: left;">
                            <span style="font-size: 13px; font-weight: 700; color: #142C3D; line-height: 1.35; display: block;">
                              IT<br />Solutions
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Reassurance Text -->
          <tr>
            <td align="center" class="content-padding" style="padding: 4px 36px 20px 36px;">
              <p style="margin: 0; font-size: 13.5px; color: #475569; line-height: 1.5;">
                If you have any urgent questions, feel free to reply to this email.
              </p>
            </td>
          </tr>

          <!-- Primary Button: "Visit Our Website →" -->
          <tr>
            <td align="center" class="content-padding" style="padding: 0 36px 32px 36px;">
              <a href="${site.url}" class="btn-website" target="_blank" style="display: inline-block; background-color: #0C1E2B; color: #FFFFFF; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 34px; border-radius: 50px; box-shadow: 0 4px 14px rgba(12, 30, 43, 0.28); letter-spacing: 0.01em;">
                Visit Our Website &rarr;
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
 * Plain-text fallback for user confirmation email.
 */
export function generateUserConfirmationText(data: UserConfirmationData): string {
  const firstName = data.fullName.trim().split(/\s+/)[0] || data.fullName.trim();

  return `THANK YOU FOR REACHING OUT – PQB SOLUTIONS
=============================================

Dear ${firstName},

Thank you for contacting PQB Solutions. We've successfully received your enquiry and our team will get back to you shortly, typically within 1 business day.

OUR SERVICES:
• Accounting, Taxation & Bookkeeping
• Medical Billing & Solutions
• IT Solutions

If you have any urgent questions, feel free to reply to this email.

Visit our website: ${site.url}

---------------------------------------------
PQB Solutions
Accounting | Medical Billing | IT Solutions
`;
}

