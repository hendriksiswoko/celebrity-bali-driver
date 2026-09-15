// Client wants the full branded "team card" kept intact (logo, neon,
// vehicle, name/phone/plate text) rather than cropped to just the face.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const jobs = [
  ["public/images/drivers/gusmang", "WhatsApp Image 2026-09-15 at 2.38.47 PM.jpeg"],
  ["public/images/drivers/jeremy", "WhatsApp Image 2026-09-15 at 2.38.47 PM (1).jpeg"],
  ["public/images/drivers/gusde", "WhatsApp Image 2026-09-15 at 2.38.48 PM.jpeg"],
  ["public/images/drivers/ngurah", "WhatsApp Image 2026-09-15 at 2.38.49 PM (2).jpeg"],
  ["public/images/drivers/gede", "WhatsApp Image 2026-09-15 at 2.38.50 PM (1).jpeg"],
  ["public/images/drivers/nyoman", "WhatsApp Image 2026-09-15 at 2.38.50 PM.jpeg"],
  ["public/images/drivers/helmi", "WhatsApp Image 2026-09-15 at 2.38.51 PM (1).jpeg"],
  ["public/images/drivers/alan", "WhatsApp Image 2026-09-15 at 2.38.51 PM (2).jpeg"],
  ["public/images/drivers/catur", "WhatsApp Image 2026-09-15 at 2.38.51 PM.jpeg"],
  ["public/images/drivers/alit", "WhatsApp Image 2026-09-15 at 2.38.52 PM.jpeg"],
];

async function main() {
  for (const [outDir, filename] of jobs) {
    const input = path.join("scripts/_source-backup/drivers", filename);
    const output = path.join(outDir, "portrait.webp");
    fs.mkdirSync(outDir, { recursive: true });
    await sharp(input)
      .resize(1000, 1400, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(output);
    console.log(`${input} -> ${output}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
