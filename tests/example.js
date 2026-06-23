/* 
const path = 'C:/Users/Advik/Downloads/BEXPP7774Q_upload_2026-276-14-2026--1-35-38-PM.json';

const raw = await fs.readFile(path, 'utf8');
const dataset = JSON.parse(raw);

for (const item of dataset) {
  console.log(item);


  
}
 */


import fs from 'fs';

const data = JSON.parse(
    fs.readFileSync(
        'C:/Users/Advik/Downloads/BEXPP7774Q_upload_2026-276-14-2026--1-35-38-PM.json',
        'utf8'
    )
);

for (const item of data) {
    console.log(item);
}
