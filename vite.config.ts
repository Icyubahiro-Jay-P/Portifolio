import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: { '@': '/src' },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            if (id.includes('motion') || id.includes('framer-motion')) return 'motion';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-core';
            if (id.includes('@emotion') || id.includes('clsx') || id.includes('class-variance-authority') || 
                id.includes('sonner') || id.includes('lucide')) return 'ui';
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});