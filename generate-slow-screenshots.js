/**
 * Special script for slow-loading sites
 * Uses more lenient loading conditions
 */

const puppeteer = require('puppeteer');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'src', 'images');

const slowSites = [
  {
    name: 'Common-Destination-Final-Project',
    url: 'https://commondestination.netlify.app/'
  },
  {
    name: 'Portfolio_React',
    url: 'https://pierluigi.vercel.app/'
  }
];

async function takeScreenshot(url, filename) {
  console.log(`📸 Taking screenshot of: ${filename}`);
  console.log(`   URL: ${url}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
    });

    // Use domcontentloaded instead of networkidle0 for faster results
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });

    // Wait for page to render
    await new Promise(resolve => setTimeout(resolve, 3000));

    const outputPath = path.join(IMAGES_DIR, `${filename.toLowerCase()}.png`);
    await page.screenshot({
      path: outputPath,
      type: 'png',
    });

    console.log(`   ✅ Saved to: ${filename.toLowerCase()}.png\n`);
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}\n`);
  } finally {
    await browser.close();
  }
}

async function generateSlowScreenshots() {
  console.log('🚀 Generating screenshots for slow-loading sites\n');
  console.log('=' .repeat(50) + '\n');

  for (const site of slowSites) {
    await takeScreenshot(site.url, site.name);
  }

  console.log('=' .repeat(50));
  console.log('\n✅ Done!\n');
}

generateSlowScreenshots();
