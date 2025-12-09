# Muebles Jazmín - Next.js Website

Modern, high-performance website for Muebles Jazmín built with Next.js 16, TypeScript, and the App Router.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: CSS Modules
- **Image Optimization**: Next.js Image Component
- **SEO**: Native Next.js Metadata API + Structured Data

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── portafolio/        # Portfolio page
│   ├── materiales/        # Materials page
│   ├── contacto/          # Contact page
│   ├── robots.ts          # Robots.txt configuration
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
└── public/images/         # Optimized images
```

## 🎯 Key Features

### Modular Architecture
- **Component-based**: Each UI element is an independent, reusable component
- **Server Components**: Default server components for optimal performance
- **Client Components**: Used only when necessary (state, events, browser APIs)
- **Type Safety**: Full TypeScript coverage with strict mode enabled

### SEO Optimization
- ✅ Per-page metadata with OpenGraph and Twitter Cards
- ✅ Structured data (JSON-LD) for local business SEO
- ✅ Semantic HTML5 markup
- ✅ Dynamic sitemap and robots.txt

### Performance
- ✅ Next.js Image component with automatic optimization
- ✅ Code splitting and lazy loading
- ✅ Server-side rendering for fast initial load
- ✅ Minimal client-side JavaScript

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Development server: [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **Home** (`/`) - Hero, carousel, materials, stats, procedure
- **Portfolio** (`/portafolio`) - Projects grid with modal gallery
- **Materials** (`/materiales`) - Materials showcase with benefits
- **Contact** (`/contacto`) - Contact form with WhatsApp integration

## 🔧 Configuration

Edit `lib/constants.ts` to update business information:
- WhatsApp number
- Business address
- Materials data
- Statistics

## 📝 License

© 2025 Muebles Jazmín. All rights reserved.
