import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cost-split-app/', // This ensures correct paths on GitHub Pages
});
