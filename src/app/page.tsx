import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VehiclesSection } from "@/components/sections/VehiclesSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <VehiclesSection limit={4} />
      <ToursSection limit={4} />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
