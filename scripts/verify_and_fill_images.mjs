import fs from 'fs';
import path from 'path';
import https from 'https';

const baseDir = path.resolve('./public/images/destinations');

// List of all 50 destination slugs
const slugs = [
  "manali", "goa", "jaipur", "shimla", "kasol", "dharamshala", "dalhousie", "leh",
  "srinagar", "gulmarg", "rishikesh", "mussoorie", "nainital", "auli", "jim-corbett",
  "varanasi", "agra", "lucknow", "udaipur", "jaisalmer", "jodhpur", "mount-abu",
  "mumbai", "lonavala", "mahabaleshwar", "pune", "munnar", "alleppey", "kochi",
  "wayanad", "ooty", "kodaikanal", "chennai", "mysore", "coorg", "hampi", "bengaluru",
  "hyderabad", "darjeeling", "kolkata", "gangtok", "shillong", "kaziranga", "puri",
  "amritsar", "chandigarh", "ahmedabad", "rann-of-kutch", "pondicherry", "andaman-islands"
];

const files = ['hero.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

// Direct working high quality Wikimedia image fallback pool
const workingImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Manali_City_View.jpg/1024px-Manali_City_View.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1024px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_Re-edited.jpg/1024px-East_facade_Hawa_Mahal_Jaipur_Re-edited.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dal_Lake_Srinagar_Kashmir.jpg/1024px-Dal_Lake_Srinagar_Kashmir.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pangong_Lake%2C_Ladakh.jpg/1024px-Pangong_Lake%2C_Ladakh.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Munnar_Kerala.jpg/1024px-Munnar_Kerala.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Golden_Temple_Amritsar_at_night.jpg/1024px-Golden_Temple_Amritsar_at_night.jpg"
];

const downloadUrl = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'TravelMateAI/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
};

async function verifyAndFill() {
  let missingCount = 0;
  let fixedCount = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const destFolder = path.join(baseDir, slug);
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    // Find any existing valid image in this directory to use as clone source
    let validCloneSource = null;
    for (const f of files) {
      const p = path.join(destFolder, f);
      if (fs.existsSync(p) && fs.statSync(p).size > 2000) {
        validCloneSource = p;
        break;
      }
    }

    for (let j = 0; j < files.length; j++) {
      const f = files[j];
      const p = path.join(destFolder, f);
      const isValid = fs.existsSync(p) && fs.statSync(p).size > 2000;

      if (!isValid) {
        missingCount++;
        if (validCloneSource) {
          fs.copyFileSync(validCloneSource, p);
          fixedCount++;
        } else {
          // Download from working pool
          const poolUrl = workingImages[(i + j) % workingImages.length];
          try {
            await downloadUrl(poolUrl, p);
            if (fs.existsSync(p) && fs.statSync(p).size > 2000) {
              validCloneSource = p;
              fixedCount++;
            }
          } catch (e) {
            console.error(`Error downloading fallback for ${slug}/${f}:`, e.message);
          }
        }
      }
    }
  }

  console.log(`Verification Complete! Checked ${slugs.length * 5} files. Missing/Incomplete: ${missingCount}, Fixed: ${fixedCount}`);
}

verifyAndFill().catch(console.error);
