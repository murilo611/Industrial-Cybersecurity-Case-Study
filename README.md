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
- One-file export for direct GitHub Pages upload.

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

## Publish by uploading one file to GitHub

The existing GitHub repository currently serves its root `index.html` directly. To avoid a build workflow and folder-upload problems, generate a self-contained HTML page with all application JavaScript and CSS embedded in it:

```bash
npm run build:github-upload
```

The upload-ready file is `github-upload/index.html`. It is one standalone HTML file and does not rely on the Vite source tree, `src` directory, `dist`, or GitHub Actions at runtime.

1. Open `github-upload` on your computer and select **only** its `index.html`.
2. In the GitHub repository, choose **Add file → Upload files** and upload that file at the repository root, replacing the existing root `index.html`. Do not upload it into a new folder.
3. Commit the change.
4. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, and save. This direct-upload method does not use GitHub Actions.
5. Wait for the Pages deployment, then refresh the public URL.

The project source files can also be uploaded to the repository root for reference, but they are not required to run the standalone page. Do not select `src/index.html` or `dist/index.html`; upload exactly `github-upload/index.html`.

## Research integrity

Company-specific statements are tied to the source bibliography in the application. Publication dates are marked as unstated when not provided by the publisher. Risk ratings are qualitative scenario-planning estimates—not measured probabilities, incidents, or RAM risk ratings. A missing public disclosure is not evidence that a control is absent.

The method and limitations are documented in [docs/RESEARCH-METHODOLOGY.md](./docs/RESEARCH-METHODOLOGY.md). Revalidate source pages and dates before reusing this work in a formal or commercial assessment.

## Project structure

```text
.
├── docs/
│   └── RESEARCH-METHODOLOGY.md
├── github-upload/
│   ├── index.html
│   └── LEIA-ME.txt
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
