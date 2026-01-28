import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Pill, FlaskConical, Handshake } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroImage from '@/assets/hero-lab.jpg';
import molecularImage from '@/assets/molecular-abstract.jpg';

const capabilities = [
  {
    icon: Beaker,
    title: '505(b)(2) & 505(j) Product Development',
    description: 'Specialty pharmaceutical product development with regulatory-oriented strategies for faster market access.',
  },
  {
    icon: FlaskConical,
    title: 'Complex Injectables & Liposomal Products',
    description: 'Long-acting injectables, liposomal injections, and nanotechnology-driven delivery systems.',
  },
  {
    icon: Pill,
    title: 'Oral Drug Products',
    description: 'Enhanced bioavailability formulations using patentable solubilization techniques.',
  },
  {
    icon: Handshake,
    title: 'Development Support & Technology Transfer',
    description: 'Contract services, technical consultancy, and partner support for pharmaceutical development.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AtreVes Healthcare R&D Laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="container-luxury relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="text-caption mb-6 block animate-fade-up">
              Research & Innovation Driven Healthcare
            </span>
            <h1 className="heading-display text-foreground mb-6 animate-fade-up animation-delay-100">
              Innovating Advanced Pharmaceutical Formulations for Global Healthcare
            </h1>
            <p className="text-body text-lg md:text-xl max-w-2xl mb-10 animate-fade-up animation-delay-200">
              A research and innovation-driven healthcare company developing differentiated 
              pharmaceutical products using advanced formulation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
              <Link to="/formulations" className="btn-primary group">
                Explore Our Capabilities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caption mb-4 block">Our Expertise</span>
            <h2 className="heading-section text-foreground mb-6">
              Key Capability Highlights
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="card-luxury group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <capability.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-caption mb-4 block">Our Approach</span>
              <h2 className="heading-section text-foreground mb-6">
                Scientific Excellence Meets Innovation
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body mb-6">
                AtreVes Healthcare specializes in novel formulations designed to improve 
                affordability, availability, and patient outcomes for Indian and global markets.
              </p>
              <p className="text-body mb-8">
                Our multidisciplinary team of formulation scientists and pharmaceutical 
                technologists brings extensive experience in complex injectables, oral 
                formulations, and nanotechnology-based drug delivery.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={molecularImage}
                  alt="Molecular nanotechnology visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-secondary-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Explore collaboration opportunities in pharmaceutical development, 
            co-development, and technology transfer.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-dark transition-colors duration-300 group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;