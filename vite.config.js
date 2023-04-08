import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

const PWAManifest = {
  registerType: 'prompt',
  includeAssets: ['favicon.png'],
  manifest: {
    name: 'Natours',
    short_name: 'Natours',
    start_url: '.',
    display: 'standalone',
    background_color: '#2b343b',
    theme_color: '#2e864b',
    description: 'A tour booking application',
    icons: [
      {
        src: 'favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: 'favicon.png',
        sizes: '72x72',
        type: 'image/png',
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(PWAManifest)],
});
