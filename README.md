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

**Built with ❤️ using Next.js**

Made by developers, for Product Owners and Product Managers who want a professional online presence.
# vijay-wade-portfolio
