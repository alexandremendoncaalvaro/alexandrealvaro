// Converts public/og.svg → public/og.png using sharp (available as transitive dep).
// Run once: node scripts/generate-og.mjs
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const { default: sharp } = await import(`${root}/node_modules/sharp/lib/index.js`);

const svg = readFileSync(resolve(root, "public/og.svg"));

await sharp(svg)
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(resolve(root, "public/og.png"));

console.log("✓ public/og.png generated (1200×630)");
