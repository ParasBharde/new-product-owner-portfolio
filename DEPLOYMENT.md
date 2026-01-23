# Deployment Guide

This guide will help you deploy your portfolio to various platforms and troubleshoot common issues.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository

3. **Configure Build Settings**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting Vercel 404 Error

If you're getting a **404: NOT_FOUND** error on Vercel, follow these steps:

### 1. Check Build Logs

1. Go to your Vercel project dashboard
2. Click on the failed deployment
3. Click "View Build Logs"
4. Look for errors in the build output

**Common issues to look for:**
- TypeScript compilation errors
- Module not found errors
- JSON import errors
- Missing dependencies

### 2. Verify Project Structure

Ensure your project has these files:
```
your-project/
├── app/
│   ├── layout.tsx  ✓
│   ├── page.tsx    ✓
│   └── globals.css ✓
├── portfolio.json  ✓
├── package.json    ✓
├── next.config.ts  ✓
└── tsconfig.json   ✓
```

### 3. Check Environment Variables

If you added any environment variables locally, make sure to add them in Vercel:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add any required variables

### 4. Verify Build Output

In the build logs, you should see:
```
✓ Generating static pages (3/3)
Route (app)
┌ ○ /               ← This is your homepage
└ ○ /_not-found
```

If you don't see `○ /`, the homepage isn't being generated.

### 5. Check Framework Preset

1. Go to Project Settings
2. Click "General"
3. Verify **Framework Preset** is set to "Next.js"
4. If not, change it and redeploy

### 6. Force Redeploy

Sometimes a fresh deployment helps:

1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Check "Use existing Build Cache" is **unchecked**
5. Click "Redeploy"

### 7. Check Node.js Version

Verify you're using a compatible Node.js version:

1. Add/update `package.json`:
```json
{
  "engines": {
    "node": ">=18.17.0"
  }
}
```

2. Or set in Vercel:
   - Project Settings → General
   - Node.js Version: **18.x** or **20.x**

### 8. Verify TypeScript Configuration

Check that `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "jsx": "react-jsx",
    "target": "ES2017"
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.json"  ← Important for portfolio.json
  ]
}
```

### 9. Check for Import Errors

Make sure all imports use the correct path alias:
```tsx
// ✓ Correct
import { HERO } from '@/lib/constants';

// ✗ Incorrect
import { HERO } from '../lib/constants';
```

### 10. Clear Build Cache

If nothing works:

1. Delete `.next` folder locally:
   ```bash
   rm -rf .next
   ```

2. Delete `node_modules`:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Test build locally:
   ```bash
   npm run build
   ```

4. If local build works, force redeploy on Vercel

## Common Error Messages

### "Module not found: Can't resolve '@/...'"

**Solution:** Check `tsconfig.json` has correct path mapping:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### "Cannot find module './portfolio.json'"

**Solution:**
1. Verify `portfolio.json` is in project root
2. Check it's committed to Git: `git ls-files | grep portfolio.json`
3. Ensure `tsconfig.json` includes `"**/*.json"`

### "Type error: Cannot use import statement outside a module"

**Solution:** Check `package.json` doesn't have `"type": "module"` set.

### "Build failed with exit code 1"

**Solution:**
1. Check build logs for specific error
2. Try building locally: `npm run build`
3. Fix any TypeScript or build errors

## Deploy to Other Platforms

### Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### Railway

1. Push code to GitHub
2. Go to [Railway](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Next.js
6. Deploy

### DigitalOcean App Platform

1. Push code to GitHub
2. Go to [DigitalOcean](https://digitalocean.com)
3. Create new App
4. Select GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Run command: `npm start`
6. Deploy

## Custom Domain

### On Vercel

1. Go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 24 hours)

### SSL Certificate

Vercel automatically provisions SSL certificates for all domains.

## Performance Optimization

### After Deployment

1. **Check Lighthouse Score**
   - Open DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ scores

2. **Enable Analytics** (Optional)
   - Vercel Analytics
   - Google Analytics
   - Plausible

3. **Test Load Time**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Optimize images if needed
   - Check Core Web Vitals

## Monitoring

### Vercel Analytics

1. Go to Project
2. Click "Analytics" tab
3. View real-time metrics

### Error Tracking

Consider adding:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay

## Getting Help

If you're still having issues:

1. **Check Vercel Status:** [vercel-status.com](https://www.vercel-status.com/)
2. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
3. **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
4. **GitHub Issues:** Open an issue in your repo

## Deployment Checklist

Before deploying:

- [ ] Code is pushed to GitHub
- [ ] `portfolio.json` is updated with your info
- [ ] Images are added to `public/images/`
- [ ] Build succeeds locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Favicon is added to `public/`
- [ ] SEO metadata is updated
- [ ] Environment variables are configured (if any)

After deploying:

- [ ] Site loads correctly
- [ ] All sections display properly
- [ ] Mobile menu works
- [ ] Links work correctly
- [ ] Images load
- [ ] SEO meta tags are correct (check page source)
- [ ] Lighthouse score is good
- [ ] Tested on multiple devices

---

**Need more help?** Check the [README.md](./README.md) or [CUSTOMIZATION.md](./CUSTOMIZATION.md) guides.
