import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // Output stays in frontend folder
    emptyOutDir: true      // Clean on each build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Simplifies imports
    }
  },
  base: './',               // ✅ Ensures relative asset paths on Vercel
});
