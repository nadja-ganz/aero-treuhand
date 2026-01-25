# Aero und Treuhand Website

A modern, clean website for Aero und Treuhand, featuring balloon ride services and fiduciary services with a professional multi-page structure.

## Design Features

- **Elegant Typography**: Uses Cormorant Garamond for headings and Work Sans for body text
- **Sophisticated Color Palette**: Sky blue, cloud white, and gold accents evoke both aviation and trust
- **Subtle Animations**: Smooth fade-ins, floating elements, and hover effects
- **Modern Aesthetics**: Clean layouts with generous whitespace and refined details
- **Responsive Design**: Adapts beautifully to all screen sizes
- **Glassmorphism Header**: Semi-transparent navigation with backdrop blur
- **Enhanced Readability**: Larger font sizes optimized for all age groups, including older visitors

## Project Structure

```
aero-und-treuhand/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet (all CSS)
├── pages/
│   ├── ballonfahrten.html # Balloon rides page
│   ├── treuhand.html      # Fiduciary services page
│   ├── kontakt.html       # Contact page
│   ├── impressum.html     # Imprint/Legal information
│   └── datenschutz.html   # Privacy policy
└── README.md              # This file
```

## Pages Overview

- **index.html**: Homepage with introduction and call-to-action buttons
- **ballonfahrten.html**: Detailed information about balloon rides, safety, requirements, and insurance
- **treuhand.html**: Comprehensive overview of fiduciary services and business consulting
- **kontakt.html**: Contact information with separate details for balloon rides and fiduciary services
- **impressum.html**: Legal information and disclaimers
- **datenschutz.html**: Complete privacy policy compliant with Swiss data protection law

## CSS Architecture

All styles are centralized in `css/style.css` including:
- CSS custom properties for consistent theming
- Responsive breakpoints for mobile optimization
- Animation keyframes
- Component-specific styles
- Page-specific background classes

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --color-sky: #E8F4F8;
    --color-cloud: #F8FAFB;
    --color-slate: #1A2332;
    --color-gold: #B8935C;
    /* ... */
}
```

### Content
- Edit individual HTML files in their respective locations
- Navigation is consistent across all pages
- Footer links are relative and work from all pages

### Adding Images
Place images in a new `images/` directory and reference them as:
- From root: `images/your-image.jpg`
- From pages: `../images/your-image.jpg`

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Technologies Used

- HTML5
- CSS3 with CSS Variables
- Vanilla JavaScript (minimal, for header scroll effect)
- Google Fonts (Cormorant Garamond, Work Sans)

## License

All rights reserved © 2026 Aero und Treuhand

## How to Use

1. Open `index.html` in any modern web browser
2. Navigate between sections using the menu at the top
3. The page is ready to be customized with your specific content, images, and contact information

## Customization

To customize the website:

- **Colors**: Edit the CSS color values in the `<style>` section
- **Content**: Modify the text in each `<section>` element
- **Add images**: Insert `<img>` tags in the relevant sections
- **Contact information**: Add a contact section or footer details
- **Logo**: Replace the text logo in the header with an image

## Technologies Used

- HTML5
- CSS3 (embedded in HTML)
- No JavaScript required (pure HTML/CSS)

## Browser Compatibility

This website works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

All rights reserved © 2026 Aero und Treuhand
