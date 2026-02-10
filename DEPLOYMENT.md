# Deployment Guide

This project is built with **Vite**, producing a static site that can be deployed to any modern hosting platform.

## Recommend Hosting Platforms

### 1. Vercel (Recommended)

Vercel is the creators of Next.js and provides excellent support for Vite projects.

1. Create an account at [vercel.com](https://vercel.com).
2. Install Vercel CLI (optional) or connect your GitHub repository.
3. **Connect GitHub**:
   - Go to "Add New Project" on Vercel dashboard.
   - Import `axionminds-website` from your GitHub.
   - Vercel will auto-detect Vite.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Click **Deploy**.

### 2. Netlify

1. Create an account at [netlify.com](https://netlify.com).
2. "Add new site" -> "Import an existing project".
3. Connect GitHub and select `axionminds-website`.
4. **Build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

### 3. Manual Deployment (Static)

If you have your own server (Nginx/Apache):

1. Run `npm run build` locally.
2. Upload the contents of the `dist/` folder to your server's public web root.
3. Configure your server to serve `index.html` for 404s (SPA routing).

## Environment Variables

Currently, there are no environment variables required. If you add API keys later, ensure you add them to the hosting platform's environment variable settings.
