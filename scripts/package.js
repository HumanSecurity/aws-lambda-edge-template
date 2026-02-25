const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const buildDir = 'dist';
const lambdas = ['HumanEnforcer', 'HumanFirstParty', 'HumanActivities'];

for (const f of fs.readdirSync('.').filter(f => f.endsWith('.zip'))) {
    fs.unlinkSync(f);
}

for (const lambda of lambdas) {
    const zip = new AdmZip();
    zip.addFile('index.js', fs.readFileSync(path.join(buildDir, `${lambda}.js`)));

    for (const entry of fs.readdirSync(buildDir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            zip.addLocalFolder(path.join(buildDir, entry.name), entry.name);
        }
    }

    zip.writeZip(`${lambda}.zip`);
    console.log(`Zipped ${lambda}`);
}

fs.rmSync(buildDir, { recursive: true, force: true });
