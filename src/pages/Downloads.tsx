import { motion } from 'motion/react';
import MainLayout from '../layouts/MainLayout';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { images } from '../config/images';

const downloads = [
  { title: "Product Catalog 2024", size: "12.5 MB", type: "PDF" },
  { title: "Technical Specifications", size: "4.2 MB", type: "PDF" },
  { title: "Installation Guide", size: "8.1 MB", type: "PDF" },
  { title: "Warranty Information", size: "1.5 MB", type: "PDF" },
];

export default function Downloads() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 bg-bg-body relative overflow-hidden min-h-[60vh] sm:min-h-[80vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-gold">Resources</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-light text-text-primary mb-6 sm:mb-8 leading-tight">
                Technical <span className="text-metal-gradient">Downloads</span>
              </h1>
              <p className="text-text-secondary text-lg mb-12 max-w-md leading-relaxed font-light">
                Grab the latest order form and product details for your bids and client presentations. Reach out if you need custom configurations.
              </p>
              
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-text-primary text-bg-body font-mono text-xs font-bold uppercase tracking-widest hover:bg-glass-highlight hover:text-text-primary transition-all rounded-sm">
                <span>Download Order Form</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Right Image - Glass Card Effect */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[16/10] w-full max-w-2xl mx-auto lg:mx-0 glass-panel p-4 rounded-sm">
                 <div className="relative w-full h-full overflow-hidden rounded-sm group">
                   <img 
                    src={images.laptop} 
                    alt="Download Resources" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12 sm:py-20 bg-bg-surface border-t border-glass-border">
        <div className="container mx-auto px-4 sm:px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-light text-text-primary">Additional Documentation</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloads.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-sm flex items-center justify-between hover:bg-glass-highlight transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-glass-bg flex items-center justify-center text-text-muted group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-text-primary mb-1 group-hover:text-text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{item.type} • {item.size}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-muted group-hover:border-text-primary group-hover:text-text-primary transition-all">
                  <Download size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
