// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // @ maps to src directory
      'react-helmet': 'react-helmet-async',
      'lottie-web': 'lottie-web/build/player/lottie_light',
    },
  },
  // Optimize build output
  build: {
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          bootstrap: ['bootstrap'],
        },
      },
    },
  },
});
