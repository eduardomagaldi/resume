import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'resume',
  },
  base: '/resume/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
