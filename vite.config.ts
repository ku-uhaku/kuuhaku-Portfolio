import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'vercel',
  },
})# Clean out your old dist folder
rm -rf dist .output

# Commit your app.config.ts change
git add .
git commit -m "chore: configure tanstack start for vercel deployment"
git push origin main