import { services } from "@/content/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Section } from "@/components/ui/Section";

export function ServicesSection() {
  return (
    <Section title="Our Services" subtitle="Private drivers and transfers across Bali, tailored to how you travel.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
