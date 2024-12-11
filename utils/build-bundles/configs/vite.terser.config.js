import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    outDir: 'dist/vite-terser',
    rollupOptions: {
      input: 'src/app.js',
      output: {
        format: 'esm',
        entryFileNames: 'out.js',
      },
    },
    minify: 'terser',
  },
});
