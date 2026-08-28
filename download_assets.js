import fs from 'fs';
import path from 'path';
import https from 'https';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public', 'images');

const imageMap = [
  // Hero variants
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85', dest: 'hero/hero-1600.webp' },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85', dest: 'hero/hero-1200.webp' },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=768&q=85', dest: 'hero/hero-768.webp' },
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=480&q=85', dest: 'hero/hero-480.webp' },

  // Virundhaalaya client work
  { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85', dest: 'work/virundhaalaya/hero.webp' },
  { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85', dest: 'work/virundhaalaya/secondary.webp' },
  { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85', dest: 'work/virundhaalaya/gallery-1.webp' },

  // Nexovate client work
  { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85', dest: 'work/nexovate/hero.webp' },
  { url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=85', dest: 'work/nexovate/secondary.webp' },
  { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85', dest: 'work/nexovate/gallery-1.webp' },

  // Identity product
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85', dest: 'work/identity/hero.webp' },

  // About studio
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', dest: 'about/about-studio.webp' },

  // Services
  { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80', dest: 'services/brand-identity.webp' },
  { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80', dest: 'services/web-design.webp' },
  { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80', dest: 'services/web-development.webp' },
  { url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80', dest: 'services/ui-ux.webp' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80', dest: 'services/digital-products.webp' },
  { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80', dest: 'services/design-systems.webp' },

  // OpenGraph banner
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', dest: 'og/og-deed.jpg' }
];

function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(targetPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, targetPath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(targetPath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading and self-hosting DEED production image assets...');
  for (const item of imageMap) {
    const targetPath = path.join(publicDir, item.dest);
    try {
      await downloadFile(item.url, targetPath);
      console.log(`✓ Downloaded ${item.dest}`);
    } catch (err) {
      console.error(`✗ Failed to download ${item.dest}:`, err.message);
    }
  }
  console.log('All image assets self-hosted successfully!');
}

main();
