import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@decomposition/shared': path.resolve(__dirname, '../../libs/shared/src/index.ts'),
      'identityMfe/routes': path.resolve(__dirname, 'src/__mocks__/remoteRoutes.tsx'),
      'customerMfe/routes': path.resolve(__dirname, 'src/__mocks__/remoteRoutes.tsx'),
      'orderMfe/routes': path.resolve(__dirname, 'src/__mocks__/remoteRoutes.tsx'),
      'productMfe/routes': path.resolve(__dirname, 'src/__mocks__/remoteRoutes.tsx'),
    },
  },
});
