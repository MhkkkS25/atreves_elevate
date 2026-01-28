import { Syringe, Snowflake, Atom, Pill, Droplets } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import molecularImage from '@/assets/molecular-abstract.jpg';

const formulations = [
  {
    icon: Syringe,
    title: 'Injectables',
    description: 'Comprehensive injectable formulation development capabilities.',
    features: [
      'Aqueous and non-aqueous liquid injections',
      'Ready-to-dilute formulations',
      'Ready-to-use injectable solutions',
      'Sterile manufacturing processes',
    ],
  },
  {
    icon: Snowflake,
    title: 'Lyophilized Products',
    description: 'Advanced lyophilization for enhanced stability and efficacy.',
    features: [
      'Robust lyophilization processes',
      'Long-term stability optimization',
      'High efficiency formulations',
      'Advanced formulation strategies',
    ],
  },
  {
    icon: Atom,
    title: 'Complex Injectables',
    description: 'Cutting-edge complex injectable delivery systems.',
    features: [
      'Long-acting injectables (1–4 weeks delivery)',
      'Liposomal injections',
      'Injectable lipid emulsions',
      'Nanotechnology-driven systems',
    ],
  },
  {
    icon: Pill,
    title: 'Oral Products',
    description: 'Enhanced bioavailability oral formulations.',
    features: [
      'Highly solubilized drug formulations',
      'Preconcentrate solutions',
      'Patentable solubility techniques',
      'Multiple dosage forms: tablets, capsules, dry powders',
    ],
  },
  {
    icon: Droplets,
    title: 'Topical / Transdermal',
    description: 'Nanotechnology-based topical delivery systems.',
    features: [
      'Nanotechnology drug delivery approaches',
      'Enhanced safety profiles',
      'Improved efficacy through optimized particle size',
      'Transdermal delivery systems',
    ],
  },
];

const Formulations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption mb-4 block">Our Expertise</span>
            <h1 className="heading-display text-foreground mb-6">
              Formulation Types
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-body text-lg">
              Advanced pharmaceutical formulations across multiple delivery platforms, 
              leveraging cutting-edge technologies for optimal patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Formulations Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formulations.map((formulation) => (
              <div key={formulation.title} className="card-luxury flex flex-col h-full group">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <formulation.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{formulation.title}</h3>
                <p className="text-muted-foreground mb-6">{formulation.description}</p>
                <ul className="space-y-3 mt-auto">
                  {formulation.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={molecularImage}
                  alt="Nanotechnology drug delivery visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-lg -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-caption mb-4 block">Technology Focus</span>
              <h2 className="heading-section text-foreground mb-6">
                Nanotechnology & Advanced Drug Delivery
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body mb-6">
                Our expertise in nanotechnology-based drug delivery systems enables 
                the development of formulations with enhanced bioavailability, 
                targeted delivery, and improved patient outcomes.
              </p>
              <p className="text-body">
                From liposomal injections to nanoparticle-based topical formulations, 
                we leverage advanced technologies to solve complex formulation challenges 
                and create differentiated pharmaceutical products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formulations;