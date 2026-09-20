import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

      console.log(`Optimizing ${file}...`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 }) // high quality WebP
          .toFile(outputPath);
        
        console.log(`✓ Converted to ${path.basename(outputPath)}`);
        
        // Delete original PNG
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  console.log('Finished optimizing images.');
}

optimizeImages();
