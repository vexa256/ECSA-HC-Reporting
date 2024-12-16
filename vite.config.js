import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import inject from '@rollup/plugin-inject'

export default defineConfig({
  plugins: [
    vue(),
    inject({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
      `.replace(/\s{2,}/g, ' ').trim()
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

