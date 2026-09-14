import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Project Pages under github.com/Pikas3/jeffreyboman.github.io
  // → https://pikas3.github.io/jeffreyboman.github.io/
  base: '/jeffreyboman.github.io/',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  preview: {
    host: '0.0.0.0',
    port: 4321,
  },
})
