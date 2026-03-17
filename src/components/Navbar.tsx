import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'For Professionals', path: '/for-professionals' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileNavLinks = [
    { name: 'About', path: '/about' },
    { name: 'Model Builder', path: '/model-builder' },
    { name: 'For Professionals', path: '/for-professionals' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4'
          : 'py-6'
      }`}
    >
      <div className="mx-auto px-4 lg:px-8 transition-all duration-500 max-w-[1600px]">
        <div className={`rounded-full border border-glass-border transition-all duration-500 px-6 py-4 flex items-center justify-between ${
          scrolled
            ? 'glass bg-bg-body/40 shadow-2xl backdrop-blur-xl'
            : 'bg-transparent border-transparent'
        }`}>

          <Link to="/" className="text-2xl font-display font-medium tracking-tight z-50 relative flex items-center gap-3 group text-text-primary">
            <img
              src={`${import.meta.env.BASE_URL}${theme === 'dark' ? 'logo-white.svg' : 'logo-black.svg'}`}
              alt="MetalSea"
              className="h-7 w-auto transition-opacity duration-300"
            />
            <span className="group-hover:text-metal-400 transition-colors duration-300">MetalSea</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-widest transition-all duration-300 hover:text-text-primary relative group whitespace-nowrap ${
                  location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-text-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}

            <div className="h-4 w-[1px] bg-glass-border"></div>

            <ThemeToggle />

            <Link
              to="/contact"
              className="px-4 xl:px-6 py-2.5 border border-accent-gold/40 rounded-full text-[10px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-widest text-accent-gold-light hover:bg-accent-gold hover:text-bg-body transition-all duration-300 backdrop-blur-md bg-glass-bg whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 xl:hidden z-50 relative">
            <ThemeToggle />
            <button
              className="text-text-primary hover:text-metal-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-bg-body backdrop-blur-3xl flex flex-col items-center justify-center gap-5 sm:gap-8 xl:hidden z-40 overflow-y-auto py-20"
          >
            {mobileNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl sm:text-3xl font-display font-light transition-colors ${
                  location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-4 border border-glass-border rounded-full text-text-primary font-mono text-sm uppercase tracking-widest hover:bg-text-primary hover:text-bg-body transition-all"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
