const sharp = require("sharp");

const jobs = [
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.51 PM (1).jpeg", "public/images/drivers/helmi/portrait.webp", { left: 0.15, top: 0.22, width: 0.75, height: 0.4 }],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.52 PM.jpeg", "public/images/drivers/alit/portrait.webp", { left: 0.55, top: 0.45, width: 0.45, height: 0.5 }],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.49 PM (2).jpeg", "public/images/drivers/ngurah/portrait.webp", { left: 0.35, top: 0.4, width: 0.6, height: 0.55 }],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.50 PM.jpeg", "public/images/drivers/nyoman/portrait.webp", { left: 0.35, top: 0.45, width: 0.6, height: 0.5 }],
  ["public/images/drivers/WhatsApp Image 2026-09-15 at 2.38.51 PM (2).jpeg", "public/images/drivers/alan/portrait.webp", { left: 0.55, top: 0.35, width: 0.45, height: 0.6 }],
];

async function main() {
  for (const [input, output, r] of jobs) {
    const m = await sharp(input).metadata();
    const left = Math.round(m.width * r.left);
    const top = Math.round(m.height * r.top);
    const width = Math.round(m.width * r.width);
    const height = Math.round(m.height * r.height);
    await sharp(input)
      .extract({ left, top, width, height })
      .resize(900, 1125, { fit: "cover", position: "attention" })
      .webp({ quality: 90 })
      .toFile(output);
    console.log(`${output} <- crop(${left},${top},${width},${height})`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
