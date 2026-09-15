import { siteConfig } from "@/content/site";

/** True once a real WhatsApp number has replaced the placeholder. */
export function hasWhatsappNumber(): boolean {
  return /^\d{8,15}$/.test(siteConfig.contact.whatsappNumber);
}

/** Builds a wa.me link, or null if the number is still a placeholder. */
export function buildWhatsappLink(message?: string): string | null {
  if (!hasWhatsappNumber()) return null;
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Normalizes a display phone number ("+62 812-3806-0514", "081227132028") to wa.me digits. */
export function phoneToWhatsappDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

/** Builds a wa.me link for an arbitrary display phone number (e.g. a specific driver's). */
export function buildWhatsappLinkForPhone(phone: string, message?: string): string {
  const base = `https://wa.me/${phoneToWhatsappDigits(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
