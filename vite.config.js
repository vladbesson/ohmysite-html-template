import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/ohmysite-html-template/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        blog: resolve(__dirname, 'src/blog.html'),
        portfolio: resolve(__dirname, 'src/portfolio.html'),
        'portfolio-item': resolve(__dirname, 'src/portfolio-item.html'),
        post: resolve(__dirname, 'src/post.html'),
        page: resolve(__dirname, 'src/page.html'),
        'full-width-page': resolve(__dirname, 'src/full-width-page.html'),
        '404': resolve(__dirname, 'src/404.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
