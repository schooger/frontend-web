import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from "@million/lint";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

//@ts-ignore
import path from 'path';

export default defineConfig({
  plugins: [react(), MillionLint.vite(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@ai': path.resolve('.', 'src/@ai'),
      '@api': path.resolve('.', 'src/@api'),
      '@asset': path.resolve('.', 'src/@asset'),
      '@style': path.resolve('.', 'src/@style'),
      '@form': path.resolve('.', 'src/@form'),
      '@lang': path.resolve('.', 'src/@lang'),
      '@layout': path.resolve('.', 'src/@layout'),
      '@view': path.resolve('.', 'src/@view'),
    },
  },
})
