import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // Puedes cambiar 'localhost' si lo prefieres
    port: 3000,         // Aquí defines el puerto que desees (ej. 3001)
  },
})
