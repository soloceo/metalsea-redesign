import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { CheckCircle2, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { images, imagePlaceholders } from '../config/images';
import { useTheme } from '../context/ThemeContext';

export default function Professionals() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sections = [
    {
      title: "Architects & Designers",
      description: "Spec-grade aluminum frames, samples, and CAD support to help you get client approvals and maintain design intent.",
      features: [
        "Custom design consultation",
        "CAD drawings and specifications",
        "Material samples and mockups",
        "Design development support",
        "Project management coordination"
      ]
    },
    {
      title: "Cabinet Dealers",
      description: "Reliable SKUs, wholesale pricing, and drop-ship logistics to keep your customers supplied and projects on schedule.",
      features: [
        "Wholesale pricing structures",
        "Drop-ship to your customers",
        "Marketing and sales support",
        "Product training and education",
        "Inventory management assistance"
      ]
    },
    {
      title: "Contractors",
      description: "Site-ready doors with fast lead times, shop drawings, and delivery coordination for renovations or multi-unit rollouts.",
      features: [
        "Volume pricing for large projects",
        "Fast turnaround times (2-3 weeks)",
        "Job site delivery coordination",
        "Installation support and guidance",
        "Quality guarantees and warranties"
      ]
    }
  ];

  const processSteps = [
    { number: 1, title: "Initial Consultation", description: "Discuss your business needs and project requirements" },
    { number: 2, title: "Facility Tour", description: "Visit our Richmond Hill showroom and production facility" },
    { number: 3, title: "Partnership Setup", description: "Establish pricing, terms, and delivery preferences" },
    { number: 4, title: "Training & Support", description: "Product education and sales training for your team" },
    { number: 5, title: "Ongoing Partnership", description: "Continuous support and business development" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className={`relative pt-28 sm:pt-40 pb-20 sm:pb-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-bg-body'}`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <img
            src={images.professionalsHero}
            alt="Professional Background"
            className={`w-full h-full object-cover transition-opacity duration-500 ${isDark ? 'opacity-70' : 'opacity-35'}`}
            onError={(e) => { e.currentTarget.src = imagePlaceholders.prof; }}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-black/60 via-black/30 to-black/80'
              : 'bg-gradient-to-b from-white/50 via-white/30 to-bg-body'
          }`} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-glass-bg backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-text-primary animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-gold">Trade Program</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-light mb-6 sm:mb-8 text-text-primary leading-tight">
              Built for <span className="text-metal-gradient">Professionals</span>
            </h1>
            <p className="text-base sm:text-xl text-text-secondary leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto font-light px-2 sm:px-0">
              Partner with MetalSea for premium aluminum and glass cabinet door solutions. We serve contractors, architects, designers, and cabinet dealers with tailored support, competitive pricing, and reliable delivery.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-text-primary text-bg-body px-10 py-4 rounded-sm font-mono text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-20 bg-bg-body relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative -mt-16 sm:-mt-32 z-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-sm hover:bg-glass-highlight transition-all duration-500 group"
              >
                <h3 className="text-2xl font-display font-light mb-4 text-text-primary group-hover:text-text-primary transition-colors text-center">
                  {section.title}
                </h3>
                <p className="text-text-secondary mb-8 text-sm leading-relaxed text-center font-light">
                  {section.description}
                </p>
                <div className="space-y-4 border-t border-glass-border pt-6">
                  {section.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-text-secondary text-sm font-light">
                      <CheckCircle2 className="w-4 h-4 text-text-muted flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-32 bg-bg-surface border-y border-glass-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-text-primary">
              Our Partnership Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent -z-10" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full glass flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:border-glass-highlight transition-colors duration-500">
                  <span className="text-2xl sm:text-3xl font-display font-light text-text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Reused from About) */}
      <section className="py-16 sm:py-32 bg-bg-body relative overflow-hidden">
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
