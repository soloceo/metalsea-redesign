import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { images, imagePlaceholders } from '../config/images';

const features = [
  {
    title: 'Custom Aluminum',
    description: 'MetalSea crafts aluminum frames tailored to your needs. Each frame is strong, durable, and precise. We offer full customization in size, finish, and hardware. Perfect for kitchens, bathrooms, and display spaces.',
  },
  {
    title: 'Glass Variety',
    description: 'Our frames support a wide range of glass types—clear, frosted, mirrored, and wood panels. Every combination is designed for both style and function. High-precision fitting ensures a seamless look.',
  },
  {
    title: 'B2B Focus',
    description: 'We specialize in serving cabinetry designers, interior designers, contractors, and cabinet makers. Fast turnaround, consistent quality, and technical support are guaranteed. Partnering with us makes your projects easier and more reliable.',
  },
  {
    title: 'Local Service',
    description: 'Based in Richmond Hill, Ontario, we design and manufacture locally. Fast lead times, easy communication, and responsive support come standard. MetalSea delivers quality and convenience you can trust.',
  },
];

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section: Image Left, Text Right */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-bg-body relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden rounded-sm group"
            >
              <img
                src={images.aboutHero}
                alt="Premium Walk-in Closet"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                onError={(e) => { e.currentTarget.src = imagePlaceholders.detail; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue">About MetalSea</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-light text-text-primary leading-tight">
                Designed and Crafted for <span className="text-metal-gradient">Premium Spaces</span>
              </h1>
              
              <div className="space-y-4 sm:space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Founded in 2023 and headquartered in Richmond Hill, Ontario, Canada, MetalSea specializes in designing and manufacturing high-quality aluminum cabinet door frames. Guided by our philosophy of "enhancing the texture of spaces", we provide versatile metal frame solutions for both residential and commercial interiors.
                </p>
                <p>
                  Our aluminum door frames can accommodate a wide range of panel materials, including glass, mirrors, wood, and other decorative surfaces. They are ideal for kitchens, bathrooms, closets, and display areas.
                </p>
                <p>
                  With a professional design and manufacturing team, we use high-strength aluminum profiles combined with advanced surface treatments—such as powder coating, anodizing, brushed, and matte finishes. These processes create a uniform, durable protective layer that is scratch-resistant, corrosion-resistant, moisture-resistant, and color-stable, ensuring each frame combines lasting durability with a premium visual appeal.
                </p>
                <p>
                  At MetalSea, quality is our core, and innovation drives our work. Our flexible manufacturing system allows for full customization of dimensions, colors, structures, and hardware to meet the unique needs of each client.
                  We are committed to combining exquisite craftsmanship with functional design, creating metal cabinet systems that elevate any space with both style and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section: 4 Columns */}
      <section className="py-12 sm:py-24 bg-bg-surface border-y border-glass-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-light text-text-primary mb-4">
              Excellence in Aluminum & Glass Cabinet Doors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-sm hover:bg-glass-highlight transition-colors duration-500 group"
              >
                <h3 className="text-xl font-display font-medium text-text-primary mb-4 group-hover:text-text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light group-hover:text-text-primary transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section: Text Left, Image Right */}
      <section className="py-12 sm:py-24 bg-bg-body relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="font-mono text-xs text-accent-gold mb-4 block tracking-widest uppercase">Our Facility</span>
              <h2 className="text-3xl md:text-5xl font-display font-light text-text-primary mb-8">
                Visit Our Richmond Hill Facility
              </h2>
              <p className="text-text-secondary mb-10 text-lg font-light leading-relaxed">
                We are Toronto-based manufacturer specializing in luxury aluminum frame and glass cabinet doors. Every piece is crafted with precision in our local facility, ensuring consistent quality, faster lead times, and reliable aftersales support.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  'Full showroom with working displays',
                  'Onsite production workshop tours',
                  'Material samples and consultations',
                  'Trade professional appointments',
                  'Custom design consultations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-text-primary group">
                    <div className="w-5 h-5 rounded-full border border-glass-border flex items-center justify-center group-hover:border-text-primary transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-text-primary" />
                    </div>
                    <span className="font-light text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-text-primary text-bg-body font-mono text-xs font-bold uppercase tracking-widest hover:bg-glass-highlight hover:text-text-primary transition-colors rounded-sm"
              >
                Book Appointment Now 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden rounded-sm group"
            >
              <img
                src={images.showroom}
                alt="MetalSea Facility"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80"
                onError={(e) => { e.currentTarget.src = imagePlaceholders.showroom; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 border border-glass-border pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-metal-gradient opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-light text-text-primary mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light">
              Get in touch to discuss how MetalSea can support your business with premium aluminum and glass cabinet door solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-panel p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-glass-bg flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <Phone size={20} />
              </div>
              <h3 className="text-lg font-display font-medium text-text-primary mb-2">Call Us</h3>
              <p className="text-text-secondary font-mono text-sm mb-2">(647) 895-2155</p>
              <p className="text-text-muted text-xs uppercase tracking-wider">Mon-Sat 9:30am-5:00pm</p>
            </div>

            <div className="glass-panel p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-glass-bg flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-display font-medium text-text-primary mb-2">Email Us</h3>
              <p className="text-text-secondary font-mono text-sm mb-2">info@metalsea.ca</p>
              <p className="text-text-muted text-xs uppercase tracking-wider">Response within 24 hours</p>
            </div>

            <div className="glass-panel p-10 rounded-sm text-center group hover:bg-glass-highlight transition-colors duration-500">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-glass-bg flex items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg-body transition-all duration-500">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-display font-medium text-text-primary mb-2">Visit Showroom</h3>
              <p className="text-text-secondary font-mono text-sm">Unit 6 & 7, 50 West Pearce St.<br/>Richmond Hill, ON, L4B1C5</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 border border-glass-border text-text-primary font-mono text-xs font-bold uppercase tracking-widest hover:bg-text-primary hover:text-bg-body transition-all rounded-sm"
            >
              Contact Us Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
