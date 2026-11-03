/**
 * Contact notification email templates for PQB Solutions.
 *
 * Re-exports the approved admin notification email templates matching the PQB Solutions design specs.
 */

export {
  generateAdminNotificationHtml as generateContactEmailHtml,
  generateAdminNotificationText as generateContactEmailText,
  type AdminNotificationData as ContactEmailData,
} from "./admin-notification";
