# Infinite Car Service - Luxury Transportation Website

[![Live Site](https://img.shields.io/badge/live-infinitecarserviceli.com-gold)](https://www.infinitecarserviceli.com/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red)](LICENSE)

> Long Island's premier family-operated luxury car service since 2005. Professional transportation with a 97% repeat rate.

## 🌟 Overview

A modern, mobile-first single-page React application built for Infinite Car Service - serving Nassau & Suffolk County, the Hamptons, and NYC airports with premium black car transportation.

### Key Features
- 📱 **Mobile-Optimized** - 90% of traffic on mobile, fully responsive design
- ⚡ **Lightning Fast** - Vite + React with optimized assets
- 🎯 **Conversion-Focused** - Strategic CTAs with 60% scroll trigger
- 🎨 **Luxury Design** - Premium gold/navy color scheme with smooth animations
- 📊 **Analytics Ready** - PostHog, Google Analytics, Reb2b integrated

## 🚀 Tech Stack

### Frontend
- **Framework:** React 18.3.1 + TypeScript 5.5.3
- **Build Tool:** Vite 5.3.1
- **Styling:** Tailwind CSS 3.4.4
- **Animations:** Framer Motion 11.3.2
- **Icons:** Lucide React 0.408.0

### Deployment
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (automatic deployment on push to `main`)
- **Domain:** infinitecarserviceli.com

### Analytics & Tracking
- PostHog (product analytics)
- Google Analytics (GA4)
- Reb2b (B2B visitor identification)
- Google Ads conversion tracking

## 📁 Project Structure

```
infinite-car-service/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated deployment
├── public/
│   └── assets/
│       ├── images/             # Optimized vehicle & service images
│       └── js/                 # Analytics scripts
├── src/
│   ├── App.tsx                 # Main single-page application
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── docs/                       # SEO & optimization guides
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind theme (luxury colors)
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
```css
--luxury-navy: #0F172A      /* Primary background */
--luxury-gold: #C5A059      /* Accent & CTAs */
--luxury-charcoal: #1A202C  /* Secondary background */
```

### Typography
- **Sans:** Inter (body text)
- **Serif:** Playfair Display (headings)

## 🛠 Local Development

### Prerequisites
- Node.js 20+ (recommended)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/turbori/infinite-car-service.git
cd infinite-car-service
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:5173
```

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Deployment

Deployment is **fully automated** via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the React app
3. Deploys to GitHub Pages
4. Live at infinitecarserviceli.com

### Manual Deployment (if needed)
```bash
npm run build          # Creates optimized production build in dist/
# GitHub Actions handles the rest
```

## 🎯 Key Business Features

### Conversion Optimization
- ✅ **No Hero CTA** - Encourages scrolling to learn about company first
- ✅ **60% Scroll Trigger** - "Get Quote" button appears after engagement
- ✅ **Phone Hidden** - Only in footer to drive online quote submissions
- ✅ **Mobile Scroll Indicator** - Bouncing animation guides users

### Content Highlights
- 450+ Five-Star Google Reviews
- 97% Repeat Client Rate
- 20+ Years of Excellence
- Family-Operated in Dix Hills since 2005

## 📊 Analytics & Tracking

All analytics are integrated and tracking:
- Page views
- Scroll depth (60% milestone for CTA trigger)
- Quote button clicks
- Session recordings (PostHog)

## 🔒 Security

- ✅ HTTPS enforced
- ✅ No sensitive data in client-side code
- ✅ Environment variables for API keys (not committed)
- ✅ Dependency vulnerability scanning via GitHub

## 📱 Contact Information

- **Phone:** (631) 516-0006
- **Email:** info@infinitecarserviceli.com
- **Location:** Dix Hills, NY 11746
- **Facebook:** [@infinitecarserviceli](https://www.facebook.com/infinitecarserviceli)

## 📈 Performance

- ✅ Mobile-first responsive design
- ✅ Optimized images (WebP format recommended)
- ✅ Lazy loading for images
- ✅ Code splitting via Vite
- ✅ CSS purging via Tailwind

## 📝 Documentation

Additional documentation available in `/docs`:
- SEO optimization guides
- Google Ads strategy
- Analytics event tracking
- LTV optimization

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

Proprietary - © 2025 Infinite Car Service. All rights reserved.

See [LICENSE](LICENSE) for more information.

---

**Version:** 2.0.0 (React Redesign)  
**Last Updated:** January 2025  
**Maintained by:** Development Team
