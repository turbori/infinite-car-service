# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-07

### 🎉 Major Release - Complete React/TypeScript Redesign

This release marks a complete rebuild of the website from static HTML to a modern React single-page application.

### Added
- **React 18.3.1 + TypeScript 5.5.3** - Modern component-based architecture
- **Vite Build System** - Lightning-fast development and optimized production builds
- **Tailwind CSS 3.4.4** - Utility-first styling with custom luxury theme
- **Framer Motion** - Smooth animations and scroll-triggered effects
- **Mobile Scroll Indicator** - Bouncing animation to encourage user engagement
- **60% Scroll Trigger** - "Get Quote" CTA appears only after user engagement
- **GitHub Actions CI/CD** - Automated deployment to GitHub Pages
- **Comprehensive Documentation** - CHANGELOG, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT

### Changed
- **Single Phone Number Strategy** - Consolidated to (631) 516-0006 (footer only)
- **Conversion-Optimized UX** - Removed hero CTAs to encourage learning about company first
- **Mobile-First Design** - Optimized for 90% mobile traffic
- **Luxury Color Scheme** - Navy (#0F172A) and Gold (#C5A059) palette
- **Enhanced Stats Visibility** - Improved mobile visibility for "450+ Reviews" and "20+ Years"
- **Service Section Alignment** - Fixed mobile layout issues

### Removed
- All legacy HTML pages (17 files consolidated into single-page app)
- Dual phone number system (new/existing clients)
- Hero section "Get Quote" button (moved to scroll-triggered sticky footer)
- Phone numbers from navbar and CTA sections
- "Call Now" button from mobile sticky footer
- Old development branches (staging, develop, feature branches)
- Duplicate assets folder
- Empty component folders

### Fixed
- Mobile services section heading alignment
- Stats section visibility on mobile (450+, 20+)
- Image loading issues on deployment (moved to public/ folder)
- ESLint peer dependency conflicts
- TypeScript build errors
- Vite plugin configuration

### Technical Improvements
- **Performance:** Optimized bundle size with code splitting
- **SEO:** Enhanced meta tags, Open Graph, Twitter Cards, Schema.org markup
- **Analytics:** Integrated PostHog, Google Analytics, Reb2b tracking
- **Deployment:** Automated GitHub Pages deployment on push to main

---

## [1.0.0] - 2005-2025

### Legacy Static HTML Site
- Multi-page HTML website with jQuery
- TailwindCSS + DaisyUI styling
- Individual service pages (airport-transfers, fleet, services, etc.)
- Dual contact number system
- Manual deployment process

---

## Unreleased

### Planned
- Progressive Web App (PWA) capabilities
- WebP image format optimization
- Additional micro-interactions
- Enhanced mobile animations
- Real-time availability checker

---

**Note:** For detailed commit history, see the [GitHub repository](https://github.com/turbori/infinite-car-service).

