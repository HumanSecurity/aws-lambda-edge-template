const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

function findFiles(dir, ext) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) results.push(...findFiles(full, ext));
        else if (entry.name.endsWith(ext)) results.push(full);
    }
    return results;
}

const srcFiles = findFiles('src', '.ts')
    .filter(f => f !== path.join('src', 'px', 'humansecurity.ts'));

esbuild.buildSync({
    entryPoints: srcFiles,
    platform: 'node',
    format: 'cjs',
    target: 'es2022',
    outdir: 'dist',
});

esbuild.buildSync({
    entryPoints: [path.join('src', 'px', 'humansecurity.ts')],
    platform: 'node',
    format: 'cjs',
    target: 'es2022',
    outdir: path.join('dist', 'px'),
    bundle: true,
});
