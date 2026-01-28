import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Heart, Lightbulb, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import careersImage from '@/assets/careers-team.jpg';

const benefits = [
  {
    icon: Beaker,
    title: 'Cutting-Edge Research',
    description: 'Work on advanced formulations, complex injectables, and novel drug delivery systems.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    description: 'Be part of a team that values creative problem-solving and scientific innovation.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work alongside experienced formulation scientists and pharmaceutical experts.',
  },
  {
    icon: Heart,
    title: 'Meaningful Impact',
    description: 'Contribute to developing treatments that improve patient outcomes worldwide.',
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={careersImage}
            alt="AtreVes Healthcare team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>

        <div className="container-luxury relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="text-caption mb-4 block">Join Our Team</span>
            <h1 className="heading-display text-foreground mb-6">
              Build the Future of Pharmaceutical Innovation
            </h1>
            <div className="divider-gold mb-8" />
            <p className="text-body text-lg mb-10">
              Join a research-driven organization working on advanced formulations, 
              complex injectables, and novel drug delivery systems that make a real 
              difference in healthcare.
            </p>
            <Link
              to="/contact"
              className="btn-primary group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caption mb-4 block">Why AtreVes</span>
            <h2 className="heading-section text-foreground mb-6">
              Why Work With Us
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-luxury group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-caption mb-4 block">Opportunities</span>
            <h2 className="heading-section text-foreground mb-6">
              Areas of Expertise We Value
            </h2>
            <div className="divider-gold mx-auto mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                'Formulation Development',
                'Analytical Chemistry',
                'Pharmaceutical Technology',
                'Regulatory Affairs',
                'Quality Assurance',
                'Process Development',
                'Nanotechnology Research',
                'Drug Delivery Systems',
              ].map((area) => (
                <div key={area} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-secondary-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            We're always looking for talented individuals who share our passion for 
            pharmaceutical innovation and patient care.
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

export default Careers;