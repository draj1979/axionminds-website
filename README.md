# Axiominds - Corporate Website

Axiominds is a strategic talent and capability partner for Global Capability Centers (GCCs), helping foreign companies build high-quality engineering, AI, and product teams in India.

## Project Overview

This website is built with **React** and **Vite**, designed to be fast, responsive, and SEO-friendly. It features a modern, clean corporate aesthetic suitable for an enterprise audience.

### Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Global variables, utility classes, scoped component styles)
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure

```bash
src/
├── components/   # Reusable UI components (Navbar, Hero, Footer, etc.)
├── pages/        # Page components (Home)
├── App.jsx       # Main application entry and routing
├── index.css     # Global styles and variables
└── main.jsx      # React DOM entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/draj1979/axionminds-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd axionminds-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

This project is ready to be deployed to Vercel, Netlify, or any static hosting provider.
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.
