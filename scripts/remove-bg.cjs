// Flood-fill background removal: only removes the white/near-white region
// connected to the image border, so it can't eat into enclosed white areas
// (like the letters' fill) that are sealed off by a darker outline.
const sharp = require("sharp");

const input = process.argv[2];
const output = process.argv[3];

function isBackground(r, g, b) {
  const avg = (r + g + b) / 3;
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  return avg > 222 && sat < 22;
}

async function main() {
  const img = sharp(input).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const visited = new Uint8Array(width * height);
  const stack = [];

  function idx(x, y) {
    return y * width + x;
  }

  for (let x = 0; x < width; x++) {
    stack.push([x, 0], [x, height - 1]);
  }
  for (let y = 0; y < height; y++) {
    stack.push([0, y], [width - 1, y]);
  }

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

  await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
  console.log("done:", output);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
