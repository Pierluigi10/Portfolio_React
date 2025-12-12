const puppeteer = require('puppeteer');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'src', 'images');

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

    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000
    });

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

takeScreenshot('https://github-repos-finder.vercel.app/', 'github-repos-finder');
