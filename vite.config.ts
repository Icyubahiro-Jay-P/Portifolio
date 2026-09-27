import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Inline the entry CSS into index.html so it is not a render-blocking request
const inlineCss = (): Plugin => ({
  name: 'inline-css',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const html = bundle['index.html'];
    if (!html || html.type !== 'asset') return;
    for (const [name, file] of Object.entries(bundle)) {
      if (file.type !== 'asset' || !name.endsWith('.css')) continue;
      const tag = new RegExp(`<link rel="stylesheet"[^>]*href="/${name}"[^>]*>`);
      const src = String(html.source);
      if (!tag.test(src)) continue;
      html.source = src.replace(tag, () => `<style>${file.source}</style>`);
      delete bundle[name];
    }
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inlineCss(),
  ],

  resolve: {
    alias: { '@': '/src' },
  },

});
