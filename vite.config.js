// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // nombre de tu repositorio en GitHub
  plugins: [react()],
})

