# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aero und Treuhand is a static website for a Swiss company offering balloon ride services and fiduciary/accounting services. All content is in German.

## Development

This is a pure static HTML/CSS site with no build system, package manager, or dependencies.

**To run locally:**
```bash
python3 -m http.server
# or
npx http-server
```
Then open http://localhost:8000 in a browser.

## Architecture

**Technology stack:** HTML5, CSS3, minimal vanilla JavaScript, Google Fonts

**Structure:**
- `index.html` - Homepage (currently "Coming Soon" placeholder)
- `css/style.css` - Single centralized stylesheet with CSS custom properties
- `pages/` - Dedicated pages (ballonfahrten, treuhand, kontakt, impressum, datenschutz)

**Key patterns:**
- All pages share the same header/footer structure and include identical scroll-effect JavaScript
- CSS uses custom properties for theming (defined in `:root`)
- Responsive breakpoint at 768px
- Paths from pages use `../` to reference root assets (e.g., `../css/style.css`)

**CSS color variables:**
```css
--color-sky: #E8F4F8      /* Light sky blue backgrounds */
--color-cloud: #F8FAFB    /* Off-white/cloud */
--color-slate: #1A2332    /* Dark navy */
--color-gold: #B8935C     /* Accent color */
```

**Typography:**
- Headings: Cormorant Garamond (serif)
- Body: Work Sans (sans-serif)

## Current State

- Homepage (`index.html`) is a placeholder
- Contact information uses placeholder values (`+41 xx xxx xx xx`, `Musterstrasse 123`)
- No `images/` directory exists yet; add images there when needed
