import { Target, Eye, Heart, Users, Award, Lightbulb, Shield, Handshake } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamImage from '@/assets/team-lab.jpg';

const coreValues = [
  { icon: Award, title: 'Scientific Excellence', description: 'Commitment to rigorous research and innovation' },
  { icon: Lightbulb, title: 'Innovation with Purpose', description: 'Developing solutions that address real healthcare needs' },
  { icon: Shield, title: 'Quality & Compliance', description: 'Maintaining the highest standards in pharmaceutical development' },
  { icon: Heart, title: 'Patient-Centric Development', description: 'Focused on improving patient outcomes and quality of life' },
  { icon: Handshake, title: 'Collaborative Growth', description: 'Building partnerships that drive mutual success' },
];

const capabilities = [
  'Advanced formulation development',
  'Scale-up and manufacturability-focused design',
  'Regulatory-oriented development strategies',
  'Technology transfer and partner support',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-[#f2e7c3]">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption mb-4 block">Who We Are</span>
            <h1 className="heading-display text-foreground mb-6">
              About AtreVes Healthcare
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-body text-lg">
              A research and innovation-driven healthcare company focused on developing 
              and commercializing pharmaceutical products that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={teamImage}
                  alt="AtreVes Healthcare team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
            <div>
              <span className="text-caption mb-4 block">Our Story</span>
              <h2 className="heading-section text-foreground mb-6">
                Pioneering Pharmaceutical Innovation
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body mb-6">
                AtreVes Healthcare is a research and innovation-driven healthcare company 
                focused on developing and commercializing pharmaceutical products. The company 
                specializes in novel formulations designed to improve affordability, 
                availability, and patient outcomes for Indian and global markets.
              </p>
              <p className="text-body">
                Founded by <strong className="text-foreground">Dr. Akash Chaurasiya</strong> and 
                <strong className="text-foreground"> Ms. Kanan Panchal</strong>, AtreVes aims to 
                strengthen healthcare systems through scientific excellence and innovative 
                drug delivery solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card-luxury">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-card text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To develop innovative, high-value pharmaceutical formulations that address 
                unmet medical needs and improve quality of life for patients worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="card-luxury">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-card text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally trusted formulation development and co-development 
                partner in advanced drug delivery systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-caption mb-4 block">What Drives Us</span>
            <h2 className="heading-section text-foreground mb-6">
              Our Core Values
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Capabilities */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Team */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  <Users className="h-7 w-7 text-gold" />
                </div>
                <h3 className="heading-card text-secondary-foreground">Our Team</h3>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed">
                A multidisciplinary team of formulation scientists, pharmaceutical 
                technologists, and development experts with extensive experience in 
                complex injectables, oral formulations, and nanotechnology-based 
                drug delivery systems.
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="heading-card text-secondary-foreground mb-6">Our Capabilities</h3>
              <ul className="space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-secondary-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;