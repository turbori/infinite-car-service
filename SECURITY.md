# Security Policy

## 🔒 Reporting a Vulnerability

The Infinite Car Service development team takes security seriously. We appreciate your efforts to responsibly disclose your findings.

### How to Report

**Please DO NOT create public GitHub issues for security vulnerabilities.**

Instead, report security vulnerabilities by emailing:

📧 **security@infinitecarserviceli.com**

Include the following information:
- Type of vulnerability
- Full paths of affected source files
- Location of the affected code (tag/branch/commit or URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Resolution Target:** Within 30 days (depending on severity)

## 🛡️ Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | ✅ Yes             |
| 1.x.x   | ❌ No (legacy)     |

## 🚨 Security Measures

### Current Implementations

✅ **HTTPS Enforcement**
- All traffic served over HTTPS
- Configured via GitHub Pages

✅ **Dependency Scanning**
- Automated via GitHub Dependabot
- Weekly security updates

✅ **No Sensitive Data in Code**
- API keys stored as environment variables
- No credentials committed to repository

✅ **Content Security Policy**
- CSP headers configured for production
- Prevents XSS attacks

✅ **Input Validation**
- All form inputs sanitized
- Protection against injection attacks

✅ **Authentication**
- No user authentication system (public site)
- Analytics tokens properly scoped

### Known Limitations

⚠️ **Client-Side Code**
- All JavaScript is publicly visible
- No secret keys embedded
- API calls authenticated server-side only

⚠️ **Third-Party Scripts**
- PostHog, Google Analytics, Reb2b scripts loaded
- Scripts served from trusted CDNs with SRI hashes (where available)

## 🔐 Best Practices for Contributors

### Don't Commit Secrets

❌ **Never commit:**
- API keys
- Private keys
- Passwords
- Access tokens
- Environment variables with sensitive data

✅ **Use instead:**
- Environment variables (`.env` files, gitignored)
- GitHub Secrets for CI/CD
- Properly scoped read-only API keys

### Dependency Management

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically (if possible)
npm audit fix

# Update dependencies
npm update
```

### Code Review

All code changes require:
- Review by at least one maintainer
- Passing automated tests
- No critical security warnings

## 🎯 Scope

### In Scope
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Server-Side Request Forgery (SSRF)
- Injection vulnerabilities
- Authentication bypass
- Sensitive data exposure
- Insecure dependencies

### Out of Scope
- Social engineering attacks
- Physical attacks
- Denial of Service (DoS) attacks on production
- Attacks requiring physical access to servers
- Issues in third-party services we don't control

## 🏆 Recognition

We appreciate security researchers who help us keep Infinite Car Service secure!

**Hall of Fame:**
- Security researchers who responsibly disclose vulnerabilities will be acknowledged here (with permission)

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

---

Thank you for helping keep Infinite Car Service secure! 🛡️

