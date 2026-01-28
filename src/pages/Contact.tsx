import { useState } from 'react';
import { MapPin, Mail, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import globalNetwork from '@/assets/global-network.jpg';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().max(200, 'Company name must be less than 200 characters').optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<ContactFormData> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={globalNetwork}
            alt="Global pharmaceutical network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container-luxury relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption mb-4 block">Get in Touch</span>
            <h1 className="heading-display text-foreground mb-6">
              Contact Us
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-body text-lg">
              Interested in partnering with AtreVes Healthcare? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="heading-section text-foreground mb-8">
                AtreVes Healthcare Pvt. Ltd.
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      TBI, BITS Pilani – Hyderabad Campus<br />
                      Jawahar Nagar, Kapra Mandal<br />
                      Medchal District – 500078<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:atreveshealthcare@gmail.com"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      atreveshealthcare@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Contact Persons</h3>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Dr. Akash Chaurasiya</strong><br />
                      Director / Co-Founder
                    </p>
                    <p className="text-muted-foreground mt-3">
                      <strong className="text-foreground">Ms. Kanan Panchal</strong><br />
                      Director / Co-Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-luxury">
              <h3 className="heading-card text-foreground mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="heading-card text-foreground mb-3">Thank You!</h4>
                  <p className="text-muted-foreground">
                    Your message has been received. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none ${
                        errors.message ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Get in Touch
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;