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
    },
  },
  // Ensure CSS is split into chunks so large styles can be loaded separately
  build: {
    cssCodeSplit: true
  }
});
