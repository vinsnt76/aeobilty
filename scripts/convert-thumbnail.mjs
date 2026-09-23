import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcJpg = path.resolve('public/images/how-to-build-entity-density-thumbnail_AEObility.jpg');
const destWebpPublic = path.resolve('public/how-to-build-entity-density-thumbnail_AEObility.webp');
const destWebpImages = path.resolve('public/images/how-to-build-entity-density-thumbnail_AEObility.webp');
const destJpgPublic = path.resolve('public/how-to-build-entity-density-thumbnail_AEObility.jpg');

async function convert() {
  console.log('Reading:', srcJpg);
  const metadata = await sharp(srcJpg).metadata();
  console.log(`Original: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

  // Resize to exactly 1200x800 webp with high quality
  await sharp(srcJpg)
    .resize(1200, 800, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 90 })
    .toFile(destWebpPublic);

  console.log('Created:', destWebpPublic);

  // Also copy/write to public/images/
  fs.copyFileSync(destWebpPublic, destWebpImages);
  console.log('Created:', destWebpImages);

  // Copy jpg to public/ root as well for maximum fallback compatibility
  fs.copyFileSync(srcJpg, destJpgPublic);
  console.log('Copied to root:', destJpgPublic);
}

convert().catch(err => {
  console.error(err);
  process.exit(1);
});
