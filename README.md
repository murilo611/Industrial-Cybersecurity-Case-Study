# Industrial Cybersecurity Case Study

An independent, educational OSINT-based research presentation about the publicly disclosed industrial and digital context of Raffineria di Milazzo (RAM). It examines potential exposure areas and defensive priorities without presenting them as confirmed vulnerabilities or company security ratings.

> **Ethical scope:** This is not an authorized security audit, penetration test, vulnerability assessment, or internal investigation. No RAM systems, networks, applications, employees, suppliers, or infrastructure were accessed, scanned, tested, or contacted. All analysis is based on cited public sources.

## What is included

- Ten-chapter responsive research report.
- Evidence labels: verified public fact, risk inference, unverified hypothesis, and not assessed.
- Expandable evidence register with source, date, interpretation, and limitations.
- Clickable evidence filters and qualitative risk matrix.
- Defensive recommendations mapped to NIST, ISO, ISA/IEC, and OWASP guidance.
- Proposed three-stage security roadmap.
- Source bibliography and print-friendly layout.
- GitHub Actions workflow for GitHub Pages deployment.

## Technology

- React and TypeScript
- Vite
- Lucide React
- Recharts
- CSS with responsive and reduced-motion support

## Requirements

- Node.js 20 or newer (the included GitHub Actions workflow uses Node 20).
- npm.

## Run locally

```bash
npm ci
npm run dev
```

Vite prints a local development URL in the terminal. Use `Ctrl+C` to stop the server.

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `industrial-cybersecurity-case-study`.
2. Push this project to its `main` branch.
3. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
4. The workflow at `.github/workflows/deploy.yml` builds the Vite site and deploys `dist`.
5. After the workflow succeeds, GitHub Pages displays the public URL in Pages settings and the deployment environment.

The Vite base path is set to `/industrial-cybersecurity-case-study/` for the GitHub Pages workflow build (`--mode github-pages`). Local development and ordinary local builds use `/`.

## Research integrity

Company-specific statements are tied to the source bibliography in the application. Publication dates are marked as unstated when not provided by the publisher. Risk ratings are qualitative scenario-planning estimates—not measured probabilities, incidents, or RAM risk ratings. A missing public disclosure is not evidence that a control is absent.

The method and limitations are documented in [docs/RESEARCH-METHODOLOGY.md](./docs/RESEARCH-METHODOLOGY.md). Revalidate source pages and dates before reusing this work in a formal or commercial assessment.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── docs/
│   └── RESEARCH-METHODOLOGY.md
├── src/
│   ├── components/
│   ├── data/
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

## Independence

This project is not affiliated with, endorsed by, or representative of Raffineria di Milazzo, its shareholders, suppliers, or public authorities. Company sources are cited for factual context only.
