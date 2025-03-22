import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Telegram-Mini-app/',
  build: {
    rollupOptions: {
      external: ['/Telegram-Mini-app/assets/index-a3470178.js'], // Ignoriere den fehlerhaften Pfad
    },
  },
})