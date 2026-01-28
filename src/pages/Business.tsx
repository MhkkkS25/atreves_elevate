import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Users, Settings } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import labEquipment from '@/assets/lab-equipment.jpg';

const businessAreas = [
  {
    icon: Beaker,
    title: 'Product Development',
    description: 'Development of specialty pharmaceutical products with a focus on 505(b)(2) approaches.',
    features: [
      'RTU liquid injections',
      'Lipid emulsions',
      'Ready-to-outlicense differentiated products',
      '505(b)(2) regulatory strategies',
    ],
  },
  {
    icon: Users,
    title: 'Co-Development',
    description: 'Joint development partnerships based on project agreements for mutual success.',
    features: [
      'Project-based agreements',
      'High-value differentiated formulations',
      'Collaborative development approach',
      'Shared marketing opportunities',
    ],
  },
  {
    icon: Settings,
    title: 'Development Support',
    description: 'Comprehensive contract services for pharmaceutical development needs.',
    features: [
      'Contract development services',
      'Interim product development',
      'Technical consultancy',
      'Technology transfer support',
    ],
  },
];

const Business = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption mb-4 block">What We Do</span>
            <h1 className="heading-display text-foreground mb-6">
              Our Business
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-body text-lg">
              Comprehensive pharmaceutical development services from product innovation 
              to technology transfer and collaborative partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessAreas.map((area) => (
              <div key={area.title} className="card-luxury flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
                  <area.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-card text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6">{area.description}</p>
                <ul className="space-y-3 mt-auto">
                  {area.features.map((feature) => (
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

      {/* Featured Image Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-caption mb-4 block">Our Approach</span>
              <h2 className="heading-section text-foreground mb-6">
                Innovation-Driven Development
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body mb-6">
                AtreVes Healthcare combines scientific expertise with regulatory knowledge 
                to develop pharmaceutical products that meet the highest industry standards 
                while addressing unmet medical needs.
              </p>
              <p className="text-body mb-8">
                Our development approach focuses on manufacturability, scalability, and 
                regulatory compliance from the earliest stages, ensuring successful 
                product commercialization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={labEquipment}
                  alt="Pharmaceutical manufacturing equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-secondary-foreground mb-6">
            Partner With AtreVes Healthcare
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Whether you're looking for product development, co-development opportunities, 
            or technical consultancy, we're ready to collaborate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-dark transition-colors duration-300 group"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Business;