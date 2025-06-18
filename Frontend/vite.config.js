import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
 build: {
  outDir: '../backend/dist',      // ✔ Output to backend's dist folder
  emptyOutDir: true,              // ✔ Clean it before each build
},
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'), // ✔ For cleaner imports
  },
},

});
