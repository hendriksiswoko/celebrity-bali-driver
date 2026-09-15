// Converts downloaded stock photos into tour cover.webp files.
// No forced aspect crop here — object-cover in the browser handles cropping
// per context (4:3 card vs 16:7 hero), so we just cap resolution and convert.
const sharp = require("sharp");

const jobs = [
  ["scripts/_stock/south-bali.jpg", "public/images/tours/south-bali/cover.webp"],
  ["scripts/_stock/ubud-culture.jpg", "public/images/tours/ubud-culture/cover.webp"],
  ["scripts/_stock/east-bali.jpg", "public/images/tours/east-bali/cover.webp"],
  ["scripts/_stock/north-bali.jpg", "public/images/tours/north-bali/cover.webp"],
  ["scripts/_stock/nusa-penida.jpg", "public/images/tours/nusa-penida/cover.webp"],
  ["scripts/_stock/nusa-penida-snorkeling.jpg", "public/images/tours/nusa-penida-snorkeling/cover.webp"],
  ["scripts/_stock/jeep-sunrise-black-lava.jpg", "public/images/tours/jeep-sunrise-black-lava/cover.webp"],
  ["scripts/_stock/blue-lagoon-snorkeling.jpg", "public/images/tours/blue-lagoon-snorkeling/cover.webp"],
];

async function main() {
  for (const [input, output] of jobs) {
    await sharp(input)
      .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(output);
    console.log(`${input} -> ${output}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
