import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/IPtest/",     // <-- REQUIRED FOR GITHUB PAGES
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,       // Allows access from your LAN (mobile devices)
    port: 5173        // Optional
  }
})
