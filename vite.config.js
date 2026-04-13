import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Any request to /api/claude gets forwarded to Anthropic
      // Your API key is injected server-side — never exposed to the browser
      '/api/claude': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/claude/, '/v1/messages'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Inject the API key from .env — never touches the browser
            proxyReq.setHeader('x-api-key', process.env.VITE_ANTHROPIC_API_KEY || '');
            proxyReq.setHeader('anthropic-version', '2023-06-01');
            proxyReq.setHeader('content-type', 'application/json');
          });
        },
      },
    },
  },
});