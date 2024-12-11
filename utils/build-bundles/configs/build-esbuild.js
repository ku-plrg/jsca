// build.js
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/app.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: 'dist/esbuild/out.js',
    format: 'esm', // 'esm', 'cjs', 'iife
  })
  .catch(() => process.exit(1));
