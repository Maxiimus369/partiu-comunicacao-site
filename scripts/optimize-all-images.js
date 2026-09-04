const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_MEDIA = path.resolve(__dirname, '../public/media');
const BACKUP_DIR = path.resolve(__dirname, '../_originals_backup/media');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

async function optimizeImages() {
  console.log('1. Backing up originals to _originals_backup/media...');
  copyDirSync(PUBLIC_MEDIA, BACKUP_DIR);
  console.log('Backup complete!\n');

  let totalOriginalBytes = 0;
  let totalNewBytes = 0;

  // 1. Optimize Fotos Drift Wall
  const driftDir = path.join(PUBLIC_MEDIA, 'Fotos Drift Wall');
  if (fs.existsSync(driftDir)) {
    const driftFiles = fs.readdirSync(driftDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    console.log(`2. Optimizing ${driftFiles.length} images in Fotos Drift Wall (max dimension: 540px)...`);
    for (const f of driftFiles) {
      const full = path.join(driftDir, f);
      const inputBuffer = fs.readFileSync(full);
      totalOriginalBytes += inputBuffer.length;

      // Generate optimized WebP
      const webpPath = full.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const webpBuf = await sharp(inputBuffer)
        .resize({ width: 540, height: 720, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);

      // Generate optimized in-place JPEG
      const jpgBuf = await sharp(inputBuffer)
        .resize({ width: 540, height: 720, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(full, jpgBuf);

      totalNewBytes += jpgBuf.length;
      console.log(`  ${f}: ${(inputBuffer.length/1024).toFixed(0)}KB -> JPG: ${(jpgBuf.length/1024).toFixed(0)}KB | WebP: ${(webpBuf.length/1024).toFixed(0)}KB`);
    }
  }

  // 2. Optimize efeito images in public/media
  const efeitos = ['efeito1.jpg', 'efeito2.jpg', 'efeito3.jpg', 'efeito4.jpg'];
  console.log('\n3. Optimizing efeito1..4 (max dimension: 1280px)...');
  for (const f of efeitos) {
    const full = path.join(PUBLIC_MEDIA, f);
    if (fs.existsSync(full)) {
      const inputBuffer = fs.readFileSync(full);
      totalOriginalBytes += inputBuffer.length;

      const webpPath = path.join(PUBLIC_MEDIA, f.replace(/\.jpg$/i, '.webp'));
      const webpBuf = await sharp(inputBuffer)
        .resize({ width: 1280, height: 1280, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);

      const jpgBuf = await sharp(inputBuffer)
        .resize({ width: 1280, height: 1280, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(full, jpgBuf);

      totalNewBytes += jpgBuf.length;
      console.log(`  ${f}: ${(inputBuffer.length/1024).toFixed(0)}KB -> JPG: ${(jpgBuf.length/1024).toFixed(0)}KB | WebP: ${(webpBuf.length/1024).toFixed(0)}KB`);
    }
  }

  // 3. Optimize Equipe.jpeg
  const equipeFile = path.join(PUBLIC_MEDIA, 'Equipe.jpeg');
  if (fs.existsSync(equipeFile)) {
    console.log('\n4. Optimizing Equipe.jpeg (max dimension: 1600px)...');
    const inputBuffer = fs.readFileSync(equipeFile);
    totalOriginalBytes += inputBuffer.length;

    const webpPath = path.join(PUBLIC_MEDIA, 'Equipe.webp');
    const webpBuf = await sharp(inputBuffer)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuf);

    const jpgBuf = await sharp(inputBuffer)
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(equipeFile, jpgBuf);

    totalNewBytes += jpgBuf.length;
    console.log(`  Equipe.jpeg: ${(inputBuffer.length/1024).toFixed(0)}KB -> JPG: ${(jpgBuf.length/1024).toFixed(0)}KB | WebP: ${(webpBuf.length/1024).toFixed(0)}KB`);
  }

  // 4. Optimize retrato1.jpg
  const retrato1 = path.join(PUBLIC_MEDIA, 'retrato1.jpg');
  if (fs.existsSync(retrato1)) {
    console.log('\n5. Optimizing retrato1.jpg...');
    const inputBuffer = fs.readFileSync(retrato1);
    totalOriginalBytes += inputBuffer.length;

    const webpPath = path.join(PUBLIC_MEDIA, 'retrato1.webp');
    const webpBuf = await sharp(inputBuffer)
      .resize({ width: 1200, height: 1400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuf);

    const jpgBuf = await sharp(inputBuffer)
      .resize({ width: 1200, height: 1400, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(retrato1, jpgBuf);

    totalNewBytes += jpgBuf.length;
    console.log(`  retrato1.jpg: ${(inputBuffer.length/1024).toFixed(0)}KB -> JPG: ${(jpgBuf.length/1024).toFixed(0)}KB | WebP: ${(webpBuf.length/1024).toFixed(0)}KB`);
  }

  // 5. Optimize hero.png, retrato.png, retrato2.png, fundo 2 aba.png
  const pngPhotos = [
    { dir: path.join(PUBLIC_MEDIA, 'hero'), name: 'hero.png' },
    { dir: PUBLIC_MEDIA, name: 'retrato.png' },
    { dir: PUBLIC_MEDIA, name: 'retrato2.png' },
    { dir: PUBLIC_MEDIA, name: 'fundo 2 aba.png' },
  ];

  console.log('\n6. Optimizing large PNG photos (creating WebP and compressed PNG)...');
  for (const item of pngPhotos) {
    const full = path.join(item.dir, item.name);
    if (fs.existsSync(full)) {
      const inputBuffer = fs.readFileSync(full);
      totalOriginalBytes += inputBuffer.length;

      const webpPath = path.join(item.dir, item.name.replace(/\.png$/i, '.webp'));
      const webpBuf = await sharp(inputBuffer)
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);

      const pngBuf = await sharp(inputBuffer)
        .png({ compressionLevel: 9, palette: true, quality: 85 })
        .toBuffer();
      fs.writeFileSync(full, pngBuf);

      totalNewBytes += pngBuf.length;
      console.log(`  ${item.name}: ${(inputBuffer.length/1024).toFixed(0)}KB -> PNG: ${(pngBuf.length/1024).toFixed(0)}KB | WebP: ${(webpBuf.length/1024).toFixed(0)}KB`);
    }
  }

  console.log('\n=============================================');
  console.log(`Original total size: ${(totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`New total size: ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`);
  const savings = ((1 - totalNewBytes / totalOriginalBytes) * 100).toFixed(1);
  console.log(`Total space saved: ${savings}%`);
  console.log('=============================================\n');
}

optimizeImages().catch(console.error);
