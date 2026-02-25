const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const srcFiles = fs.readdirSync('src')
    .filter(f => f.endsWith('.ts'))
    .map(f => path.join('src', f));

esbuild.buildSync({
    entryPoints: srcFiles,
    platform: 'node',
    format: 'cjs',
    target: 'es2022',
    outdir: 'dist',
});

fs.mkdirSync(path.join('dist', 'custom'), { recursive: true });
fs.copyFileSync(
    path.join('src', 'custom', 'config.json'),
    path.join('dist', 'custom', 'config.json'),
);

esbuild.buildSync({
    entryPoints: [path.join('src', 'px', 'humansecurity.ts')],
    platform: 'node',
    format: 'cjs',
    target: 'es2022',
    outdir: path.join('dist', 'px'),
    bundle: true,
});
