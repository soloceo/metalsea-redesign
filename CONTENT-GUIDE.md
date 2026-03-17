# MetalSea Website - Content Guide

This guide explains how to change images and text on the MetalSea website.

---

## Quick Start

1. Make your changes (see sections below)
2. Run `npm run dev` to preview locally at http://localhost:3000
3. Run `npm run build` to build for production

---

## Changing Images

### Image Configuration File

All image paths are in one file:

```
src/config/images.ts
```

Each image has a comment explaining where it appears on the site.

### How to Replace an Image

1. Put your new image file in `public/photos/` or `public/gallery/`
2. Open `src/config/images.ts`
3. Change the path to your new file

**Example:**
```ts
// Before
hero: "/gallery/1.png",

// After (using a new local file)
hero: "/photos/my-new-hero-image.jpg",

// Or using an external URL
hero: "https://images.unsplash.com/photo-xxx?w=2000",
```

### Image Locations on Each Page

| Image Key | Page | Location | Recommended Ratio |
|---|---|---|---|
| `hero` | Home | Full-screen hero background | 16:9 landscape |
| `detailFrame` | Home | Left detail card (below specs grid) | 4:3 landscape |
| `slidingDoors` | Home | Right detail card (beside detailFrame) | 4:3 landscape |
| `interiorDivider` | Home | Philosophy section left image | Any (fills area) |
| `aboutHero` | About | Hero image (left side, tall) | 4:5 portrait |
| `showroom` | About | Facility section (right side, tall) | 4:5 portrait |
| `professionalsHero` | Professionals | Full-width hero background | 16:9 landscape |
| `laptop` | Downloads | Background image | 16:9 landscape |
| `contactIllustration` | Contact | Decorative image | Any |
| `gallery` | Gallery | Array of gallery images | Any (masonry grid) |

### Image Best Practices

- **Format**: JPG or PNG (JPG for photos, PNG for graphics)
- **Max width**: 2000px (larger files slow down the site)
- **File size**: Under 500KB per image
- **Location**: Put files in `public/photos/` or `public/gallery/`

### Adding/Removing Gallery Images

Edit the `gallery` array in `src/config/images.ts`:

```ts
gallery: [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/new-project.jpg",  // Add new images here
  // Remove a line to remove an image
]
```

Also update the `galleryItems` array in `src/pages/Gallery.tsx` to match:

```ts
const galleryItems = [
  { category: 'Walk-in Closet', title: 'Premium Aluminum Frame Wardrobe' },
  { category: 'Walk-in Closet', title: 'Glass Door Dressing Room' },
  { category: 'Your Category', title: 'Your Project Title' },  // Match order
];
```

### Downloading More Images from metalsea.ca

The original MetalSea website has gallery images at:
```
https://www.metalsea.ca/images/gallery/1.png
https://www.metalsea.ca/images/gallery/2.png
... up to 45.png (some numbers are skipped)
```

---

## Changing Text

### Page Files

Each page is a separate file in `src/pages/`:

| Page | File | Key Sections |
|---|---|---|
| Home | `src/pages/Home.tsx` | Hero tagline, specs grid, philosophy text, CTA |
| About | `src/pages/About.tsx` | Company story, features grid, facility section, CTA |
| Professionals | `src/pages/Professionals.tsx` | Hero text, 3 profession cards, process steps, CTA |
| Gallery | `src/pages/Gallery.tsx` | Page title, gallery item labels |
| Contact | `src/pages/Contact.tsx` | Contact info, form labels |
| Downloads | `src/pages/Downloads.tsx` | Download descriptions |
| Model Builder | `src/pages/ModelBuilder.tsx` | Configurator description |

### Common Text Changes

#### Change the Hero Tagline (Home Page)

In `src/pages/Home.tsx`, find:
```tsx
<span className={`block ...`}>Precision.</span>
<span className={`block ...`}>Purity.</span>
<span className="block text-gold-gradient">Prestige.</span>
```

#### Change Contact Information

Contact info appears in multiple places. Search and replace across these files:
- `src/pages/Contact.tsx`
- `src/pages/About.tsx`
- `src/pages/Professionals.tsx`
- `src/components/Footer.tsx`

Current contact info:
- Phone: `(647) 895-2155`
- Email: `info@metalsea.ca`
- Address: `Unit 6 & 7, 50 West Pearce St., Richmond Hill, ON, L4B1C5`
- Hours: `Mon-Sat 9:30am-5:00pm`

#### Change Footer Links

In `src/components/Footer.tsx`, find the "Explore" section to add/remove nav links.

#### Change Social Media Links

In `src/components/Footer.tsx`, find `href="#"` and replace with your actual URLs:
```tsx
<a href="https://instagram.com/yourpage" ...>  // Instagram
<a href="https://linkedin.com/company/yourpage" ...>  // LinkedIn
```

---

## Changing the Logo

Logo files are in `public/`:
- `public/logo-white.svg` - Used in dark mode
- `public/logo-black.svg` - Used in light mode
- `public/favicon.svg` - Browser tab icon

Replace these files with your new logos (keep the same filenames).

---

## Theme (Dark/Light Mode)

The site supports dark and light modes. The toggle button is in the navbar.

Theme colors are defined in `src/index.css` using CSS variables:
- `:root` = dark mode colors (default)
- `.light` = light mode colors

---

## File Structure Overview

```
public/
  gallery/        <- MetalSea product photos (from metalsea.ca)
  photos/         <- Additional interior/kitchen photos
  logo-white.svg  <- Dark mode logo
  logo-black.svg  <- Light mode logo
  favicon.svg     <- Browser tab icon

src/
  config/
    images.ts     <- ALL image paths (change images here)
  pages/
    Home.tsx       <- Home page
    About.tsx      <- About page
    Professionals.tsx <- For Professionals page
    Gallery.tsx    <- Gallery page
    Contact.tsx    <- Contact page
    Downloads.tsx  <- Downloads page
    ModelBuilder.tsx <- Model Builder page
  components/
    Navbar.tsx     <- Top navigation bar
    Footer.tsx     <- Footer with links and contact
    ThemeToggle.tsx <- Dark/light mode button
  layouts/
    MainLayout.tsx <- Shared layout (Navbar + Footer)
  context/
    ThemeContext.tsx <- Theme state management
```

---

## Need Help?

- **Preview changes**: `npm run dev` then open http://localhost:3000
- **Build for production**: `npm run build` (output in `dist/`)
- **Deploy**: Upload the `dist/` folder to your hosting provider
