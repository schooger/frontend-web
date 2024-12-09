import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

//@ts-ignore
import path from 'path';

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@api': path.resolve('.', 'src/@api'),
      '@style': path.resolve('.', 'src/@style'),
      '@layout': path.resolve('.', 'src/@layout'),
      '@form': path.resolve('.', 'src/@form'),
      '@view': path.resolve('.', 'src/@view'),
    },
  },
})
