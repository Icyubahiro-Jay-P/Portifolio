# Contributing

Thanks for taking a look. This is a personal portfolio site (https://djprojay.vercel.app), so it's not really open to large feature contributions - but bug fixes, accessibility improvements, performance tweaks, and typo fixes are welcome.

If you're thinking about something bigger than a small fix, please open an issue first to discuss it before writing code. That saves everyone time if it's not a fit.

## Local Setup

1. Fork the repo: https://github.com/Icyubahiro-Jay-P/portifolio
2. Clone your fork:
   ```
   git clone https://github.com/<your-username>/portifolio.git
   cd portifolio
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```

## Workflow

- Branch off `main` for your change.
- This repo uses conventional commit prefixes - `feat:`, `fix:`, `perf:`, `chore:`, `style:`, etc. Keep using them.
- Before opening a PR, run:
  ```
  npm run lint
  npm run build
  ```
  Both should pass cleanly.

## Opening a Pull Request

- Keep PRs small and focused on one thing - easier to review, easier to merge.
- Describe what changed and why in the PR description.
- Include screenshots or a short clip for any UI change.
- Don't regress performance. This site cares about Lighthouse scores, so:
  - Lazy-load anything heavy (images, animations, off-screen sections).
  - Use sized, optimized images (WebP where possible) instead of large unoptimized assets.

## Reporting Bugs

Open a GitHub Issue at https://github.com/Icyubahiro-Jay-P/portifolio/issues with steps to reproduce, what you expected, and what actually happened. Screenshots help.

## Security Issues

Please do not report security vulnerabilities as public GitHub issues. See [SECURITY.md](SECURITY.md) for how to report them responsibly.

## Code of Conduct

By participating in this project, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
