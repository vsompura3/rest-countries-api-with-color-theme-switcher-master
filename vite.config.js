import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://vsompura3.github.io/rest-countries-api-with-color-theme-switcher-master/',
  plugins: [react()],
})
