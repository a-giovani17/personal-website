# Alex Morgan — Photographer & Visual Documentarian

A personal website and visual portfolio designed for photographer Alex Morgan, built with Next.js, React 19, Tailwind CSS v4, and shadcn/ui.

The design embodies an understated, gallery-inspired editorial aesthetic: generous negative space, refined typography, quiet contrast, and zero marketing jargon.

---

## Design System & Typography

- **Headings & Display:** `Newsreader` (Editorial serif) — gives a literary, monograph-like presence suited for fine art and architectural documentation.
- **Body & Interface:** `Geist` — clean, modern, and highly legible across device viewports.
- **Metadata & Technical Captions:** `Geist Mono` — establishes precision for camera specifications, exposure settings, dates, and geographic locations.
- **Palette:** Understated monochrome gallery palette (`stone` base) with full support for light and darkroom modes via `next-themes`.

---

## Key Features

1. **Introduction & Hero:**
   - Typographic artist statement outlining core disciplines: architectural documentation, editorial portraiture, and documentary essays.
   - Featured flagship photographic plate with exposure metadata and location details.
   - Direct jump links to selected works and commission parameters.

2. **Selected Works Gallery:**
   - Curated index of photographic plates categorized into *Architecture & Spaces*, *Editorial & Portraits*, *Documentary & Street*, and *Nature & Landscapes*.
   - Filterable tabs with active count indicators.
   - Fullscreen **Photo Lightbox** modal featuring high-resolution plate viewing, curatorial observations, technical camera settings (camera body, lens, exposure, film stock), keyboard navigation (`←`, `→`, `Esc`), and a direct mail inquiry button for each individual plate.

3. **About the Practice:**
   - Artist portrait and philosophy on natural light, negative space, and architectural rhythm.
   - Working equipment inventory (Hasselblad 503CW, Leica M11-P, Leica M6, Carl Zeiss & Leica optics).
   - Selected collaborations, architectural clients, and publication features.

4. **Commissions & Pricing:**
   - Understated commission valuation table avoiding commercial marketing buzzwords.
   - Structured frameworks for *Editorial & Feature Assignments*, *Architectural & Spatial Documentation*, and *Artist & Environmental Portraiture*.
   - Tabbed view for *Limited Archival Pigment Prints* on 100% cotton rag paper (Hahnemühle Photo Rag, Canson Platine) with edition numbers and dimensions.
   - Standard inclusions checklist covering creative partnership, color grading, transparent licensing, and 5-year archival negative backup.

5. **Contact & Inquiries:**
   - Prominently placed direct email address: `hello@example.com`.
   - One-click "Copy Address" button with immediate visual feedback.
   - Direct `mailto:` action button pre-filling the inquiry subject.
   - Interactive inquiry form for project scope, timeline, and category.

6. **Interactive Image Replacement Guide:**
   - Built-in modal dialog accessible from the header and footer (`Image Guide (14)`).
   - Lists every placeholder image across the site with target aspect ratios, recommended resolutions, and exact code locations in `lib/portfolio-data.ts`.

---

## Image Replacement Guide

All photography currently uses curated Unsplash placeholders. To replace them with your own work, place exported JPEG or WebP files in `public/photos/` and update the corresponding `src` in `lib/portfolio-data.ts`:

| ID | Location | Category | Ratio | Recommended Size | Target File & Key |
|---|---|---|---|---|---|
| `hero-featured` | Hero Banner | Architecture | 16:9 | 2000 × 1125 px | `lib/portfolio-data.ts` → `heroPhoto` |
| `artist-portrait` | About Section | Artist Profile | 4:5 | 1200 × 1500 px | `lib/portfolio-data.ts` → `artistPortraitPhoto` |
| `arch-01` | Gallery #1 | Architecture | 3:2 | 1800 × 1200 px | `lib/portfolio-data.ts` → `portfolioPhotos[0]` |
| `edit-01` | Gallery #2 | Editorial | 4:5 | 1440 × 1800 px | `lib/portfolio-data.ts` → `portfolioPhotos[1]` |
| `doc-01` | Gallery #3 | Documentary | 3:2 | 1800 × 1200 px | `lib/portfolio-data.ts` → `portfolioPhotos[2]` |
| `arch-02` | Gallery #4 | Architecture | 16:9 | 1920 × 1080 px | `lib/portfolio-data.ts` → `portfolioPhotos[3]` |
| `edit-02` | Gallery #5 | Editorial | 1:1 | 1500 × 1500 px | `lib/portfolio-data.ts` → `portfolioPhotos[4]` |
| `land-01` | Gallery #6 | Landscape | 3:2 | 1800 × 1200 px | `lib/portfolio-data.ts` → `portfolioPhotos[5]` |
| `arch-03` | Gallery #7 | Architecture | 4:5 | 1440 × 1800 px | `lib/portfolio-data.ts` → `portfolioPhotos[6]` |
| `edit-03` | Gallery #8 | Editorial | 3:2 | 1800 × 1200 px | `lib/portfolio-data.ts` → `portfolioPhotos[7]` |
| `doc-02` | Gallery #9 | Documentary | 1:1 | 1500 × 1500 px | `lib/portfolio-data.ts` → `portfolioPhotos[8]` |
| `land-02` | Gallery #10 | Landscape | 16:9 | 1920 × 1080 px | `lib/portfolio-data.ts` → `portfolioPhotos[9]` |
| `arch-04` | Gallery #11 | Architecture | 4:5 | 1440 × 1800 px | `lib/portfolio-data.ts` → `portfolioPhotos[10]` |
| `doc-03` | Gallery #12 | Documentary | 3:2 | 1800 × 1200 px | `lib/portfolio-data.ts` → `portfolioPhotos[11]` |

---

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type check
pnpm typecheck

# Lint codebase
pnpm lint

# Production build
pnpm build
```
