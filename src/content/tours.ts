import type { Tour } from "@/types/content";

/**
 * One entry per tour folder under /public/images/tours/.
 * Itineraries are left `null` (not `[]`) when the client has not supplied
 * one yet — do not invent a schedule. See PRD "Missing Information Protocol".
 */
export const tours: Tour[] = [
  {
    slug: "south-bali",
    imageFolder: "south-bali",
    title: "South Bali Tour",
    description:
      "Take in the best of South Bali in a single day — from the clifftop drama of Uluwatu Temple to the iconic Garuda statues of GWK Cultural Park. Cool off with a spot of watersport, then wind down with a fresh seafood dinner on the sand at Jimbaran Bay.",
    duration: "Full day (10 hours)",
    price: { amount: "50", currency: "USD" },
    coverImage: { src: "/images/tours/south-bali/cover.webp", alt: "South Bali tour — cover photo" },
    gallery: [],
    itinerary: [
      { activity: "Uluwatu Temple" },
      { activity: "GWK Cultural Park" },
      { activity: "Watersport (jetski, diving, sea walker, parasailing, banana boat, etc.)" },
      { activity: "Jimbaran seafood dinner" },
    ],
    included: ["Full day tour (10 hours)", "Private car + driver", "Mineral water", "Petrol", "Parking fee"],
    excluded: ["Entrance ticket", "Lunch", "Other personal expenses"],
  },
  {
    slug: "ubud-culture",
    imageFolder: "ubud-culture",
    title: "Ubud Culture Tour",
    description:
      "Spend a day immersed in the heart of Balinese culture. Watch a traditional Barong Dance, browse intricate wood carvings, and cleanse at the sacred Tirta Empul water temple. Wander through Ubud Monkey Forest, walk the emerald steps of Tegalalang Rice Terrace, and sample fresh Luwak coffee along the way.",
    duration: "Full day (10 hours)",
    price: { amount: "45", currency: "USD" },
    coverImage: { src: "/images/tours/ubud-culture/cover.webp", alt: "Ubud Culture tour — cover photo" },
    gallery: [],
    itinerary: [
      { activity: "Traditional Barong Dance" },
      { activity: "Wood Carving" },
      { activity: "Tirta Empul Holy Water Temple" },
      { activity: "Ubud Monkey Forest" },
      { activity: "Tegalalang Rice Terrace" },
      { activity: "Luwak Coffee Plantation" },
    ],
    included: ["Full day tour (10 hours)", "Private car + driver", "Mineral water", "Petrol", "Parking fee"],
    excluded: ["Entrance ticket", "Lunch", "Other personal expenses"],
  },
  {
    slug: "east-bali",
    imageFolder: "east-bali",
    title: "East Bali Tour",
    description:
      "Journey along Bali's dramatic east coast, from the famous 'Gate of Heaven' at Lempuyang Temple to the royal water palaces of Tirta Gangga and Taman Ujung. Finish the day relaxing on the black sand of Virgin Beach.",
    duration: "Full day (10 hours)",
    price: { amount: "55", currency: "USD" },
    coverImage: { src: "/images/tours/east-bali/cover.webp", alt: "East Bali tour — cover photo" },
    gallery: [],
    itinerary: [
      { activity: "Lempuyang Temple (Gate of Heaven)" },
      { activity: "Tirta Gangga" },
      { activity: "Taman Ujung" },
      { activity: "Virgin Beach" },
    ],
    included: ["Full day tour (10 hours)", "Private car + driver", "Mineral water", "Petrol", "Parking fee"],
    excluded: ["Entrance ticket", "Lunch", "Other personal expenses"],
  },
  {
    slug: "north-bali",
    imageFolder: "north-bali",
    title: "North Bali Tour",
    description:
      "Discover Bali's quieter, greener side on this scenic day trip north. Visit the lakeside Ulun Danu Beratan Temple and the Instagram-famous Handara Gate, take in sweeping views from Wanagiri Hidden Hill, and walk through the endless green terraces of Jatiluwih.",
    duration: "Full day (10 hours)",
    price: { amount: "50", currency: "USD" },
    coverImage: { src: "/images/tours/north-bali/cover.webp", alt: "North Bali tour — cover photo" },
    gallery: [],
    itinerary: [
      { activity: "Ulun Danu Beratan Temple" },
      { activity: "Wanagiri Hidden Hill" },
      { activity: "Handara Gate" },
      { activity: "Jatiluwih Rice Terrace" },
    ],
    included: ["Full day tour (10 hours)", "Private car + driver", "Mineral water", "Petrol", "Parking fee"],
    excluded: ["Entrance ticket", "Lunch", "Other personal expenses"],
  },
  {
    slug: "nusa-penida",
    imageFolder: "nusa-penida",
    title: "Nusa Penida Tour",
    description:
      "Cross by fast boat to Nusa Penida for a day of Bali's most photographed landscapes — the dramatic clifftop view at Kelingking, the natural pool at Angel Billabong, and the turquoise waters of Broken Beach and Crystal Bay.",
    duration: "[CLIENT CONFIRMATION REQUIRED]",
    price: { amount: "60", currency: "USD" },
    priceNote: "/pax (min 2 pax)",
    coverImage: { src: "/images/tours/nusa-penida/cover.webp", alt: "Nusa Penida tour — cover photo" },
    gallery: [],
    itinerary: [
      { activity: "Angel Billabong" },
      { activity: "Broken Beach" },
      { activity: "Kelingking Cliff" },
      { activity: "Crystal Bay" },
    ],
    included: [
      "Hotel transfer (pick-up and return)",
      "Fast boat return transfer",
      "Boat insurance cover",
      "Lunch at restaurant",
      "Car, petrol, ticket all destination",
      "Driver speaking English / guide",
    ],
    excluded: ["[CLIENT CONFIRMATION REQUIRED]"],
  },
  {
    slug: "nusa-penida-snorkeling",
    imageFolder: "nusa-penida-snorkeling",
    title: "Nusa Penida Snorkeling Tour",
    description:
      "Combine Nusa Penida's iconic clifftop views with a private boat snorkeling trip. Swim alongside colorful reef fish, then explore Angel Billabong, Broken Beach and Kelingking Cliff on this full day of island adventure.",
    duration: "[CLIENT CONFIRMATION REQUIRED]",
    price: { amount: "90", currency: "USD" },
    priceNote: "/pax (min 2 pax)",
    coverImage: {
      src: "/images/tours/nusa-penida-snorkeling/cover.webp",
      alt: "Nusa Penida snorkeling tour — cover photo",
    },
    gallery: [],
    // Destination list image was cut off after "Kelingking Cliff" — one more
    // item (likely a snorkeling spot) wasn't visible. [CLIENT CONFIRMATION REQUIRED]
    itinerary: [
      { activity: "Angel Billabong" },
      { activity: "Broken Beach" },
      { activity: "Kelingking Cliff" },
      { activity: "[CLIENT CONFIRMATION REQUIRED]" },
    ],
    included: [
      "Hotel transfer (pick-up and return)",
      "Fast boat return transfer",
      "Boat insurance cover",
      "Lunch at restaurant",
      "Car, petrol, ticket all destination",
      "Driver speaking English / guide",
    ],
    excluded: ["[CLIENT CONFIRMATION REQUIRED]"],
  },
  {
    slug: "jeep-sunrise-black-lava",
    imageFolder: "jeep-sunrise-black-lava",
    title: "Jeep Sunrise & Black Lava Tour",
    description:
      "Ride an open-top jeep through the misty highlands to catch the sunrise over Mount Batur, then explore the otherworldly black lava fields left behind by its eruption. A hot breakfast with coffee and tea along the way makes for the perfect early start. You can combine your jeep tour with other activities — let us know and we can discuss!",
    duration: "[CLIENT CONFIRMATION REQUIRED]",
    price: { amount: "55", currency: "USD" },
    priceNote: "/pax (min 2 pax)",
    coverImage: {
      src: "/images/tours/jeep-sunrise-black-lava/cover.webp",
      alt: "Jeep sunrise and black lava tour — cover photo",
    },
    gallery: [],
    itinerary: [{ activity: "Sunrise view" }, { activity: "Black lava trip" }],
    included: [
      "Jeep tour with driver",
      "Retribution fee",
      "Breakfast",
      "Hot coffee and tea",
      "Hotel pick-up and return",
    ],
    excluded: ["[CLIENT CONFIRMATION REQUIRED]"],
  },
  {
    slug: "blue-lagoon-snorkeling",
    imageFolder: "blue-lagoon-snorkeling",
    title: "Blue Lagoon Snorkeling Tour",
    description:
      "Spend a relaxed morning snorkeling in the calm, crystal-clear waters of Blue Lagoon and Tanjung Jepun. Feed friendly reef fish from your private boat, then rinse off at the shower facilities before heading back to your hotel. You can combine this with other activities like ATV quad biking, rafting or Bali Swing — let us know and we'll get you the best combo price!",
    duration: "2 hours (starts 9 AM)",
    price: { amount: "30", currency: "USD" },
    priceNote: "/pax (min 3 pax)",
    coverImage: {
      src: "/images/tours/blue-lagoon-snorkeling/cover.webp",
      alt: "Blue Lagoon snorkeling tour — cover photo",
    },
    gallery: [],
    itinerary: [{ activity: "Blue Lagoon" }, { activity: "Tanjung Jepun" }],
    included: [
      "Private boat",
      "Feeding fish",
      "Snorkeling equipment",
      "Mineral water on board",
      "Shower facilities after snorkeling",
      "Hotel pick-up and return",
    ],
    excluded: ["[CLIENT CONFIRMATION REQUIRED]"],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
