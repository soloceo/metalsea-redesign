import { ArrowRight, Box, Layers, LayoutGrid, PenTool, Settings, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import MainLayout from '../layouts/MainLayout';
import { images, imagePlaceholders } from '../config/images';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    id: '01',
    icon: <LayoutGrid className="w-5 h-5" />,
    title: 'Aluminum Frame Series',
    description: 'Distinct frame profiles, each available in a range of refined finishes.',
  },
  {
    id: '02',
    icon: <Layers className="w-5 h-5" />,
    title: 'Glass Panel Inserts',
    description: 'Various glass types and tints to complement any design vision.',
  },
  {
    id: '03',
    icon: <Box className="w-5 h-5" />,
    title: 'Wood Panel Inserts',
    description: 'Diverse wood options offering warmth, texture, and character.',
  },
  {
    id: '04',
    icon: <Settings className="w-5 h-5" />,
    title: 'Handle Systems',
    description: 'Built-in or standard handles in coordinated finishes.',
  },
  {
    id: '05',
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Aluminum Dividers',
    description: 'Horizontal or cross dividers adding structure and detail.',
  },
  {
    id: '06',
    icon: <PenTool className="w-5 h-5" />,
    title: '3D Modeling',
    description: 'Precisely modeled for seamless design integration.',
  },
];

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <MainLayout>
      {/* Hero Section - Premium Glass & Metal */}
      <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-bg-body'}`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.hero}
            alt="Modern Architecture"
            className={`w-full h-full object-cover transition-opacity duration-500 ${isDark ? 'opacity-70' : 'opacity-35'}`}
            onError={(e) => {
              e.currentTarget.src = imagePlaceholders.hero;
            }}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-black/60 via-black/30 to-black/80'
              : 'bg-gradient-to-b from-white/50 via-white/30 to-bg-body'
          }`} />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 pb-52 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-light tracking-tighter mb-8 leading-[0.9]"
            >
              <span className={`block ${isDark ? 'text-metal-gradient' : 'text-metal-900'}`}>Precision.</span>
              <span className={`block ${isDark ? 'text-white/90' : 'text-metal-700'}`}>Purity.</span>
              <span className="block text-gold-gradient">Prestige.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-text-secondary'}`}
            >
              Enhancing the texture of spaces through high-quality aluminum cabinet door frames and custom interior solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/gallery"
                className="px-8 py-4 bg-text-primary text-bg-body font-mono text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all rounded-sm"
              >
                View Projects
              </Link>
              <Link
                to="/model-builder"
                className={`px-8 py-4 border backdrop-blur-xl font-mono text-xs font-bold uppercase tracking-widest transition-all rounded-sm ${
                  isDark
                    ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
                    : 'border-metal-300 bg-white/60 text-text-primary hover:bg-white/80'
                }`}
              >
                Configure Model
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Glass Stats */}
        <div className={`absolute bottom-0 left-0 right-0 border-t backdrop-blur-md transition-colors duration-500 ${
          isDark
            ? 'border-white/10 bg-black/40'
            : 'border-metal-200 bg-white/60'
        }`}>
          <div className="container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Material', value: 'High-Strength Aluminum' },
              { label: 'Finish', value: 'Anodized / Powder Coat' },
              { label: 'Application', value: 'Residential & Commercial' },
              { label: 'Origin', value: 'Made in Canada' }
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-accent-gold/70 mb-1">{stat.label}</span>
                <span className="text-text-primary font-display text-sm tracking-wide">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Glass Cards */}
      <section className="py-32 bg-bg-body relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-20">
            <div className="flex-shrink-0">
              <span className="font-mono text-xs text-accent-blue mb-4 block tracking-widest uppercase">System Components</span>
              <h2 className="text-4xl md:text-6xl font-display font-light text-text-primary">Technical<br className="hidden md:inline" /> Specifications</h2>
            </div>
            <p className="text-text-secondary max-w-sm md:text-right font-light">
              Modular aluminum systems designed for seamless integration and limitless customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-sm group hover:bg-glass-highlight transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full bg-glass-bg flex items-center justify-center text-text-primary group-hover:bg-accent-gold group-hover:text-bg-body transition-all duration-500">
                    {feature.icon}
                  </div>
                  <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors">{feature.id}</span>
                </div>
                <h3 className="text-xl font-display font-medium mb-4 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light group-hover:text-text-primary transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detail Showcase - Frosted Glass Overlay */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm group"
            >
              <img 
                src={images.detailFrame} 
                alt="Frame Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                onError={(e) => { e.currentTarget.src = imagePlaceholders.detail; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 glass border-t border-glass-border backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-[10px] text-metal-300 mb-2 block uppercase tracking-widest">01. Precision Joinery</span>
                <h3 className="text-2xl font-display text-white">Engineered for Perfection</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm group"
            >
              <img 
                src={images.slidingDoors} 
                alt="Sliding Systems" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                onError={(e) => { e.currentTarget.src = imagePlaceholders.sliding; }}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 glass border-t border-glass-border backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-[10px] text-metal-300 mb-2 block uppercase tracking-widest">02. Seamless Motion</span>
                <h3 className="text-2xl font-display text-white">Floor-to-Ceiling Systems</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Split with Glass Text */}
      <section className="bg-bg-surface border-y border-glass-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[60vh] lg:h-auto overflow-hidden group">
            <img
              src={images.interiorDivider}
              alt="Premium Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
              onError={(e) => {
                e.currentTarget.src = imagePlaceholders.interior;
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-bg-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-metal-gradient opacity-5 pointer-events-none" />
            
            <span className="font-mono text-xs text-accent-gold mb-8 block tracking-widest uppercase">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display font-light mb-10 leading-tight text-text-primary">
              Enhancing the<br />Texture of Spaces
            </h2>
            <div className="space-y-8 text-text-secondary font-light leading-relaxed text-lg">
              <p>
                MetalSea specializes in designing and manufacturing high-quality aluminum cabinet door frames. We believe that the details define the space.
              </p>
              <p>
                Our flexible manufacturing system allows for full customization of dimensions, colors, structures, and hardware to meet the unique needs of each client.
              </p>
            </div>
            
            <div className="mt-16">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 text-text-primary font-mono text-xs uppercase tracking-widest hover:text-text-muted transition-colors group"
              >
                Read Full Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Glass Card */}
      <section className="py-32 bg-bg-body relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel p-16 rounded-sm text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-highlight to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <h2 className="text-4xl md:text-6xl font-display font-light mb-8 text-text-primary">Ready to Build?</h2>
            <p className="text-text-secondary mb-12 max-w-xl mx-auto font-light">
              Partner with MetalSea for premium aluminum and glass cabinet door solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link
                to="/for-professionals"
                className="px-8 py-4 border border-glass-border text-text-primary font-mono text-xs font-bold uppercase tracking-widest hover:bg-text-primary hover:text-bg-body transition-all rounded-sm"
              >
                For Professionals
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-text-primary text-bg-body font-mono text-xs font-bold uppercase tracking-widest hover:bg-glass-highlight hover:text-text-primary transition-all rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
