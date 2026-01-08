# Contributing to Infinite Car Service Website

Thank you for your interest in contributing to the Infinite Car Service website! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Local Setup

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

4. **Open in browser**
```
http://localhost:5173
```

## 🔄 Development Workflow

### Branch Strategy

We use a simple main-branch workflow:

```
main (production)
  └── feature/your-feature-name (your work)
```

### Creating a Feature Branch

```bash
# Ensure you're on main and up to date
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/your-feature-name
```

**Branch Naming Convention:**
- `feature/` - New features (e.g., `feature/add-booking-calendar`)
- `fix/` - Bug fixes (e.g., `fix/mobile-nav-overlap`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-hero-component`)

## 💻 Coding Standards

### TypeScript
- **Strict mode enabled** - All type errors must be resolved
- **No `any` types** - Use proper typing or `unknown`
- **Interfaces over types** - For object shapes
- **Functional components** - Use React hooks, not class components

### React Best Practices
- **Component naming** - PascalCase (e.g., `NavBar`, `HeroSection`)
- **File organization** - One component per file
- **Props destructuring** - Destructure props in function signature
- **Hooks** - Use built-in hooks, avoid unnecessary custom hooks

### Styling (Tailwind CSS)
- **Utility-first** - Use Tailwind utilities, avoid custom CSS when possible
- **Responsive design** - Mobile-first (base styles, then `md:`, `lg:` breakpoints)
- **Color palette** - Use theme colors: `luxury-navy`, `luxury-gold`, `luxury-charcoal`
- **Spacing** - Use Tailwind spacing scale (p-4, m-6, etc.)

### Code Formatting
```bash
# Format is handled by Prettier (if configured)
npm run format
```

**Key Rules:**
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Trailing commas in multi-line objects/arrays

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples
```bash
# Good commits
git commit -m "feat: add mobile scroll indicator with bounce animation"
git commit -m "fix: resolve mobile stats section visibility issue"
git commit -m "docs: update README with React tech stack"

# Bad commits
git commit -m "update stuff"
git commit -m "fixed bug"
```

## 🔀 Pull Request Process

### Before Submitting

1. **Ensure code builds**
```bash
npm run build
```

2. **Test locally**
```bash
npm run dev
# Test all changes manually
```

3. **Check for lint errors**
```bash
npm run lint
```

4. **Commit all changes**
```bash
git add .
git commit -m "feat: your feature description"
```

5. **Push to your branch**
```bash
git push origin feature/your-feature-name
```

### Creating the Pull Request

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template (auto-generated)
5. Request review from maintainers

### PR Title Format
```
<type>: <short description>
```

Examples:
- `feat: Add booking calendar integration`
- `fix: Resolve mobile navigation overlay issue`
- `docs: Update deployment instructions`

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally on desktop
- [ ] Tested locally on mobile (responsive)
- [ ] Tested on production build

## Screenshots (if applicable)
Add screenshots for visual changes

## Related Issues
Closes #123
```

## 🐛 Reporting Bugs

Use the [GitHub Issues](https://github.com/turbori/infinite-car-service/issues) page with the bug report template.

## 💡 Feature Requests

Use the [GitHub Issues](https://github.com/turbori/infinite-car-service/issues) page with the feature request template.

## 📞 Questions?

For questions or clarifications, please:
- Open a GitHub Discussion
- Contact the development team

---

Thank you for contributing to Infinite Car Service! 🚗✨

