# Product Owner Portfolio - Next.js Template

A modern, production-ready portfolio template built with Next.js 16, TypeScript, and Tailwind CSS. Perfect for Product Owners, Product Managers, and Strategists looking to showcase their work professionally.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Beautiful Design** - Clean, professional aesthetic with paper texture overlay
- ⚡ **Lightning Fast** - Static site generation with Next.js App Router
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- 🎭 **Smooth Animations** - Scroll-based reveals with reduced motion support
- 🔍 **SEO Optimized** - Complete meta tags, OpenGraph, and Twitter cards
- 🎯 **Type Safe** - Full TypeScript coverage with strict mode
- 🎛️ **Easy to Customize** - Single JSON configuration file
- 🚀 **Production Ready** - Optimized build with best practices

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Customization](#customization)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [License](#license)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-owner-portfolio.git
   cd product-owner-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

This portfolio is designed to be easily customizable through a single configuration file.

### Step 1: Update Portfolio Data

Edit `portfolio.json` in the root directory. This file contains all your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "brandName": "Your Name.",
    "role": "Your Role",
    "location": "Your City",
    "experience": "X Years",
    ...
  },
  ...
}
```

### Step 2: Update SEO Information

In the same `portfolio.json` file, update the SEO section:

```json
{
  "seo": {
    "title": "Your Name - Your Title",
    "description": "Your description...",
    "url": "https://yourwebsite.com",
    "keywords": ["keyword1", "keyword2", ...]
  }
}
```

### Step 3: Add Your Projects

Update the projects array in `portfolio.json`:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "category": "Project Category",
      "title": "Project Title",
      "description": "Detailed description...",
      "role": "Your Role",
      "focus": "Focus Area",
      "outcome": "Key Result",
      "link": "#",
      "image": "/images/project-name.jpg",
      "type": "dashboard" // or "mobile"
    }
  ]
}
```

### Step 4: Add Images

Place your images in the `public/images/` directory:

- `hero-abstract.jpg` - Hero section visual (recommended: 600x800px)
- `project-*.jpg` - Project screenshots (recommended: 1600x1000px)
- `favicon.ico` - Browser favicon (32x32px)

### Step 5: Update Contact Information

```json
{
  "contact": {
    "email": "your.email@domain.com",
    "linkedin": "linkedin.com/in/yourprofile",
    "status": "Your availability status"
  }
}
```

### Step 6: Add Experience

```json
{
  "experience": [
    {
      "id": "unique-id",
      "role": "Job Title",
      "time": "2023 — Present",
      "company": "Company Name",
      "description": "What you did...",
      "highlighted": true // Orange dot for current/featured role
    }
  ]
}
```

### Step 7: Update Tools & Skills

```json
{
  "tools": [
    {
      "name": "Tool Name",
      "category": "Category"
    }
  ]
}
```

### Step 8: Update Social Links

```json
{
  "social": [
    {
      "label": "Platform",
      "href": "https://your-link.com",
      "external": true
    }
  ]
}
```

For more detailed customization instructions, see [CUSTOMIZATION.md](./CUSTOMIZATION.md).

## 📁 Project Structure

```
product-owner-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts & SEO
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer with contact
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── ToolkitSection.tsx
│   │   └── ExperienceSection.tsx
│   └── ui/                  # Reusable UI components
│       ├── Reveal.tsx       # Animation wrapper
│       ├── ProjectCard.tsx
│       ├── ExperienceCard.tsx
│       └── MobileMenu.tsx
├── lib/
│   ├── constants.ts         # Data exported from JSON
│   ├── types.ts             # TypeScript interfaces
│   └── hooks.ts             # Custom React hooks
├── public/
│   └── images/              # Your images go here
├── portfolio.json           # 📝 YOUR CONFIGURATION FILE
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🎯 Key Components

### Custom Hooks

- `useScrollDetection` - Detects scroll position for navbar transparency
- `useMobileMenu` - Manages mobile menu state and body scroll lock
- `usePrefersReducedMotion` - Respects user's motion preferences
- `useIntersectionObserver` - Efficient scroll animations

### Reusable Components

- `Reveal` - Fade-in animation wrapper with accessibility support
- `ProjectCard` - Project display with alternating layouts
- `ExperienceCard` - Timeline item with highlighted dots
- `MobileMenu` - Full-screen mobile navigation

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- AWS Amplify
- DigitalOcean App Platform
- Render
- Railway

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Inter & Playfair Display)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Screen reader friendly

## 🎨 Customization Options

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --color-background: #f9f8f6;
  --color-foreground: #1c1917;
  --color-accent: #ea580c;
}
```

### Fonts

Update font links in `app/layout.tsx` to use different Google Fonts.

### Sections

Sections can be easily reordered in `app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      {/* Reorder or remove sections as needed */}
    </>
  );
}
```

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the [CUSTOMIZATION.md](./CUSTOMIZATION.md) guide
- Review the code comments

## 🌟 Showcase

Using this template? We'd love to see it! Open a PR to add your portfolio to this section.

---

**Built with ❤️ using Next.js**

Made by developers, for Product Owners and Product Managers who want a professional online presence.
# vijay-wade-portfolio
