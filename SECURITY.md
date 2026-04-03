# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not** create a public GitHub issue. Instead, please follow responsible disclosure practices.

### How to Report

1. **Email**: Send details to the project maintainers directly via GitHub's private vulnerability reporting feature or through email
2. **GitHub Security Advisory**: Use [GitHub's Security Advisory feature](https://docs.github.com/en/code-security/security-advisories) to report privately

### What to Include

When reporting a vulnerability, please provide:

- Description of the vulnerability
- Steps to reproduce (if applicable)
- Potential impact
- Suggested fix (if you have one)

### Timeline

We will:
- Acknowledge receipt within 48 hours
- Investigate and prioritize the vulnerability
- Provide a fix or mitigation strategy within 90 days
- Credit you for the report (if you wish)

## Security Best Practices

### For Users

1. **Keep dependencies updated**: Regularly run `pnpm outdated` and update packages
2. **Use OIDC authentication**: When publishing to npm, use OIDC-based authentication instead of API tokens
3. **Validate input**: Always validate resume JSON data before rendering

### For Contributors

1. **Code review**: All contributions require review before merging
2. **Dependency management**: Be cautious when adding new dependencies
3. **Security updates**: Promptly address security vulnerabilities in dependencies

## Supported Versions

| Version | Status            | Security Updates |
|---------|-------------------|------------------|
| 1.2.x   | Latest            | Yes              |
| 1.1.x   | Previous          | Limited          |
| < 1.1   | Unsupported       | Not provided     |

## Dependency Security

This project uses:
- **pnpm** for secure dependency management
- **npm's security advisories** for vulnerability scanning
- **dependabot** for automated dependency updates (recommended)

To check for vulnerabilities locally:

```bash
pnpm audit
```

## Contact

For security-related questions or concerns, please contact the maintainers through:
- GitHub Issues (for non-security topics)
- [GitHub Security Advisory](https://github.com/akarsh/jsonresume-theme-onepage-simplified/security/advisories)

---

Thank you for helping keep this project secure!
