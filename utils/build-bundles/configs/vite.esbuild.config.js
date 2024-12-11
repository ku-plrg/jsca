import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    outDir: 'dist/vite-esbuild',
    rollupOptions: {
      input: 'src/app.js',
      output: {
        format: 'esm',
        entryFileNames: 'out.js',
      },
    },
    minify: 'esbuild',
  },
});
