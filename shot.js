const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const page = await browser.newPage({ viewport: { width: 1650, height: 1650 }, deviceScaleFactor: 2 });
  await page.goto('file:///workspace/newsimg18-entry/news.html');
  await page.waitForTimeout(800);
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log('scrollHeight', h);
  await page.screenshot({ path: '/workspace/newsimg18-entry/entry.png', clip: { x: 0, y: 0, width: 1650, height: Math.min(h, 1650) } });
  await browser.close();
  console.log('done');
})();
