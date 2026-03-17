import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-bg-body border-t border-glass-border pt-12 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
          <div className="space-y-8">
            <Link to="/" className="text-2xl font-display font-medium tracking-tight text-text-primary flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}${theme === 'dark' ? 'logo-white.svg' : 'logo-black.svg'}`}
                alt="MetalSea"
                className="h-7 w-auto"
              />
              MetalSea
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-light">
              Precision-crafted aluminum frames and custom interior solutions designed to elevate residential and commercial spaces.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><Link to="/about" className="hover:text-text-primary transition-colors">About Us</Link></li>
              <li><Link to="/for-professionals" className="hover:text-text-primary transition-colors">For Professionals</Link></li>
              <li><Link to="/gallery" className="hover:text-text-primary transition-colors">Project Gallery</Link></li>
              <li><Link to="/model-builder" className="hover:text-text-primary transition-colors">Model Builder</Link></li>
              <li><Link to="/downloads" className="hover:text-text-primary transition-colors">Downloads</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-text-secondary font-light">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-glass-bg flex items-center justify-center text-text-muted group-hover:bg-text-primary group-hover:text-bg-body transition-all">
                  <MapPin size={14} />
                </div>
                <span className="mt-1">Unit 6 & 7, 50 West Pearce St.<br />Richmond Hill, ON, L4B1C5</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-glass-bg flex items-center justify-center text-text-muted group-hover:bg-text-primary group-hover:text-bg-body transition-all">
                  <Phone size={14} />
                </div>
                <a href="tel:6478952155" className="hover:text-text-primary transition-colors">(647) 895-2155</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-glass-bg flex items-center justify-center text-text-muted group-hover:bg-text-primary group-hover:text-bg-body transition-all">
                  <Mail size={14} />
                </div>
                <a href="mailto:info@metalsea.ca" className="hover:text-text-primary transition-colors">info@metalsea.ca</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-8">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-bg-body transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-bg-body transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">
          <p>&copy; {new Date().getFullYear()} MetalSea Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
