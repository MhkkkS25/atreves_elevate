import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold text-gold">
                AtreVes
              </span>
              <span className="block text-xs tracking-[0.2em] text-gold-light uppercase mt-1">
                Healthcare Pvt. Ltd.
              </span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
              A research and innovation-driven healthcare company developing differentiated 
              pharmaceutical products using advanced formulation strategies.
            </p>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  TBI, BITS Pilani – Hyderabad Campus<br />
                  Jawahar Nagar, Kapra Mandal<br />
                  Medchal District – 500078, Telangana, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:atreveshealthcare@gmail.com" className="hover:text-gold transition-colors">
                  atreveshealthcare@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Business', path: '/business' },
                { name: 'Formulation Types', path: '/formulations' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Careers', path: '/careers' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} AtreVes Healthcare Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-xs text-secondary-foreground/40">
              Innovating Advanced Pharmaceutical Formulations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;