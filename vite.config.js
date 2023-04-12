import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

import dotenv from 'dotenv';
import * as process from 'process';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, process.env.NODE_ENV),
});
console.log(process.env.PORT);
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, __dirname, '') };
  return {
    define: {
      'process.env': env,
    },
    root: 'src',
    base: '/',
    server: {
      host: 'localhost',
      port: env.PORT,
    },
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    publicDir: './public',
    plugins: [react(), tsconfigPaths(), svgr()],
    build: {
      outDir: '../dist',
    },
    envPrefix: 'VITE',
    esbuild: {
      define: {
        this: 'window',
      },
    },
  };
});
