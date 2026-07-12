# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aero und Treuhand is a static website for a Swiss company offering balloon ride services and fiduciary/accounting services. All content is in German.

## Development

This is a pure static HTML/CSS/JS site with no build system, package manager, or dependencies.

**To run locally:**
```bash
python3 -m http.server
# or
npx http-server
```
Then open http://localhost:8000 in a browser.

## Architecture

**Technology stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts

**Structure:**
- `index.html` - Homepage
- `css/style.css` - Single centralized stylesheet with CSS custom properties
- `js/main.js` - Shared JavaScript (header scroll effect)
- `pages/` - Dedicated pages (ballonfahrten, treuhand, kontakt, impressum, datenschutz)

**Key patterns:**
- All pages share the same header/footer structure
- CSS uses custom properties for theming (defined in `:root`)
- Responsive breakpoints at 768px and 480px
- Paths from pages use `../` to reference root assets (e.g., `../css/style.css`, `../js/main.js`)
- All pages include skip-to-content link for accessibility
- CSS respects `prefers-reduced-motion` for users who prefer no animations

**CSS color variables:**
```css
--color-sky: #E8F4F8      /* Light sky blue backgrounds */
--color-cloud: #F8FAFB    /* Off-white/cloud */
--color-slate: #1A2332    /* Dark navy */
--color-gold: #B8935C     /* Accent color */
```

**Typography:**
- Font: Montserrat (weights: 300, 400, 500, 600)

## Current State

- Contact information uses placeholder values (`+41 xx xxx xx xx`, `Musterstrasse 123`)
- No `images/` directory exists yet; add images there when needed
