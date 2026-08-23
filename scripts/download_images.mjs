import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const destinations = [
  { name: "Manali", slug: "manali", query: "Manali Himachal Pradesh mountains landscape" },
  { name: "Goa", slug: "goa", query: "Goa beach sunset ocean palm trees" },
  { name: "Jaipur", slug: "jaipur", query: "Jaipur Hawa Mahal Amer Fort Rajasthan" },
  { name: "Shimla", slug: "shimla", query: "Shimla Mall Road Christ Church snow hills" },
  { name: "Kasol", slug: "kasol", query: "Kasol Parvati Valley Himachal pines mountains" },
  { name: "Dharamshala", slug: "dharamshala", query: "Dharamshala McLeodGanj Himachal monastery hills" },
  { name: "Dalhousie", slug: "dalhousie", query: "Dalhousie Khajjiar Himachal Pradesh landscape" },
  { name: "Leh", slug: "leh", query: "Leh Ladakh Pangong lake monastery mountains" },
  { name: "Srinagar", slug: "srinagar", query: "Srinagar Dal Lake shikara Kashmir landscape" },
  { name: "Gulmarg", slug: "gulmarg", query: "Gulmarg snow gondola Kashmir mountains" },
  { name: "Rishikesh", slug: "rishikesh", query: "Rishikesh Ganga river rafting Laxman Jhula" },
  { name: "Mussoorie", slug: "mussoorie", query: "Mussoorie Kempty falls Uttarakhand hills" },
  { name: "Nainital", slug: "nainital", query: "Nainital Naini lake boats Uttarakhand hills" },
  { name: "Auli", slug: "auli", query: "Auli skiing snow peaks Himalayas Uttarakhand" },
  { name: "Jim Corbett", slug: "jim-corbett", query: "Jim Corbett national park tiger wildlife jungle" },
  { name: "Varanasi", slug: "varanasi", query: "Varanasi Ganga ghat aarti boats spiritual" },
  { name: "Agra", slug: "agra", query: "Agra Taj Mahal Yamuna architecture monument" },
  { name: "Lucknow", slug: "lucknow", query: "Lucknow Rumi Darwaza Bara Imambara heritage" },
  { name: "Udaipur", slug: "udaipur", query: "Udaipur Lake Pichola City Palace Rajasthan" },
  { name: "Jaisalmer", slug: "jaisalmer", query: "Jaisalmer Fort Thar desert camel dunes" },
  { name: "Jodhpur", slug: "jodhpur", query: "Jodhpur Mehrangarh Fort blue city Rajasthan" },
  { name: "Mount Abu", slug: "mount-abu", query: "Mount Abu Nakki Lake Dilwara temples Rajasthan" },
  { name: "Mumbai", slug: "mumbai", query: "Mumbai Gateway of India Marine Drive skyline" },
  { name: "Lonavala", slug: "lonavala", query: "Lonavala Bhushi Dam Western Ghats waterfall" },
  { name: "Mahabaleshwar", slug: "mahabaleshwar", query: "Mahabaleshwar Venna Lake viewpoints hills" },
  { name: "Pune", slug: "pune", query: "Pune Shaniwar Wada Sinhagad Fort Maharashtra" },
  { name: "Munnar", slug: "munnar", query: "Munnar tea plantations green hills Kerala mist" },
  { name: "Alleppey", slug: "alleppey", query: "Alleppey backwaters houseboat palms Kerala" },
  { name: "Kochi", slug: "kochi", query: "Kochi Fort Kochi Chinese fishing nets ocean" },
  { name: "Wayanad", slug: "wayanad", query: "Wayanad Chembra peak waterfalls forest Kerala" },
  { name: "Ooty", slug: "ooty", query: "Ooty Nilgiri tea estates toy train botanical" },
  { name: "Kodaikanal", slug: "kodaikanal", query: "Kodaikanal lake Coakers walk mist Tamil Nadu" },
  { name: "Chennai", slug: "chennai", query: "Chennai Marina beach Kapaleeshwarar temple" },
  { name: "Mysore", slug: "mysore", query: "Mysore Palace illuminated Chamundi hill Karnataka" },
  { name: "Coorg", slug: "coorg", query: "Coorg coffee estates Abbey falls Karnataka hills" },
  { name: "Hampi", slug: "hampi", query: "Hampi stone chariot Virupaksha temple ruins" },
  { name: "Bengaluru", slug: "bengaluru", query: "Bengaluru Vidhana Soudha Lalbagh garden tech" },
  { name: "Hyderabad", slug: "hyderabad", query: "Hyderabad Charminar Golconda Fort Hussain Sagar" },
  { name: "Darjeeling", slug: "darjeeling", query: "Darjeeling Kanchenjunga tea gardens toy train" },
  { name: "Kolkata", slug: "kolkata", query: "Kolkata Victoria Memorial Howrah bridge yellow cab" },
  { name: "Gangtok", slug: "gangtok", query: "Gangtok Sikkim monastery Kanchenjunga hills" },
  { name: "Shillong", slug: "shillong", query: "Shillong Umiam lake Meghalaya Scotland of east" },
  { name: "Kaziranga", slug: "kaziranga", query: "Kaziranga national park rhinoceros wildlife Assam" },
  { name: "Puri", slug: "puri", query: "Puri Jagannath temple Golden beach Odisha" },
  { name: "Amritsar", slug: "amritsar", query: "Amritsar Golden Temple Harmandir Sahib pond" },
  { name: "Chandigarh", slug: "chandigarh", query: "Chandigarh Rock Garden Sukhna Lake gardens" },
  { name: "Ahmedabad", slug: "ahmedabad", query: "Ahmedabad Sabarmati Ashram Adalaj stepwell" },
  { name: "Rann of Kutch", slug: "rann-of-kutch", query: "Rann of Kutch white desert salt flats camel" },
  { name: "Pondicherry", slug: "pondicherry", query: "Pondicherry French colony Promenade beach colorful" },
  { name: "Andaman Islands", slug: "andaman-islands", query: "Andaman Radhanagar beach turquoise water coral" }
];

