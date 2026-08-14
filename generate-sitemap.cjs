const fs = require('fs');
const path = require('path');

const domain = 'https://app-sharkpay.online';
const sitemapFile = path.join(__dirname, 'sitemap.xml');

const urls = [
  { loc: `${domain}/`, source: path.join(__dirname, 'user-app', 'pages', 'login.html'), changefreq: 'weekly', priority: '1.0' },
  { loc: `${domain}/about-sharkpay.html`, source: path.join(__dirname, 'about-sharkpay.html'), changefreq: 'monthly', priority: '0.7' },
  { loc: `${domain}/sharkpay-apk.html`, source: path.join(__dirname, 'sharkpay-apk.html'), changefreq: 'monthly', priority: '0.8' },
  { loc: `${domain}/sharkpay-support.html`, source: path.join(__dirname, 'sharkpay-support.html'), changefreq: 'monthly', priority: '0.7' },
  { loc: `${domain}/sharkpay-usdt.html`, source: path.join(__dirname, 'sharkpay-usdt.html'), changefreq: 'monthly', priority: '0.7' },
  { loc: `${domain}/sharkpay-guide.html`, source: path.join(__dirname, 'sharkpay-guide.html'), changefreq: 'monthly', priority: '0.8' },
  { loc: `${domain}/how-to-use-sharkpay.html`, source: path.join(__dirname, 'how-to-use-sharkpay.html'), changefreq: 'monthly', priority: '0.8' },
  { loc: `${domain}/how-to-deposit-sharkpay.html`, source: path.join(__dirname, 'how-to-deposit-sharkpay.html'), changefreq: 'monthly', priority: '0.7' },
  { loc: `${domain}/how-to-deposit-usdt-sharkpay.html`, source: path.join(__dirname, 'how-to-deposit-usdt-sharkpay.html'), changefreq: 'monthly', priority: '0.7' },
  { loc: `${domain}/sharkpay-password-help.html`, source: path.join(__dirname, 'sharkpay-password-help.html'), changefreq: 'monthly', priority: '0.7' },
];

function xmlEscape(v){return v.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');}
function lastMod(s){return fs.statSync(s).mtime.toISOString().slice(0,10);}

for (const e of urls) if (!fs.existsSync(e.source)) throw new Error(`missing source ${e.source}`);
const entries = urls.map(e=>`  <url>\n    <loc>${xmlEscape(e.loc)}</loc>\n    <lastmod>${lastMod(e.source)}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join('\n');
fs.writeFileSync(sitemapFile, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,'utf8');
console.log(`Sitemap generated at ${sitemapFile}`);
