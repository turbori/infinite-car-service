# Infinite Car Service - Luxury Transportation Website

## Overview
Professional luxury car service website for Infinite Car Service, serving NYC, Long Island, and the Hamptons since 2005. Premium transportation for executives, travelers, and families who expect more.

## 🚗 Features

### Core Services
- **Airport Transfers** - JFK, LGA, EWR with AI-powered flight tracking
- **Corporate & Executive Travel** - Professional business transportation
- **Events & Celebrations** - Weddings, proms, special occasions
- **NYC Tours** - Top destinations with local expertise
- **Cruise Port Transfers** - Seamless terminal transportation

### Technical Features
- **Responsive Design** - Mobile-first with TailwindCSS and DaisyUI
- **Flight Tracking Integration** - AI-powered real-time monitoring
- **Animated Statistics** - Smooth counting animations on scroll
- **Interactive Fleet Gallery** - Professional vehicle showcase
- **Airport Meeting Points** - Detailed terminal-specific instructions
- **Dual Contact System** - Separate numbers for new/existing clients

### Fleet
- Luxury Sedan (2 passengers)
- Luxury Midsize SUV (4 passengers) 
- Luxury Large SUV (6 passengers)

## 📱 Contact Information
- **New Clients:** (631) 860-6700
- **Existing Clients:** (631) 516-0006
- **Email:** info@infinitecarserviceli.com
- **Facebook:** [@infinitecarserviceli](https://www.facebook.com/profile.php?id=61556980469676)

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** TailwindCSS + DaisyUI
- **Icons:** Font Awesome 6
- **Animations:** CSS Transitions + JavaScript Intersection Observer
- **Images:** Optimized PNG/JPG assets

## 🌐 Live Pages
- `index.html` - Homepage with hero, fleet, services overview
- `services.html` - Detailed service offerings and pricing
- `fleet.html` - Complete vehicle showcase with specifications
- `about.html` - Company history, team, and statistics
- `airport-meeting-points.html` - Terminal-specific pickup instructions
- `top-places-nyc.html` - NYC destinations and tour guide

## 🚀 Deployment Strategy

### Branch Structure
```
main/           # Production-ready code (deployed to live site)
├── staging/    # Pre-production testing environment
└── develop/    # Development integration branch
```

### Workflow
1. **Development:** Create feature branches from `develop`
2. **Integration:** Merge features into `develop` branch
3. **Testing:** Deploy `develop` to staging environment for QA
4. **Release:** Merge `staging` to `main` for production deployment
5. **Hotfixes:** Create directly from `main` if urgent production fixes needed

### Deployment Commands
```bash
# Deploy to staging
git checkout staging
git merge develop
git push origin staging

# Deploy to production  
git checkout main
git merge staging
git push origin main
```

## 📁 Project Structure
```
ics-new-site/
├── assets/
│   └── images/          # Vehicle photos, hero images, service icons
├── index.html           # Homepage
├── services.html        # Service details & pricing
├── fleet.html          # Vehicle showcase
├── about.html          # Company information
├── airport-meeting-points.html  # Airport pickup instructions
├── top-places-nyc.html  # NYC tour destinations
├── .gitignore          # Git ignore rules
└── README.md           # This documentation
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** #2563EB (Blue-600)
- **Primary Dark:** #1E40AF (Blue-800) 
- **Primary Darker:** #1D4ED8 (Blue-700)
- **Slate Accent:** #64748B (Slate-500)
- **Background Light:** #F9FAFB (Gray-50)
- **Text Dark:** #111827 (Gray-900)
- **Footer Background:** #0F172A (Slate-900)

### Typography
- **Headers:** Bold, professional hierarchy
- **Body:** Clean, readable with proper line spacing
- **CTAs:** Prominent buttons with hover effects

## 🔧 Development Setup

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Git for version control

### Local Development
1. Clone the repository
```bash
git clone https://github.com/turbori/infinite-car-service.git
cd infinite-car-service
```

2. Open `index.html` in your browser or use a local server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it)
npx serve .
```

3. Navigate to `http://localhost:8000`

### Making Changes
1. Create a feature branch from `develop`
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. Make your changes and test locally

3. Commit and push
```bash
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name
```

4. Create pull request to merge into `develop`

## 📊 Performance Features
- **Optimized Images** - Compressed for fast loading
- **Minimal JavaScript** - Vanilla JS for animations
- **CSS Optimization** - TailwindCSS utilities
- **Mobile Performance** - Responsive images and layouts

## 🔒 Security Considerations
- No sensitive data in client-side code
- Form validation on both client and server side
- HTTPS enforced for production deployment
- Sanitized contact form inputs

## 📈 Analytics & SEO
- Meta tags optimized for each page
- Structured data for local business
- Performance-optimized loading
- Mobile-friendly responsive design
- Local SEO keywords for NYC/Long Island market

## 📝 License
Proprietary - Infinite Car Service © 2025

## 🤝 Contributing
This is a private repository for Infinite Car Service. For feature requests or bug reports, please contact the development team.

---

**Last Updated:** January 2025  
**Version:** 1.0.0  
**Repository:** https://github.com/turbori/infinite-car-service