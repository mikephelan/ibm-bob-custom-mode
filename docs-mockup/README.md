# IBM Product Documentation Mock-up

A comprehensive product documentation web page mock-up built with IBM Carbon Design System and following IBM Design Language principles.

## Overview

This mock-up demonstrates a professional documentation page that adheres to:
- **IBM Design Language** - Typography, color palette, spacing, and layout principles
- **Carbon Design System** - IBM's open-source design system components
- **IBM Experience Standards** - Accessibility, usability, and user experience best practices

## Features

### Design Components

1. **Header Navigation**
   - Sticky header with IBM branding
   - Primary navigation menu
   - Responsive design

2. **Three-Column Layout**
   - Left sidebar: Primary navigation with expandable sections
   - Main content: Documentation content with sections
   - Right sidebar: Table of contents with active section tracking

3. **Interactive Components**
   - Accordion for collapsible content
   - Tabs for API method organization
   - Code snippets with copy-to-clipboard functionality
   - Notification banners for important updates
   - Smooth scrolling navigation

4. **Content Elements**
   - Breadcrumb navigation
   - Information cards with hover effects
   - Structured lists/tables for parameters
   - API method documentation with badges
   - Tutorial sections

### Accessibility Features

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels and roles
- Focus indicators
- Skip-to-content link
- Screen reader friendly
- High contrast ratios following IBM Design Language

### Responsive Design

- Desktop: Full three-column layout (1584px max-width)
- Tablet: Two-column layout (hides right TOC)
- Mobile: Single column (hides sidebars, shows mobile menu)

## File Structure

```
docs-mockup/
├── index.html      # Main HTML structure with Carbon components
├── styles.css      # Custom CSS following IBM Design Language
├── script.js       # Interactive JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Interactive components
- **Carbon Design System** - IBM's design system (CDN)
- **IBM Plex** - IBM's typeface family

## IBM Design Language Principles Applied

### Color Palette
- IBM Blue (#0f62fe) - Primary actions and links
- Gray scale - Text hierarchy and backgrounds
- Semantic colors - Success, warning, error states

### Typography
- IBM Plex Sans - Body text and UI elements
- IBM Plex Mono - Code snippets
- Type scale following IBM's 8-point grid system

### Spacing
- 8-point grid system (0.125rem base unit)
- Consistent spacing tokens (spacing-01 through spacing-10)
- Proper content density

### Layout
- 16-column grid system
- Responsive breakpoints at 672px, 1056px, 1312px
- Maximum content width of 1584px

## How to Use

1. **Open the page**
   ```bash
   open docs-mockup/index.html
   ```
   Or simply double-click the `index.html` file in your file browser.

2. **Navigate the documentation**
   - Use the left sidebar to jump between major sections
   - Use the right table of contents for quick navigation within a page
   - Click on breadcrumbs to navigate up the hierarchy

3. **Interactive features**
   - Click accordion items to expand/collapse content
   - Switch between API method tabs
   - Copy code snippets using the copy button
   - Smooth scroll to sections via anchor links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Modify CSS custom properties in [`styles.css`](styles.css:1-15):
```css
:root {
    --ibm-blue-60: #0f62fe;
    --ibm-gray-100: #161616;
    /* ... other color tokens */
}
```

### Spacing
Adjust spacing scale in [`styles.css`](styles.css:17-26):
```css
:root {
    --spacing-05: 1rem;
    --spacing-06: 1.5rem;
    /* ... other spacing tokens */
}
```

### Content
Edit sections in [`index.html`](index.html:1-363) to customize:
- Navigation items
- Documentation sections
- API methods
- Tutorials

## IBM Experience Standards Compliance

✅ **Accessibility**
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management

✅ **Usability**
- Clear information hierarchy
- Consistent navigation
- Helpful feedback (copy confirmation)
- Progressive disclosure (accordions)

✅ **Performance**
- Minimal dependencies
- Optimized CSS
- Efficient JavaScript
- Fast load times

✅ **Responsive**
- Mobile-first approach
- Flexible layouts
- Touch-friendly targets
- Readable on all devices

## Design Decisions

### Why Carbon Design System?
Carbon is IBM's official design system, ensuring consistency across IBM products and providing battle-tested components.

### Why Three-Column Layout?
This layout pattern is optimal for documentation:
- Left: Persistent navigation for wayfinding
- Center: Content with optimal reading width (832px)
- Right: Quick navigation within current page

### Why Sticky Elements?
- Header: Always accessible navigation
- Sidebars: Persistent access to navigation and TOC
- Improves user experience for long-form content

## Future Enhancements

Potential additions for a production version:
- Search functionality with autocomplete
- Version selector dropdown
- Dark mode toggle
- Feedback widget
- Print-optimized styles
- Multi-language support
- Analytics integration

## Resources

- [IBM Design Language](https://www.ibm.com/design/language/)
- [Carbon Design System](https://carbondesignsystem.com/)
- [IBM Accessibility](https://www.ibm.com/able/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## License

This is a mock-up for demonstration purposes. IBM, Carbon Design System, and IBM Design Language are trademarks of International Business Machines Corporation.

---

**Created with IBM Design Language and Carbon Design System**