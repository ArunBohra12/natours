import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  server: {
    port: 3000,
  },
  logLevel: 'info',
  preview: {
    port: 5000,
  },
});
