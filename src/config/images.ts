// ============================================================
// MetalSea Image Configuration
// ============================================================
// HOW TO CHANGE IMAGES:
//   1. Put your new image file in /public/photos/ or /public/gallery/
//   2. Update the path below (e.g., "/photos/my-new-image.jpg")
//   3. Refresh the browser to see the change
//
// SUPPORTED FORMATS: .jpg, .png, .webp
// RECOMMENDED SIZE: 2000px wide max, under 500KB for fast loading
// You can also use external URLs (e.g., Unsplash links)
// ============================================================

export const images = {
  // ── HOME PAGE ──────────────────────────────────────────────
  // Hero background (full-screen behind "Precision. Purity. Prestige.")
  hero: "/gallery/1.png",

  // Detail showcase left image (below Technical Specifications grid)
  detailFrame: "/gallery/8.png",

  // Detail showcase right image (beside detailFrame)
  slidingDoors: "/gallery/9.png",

  // Philosophy section left image (beside "Enhancing the Texture of Spaces")
  interiorDivider: "/photos/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",

  // ── ABOUT PAGE ─────────────────────────────────────────────
  // Hero image (left side, tall portrait format)
  aboutHero: "/gallery/5.png",

  // Facility section image (right side, "Visit Our Richmond Hill Facility")
  showroom: "/gallery/7.png",

  // ── PROFESSIONALS PAGE ─────────────────────────────────────
  // Hero background (behind "Built for Professionals")
  professionalsHero: "/gallery/4.png",

  // ── DOWNLOADS PAGE ─────────────────────────────────────────
  // Background image
  laptop: "/photos/beautiful-shot-modern-house-kitchen.jpg",

  // ── CONTACT PAGE ───────────────────────────────────────────
  // Contact illustration (if used)
  contactIllustration: "/photos/stylish-dining-room.jpg",

  // ── GALLERY PAGE ───────────────────────────────────────────
  // Grid of project images (masonry layout)
  // To add/remove images: just add or remove paths from this array
  gallery: [
    "/gallery/1.png",
    "/gallery/2.png",
    "/gallery/3.png",
    "/gallery/4.png",
    "/gallery/5.png",
    "/gallery/6.png",
    "/gallery/7.png",
    "/gallery/8.png",
    "/gallery/9.png",
    "/gallery/10.png",
    "/gallery/18.png",
    "/gallery/19.png",
    "/gallery/21.png",
    "/photos/minimalist-kitchen-interior-design.jpg",
    "/photos/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",
    "/photos/beautiful-shot-modern-house-kitchen-dining-room.jpg",
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
