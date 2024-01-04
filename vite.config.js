import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    'react/jsx-dev-runtime': 'preact/compat/jsx-dev-runtime',
    'react/jsx-runtime': 'preact/compat/jsx-runtime',
  },

  base: "/blog-preview-card-main/",
  plugins: [react()],
});
