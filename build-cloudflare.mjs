import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');

// Only publish the original static website and Cloudflare routing files.
if (path.dirname(output) !== root || path.basename(output) !== 'dist') {
  throw new Error('Build output must be the project dist directory.');
}
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const entries = [
  'admin-app', 'assets', 'public', 'shared', 'sharkpay-admin', 'user-app',
  '404.html', 'about-sharkpay.html', 'favicon.ico',
  'googlee857eed37e620388.html', 'how-to-deposit-sharkpay.html',
  'how-to-deposit-usdt-sharkpay.html', 'how-to-use-sharkpay.html',
  'manifest.json', 'metadata.json', 'robots.txt', 'sharkpay-apk.html',
  'sharkpay-guide.html', 'sharkpay-password-help.html',
  'sharkpay-support.html', 'sharkpay-usdt.html', 'sitemap.xml',
  '_headers', '_redirects',
];

for (const entry of entries) {
  cpSync(path.join(root, entry), path.join(output, entry), { recursive: true });
}
console.log('Cloudflare Pages website built in dist.');
