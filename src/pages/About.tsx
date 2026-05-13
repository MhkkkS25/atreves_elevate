import { Target, Eye, Heart, Users, Award, Lightbulb, Shield, Handshake } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamImage from '@/assets/team-lab.jpeg';


const coreValues = [
  { icon: Award, title: 'Scientific Excellence', description: 'Commitment to rigorous research and innovation' },
  { icon: Lightbulb, title: 'Innovation with Purpose', description: 'Developing solutions that address real healthcare needs' },
  { icon: Shield, title: 'Quality & Compliance', description: 'Maintaining the highest standards in pharmaceutical business' },
  { icon: Heart, title: 'Patient-Centric Development', description: 'Focused on improving patient outcomes and quality of life' },
  { icon: Handshake, title: 'Collaborative Growth', description: 'Building partnerships that drive mutual success' },
];

const capabilities = [
  'Advanced formulation development',
  'Scale-up and lean manufacturing focused design',
  'Regulatory-oriented development strategies',
  'Technology transfer and partner support',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[#f2e7c3]"> 
        {/* reduced padding from section-padding */}
        
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto text-center">
            {/* increased width */}

            <span className="text-caption mb-6 block text-lg tracking-widest">
              Who We Are
            </span>

            <h1 className="heading-display text-foreground mb-8 
                           text-5xl md:text-6xl lg:text-7xl leading-tight">
              About AtreVes Healthcare
            </h1>

            <div className="divider-gold mx-auto mb-10" />

            <p className="text-body text-xl md:text-2xl max-w-4xl mx-auto">
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
                availability, and patient outcomes for global markets.
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
                To become a globally trusted pharmaceutical company by improving clinical outcomes through scientific innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury space-y-20">

          {/* First Leader */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="order-1 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
                <img
                  src="/leaders/leader1.jpeg"
                  alt="Leader 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h3 className="text-3xl font-semibold text-foreground mb-6">
                Dr. Akash Chaurasiya (Co-Founder & Director)
              </h3>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
               Dr. Akash Chaurasiya is an experienced researcher with work experience in R&D of various pharmaceutical companies like Dabur Research Foundation, Fresenius Kabi, Dr. Reddy’s Laboratories & Amneal Pharmaceuticals. During this tenure, he primarily worked on formulation development of complex products, i.e., liposomes, nano-suspensions, lyophilized products, etc., for regulated markets like US, EU, etc.
                </p>
              Dr. Chaurasiya has played a pivotal role in developing, scaling up, and regulatory filing of these complex products and acted as co-inventor in several patents/applications. Dr. Chaurasiya also received the “Best Excellence and Innovation Award” and “Spot Recognition Award” during his tenure in Dr. Reddy’s lab. Moreover, Dr. Chaurasiya is part of various patents, research articles, book chapters, and national/international conference proceedings. Presently, Dr. Chaurasiya is working as an Associate Professor in the Department of Pharmacy, BITS Pilani Hyderabad Campus.
              
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border"></div>

          {/* Second Leader */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-semibold text-foreground mb-6">
                Ms. Kanan Panchal (Co-Founder & Director)
              </h3>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Ms. Kanan Panchal is a young formulation scientist with experience in developing complex healthcare products for enhancing the treatment modalities of different diseases. Securing a gold medal during her masters from BITS Pilani, she took a vertical transfer into the Ph.D. program. During this tenure, she has been involved in the development of various pharmaceutical formulations and shared co-inventorship in multiple patents. 
                </p>

                <p>
                 Additionally, Ms. Panchal has authored/coauthored various publications, including research/review articles and book chapters. She has also presented her research work in various national and international forums and has also been awarded for the same. Besides the academic and entrepreneurial facets, she is a trained Kathak & Folk dancer with a distinctive interest in varying art forms.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
                <img
                  src="/leaders/leader2.jpg"
                  alt="Leader 2"
                  className="w-full h-full object-cover"
                />
              </div>
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
  
  {/* FIRST 3 CARDS */}
  {coreValues.slice(0, 3).map((value) => (
    <div
      key={value.title}
      className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
        <value.icon className="h-8 w-8 text-primary" />
      </div>

      <h3 className="heading-card text-foreground mb-3">
        {value.title}
      </h3>

      <p className="text-muted-foreground">
        {value.description}
      </p>
    </div>
  ))}

  {/* LAST TWO — PERFECTLY CENTERED */}
  <div className="md:col-span-2 lg:col-span-3 flex justify-center gap-8 flex-wrap">
    {coreValues.slice(3).map((value) => (
      <div
        key={value.title}
        className="text-center p-8 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
      >
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <value.icon className="h-8 w-8 text-primary" />
        </div>

        <h3 className="heading-card text-foreground mb-3">
          {value.title}
        </h3>

        <p className="text-muted-foreground">
          {value.description}
        </p>
      </div>
    ))}
  </div>
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