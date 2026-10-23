/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import tailwindcss from '@tailwindcss/vite';
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@components': path.resolve(dirname, './src/components'),
      '@organisms': path.resolve(dirname, './src/components/organisms'),
      '@molecules': path.resolve(dirname, './src/components/molecules'),
      '@utils': path.resolve(dirname, './src/lib/utils'),
      '@ui': path.resolve(dirname, './src/components/ui'),
      '@lib': path.resolve(dirname, './src/lib'),
      '@hooks': path.resolve(dirname, './src/hooks'),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        css: {
          postcss: {
            map: true,
          },
        },
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, 'src/.storybook'),
          }),
          react(),
          tailwindcss(),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
});
