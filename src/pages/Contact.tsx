import { motion } from 'motion/react';
import MainLayout from '../layouts/MainLayout';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { images } from '../config/images';

export default function Contact() {
  return (
    <MainLayout>
      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 bg-bg-body relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue">Contact Us</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-7xl font-display font-light text-text-primary mb-6 sm:mb-8 tracking-tight leading-tight"
            >
              Get in <span className="text-metal-gradient">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary leading-relaxed text-lg font-light"
            >
              Tell us about your project, request samples, or apply for a PRO partnership.
              <br className="hidden md:block" />
              We typically respond within one business day.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-24">
            {/* Call Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 sm:p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto bg-glass-bg rounded-full flex items-center justify-center text-text-primary mb-6 group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-text-primary mb-2">Call Us</h3>
              <p className="text-text-secondary font-mono text-lg mb-2">(647) 895-2155</p>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Mon-Sat 9:30am-5:00pm</p>
            </motion.div>

            {/* Email Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-6 sm:p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto bg-glass-bg rounded-full flex items-center justify-center text-text-primary mb-6 group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-text-primary mb-2">Email Us</h3>
              <p className="text-text-secondary font-mono text-lg mb-2">info@metalsea.ca</p>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Response within 24 hours</p>
            </motion.div>

            {/* Visit Showroom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 sm:p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto bg-glass-bg rounded-full flex items-center justify-center text-text-primary mb-6 group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-display font-medium text-text-primary mb-2">Visit Showroom</h3>
              <p className="text-text-secondary font-mono text-sm mb-2">Unit 6 & 7, 50 West Pearce St.</p>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Richmond Hill, ON, L4B1C5</p>
            </motion.div>
          </div>

          {/* Message Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-display font-light text-text-primary">Leave Us A Message</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch glass-panel rounded-sm overflow-hidden">
               {/* Illustration (Left) - 4 cols */}
               <div className="lg:col-span-5 hidden lg:block relative min-h-[600px] group">
                  <img 
                    src={images.contactIllustration} 
                    alt="Contact Support" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40" />
               </div>

               {/* Form (Right) - 8 cols */}
               <div className="lg:col-span-7 w-full p-5 sm:p-8 md:p-12">
                  {/* Tabs */}
                  <div className="flex gap-4 sm:gap-8 mb-8 sm:mb-10 border-b border-glass-border overflow-x-auto">
                    <button className="pb-3 sm:pb-4 text-text-primary border-b border-text-primary font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold whitespace-nowrap">General Inquiry</button>
                    <button className="pb-3 sm:pb-4 text-text-muted hover:text-text-primary transition-colors font-mono text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap">Partnership Application</button>
                  </div>

                  <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Your Name <span className="text-text-primary">*</span></label>
                         <input type="text" className="w-full bg-glass-bg border border-glass-border rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-text-primary transition-colors placeholder:text-text-muted/50 font-sans text-sm" placeholder="Name" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Your Email <span className="text-text-primary">*</span></label>
                         <input type="email" className="w-full bg-glass-bg border border-glass-border rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-text-primary transition-colors placeholder:text-text-muted/50 font-sans text-sm" placeholder="Email" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                       <label className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Your Question <span className="text-text-primary">*</span></label>
                       <input type="text" className="w-full bg-glass-bg border border-glass-border rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-text-primary transition-colors placeholder:text-text-muted/50 font-sans text-sm" placeholder="Subject" />
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Your Comment</label>
                       <textarea rows={5} className="w-full bg-glass-bg border border-glass-border rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-text-primary transition-colors placeholder:text-text-muted/50 font-sans text-sm resize-none" placeholder="Message"></textarea>
                       <p className="text-[10px] text-text-muted mt-2 font-mono uppercase tracking-wider">For a rough quote, please include approximate cabinet dimensions.</p>
                    </div>

                    <div className="pt-6">
                      <button type="button" className="bg-text-primary text-bg-body px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-glass-highlight hover:text-text-primary transition-all duration-300 group rounded-sm">
                        Send Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
