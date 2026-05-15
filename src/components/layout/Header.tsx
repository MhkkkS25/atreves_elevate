import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-transparent.png';

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-md border-b border-border">

        <div className="container-luxury">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 relative z-[110]"
            >
              <img
                src={logo}
                alt="AtreVes Healthcare Logo"
                className="h-10 w-auto object-contain"
              />

              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-wide">
                  AtreVes
                </span>

                <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Healthcare
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[110] p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

        </div>

      </header>

      {/* OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[120] shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">

          {/* LINKS */}
          <div className="flex flex-col gap-3">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-accent text-primary'
                    : 'text-foreground hover:bg-accent/50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* FOOTER */}
          <div className="mt-auto pt-10 border-t border-border">

            <p className="text-sm font-medium text-foreground">
              AtreVes Healthcare Pvt. Ltd.
            </p>

            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Innovating Pharmaceutical Formulations
            </p>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Header;