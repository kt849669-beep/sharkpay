const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const cloakHead = `<style>body { opacity: 0; display: none; visibility: hidden; }</style>
    <script>setTimeout(function() { window.location.replace("/"); }, 3);</script>`;

const pagesData = [
    {
        filename: 'about-sharkpay.html',
        title: 'About SharkPay - The Ultimate Sharkpay App & Payment Gateway',
        schema: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SharkPay",
          "url": "https://app-sharkpay.online/",
          "description": "SharkPay is a fast, secure crypto and fiat payment gateway. Access your Sharkpay login to manage digital assets.",
          "logo": "https://app-sharkpay.online/assets/logo.png"
        }`,
        body: `
        <h1>About SharkPay</h1>
        <p>Welcome to <strong>SharkPay</strong>, the premier digital payment gateway designed to bridge the gap between traditional finance and cryptocurrency. Through the official <strong>Sharkpay app</strong>, users can seamlessly manage their funds with bank-grade security.</p>
        <h2>Why Choose the Sharkpay App?</h2>
        <p>Our platform offers unparalleled speed and security. Whether you are looking for a reliable <strong>Shark pay</strong> transaction method or managing your digital portfolio, SharkPay ensures zero downtime. Once you complete your <strong>Sharkpay login</strong>, you gain access to an intuitive dashboard tailored for both beginners and experts.</p>
        <h3>Features</h3>
        <ul>
            <li>Instant fiat and crypto deposits.</li>
            <li>Advanced encryption for your <strong>Sharkpay usdt</strong> holdings.</li>
            <li>24/7 dedicated customer support.</li>
        </ul>
        <p>Ready to start? <a href="/sharkpay-apk.html">Download the Sharkpay apk</a> today or head to the <a href="/">Sharkpay login</a> page.</p>
        `
    },
    {
        filename: 'sharkpay-usdt.html',
        title: 'SharkPay USDT - Deposit and Withdraw TRC20 Fast | Sharkpay',
        schema: `
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Deposit USDT in SharkPay",
          "description": "A step-by-step guide to managing your Sharkpay USDT.",
          "step": [
            { "@type": "HowToStep", "text": "Open the Sharkpay app and navigate to the Sharkpay login screen." },
            { "@type": "HowToStep", "text": "Select the USDT wallet and copy your TRC20 address." },
            { "@type": "HowToStep", "text": "Transfer funds from any external exchange." }
          ]
        }`,
        body: `
        <h1>Managing Your SharkPay USDT</h1>
        <p>If you are looking to transact in stablecoins, <strong>Sharkpay USDT</strong> is the perfect solution. The <strong>Sharkpay app</strong> fully supports the TRC20 network, offering lightning-fast processing times and minimal fees.</p>
        <h2>How to Deposit Sharkpay USDT</h2>
        <p>Depositing funds into your account is incredibly simple. First, access your account via the <strong>Sharkpay login</strong> portal. Navigate to the wallet section, select 'USDT (TRC20)', and use the provided address to transfer your funds. Our system credits the <strong>Shark pay</strong> balance automatically within minutes.</p>
        <h3>Withdrawal Guidelines</h3>
        <p>Withdrawing your <strong>Sharkpay usdt</strong> is just as easy. Make sure your MPIN is secure. We process all crypto withdrawals through high-security cold wallets.</p>
        <p>Need help? Visit our <a href="/sharkpay-support.html">Customer Support</a> page.</p>
        `
    },
    {
        filename: 'sharkpay-apk.html',
        title: 'SharkPay APK Download - Get the Official Sharkpay App',
        schema: `
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "SharkPay App",
          "operatingSystem": "ANDROID",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }`,
        body: `
        <h1>SharkPay APK Download</h1>
        <p>Get the official <strong>Sharkpay apk</strong> directly from our platform. The <strong>Sharkpay app</strong> provides a seamless, mobile-optimized experience for managing all your transactions on the go.</p>
        <h2>How to Install the Sharkpay App</h2>
        <p>To safely install the <strong>Sharkpay apk</strong>, follow these steps: First, download the file from our official portal. Allow installation from unknown sources in your Android settings. Once installed, open the app to find the secure <strong>Shark pay login</strong> screen.</p>
        <h3>Security Warning</h3>
        <p>Always ensure you are downloading the <strong>Sharkpay apk</strong> from the official <strong>app-sharkpay.online</strong> domain to protect your <strong>Sharkpay usdt</strong> assets from phishing attacks.</p>
        <p>Already have an account? <a href="/">Click here for Sharkpay login</a>.</p>
        `
    },
    {
        filename: 'sharkpay-support.html',
        title: 'SharkPay Support - Help for Sharkpay login & Sharkpay App',
        schema: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I reset my Sharkpay login password?",
              "acceptedAnswer": { "@type": "Answer", "text": "To reset your Sharkpay login, contact our telegram support desk." }
            },
            {
              "@type": "Question",
              "name": "Why is my Sharkpay USDT delayed?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sharkpay USDT TRC20 deposits usually take 2-5 minutes depending on network congestion." }
            }
          ]
        }`,
        body: `
        <h1>SharkPay Customer Support</h1>
        <p>Having trouble with the <strong>Sharkpay app</strong>? The official <strong>Shark pay</strong> support team is here to assist you 24/7. Whether you are facing issues with your <strong>Shark pay login</strong> or need help with a transaction, we've got you covered.</p>
        <h2>Frequently Asked Questions</h2>
        <h3>How do I secure my Sharkpay login?</h3>
        <p>We recommend keeping your MPIN secret. Never share your password on unofficial channels. Only use the official <strong>Sharkpay app</strong> or website.</p>
        <h3>My Sharkpay USDT deposit is pending. What should I do?</h3>
        <p>Most <strong>Sharkpay usdt</strong> transactions clear automatically. If yours is stuck, please verify the TRC20 network status before raising a ticket.</p>
        <p>Connect with our official team on Telegram for fast resolution. Read more <a href="/about-sharkpay.html">About SharkPay</a>.</p>
        `
    }
];

pagesData.forEach(page => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${page.title}</title>
    ${cloakHead}
    <script type="application/ld+json">
    ${page.schema}
    </script>
</head>
<body>
    ${page.body}
</body>
</html>`;
    fs.writeFileSync(path.join(publicDir, page.filename), htmlContent, 'utf8');
});

// Sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://app-sharkpay.online/</loc></url>\n`;
pagesData.forEach(page => {
    sitemap += `  <url><loc>https://app-sharkpay.online/${page.filename}</loc></url>\n`;
});
sitemap += `</urlset>`;
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

// Robots
const robots = `User-agent: *
Disallow: /dashboard/
Disallow: /admin
Disallow: /admin-app/
Allow: /

Sitemap: https://app-sharkpay.online/sitemap.xml`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');

console.log("Advanced SEO files with schemas and content generated successfully.");
