import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        identityMfe: process.env.VITE_IDENTITY_REMOTE_URL || 'http://localhost:4201/assets/remoteEntry.js',
        customerMfe: process.env.VITE_CUSTOMER_REMOTE_URL || 'http://localhost:4202/assets/remoteEntry.js',
        orderMfe: process.env.VITE_ORDER_REMOTE_URL || 'http://localhost:4203/assets/remoteEntry.js',
        productMfe: process.env.VITE_PRODUCT_REMOTE_URL || 'http://localhost:4204/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 4200,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
