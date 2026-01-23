# Customization Guide

This guide will walk you through every aspect of customizing your portfolio to make it your own.

## Table of Contents

1. [Portfolio Configuration](#portfolio-configuration)
2. [Adding Images](#adding-images)
3. [Styling Customization](#styling-customization)
4. [Adding New Sections](#adding-new-sections)
5. [Advanced Customization](#advanced-customization)

## Portfolio Configuration

All your personal data is stored in `portfolio.json` at the root of the project. This file is organized into logical sections.

### Personal Information

```json
{
  "personal": {
    "name": "Alex Morgan",           // Your full name
    "brandName": "Alex Morgan.",     // Name shown in header (can include punctuation)
    "role": "Product Owner & Strategist",  // Your job title/role
    "location": "San Francisco",     // Your city/location
    "experience": "5 Years",         // Years of experience
    "tagline": "I build products that make sense.",  // Short tagline
    "description": "Moving beyond feature factories..."  // Longer description for hero
  }
}
```

**What gets updated:**
- Header brand name
- Hero section tagline
- Hero section description
- Footer location
- Hero sidebar info

### SEO Configuration

```json
{
  "seo": {
    "title": "Alex Morgan - Product Owner & Strategist",
    "description": "Product Owner & Strategist helping teams...",
    "url": "https://alexmorgan.product",
    "keywords": [
      "Product Owner",
      "Product Manager",
      "Strategist"
    ]
  }
}
```

**Important:**
- `title` appears in browser tabs and search results
- `description` shows in search result snippets
- `url` should be your actual domain (used for OpenGraph)
- `keywords` help with SEO

### Contact Information

```json
{
  "contact": {
    "email": "hello@alexmorgan.product",
    "linkedin": "linkedin.com/in/alexmorgan",
    "status": "Currently based in San Francisco. Open for remote Product Owner and Senior PM roles."
  }
}
```

**Notes:**
- Email becomes a clickable `mailto:` link
- LinkedIn URL will be prefixed with `https://`
- Status appears in the footer

### Hero Section

```json
{
  "hero": {
    "headline": "I build products",
    "headlineItalic": "that make sense.",
    "ctaText": "See Case Studies",
    "ctaHref": "#work",
    "image": "/images/hero-abstract.jpg"
  }
}
```

**Styling notes:**
- `headline` is in regular serif font
- `headlineItalic` is in italic serif font
- They appear on separate lines
- `ctaHref` should be an anchor link or external URL

### Philosophy Section

```json
{
  "philosophy": {
    "title": "The Philosophy",
    "subtitle": "Why I do this",
    "content": [
      {
        "emphasis": "Data is useful, but intuition is vital.",
        "paragraph": "In a world obsessed with metrics..."
      },
      {
        "emphasis": "",
        "paragraph": "I don't just manage tickets in Jira..."
      }
    ],
    "principles": [
      {
        "title": "Discovery",
        "subtitle": "Not just \"what\", but \"why\""
      }
    ]
  }
}
```

**Structure:**
- `content` array can have multiple paragraphs
- If `emphasis` has text, it appears bold before the paragraph
- `principles` appear as a 2x2 or 4-column grid

### Projects

```json
{
  "projects": [
    {
      "id": "unique-project-id",        // Unique identifier (lowercase, no spaces)
      "category": "SaaS Analytics",     // Project category tag
      "title": "Redefining Data Clarity",
      "description": "We turned a clunky...",
      "role": "Lead Product Owner",
      "focus": "UX Research, Data Viz",
      "outcome": "+$2M ARR attributed",
      "link": "#",                      // Link to case study or external URL
      "image": "/images/project-saas.jpg",
      "type": "dashboard"               // "dashboard" or "mobile"
    }
  ]
}
```

**Project Types:**
- `"dashboard"` - Shows desktop UI mockup
- `"mobile"` - Shows mobile phone mockup

**Layout:**
- Projects alternate between left/right layouts automatically
- First project: image on left, text on right
- Second project: text on left, image on right
- And so on...

### Tools & Skills

```json
{
  "tools": [
    {
      "name": "Jira & Linear",
      "category": "Project Management"
    }
  ]
}
```

**Display:**
- Shows in 2-3 columns on desktop
- Name in bold, category in smaller text below
- Appears with staggered reveal animations

### Experience Timeline

```json
{
  "experience": [
    {
      "id": "techflow",
      "role": "Senior Product Owner",
      "time": "2023 — Present",         // Use em dash (—) not hyphen (-)
      "company": "TechFlow Solutions",
      "description": "Leading the core platform team...",
      "highlighted": true               // Orange dot if true, gray if false
    }
  ]
}
```

**Visual notes:**
- `highlighted: true` shows an orange dot (use for current role)
- `highlighted: false` shows a gray dot
- Timeline flows from top to bottom
- Most recent position should be first

### Social Links

```json
{
  "social": [
    {
      "label": "Resume",
      "href": "/resume.pdf",       // Can be relative or absolute
      "external": false            // true opens in new tab
    },
    {
      "label": "Twitter",
      "href": "https://twitter.com/yourhandle",
      "external": true
    }
  ]
}
```

### Footer

```json
{
  "footer": {
    "copyrightYear": "2024",
    "copyrightName": "Alex Morgan"
  }
}
```

## Adding Images

### Image Locations

All images go in `public/images/`:

```
public/
└── images/
    ├── hero-abstract.jpg
    ├── project-saas.jpg
    ├── project-mobile.jpg
    └── favicon.ico
```

### Image Specifications

| Image | Recommended Size | Format | Purpose |
|-------|-----------------|--------|---------|
| Hero Abstract | 600x800px | JPG/PNG | Decorative element in hero |
| Project Screenshots | 1600x1000px | JPG/PNG | Project mockups |
| Favicon | 32x32px | ICO | Browser tab icon |

### Using Images

In `portfolio.json`, reference images with a path starting with `/images/`:

```json
{
  "hero": {
    "image": "/images/hero-abstract.jpg"
  },
  "projects": [
    {
      "image": "/images/my-project.jpg"
    }
  ]
}
```

### Adding a Favicon

1. Create a 32x32px icon
2. Save as `public/favicon.ico`
3. Next.js will automatically use it

### Optimizing Images

For best performance:

```bash
# Install optimization tools
npm install -g sharp-cli

# Optimize an image
npx sharp -i input.png -o output.jpg --quality 85
```

## Styling Customization

### Color Scheme

Edit `app/globals.css`:

```css
:root {
  --color-background: #f9f8f6;  /* Page background */
  --color-foreground: #1c1917;  /* Text color */
  --color-accent: #ea580c;      /* Orange accent */
}
```

**Where colors are used:**
- Background: Page background with texture
- Foreground: Primary text
- Accent: Links, CTAs, highlighted timeline dots

### Tailwind Colors

You can use all Tailwind stone colors:
- `stone-50` to `stone-950`
- `orange-600` for accents

To change to a different color family, update `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Example: Use blue instead of orange
      accent: {
        600: '#2563eb',
      }
    }
  }
}
```

Then replace `orange-600` with `accent-600` in components.

### Fonts

Current fonts are loaded in `app/layout.tsx`:

```tsx
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
  rel="stylesheet"
/>
```

**To change fonts:**

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace in `app/layout.tsx`
5. Update `app/globals.css`:

```css
:root {
  --font-inter: 'YourFont', system-ui, sans-serif;
  --font-playfair: 'YourSerifFont', Georgia, serif;
}
```

### Background Texture

The paper texture is defined in `app/globals.css`:

```css
body {
  background-image: url("data:image/svg+xml,...");
}
```

**To remove texture:**
- Delete the `background-image` line

**To use a different pattern:**
- Visit [Hero Patterns](https://heropatterns.com/)
- Copy the SVG pattern
- Replace in `globals.css`

### Typography Scale

Heading sizes are defined with Tailwind classes:

- `text-5xl md:text-7xl lg:text-8xl` - Main hero heading
- `text-4xl` - Project titles
- `text-3xl` - Section headings
- `text-2xl` - Subheadings
- `text-xl` - Body large
- `text-base` - Body text

To adjust, edit the className in components.

## Adding New Sections

### Step 1: Create the Section Component

Create a new file in `components/sections/`:

```tsx
// components/sections/MyNewSection.tsx
import { Reveal } from '@/components/ui/Reveal';

export function MyNewSection() {
  return (
    <section id="my-section" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="font-serif text-5xl text-stone-900 mb-6">
          My New Section
        </h2>
        <p className="text-stone-600">
          Content goes here...
        </p>
      </Reveal>
    </section>
  );
}
```

### Step 2: Add to Page

Edit `app/page.tsx`:

```tsx
import { MyNewSection } from '@/components/sections/MyNewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MyNewSection />  {/* Add here */}
      <WorkSection />
      <ToolkitSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
```

### Step 3: Add to Navigation (Optional)

Edit `lib/constants.ts`:

```ts
export const NAV_LINKS: NavLink[] = [
  { label: 'Philosophy', href: '#about' },
  { label: 'My Section', href: '#my-section' },  // Add here
  { label: 'Selected Work', href: '#work' },
  { label: 'Process', href: '#process' },
];
```

### Step 4: Add Data to JSON (Optional)

If your section needs data:

1. Add to `portfolio.json`:
```json
{
  "mySection": {
    "title": "My Section",
    "items": [...]
  }
}
```

2. Export from `lib/constants.ts`:
```ts
export const MY_SECTION = portfolioData.mySection;
```

3. Use in component:
```tsx
import { MY_SECTION } from '@/lib/constants';
```

## Advanced Customization

### Animation Timing

Edit `components/ui/Reveal.tsx`:

```tsx
className={`transition-all duration-1000 ease-out`}
// Change duration-1000 to:
// - duration-500 (faster)
// - duration-2000 (slower)
```

### Scroll Animation Threshold

Edit `lib/hooks.ts`:

```ts
export function useIntersectionObserver(threshold: number = 0.1) {
  // Change 0.1 to:
  // - 0.3 (trigger when 30% visible)
  // - 0.5 (trigger when 50% visible)
}
```

### Mobile Menu Animation

Edit `components/ui/MobileMenu.tsx`:

```tsx
className={`transition-all duration-300`}
// Adjust duration-300 for different speed
```

### Navbar Scroll Threshold

Edit `components/layout/Header.tsx`:

```tsx
const isScrolled = useScrollDetection(50);
// Change 50 to different pixel value
```

### Project Card Layout

To change how projects alternate, edit `components/sections/WorkSection.tsx`:

```tsx
{PROJECTS.map((project, index) => (
  <ProjectCard
    project={project}
    reversed={index % 2 !== 0}  // Change logic here
  />
))}
```

### Custom Link Styles

The animated underline is in `app/globals.css`:

```css
.link-underline {
  background-size: 0% 2px;  /* Change 2px for thickness */
  transition: background-size 0.3s;  /* Change 0.3s for speed */
}
```

## Common Customizations

### Remove a Section

1. Open `app/page.tsx`
2. Delete or comment out the section:

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ToolkitSection /> */}  {/* Section hidden */}
      <WorkSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
```

### Reorder Sections

Just drag and drop in `app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />        {/* Moved up */}
      <AboutSection />       {/* Moved down */}
      <ToolkitSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
```

### Change Button Styles

Edit button classes in components:

```tsx
// Rounded button
className="rounded-full"

// Square button
className="rounded-md"

// Different color
className="bg-blue-600 hover:bg-blue-700"
```

### Add Social Icons

1. Install icon:
```bash
npm install lucide-react
```

2. Import and use:
```tsx
import { Github } from 'lucide-react';

<Github className="w-5 h-5" />
```

## Troubleshooting

### Images Not Showing

- Check path starts with `/images/`
- Verify file exists in `public/images/`
- Check file extension matches JSON

### JSON Changes Not Applying

- Restart dev server: `Ctrl+C` then `npm run dev`
- Check for JSON syntax errors
- Validate JSON: [JSONLint](https://jsonlint.com/)

### TypeScript Errors

- Run `npm run build` to see all errors
- Check that JSON structure matches types in `lib/types.ts`

### Styling Not Working

- Check Tailwind class names
- Make sure `tailwind.config.js` includes all file paths
- Restart dev server

## Need Help?

- Check the main [README.md](./README.md)
- Review component files for examples
- Open an issue on GitHub
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy customizing! 🎨**
