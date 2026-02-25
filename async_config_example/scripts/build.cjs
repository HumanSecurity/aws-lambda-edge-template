const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const listTs = (dir) => fs.readdirSync(dir).filter(f => f.endsWith('.ts')).map(f => path.join(dir, f));
const srcFiles = [...listTs('src'), ...listTs(path.join('src', 'custom'))];

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
