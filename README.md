# WattCostGuide

Static Astro site for appliance electricity cost calculators and practical energy-use guides.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm run audit` | Build and run the complete site audit |
| `pnpm run audit:dist` | Audit the existing `dist/` output without rebuilding |
| `pnpm preview` | Preview the production build locally |

## Site audit

The audit checks page metadata, Open Graph tags, title and description duplication, internal links, local images,
stale rate copy, calculator sources and update dates, robots.txt, and sitemap coverage. Errors return a non-zero exit
code. GitHub Actions runs the audit automatically for pull requests and pushes to `main`.
