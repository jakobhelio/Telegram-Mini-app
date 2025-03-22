import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Telegram-Mini-app/', // Muss mit dem Repository-Namen übereinstimmen
})