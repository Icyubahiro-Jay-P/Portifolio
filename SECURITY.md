# Security Policy

This is the security policy for the personal portfolio site maintained by Icyubahiro-Jay-P.

- Repository: https://github.com/Icyubahiro-Jay-P/portifolio
- Live site: https://djprojay.vercel.app

The project is a static Vite + React single-page application deployed on Vercel, with contact forms.

## Supported Versions

Only the latest deployment on the `main` branch (the live site) is supported with security fixes. Older commits, branches, and preview deployments are not maintained.

| Version              | Supported          |
| --------------------- | ------------------ |
| Latest (`main` / live) | Yes                |
| Older commits/branches | No                 |

## Reporting a Vulnerability

Please do not open a public GitHub issue for security vulnerabilities.

Instead, report privately using GitHub's "Report a vulnerability" feature under this repository's Security tab:

https://github.com/Icyubahiro-Jay-P/portifolio/security/advisories/new

When reporting, please include:

- A clear description of the vulnerability
- Steps to reproduce the issue
- The potential impact
- The affected URL(s) and/or file(s)
- A proof of concept, if possible

## What to Expect

- Acknowledgement of your report within approximately 72 hours
- A status update within approximately 7 days of acknowledgement
- The timeline for a fix depends on the severity and complexity of the issue
- Credit will be given in the advisory if you would like to be acknowledged

## Scope

**In scope:**

- The live site (https://djprojay.vercel.app) and the code in this repository
- Examples: cross-site scripting (XSS), exposed secrets or credentials, dependency vulnerabilities

**Out of scope:**

- Third-party services this site relies on (for example, Vercel or Google Analytics infrastructure itself)
- Denial-of-service or volumetric attacks
- Social engineering attacks
- Missing security best-practice headers without a demonstrated, concrete impact

## Safe Harbor

Good-faith security research conducted in line with this policy will not be pursued legally. When researching, please:

- Do not access, modify, or exfiltrate data belonging to others
- Do not degrade, disrupt, or negatively impact the availability of the service

If you have any doubt about whether an activity falls within this policy, please reach out through the private reporting channel above before proceeding.
