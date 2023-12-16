import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/react-movies',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: ['/src/assets'],
      components: ['/src/components'],
      pages: ['/src/pages'],
      services: ['/src/services'],
    },
  },
});
