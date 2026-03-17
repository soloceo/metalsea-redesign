import { motion } from 'motion/react';
import MainLayout from '../layouts/MainLayout';
import { ArrowRight, Box } from 'lucide-react';

export default function ModelBuilder() {
  return (
    <MainLayout>
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-bg-body min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-white/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto glass-panel p-8 sm:p-16 rounded-sm border border-white/10"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-glass-bg rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-10 text-text-primary border border-glass-border shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <Box size={40} strokeWidth={1} />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Beta Access</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-light mb-6 sm:mb-8 text-text-primary leading-tight">
              3D Model <span className="text-metal-gradient">Builder</span>
            </h1>
            
            <p className="text-base sm:text-xl text-text-secondary mb-8 sm:mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Design your custom aluminum frame cabinet doors with our interactive configurator. Visualize finishes, glass types, and hardware options in real-time.
            </p>
            
            <button className="px-10 py-5 bg-text-primary text-bg-body font-mono text-xs font-bold uppercase tracking-widest hover:bg-glass-highlight hover:text-text-primary transition-all inline-flex items-center gap-3 rounded-sm group">
              Launch Configurator <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="mt-10 text-[10px] text-text-muted font-mono uppercase tracking-wider">
              * Desktop experience recommended for best performance.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
