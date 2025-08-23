import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   define: {
    'process.env.REACT_APP_PDF_API_KEY': JSON.stringify('your_bearer_token'),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
