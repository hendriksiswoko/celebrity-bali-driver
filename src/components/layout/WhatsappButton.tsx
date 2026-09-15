import Link from "next/link";
import { buildWhatsappLink } from "@/lib/whatsapp";

/** Floating booking button. Renders nothing until a real WhatsApp number is set in src/content/site.ts. */
export function WhatsappButton() {
  const link = buildWhatsappLink("Hi, I'd like to book a driver in Bali.");
  if (!link) return null;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
