# Images Directory

Place your portfolio images in this directory.

## Required Images

### Hero Section
- **File:** `hero-abstract.jpg` (optional)
- **Size:** 600x800px
- **Format:** JPG or PNG
- **Usage:** Decorative element in the hero section sidebar

### Projects
- **Files:** Named according to your `portfolio.json` references
  - Example: `project-saas.jpg`, `project-mobile.jpg`
- **Size:** 1600x1000px (16:10 aspect ratio)
- **Format:** JPG or PNG
- **Usage:** Project screenshots/mockups in the work section

### Favicon
- **File:** `favicon.ico` (place in `/public` directory, not here)
- **Size:** 32x32px
- **Format:** ICO
- **Usage:** Browser tab icon

## Image Specifications

| Image Type | Recommended Size | Aspect Ratio | Format |
|------------|------------------|--------------|--------|
| Hero | 600x800px | 3:4 | JPG/PNG |
| Projects | 1600x1000px | 16:10 | JPG/PNG |
| Favicon | 32x32px | 1:1 | ICO |

## Optimization Tips

1. **Compress images** before uploading to reduce file size
   - Use tools like [TinyPNG](https://tinypng.com/)
   - Or [Squoosh](https://squoosh.app/)

2. **Use appropriate formats:**
   - JPG for photos and complex images
   - PNG for images with transparency
   - WebP for best compression (Next.js can convert automatically)

3. **Name files descriptively:**
   - Use lowercase
   - Use hyphens instead of spaces
   - Example: `project-dashboard-redesign.jpg`

## Referencing Images

In `portfolio.json`, reference images with the path `/images/filename.jpg`:

```json
{
  "hero": {
    "image": "/images/hero-abstract.jpg"
  },
  "projects": [
    {
      "image": "/images/project-saas.jpg"
    }
  ]
}
```

## Placeholder Images

If you don't have images yet, you can use placeholder services:

- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Placeholder.com](https://placeholder.com/) - Simple placeholder images
- [Lorem Picsum](https://picsum.photos/) - Random placeholder images

Example using Lorem Picsum in your JSON:
```json
{
  "image": "https://picsum.photos/1600/1000"
}
```

## Current Structure

```
public/
└── images/
    └── README.md (this file)
```

After adding your images:

```
public/
└── images/
    ├── README.md
    ├── hero-abstract.jpg
    ├── project-saas.jpg
    ├── project-mobile.jpg
    └── ... (your other images)
```

## Need Help?

Check the main [CUSTOMIZATION.md](../../CUSTOMIZATION.md) guide for more details on working with images.
