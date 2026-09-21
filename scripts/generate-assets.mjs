// Generates favicon PNGs, app icons and the social share image (og-image.png)
// from the DACARI brand marks. Run: node scripts/generate-assets.mjs
// Requires @resvg/resvg-js (install with: npm i @resvg/resvg-js --no-save)
// and the Chakra Petch TTFs referenced in FONT_DIR.
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = resolve(__dirname, "..", "public");
const FONT_DIR =
  process.env.DACARI_FONT_DIR ||
  "C:/Users/danie/AppData/Local/Temp/claude/D--Projetos---DEV-my-landing-page/4d76a955-a847-4ace-ba00-fee5fd37194e/scratchpad/fonts";
const fontFiles = [
  `${FONT_DIR}/ChakraPetch-Bold.ttf`,
  `${FONT_DIR}/ChakraPetch-SemiBold.ttf`,
  `${FONT_DIR}/ChakraPetch-Medium.ttf`,
];

const AMBER = "#FFB020";
const TEAL = "#37E0C8";

// --- App / favicon icon: DC (Direct Current) mark on a dark square ---
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0A0B0F"/>
  <rect x="66" y="66" width="380" height="380" rx="96" fill="#111318" stroke="#333A49" stroke-width="4"/>
  <rect x="146" y="212" width="220" height="34" rx="17" fill="${AMBER}"/>
  <rect x="146" y="286" width="56" height="34" rx="17" fill="${TEAL}"/>
  <rect x="228" y="286" width="56" height="34" rx="17" fill="${TEAL}"/>
  <rect x="310" y="286" width="56" height="34" rx="17" fill="${TEAL}"/>
</svg>`;

// --- Social share image (1200x630) ---
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="88%" cy="12%" r="55%">
      <stop offset="0" stop-color="${AMBER}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${AMBER}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="6%" cy="80%" r="55%">
      <stop offset="0" stop-color="${TEAL}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${TEAL}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A0B0F"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>

  <!-- faint DC watermark, right -->
  <g opacity="0.12">
    <rect x="820" y="250" width="300" height="30" rx="15" fill="${AMBER}"/>
    <rect x="820" y="320" width="80" height="30" rx="15" fill="${TEAL}"/>
    <rect x="930" y="320" width="80" height="30" rx="15" fill="${TEAL}"/>
    <rect x="1040" y="320" width="80" height="30" rx="15" fill="${TEAL}"/>
  </g>

  <!-- logo -->
  <g transform="translate(80,64)">
    <rect x="0" y="0" width="56" height="56" rx="15" fill="#111318" stroke="#333A49" stroke-width="1.5"/>
    <rect x="12" y="24" width="32" height="6" rx="3" fill="${AMBER}"/>
    <rect x="12" y="35" width="8" height="6" rx="3" fill="${TEAL}"/>
    <rect x="24" y="35" width="8" height="6" rx="3" fill="${TEAL}"/>
    <rect x="36" y="35" width="8" height="6" rx="3" fill="${TEAL}"/>
    <text x="72" y="39" font-family="Chakra Petch" font-weight="700" font-size="30" letter-spacing="4" fill="#EDEFF3">DACARI</text>
  </g>

  <!-- headline -->
  <text x="80" y="330" font-family="Chakra Petch" font-weight="700" font-size="76" letter-spacing="1" fill="#EDEFF3">Sistemas que resolvem</text>
  <text x="80" y="418" font-family="Chakra Petch" font-weight="700" font-size="76" letter-spacing="1" fill="#EDEFF3">problemas <tspan fill="${AMBER}">reais.</tspan></text>

  <!-- subtitle -->
  <text x="82" y="486" font-family="Chakra Petch" font-weight="500" font-size="30" letter-spacing="1" fill="#9AA3B2">Software sob medida <tspan fill="${TEAL}">·</tspan> IA para empresas</text>

  <!-- footer url -->
  <text x="82" y="566" font-family="Chakra Petch" font-weight="600" font-size="24" letter-spacing="2" fill="${AMBER}">dacari.com.br</text>
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

// icons
for (const size of [16, 32, 180, 192, 512]) {
  const name =
    size === 180 ? "apple-touch-icon.png" : size === 16 || size === 32
      ? `favicon-${size}.png`
      : `icon-${size}.png`;
  render(iconSvg, { mode: "width", value: size }, name);
}
// social image
render(ogSvg, { mode: "original" }, "og-image.png");

console.log("Done.");
