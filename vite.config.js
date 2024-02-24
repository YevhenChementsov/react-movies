import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/react-movies',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      api: ['/src/api'],
      assets: ['/src/assets'],
      components: ['/src/components'],
      hooks: ['/src/hooks'],
      pages: ['/src/pages'],
      utils: ['/src/utils'],
    },
  },
});
