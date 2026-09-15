// Crops the driver's face/torso out of the branded "team card" promo
// graphics (logo, big name text, car all compete for attention, so a pure
// saliency auto-crop doesn't isolate the person) — trims to the upper-left
// region where the portrait sits on every card, then lets a saliency-based
// cover-crop do the final polish within that tighter window.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const jobs = [
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.47 PM.jpeg", "public/images/drivers/gusmang/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.47 PM (1).jpeg", "public/images/drivers/jeremy/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.48 PM.jpeg", "public/images/drivers/gusde/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.49 PM (2).jpeg", "public/images/drivers/ngurah/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.50 PM (1).jpeg", "public/images/drivers/gede/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.50 PM.jpeg", "public/images/drivers/nyoman/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.51 PM (1).jpeg", "public/images/drivers/helmi/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.51 PM (2).jpeg", "public/images/drivers/alan/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.51 PM.jpeg", "public/images/drivers/catur/portrait.webp"],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.52 PM.jpeg", "public/images/drivers/alit/portrait.webp"],
];

async function main() {
  for (const [input, output] of jobs) {
    fs.mkdirSync(path.dirname(output), { recursive: true });
    const m = await sharp(input).metadata();
    const left = Math.round(m.width * 0.1);
    const top = Math.round(m.height * 0.02);
    const width = Math.round(m.width * 0.8);
    const height = Math.round(m.height * 0.52);
    await sharp(input)
      .extract({ left, top, width, height })
      .resize(900, 1125, { fit: "cover", position: "attention" })
      .webp({ quality: 90 })
      .toFile(output);
    console.log(`${input} -> ${output}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