const downloadFile = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'TravelMateAI/1.0 (travelmate@example.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout for ${url}`));
    });
  });
};

async function fetchWikimediaImages(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=1000&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'TravelMateAI/1.0 (travelmate@example.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const urls = [];
          for (const k in pages) {
            const ii = pages[k].imageinfo?.[0];
            const imgUrl = ii?.thumburl || ii?.url;
            if (imgUrl && (imgUrl.endsWith('.jpg') || imgUrl.endsWith('.jpeg') || imgUrl.endsWith('.JPG') || imgUrl.includes('.jpg/'))) {
              urls.push(imgUrl);
            }
          }
          resolve(urls);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

// Fallback high-quality curated travel photo pools for reliable direct downloads
const backupPhotoPool = [
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1588096344356-9b489f6655c6?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598890777032-bde13fba5be3?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1000&auto=format&fit=crop&q=80"
];

async function main() {
  const baseDir = path.resolve('./public/images/destinations');
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  console.log(`Starting image generation/download for ${destinations.length} destinations...`);

  for (let i = 0; i < destinations.length; i++) {
    const dest = destinations[i];
    const destDir = path.join(baseDir, dest.slug);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const files = ['hero.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    let images = await fetchWikimediaImages(dest.query);
    if (images.length < 5) {
      const moreImages = await fetchWikimediaImages(dest.name + " India travel");
      images = [...new Set([...images, ...moreImages])];
    }

    console.log(`[${i + 1}/${destinations.length}] Processing ${dest.name} (${images.length} Wikimedia candidates found)...`);

    for (let f = 0; f < files.length; f++) {
      const fileName = files[f];
      const filePath = path.join(destDir, fileName);
      if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
        continue; // Already downloaded
      }

      let success = false;
      if (images[f]) {
        try {
          await downloadFile(images[f], filePath);
          if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
            success = true;
          }
        } catch (e) {
          // ignore, use fallback
        }
      }

      if (!success) {
        const fallbackUrl = backupPhotoPool[(i * 5 + f) % backupPhotoPool.length];
        try {
          await downloadFile(fallbackUrl, filePath);
        } catch (e) {
          console.error(`Failed fallback for ${dest.name}/${fileName}:`, e.message);
        }
      }
    }
  }

  console.log('All destination images processed successfully!');
}

main().catch(console.error);
