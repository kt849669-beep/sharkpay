import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  try {
    console.log("Navigating to login page...");
    await page.goto('http://localhost:3000/sharkpay-admin/pages/login.html');
    
    console.log("Entering credentials...");
    await page.type('#email', 'admin@showpay.com');
    await page.type('#password', 'admin@0123');
    await page.click('button[type="submit"]');

    console.log("Waiting for navigation to dashboard...");
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    
    console.log("Navigating to slider page...");
    await page.goto('http://localhost:3000/sharkpay-admin/pages/slider.html', { waitUntil: 'networkidle0' });
    
    const fs = await import('fs');
    fs.writeFileSync('dummy.jpg', 'fake image data');

    console.log("Uploading image...");
    const inputUploadHandle = await page.$('input[type=file]');
    await inputUploadHandle.uploadFile('dummy.jpg');
    
    page.on('dialog', async dialog => {
      console.log("Alert popped up: " + dialog.message());
      await dialog.accept();
    });

    await page.click('#addSlideBtn');
    
    await new Promise(r => setTimeout(r, 3000));
    
    await page.screenshot({ path: 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\21e96a15-1e07-4693-8cb3-6143e1afaa60\\puppeteer_error.png' });
    console.log("Upload test completed.");

  } catch (err) {
    console.error("Error during test:", err);
  } finally {
    await browser.close();
  }
})();
