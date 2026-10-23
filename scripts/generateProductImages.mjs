/**
 * Nexkart Product Image Generation Script
 * Generates back, lifestyle, and detail images for all products missing them.
 * Uses the Gemini API via @google/generative-ai.
 *
 * Usage:
 *   node scripts/generateProductImages.mjs [--prod prod-04] [--dry-run]
 *
 * Env: GEMINI_API_KEY must be set.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const GENERATION_PLAN = [
  { id: "prod-04", views: [
    { filename: "back.webp", prompt: "Back view of a male model wearing a lightweight navy blue wool blazer with fine windowpane check pattern, notched lapels. Editorial fashion photography, clean light gray studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a stylish man in a lightweight navy blue wool blazer worn with white shirt and chinos, walking on a city street, natural light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-05", views: [
    { filename: "back.webp", prompt: "Back view of a female model wearing a fitted tailored wool jacket in charcoal grey, structured shoulders, single-button closure. Editorial fashion photography, clean white studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a stylish woman in a fitted charcoal grey wool jacket paired with slim trousers, in a modern office setting, natural window light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-06", views: [
    { filename: "back.webp", prompt: "Back view of a model wearing a chunky ribbed cashmere sweater in cream oatmeal color, crew neck. Editorial fashion photography, clean light gray studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a woman wearing a chunky cream cashmere ribbed sweater, sitting on a couch with a warm mug of tea, cozy autumn interior, warm lighting, editorial fashion, no text, no watermarks." }
  ]},
  { id: "prod-07", views: [
    { filename: "back.webp", prompt: "Back view of a male model wearing a fine merino wool knit polo in forest green, ribbed collar and cuffs. Editorial fashion photography, clean light gray studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a man wearing a fine merino knit polo in green with chinos outdoors in a park, natural light, casual editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-08", views: [
    { filename: "back.webp", prompt: "Back view of a female model wearing a long floor-length silk evening gown in deep burgundy red, elegant drape, open back. Editorial fashion photography, dark moody studio background, professional lighting, no text, no watermarks." },
    { filename: "detail.webp", prompt: "Close-up detail shot of the fabric and draping of a luxurious long silk evening dress in deep burgundy red, showing the fluid silk texture. Macro editorial fashion photography, clean dark background, no text, no watermarks." }
  ]},
  { id: "prod-09", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a woman wearing a pleated midi dress in dusty blue cotton, walking in a botanical garden, sunlight filtering through leaves, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-10", views: [
    { filename: "back.webp", prompt: "Back view of a female model wearing a relaxed fit white cotton poplin shirt, slightly oversized, box pleat at back. Editorial fashion photography, clean ivory studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a woman wearing a relaxed white poplin shirt tucked into wide trousers, working at a minimalist desk, natural window light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-11", views: [
    { filename: "back.webp", prompt: "Back view of a female model wearing wide-leg pleated high-waist trousers in warm camel wool, elegant drape, cropped cuffs. Editorial fashion photography, clean light studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a woman in wide-leg camel pleated trousers paired with a simple tucked top, walking in a city, natural light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-12", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a woman carrying a classic structured leather tote bag in tan cognac color over her shoulder in a city, natural light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-13", views: [
    { filename: "back.webp", prompt: "Back heel view of chunky-soled leather penny loafers in dark cognac brown, showing the thick rubber sole and heel detail. Product photography, clean white studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot showing feet wearing chunky-sole cognac leather loafers on cobblestone street, jeans cropped above, urban street photography, editorial fashion, no text, no watermarks." }
  ]},
  { id: "prod-14", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a person wearing a warm cashmere scarf in camel draped loosely around the neck, autumn park setting, warm natural light, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-15", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a man wearing classic dark indigo selvedge denim jeans with a white tee, sitting on urban steps, warm street photography, editorial fashion, no text, no watermarks." }
  ]},
  { id: "prod-16", views: [
    { filename: "detail.webp", prompt: "Close-up macro shot of a sculptural sterling silver signet cuff bracelet showing the brushed and polished surface detail, on a black velvet display surface. Jewelry product photography, clean dark background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a wrist wearing a sculptural silver signet cuff bracelet, with minimal clothing suggesting luxury, soft natural window light, editorial jewelry photography, no text, no watermarks." }
  ]},
  { id: "prod-17", views: [
    { filename: "back.webp", prompt: "Back view of a male model wearing a classic Oxford button-down shirt in pale blue, box pleat at back yoke. Editorial fashion photography, clean white studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a man in a pale blue Oxford button-down shirt with jeans in a coffee shop, natural light, casual editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-18", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a man wearing a camp collar relaxed linen shirt in sage green, on a sun-dappled patio with ocean in background, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-19", views: [
    { filename: "back.webp", prompt: "Back side view of minimalist white leather low-top sneakers, showing clean heel tab and sole profile. Product photography, pure white studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of feet wearing minimalist white leather low-top sneakers with cropped trousers on a clean urban sidewalk, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-20", views: [
    { filename: "back.webp", prompt: "Back view of classic suede Chelsea ankle boots in tan camel color, showing the elastic side panel and stacked leather heel. Product photography, clean beige studio background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of feet wearing camel suede Chelsea ankle boots with slim jeans on autumn leaves, editorial fashion photography, no text, no watermarks." }
  ]},
  { id: "prod-21", views: [
    { filename: "detail.webp", prompt: "Close-up macro shot of an 18K gold vermeil box chain necklace showing the precise chain links and warm golden color, on a white marble surface. Jewelry product photography, clean white background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a neck wearing a delicate 18K gold box chain necklace against bare skin, minimalist aesthetic, editorial jewelry photography, soft light, no text, no watermarks." }
  ]},
  { id: "prod-22", views: [
    { filename: "detail.webp", prompt: "Close-up macro shot of a brushed silver signet ring with a black onyx stone, showing the engraved detail on a marble surface. Jewelry product photography, clean white background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a hand wearing a brushed silver onyx signet ring, minimal aesthetic, soft natural light, editorial jewelry photography, no text, no watermarks." }
  ]},
  { id: "prod-23", views: [
    { filename: "detail.webp", prompt: "Close-up macro shot of a luxury Santal and Amber Eau de Parfum glass bottle with gold cap, showing the stopper detail and liquid amber-toned fragrance inside. Beauty product photography, clean cream background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle flat-lay of a luxury santal amber perfume bottle arranged with dried flowers and candles on a marble surface. Editorial beauty photography, warm tones, no text, no watermarks." }
  ]},
  { id: "prod-24", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle flat-lay of a premium botanical face oil dark glass dropper bottle arranged with fresh botanical ingredients on a white linen surface. Editorial beauty photography, natural daylight, no text, no watermarks." }
  ]},
  { id: "prod-25", views: [
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a smoked cedar and fig luxury scented candle burning with a gentle flame, surrounded by cedar wood and dried fig on a rustic wooden surface. Editorial lifestyle photography, warm golden light, no text, no watermarks." }
  ]},
  { id: "prod-26", views: [
    { filename: "back.webp", prompt: "Overhead flat-lay product shot of a curated luxury gift set including a silk scarf, perfume bottle, and decorative box, arranged elegantly. Premium editorial product photography, clean white background, professional lighting, no text, no watermarks." },
    { filename: "lifestyle.webp", prompt: "Lifestyle shot of a luxurious gift set box with silk scarf and fragrance being opened, warm festive setting with ribbon and tissue paper, editorial gift photography, no text, no watermarks." }
  ]},
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function generateAndSave(model, prompt, outputPath) {
  console.log(`  Generating: ${path.basename(outputPath)} ...`);
  const result = await model.generateContent([{ text: prompt }]);
  const parts = result.response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imagePart) throw new Error("No image returned from API");
  const buffer = Buffer.from(imagePart.inlineData.data, "base64");
  fs.writeFileSync(outputPath, buffer);
  console.log(`  SAVED: ${outputPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const targetProd = args.find(a => a.startsWith("prod-"));

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey && !dryRun) { console.error("GEMINI_API_KEY required"); process.exit(1); }

  const genAI = dryRun ? null : new GoogleGenerativeAI(apiKey);
  const model = dryRun ? null : genAI.getGenerativeModel({
    model: "gemini-2.0-flash-preview-image-generation",
    generationConfig: { responseModalities: ["TEXT", "IMAGE"] }
  });

  const plan = targetProd ? GENERATION_PLAN.filter(p => p.id === targetProd) : GENERATION_PLAN;
  let generated = 0, skipped = 0, errors = 0;

  for (const product of plan) {
    const prodDir = path.join(ROOT, "public", "images", "products", product.id);
    if (!fs.existsSync(prodDir)) fs.mkdirSync(prodDir, { recursive: true });
    console.log(`\n${product.id}:`);

    for (const view of product.views) {
      const outputPath = path.join(prodDir, view.filename);
      if (fs.existsSync(outputPath)) { console.log(`  Already exists: ${view.filename}`); skipped++; continue; }
      if (dryRun) { console.log(`  [DRY-RUN] Would generate: ${view.filename}`); generated++; continue; }

      let retries = 2;
      while (retries-- > 0) {
        try {
          await generateAndSave(model, view.prompt, outputPath);
          generated++;
          await sleep(3000);
          break;
        } catch (err) {
          console.error(`  Error: ${err.message}`);
          errors++;
          if (err.message?.includes("429") || err.message?.includes("RESOURCE_EXHAUSTED")) {
            console.log("  Quota hit. Waiting 120s before retrying...");
            await sleep(120000);
          } else { break; }
        }
      }
    }
  }

  console.log(`\nDone! Generated: ${generated}, Skipped: ${skipped}, Errors: ${errors}`);
}

main().catch(console.error);
