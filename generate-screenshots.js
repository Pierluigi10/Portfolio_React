/**
 * Automatic Screenshot Generator for Showcase Projects
 *
 * This script:
 * 1. Fetches all repos with "showcase" topic from GitHub
 * 2. Takes screenshots of their live websites
 * 3. Saves them to src/images/
 * 4. Updates the image mapping
 *
 * Usage: node generate-screenshots.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = "Pierluigi10";
const IMAGES_DIR = path.join(__dirname, 'src', 'images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function fetchShowcaseRepos() {
  console.log('🔍 Fetching showcase repos from GitHub...\n');

  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
  );

  const repos = await response.json();

  // URL overrides for repos with incorrect homepage URLs
  const urlOverrides = {
    "daniel-meyer-repo": "https://daniel-meyer-repo.vercel.app/",
    "naturalization-test": "https://german-naturalization-test.vercel.app/",
    "github-repos-finder": "https://github-repos-finder.vercel.app/",
  };

  return repos
    .filter(repo => !repo.fork && repo.topics && repo.topics.includes('showcase'))
    .map(repo => ({
      ...repo,
      homepage: urlOverrides[repo.name] || repo.homepage || repo.html_url
    }))
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

async function takeScreenshot(url, outputPath, repoName) {
  console.log(`📸 Taking screenshot of: ${repoName}`);
  console.log(`   URL: ${url}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport size
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
    });

    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    // Wait a bit for any animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot
    await page.screenshot({
      path: outputPath,
      type: 'png',
    });

    console.log(`   ✅ Saved to: ${path.basename(outputPath)}\n`);
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}\n`);
  } finally {
    await browser.close();
  }
}

async function generateAllScreenshots() {
  console.log('🚀 Starting Screenshot Generation\n');
  console.log('=' .repeat(50) + '\n');

  try {
    const repos = await fetchShowcaseRepos();

    if (repos.length === 0) {
      console.log('❌ No repositories found with "showcase" topic and homepage URL');
      return;
    }

    console.log(`✅ Found ${repos.length} repos with homepage:\n`);
    repos.forEach((repo, i) => {
      console.log(`   ${i + 1}. ${repo.name}`);
      console.log(`      ${repo.homepage}\n`);
    });

    console.log('=' .repeat(50) + '\n');

    // Generate screenshots one by one
    for (const repo of repos) {
      const filename = `${repo.name.toLowerCase()}.png`;
      const outputPath = path.join(IMAGES_DIR, filename);

      await takeScreenshot(repo.homepage, outputPath, repo.name);
    }

    console.log('=' .repeat(50));
    console.log('\n🎉 All screenshots generated successfully!\n');
    console.log('📁 Screenshots saved in: src/images/\n');
    console.log('Next steps:');
    console.log('1. Check the generated images in src/images/');
    console.log('2. Run the app to see them: npm run dev');
    console.log('3. Update image mapping if needed\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
generateAllScreenshots();
