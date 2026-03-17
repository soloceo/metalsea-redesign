import { motion } from 'motion/react';
import MainLayout from '../layouts/MainLayout';
import { images } from '../config/images';

const galleryItems = [
  { category: 'Walk-in Closet', title: 'Premium Aluminum Frame Wardrobe' },
  { category: 'Walk-in Closet', title: 'Glass Door Dressing Room' },
  { category: 'Walk-in Closet', title: 'Dark Luxury Wardrobe System' },
  { category: 'Walk-in Closet', title: 'Premium Open Wardrobe' },
  { category: 'Walk-in Closet', title: 'Luxury Walk-in with Glass Display' },
  { category: 'Interior', title: 'Wood Panel & Glass Door' },
  { category: 'Showroom', title: 'Glass Display Cabinet System' },
  { category: 'Wine Cabinet', title: 'Illuminated Glass Wine Cabinet' },
  { category: 'Interior', title: 'Dark Sliding Glass Wardrobe' },
  { category: 'Trade Show', title: 'MetalSea Exhibition Booth' },
  { category: 'Residential', title: 'Built-in Wardrobe with Glass Doors' },
  { category: 'Interior', title: 'Glass Display Cabinet Installation' },
  { category: 'Interior', title: 'Aluminum Frame Glass Doors' },
  { category: 'Kitchen', title: 'Minimalist Kitchen Design' },
  { category: 'Kitchen', title: 'Glass Cabinet with Wine Storage' },
  { category: 'Kitchen', title: 'Modern Kitchen & Dining' },
];

export default function Gallery() {
  return (
    <MainLayout>
      <section className="pt-40 pb-20 bg-bg-body min-h-screen relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-light text-text-primary leading-tight">
              Project <span className="text-metal-gradient">Gallery</span>
            </h1>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.gallery.map((src, index) => {
              const item = galleryItems[index] || { category: `Project ${index + 1}`, title: 'Custom Application' };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="break-inside-avoid relative group overflow-hidden rounded-sm"
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full transition-transform duration-700 group-hover:scale-105 border border-glass-border"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest block mb-2">{item.category}</span>
                      <h3 className="text-xl font-display font-medium text-white">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
