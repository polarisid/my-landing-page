// Generates favicon PNGs, app icons and the social share image (og-image.png)
// from the dacari brand marks. Run: node scripts/generate-assets.mjs
// Requires @resvg/resvg-js (install with: npm i @resvg/resvg-js --no-save)
// and the Chakra Petch TTFs referenced in FONT_DIR.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PUBLIC = resolve(ROOT, "public");
const FONT_DIR =
  process.env.DACARI_FONT_DIR ||
  "C:/Users/danie/AppData/Local/Temp/claude/D--Projetos---DEV-my-landing-page/4d76a955-a847-4ace-ba00-fee5fd37194e/scratchpad/fonts";
const fontFiles = [
  `${FONT_DIR}/ChakraPetch-Bold.ttf`,
  `${FONT_DIR}/ChakraPetch-SemiBold.ttf`,
  `${FONT_DIR}/ChakraPetch-Medium.ttf`,
];

const LIME = "#C8F23C";
const CREAM = "#ECEAE4";
const MUTED = "#9AA3B2";

// dacari cursor mark (mark-space coords), reused across sizes
const MARK = `
  <path fill="${CREAM}" d="M56 42 H32 A24 24 0 0 0 32 90 H56 Z"/>
  <rect fill="${CREAM}" x="62" y="28" width="24" height="62"/>
  <rect fill="${LIME}" x="62" y="4" width="24" height="18"/>`;

// --- App / favicon icon: mark on a dark rounded square ---
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0A0B0F"/>
  <rect x="66" y="66" width="380" height="380" rx="96" fill="#111318" stroke="#333A49" stroke-width="4"/>
  <g transform="translate(124,124) scale(2.8)">${MARK}</g>
</svg>`;

// --- Social share image (1200x630) with the lockup embedded ---
const lockupB64 = readFileSync(
  resolve(ROOT, "src", "img", "dacari-lockup.png")
).toString("base64");

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="88%" cy="12%" r="55%">
      <stop offset="0" stop-color="${LIME}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${LIME}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A0B0F"/>
  <rect width="1200" height="630" fill="url(#g1)"/>

  <!-- faint mark watermark, right -->
  <g opacity="0.06" transform="translate(880,150) scale(4.2)">${MARK}</g>

  <!-- lockup -->
  <image href="data:image/png;base64,${lockupB64}" x="76" y="66" height="70" />

  <!-- headline -->
  <text x="80" y="330" font-family="Chakra Petch" font-weight="700" font-size="76" letter-spacing="1" fill="${CREAM}">Sistemas que resolvem</text>
  <text x="80" y="418" font-family="Chakra Petch" font-weight="700" font-size="76" letter-spacing="1" fill="${CREAM}">problemas <tspan fill="${LIME}">reais.</tspan></text>

  <!-- subtitle -->
  <text x="82" y="486" font-family="Chakra Petch" font-weight="500" font-size="30" letter-spacing="1" fill="${MUTED}">Software sob medida <tspan fill="${LIME}">·</tspan> IA para empresas</text>

  <!-- footer url -->
  <text x="82" y="566" font-family="Chakra Petch" font-weight="600" font-size="24" letter-spacing="2" fill="${LIME}">dacari.com.br</text>
</svg>`;

function render(svg, opts, out) {
  const r = new Resvg(svg, {
    fitTo: opts,
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "Chakra Petch" },
    background: "rgba(0,0,0,0)",
  });
  writeFileSync(resolve(PUBLIC, out), r.render().asPng());
  console.log("✓", out);
}

for (const size of [16, 32, 180, 192, 512]) {
  const name =
    size === 180
      ? "apple-touch-icon.png"
      : size === 16 || size === 32
      ? `favicon-${size}.png`
      : `icon-${size}.png`;
  render(iconSvg, { mode: "width", value: size }, name);
}
render(ogSvg, { mode: "original" }, "og-image.png");

console.log("Done.");
