# Addie Segal OTD - ADHD Occupational Therapy Website

A fully static, SEO-optimized website for Dr. Addie Segal, an occupational therapist specializing in adult ADHD using the CogFun protocol.

## Features

✅ **Static Site Generation** — Next.js with `output: 'export'` generates pure HTML (no server required)  
✅ **SEO Optimized** — Unique titles/meta descriptions, JSON-LD schemas, sitemap.xml, robots.txt  
✅ **Mobile Responsive** — Tailwind CSS with responsive design  
✅ **Semantic HTML** — Proper semantic tags (main, article, section, nav, footer)  
✅ **Accessible** — Descriptive alt text, proper heading hierarchy  
✅ **Fast** — Static HTML deployment on Netlify or any static host  

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **SEO**: Metadata API, JSON-LD structured data
- **Deployment**: Netlify (or any static host)

## Project Structure

```
app/
  layout.tsx              # Root layout with Navigation & Footer
  page.tsx               # Home page
  globals.css            # Global styles
  about/page.tsx         # About page
  services/page.tsx      # Services page
  blog/
    page.tsx             # Blog index
    [slug]/page.tsx      # Individual blog posts (15 posts)
components/
  Navigation.tsx         # Header navigation
  Footer.tsx            # Footer
  ExpandableSection.tsx  # Expandable ADHD symptoms sections
public/
  sitemap.xml           # XML sitemap for SEO
  robots.txt            # Robots file
next.config.js          # Next.js config with `output: 'export'`
package.json
tsconfig.json
tailwind.config.js
postcss.config.js
```

## Pages

1. **Home** (`/`) — Hero, expandable ADHD symptom sections, CogFun overview
2. **Services** (`/services`) — Detailed CogFun protocol, units, what to expect
3. **Blog** (`/blog`) — 15 evidence-based articles on adult ADHD & OT
4. **About** (`/about`) — About Addie Segal, credentials, mission

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd addiesegal-website

# Install dependencies
npm install

# Build static site
npm run build

# Test locally
npm run start
```

## Local Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Building for Production

```bash
# Build static HTML
npm run build

# Output goes to `out/` directory
```

## Deployment on Netlify

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Select GitHub, authorize, and choose your repository
5. Build settings should auto-detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Click **Deploy**

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the static site
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Option 3: Manual Drag & Drop

1. Run `npm run build` locally
2. Go to [Netlify.app](https://netlify.app)
3. Drag and drop the `out/` folder
4. Your site is live instantly

## Environment Variables

No environment variables needed for this static site.

## SEO Features

- ✅ Unique `<title>` and `<meta name="description">` on every page
- ✅ JSON-LD LocalBusiness schema on Home and Services pages
- ✅ Open Graph meta tags for social sharing
- ✅ `sitemap.xml` covering all pages
- ✅ `robots.txt` for search engine crawlers
- ✅ Semantic HTML structure
- ✅ Descriptive alt text on all images
- ✅ Internal linking between all pages

## Content

All content is hardcoded in page components (no CMS). To update:

1. Edit the relevant page in `app/[page]/page.tsx`
2. Run `npm run dev` to preview
3. Commit and push to GitHub (if using Netlify auto-deployment)
4. Netlify automatically rebuilds and deploys

## Blog Posts

15 blog posts covering:
- What is CogFun
- Task initiation and ADHD
- Finding an ADHD specialist
- Telehealth therapy
- ADHD in adults
- ADHD in women
- High-functioning ADHD
- RSD (Rejection Sensitive Dysphoria)
- Executive function
- Emotional dysregulation
- ADHD testing
- And more...

Each post is ~600-700 words with natural conversational tone and CTAs.

## Design

- **Color palette**: Warm off-white background, soft muted tones
- **Typography**: Modern, readable fonts (from Tailwind defaults)
- **Responsive**: Mobile-first design that scales to desktop
- **Accessibility**: Proper contrast, semantic HTML, descriptive links

## Support

For issues or questions, contact: [your-email@example.com]

## License

© 2026 Dr. Addie Segal, OTD. All rights reserved.
