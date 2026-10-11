import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react"
import { fileURLToPath } from "url"
import path from "path"
import { defineConfig } from "vite"

// Recreate __dirname safety check for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // ⚡ This converts your Windows paths perfectly so Vite can find the "src" directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
})