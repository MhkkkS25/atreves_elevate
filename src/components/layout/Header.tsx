import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Business', path: '/business' },
  { name: 'Formulation Types', path: '/formulations' },
  { name: 'Careers', path: '/careers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-wide">
                AtreVes
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - visible at 1024px and above */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 link-underline whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - visible below 1024px */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground z-50 transition-colors duration-200 hover:text-primary"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-foreground/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Slide-in Menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background z-40 shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium py-3 px-4 rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-accent'
                    : 'text-foreground hover:text-primary hover:bg-accent/50'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                }}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="mt-auto pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              AtreVes Healthcare Pvt. Ltd.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Innovating Pharmaceutical Formulations
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;