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
