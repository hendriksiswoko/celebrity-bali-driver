// Removes the plain studio background from a vehicle photo via border
// flood-fill (only removes background connected to the image edge, so it
// can't eat into the car body even where the paint itself is bright/white).
// avgMin/satMax can be tuned per photo when the studio floor is dim enough
// to need a lower brightness cutoff — only safe for dark-bodied cars, since
// a low avgMin risks eating into a light-colored car's paint.
const sharp = require("sharp");

const input = process.argv[2];
const output = process.argv[3];
const avgMin = Number(process.argv[4] || 225);
const satMax = Number(process.argv[5] || 18);

function isBackground(r, g, b) {
  const avg = (r + g + b) / 3;
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  return avg > avgMin && sat < satMax;
}

async function main() {
  const img = sharp(input).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const visited = new Uint8Array(width * height);
  const stack = [];
  const idx = (x, y) => y * width + x;

  for (let x = 0; x < width; x++) stack.push([x, 0], [x, height - 1]);
  for (let y = 0; y < height; y++) stack.push([0, y], [width - 1, y]);

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const i = idx(x, y);
    if (visited[i]) continue;
    visited[i] = 1;

    const p = i * channels;
    const r = data[p];
    const g = data[p + 1];
    const b = data[p + 2];
    if (!isBackground(r, g, b)) continue;

    data[p + 3] = 0;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  const cutout = sharp(data, { raw: { width, height, channels } }).png();
  const trimmed = await cutout.trim({ threshold: 10 }).toBuffer();

  await sharp(trimmed)
    .resize(1200, 900, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(output);

  console.log(`${input} -> ${output} (avgMin=${avgMin}, satMax=${satMax})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
