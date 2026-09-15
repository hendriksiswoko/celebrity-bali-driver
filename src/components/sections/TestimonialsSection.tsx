import { testimonials } from "@/content/testimonials";
import { Avatar } from "@/components/ui/Avatar";
import { StarRating } from "@/components/ui/StarRating";
import { Section } from "@/components/ui/Section";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-80 shrink-0 flex-col gap-3 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <StarRating rating={t.rating} />
      <p className="text-sm text-brand-800">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <Avatar name={t.authorName} image={t.image} size={40} />
        <div>
          <p className="text-sm font-semibold text-brand-900">{t.authorName}</p>
          {t.authorLocation && <p className="text-xs text-brand-600">{t.authorLocation}</p>}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  // Duplicated so the track can loop seamlessly; each half is one full pass.
  const track = [...testimonials, ...testimonials];

  return (
    <Section title="What Our Guests Say" wrapperClassName="overflow-hidden">
      <div className="-mx-4 overflow-hidden sm:-mx-6">
        <div className="marquee-track flex w-max gap-6 px-4 sm:px-6">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
