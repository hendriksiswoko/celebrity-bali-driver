// Converts uploaded vehicle photos into the project's standard main.webp.
// Uses fit "contain" (pad, never crop) so the whole vehicle stays visible —
// a prior version used "cover" and ended up cropping off wheels/rear ends.
const sharp = require("sharp");

const jobs = [
  ["public/images/vehicles/apv/apv.jpg", "public/images/vehicles/apv/main.webp"],
  ["public/images/vehicles/avanza-xenia/avanza.jpg", "public/images/vehicles/avanza-xenia/main.webp"],
  ["public/images/vehicles/hiace-luxury-premio/premio.jpg", "public/images/vehicles/hiace-luxury-premio/main.webp"],
  ["public/images/vehicles/innova-zenix/zennix.jpg", "public/images/vehicles/innova-zenix/main.webp"],
  ["public/images/vehicles/toyota-alphard/alphard.jpg", "public/images/vehicles/toyota-alphard/main.webp"],
  ["public/images/vehicles/toyota-hiace/hi ace.jpg", "public/images/vehicles/toyota-hiace/main.webp"],
];

async function main() {
  for (const [input, output] of jobs) {
    await sharp(input)
      .resize(1200, 900, { fit: "contain", background: { r: 250, g: 250, b: 250, alpha: 1 } })
      .webp({ quality: 90 })
      .toFile(output);
    console.log(`${input} -> ${output}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
