import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020',
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production'
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion', 'lottie-react'],
          'icons': ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: false
  },
  preview: {
    port: 3000,
    strictPort: false
  }
})
