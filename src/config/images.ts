// ============================================================
// MetalSea Image Configuration
// ============================================================
// HOW TO CHANGE IMAGES:
//   1. Put your new image file in /public/photos/ or /public/gallery/
//   2. Update the path below (e.g., "photos/my-new-image.jpg")
//   3. Refresh the browser to see the change
//
// SUPPORTED FORMATS: .jpg, .png, .webp
// RECOMMENDED SIZE: 2000px wide max, under 500KB for fast loading
// You can also use external URLs (e.g., Unsplash links)
// ============================================================

const base = import.meta.env.BASE_URL;

export const images = {
  // ── HOME PAGE ──────────────────────────────────────────────
  // Hero background (full-screen behind "Precision. Purity. Prestige.")
  hero: `${base}gallery/1.png`,

  // Detail showcase left image (below Technical Specifications grid)
  detailFrame: `${base}gallery/8.png`,

  // Detail showcase right image (beside detailFrame)
  slidingDoors: `${base}gallery/9.png`,

  // Philosophy section left image (beside "Enhancing the Texture of Spaces")
  interiorDivider: `${base}photos/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg`,

  // ── ABOUT PAGE ─────────────────────────────────────────────
  // Hero image (left side, tall portrait format)
  aboutHero: `${base}gallery/5.png`,

  // Facility section image (right side, "Visit Our Richmond Hill Facility")
  showroom: `${base}gallery/7.png`,

  // ── PROFESSIONALS PAGE ─────────────────────────────────────
  // Hero background (behind "Built for Professionals")
  professionalsHero: `${base}gallery/4.png`,

  // ── DOWNLOADS PAGE ─────────────────────────────────────────
  // Background image
  laptop: `${base}photos/beautiful-shot-modern-house-kitchen.jpg`,

  // ── CONTACT PAGE ───────────────────────────────────────────
  // Contact illustration (if used)
  contactIllustration: `${base}photos/stylish-dining-room.jpg`,

  // ── GALLERY PAGE ───────────────────────────────────────────
  // Grid of project images (masonry layout)
  // To add/remove images: just add or remove paths from this array
  gallery: [
    `${base}gallery/1.png`,
    `${base}gallery/2.png`,
    `${base}gallery/3.png`,
    `${base}gallery/4.png`,
    `${base}gallery/5.png`,
    `${base}gallery/6.png`,
    `${base}gallery/7.png`,
    `${base}gallery/8.png`,
    `${base}gallery/9.png`,
    `${base}gallery/10.png`,
    `${base}gallery/18.png`,
    `${base}gallery/19.png`,
    `${base}gallery/21.png`,
    `${base}photos/minimalist-kitchen-interior-design.jpg`,
    `${base}photos/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg`,
    `${base}photos/beautiful-shot-modern-house-kitchen-dining-room.jpg`,
  ]
};

// Fallback placeholders (empty = hide image on error)
export const imagePlaceholders = {
  hero: "",
  interior: "",
  detail: "",
  sliding: "",
  showroom: "",
  prof: "",
};
