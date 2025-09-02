import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, BrainCircuit, Star, Handshake, MessageSquare } from 'lucide-react';

const contactDetails = [
  { icon: Mail, title: 'Email', value: 'info@synabl.com', href: 'mailto:info@synabl.com' },
  { icon: Phone, title: 'Phone', value: '+91-6363240862', href: 'tel:+916363240862' },
  { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' },
];

const offices = [
  { location: 'Bangalore, India', address: 'No.2, 1st cross, New Income Tax Layout, Chandra Layout, Bangalore 560072' },
  { location: 'Colombo, Sri Lanka', address: '#76, 5th Lane, Nawala, Colombo, Sri Lanka' },
  { location: 'London, United Kingdom', address: '9 Becketts Mews, Crowthorne, RG45 6UJ, United Kingdom' },
];

const whyChooseUs = [
    { icon: BrainCircuit, title: "Expert Team", description: "Our team consists of PhD-level AI researchers and experienced industry practitioners." },
    { icon: Star, title: "Proven Results", description: "Track record of successful implementations with measurable business impact." },
    { icon: Handshake, title: "Partnership Approach", description: "We work as your partners, not just vendors, ensuring long-term success." },
    { icon: MessageSquare, title: "24/7 Support", description: "Continuous support and monitoring to ensure your AI solutions perform optimally." },
];

export default function ContactPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="Contact Us"
        subtitle="Ready to transform your business with AI? Get in touch with our experts today."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Send us a Message</h2>
              <p className="mt-2 text-muted-foreground">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              <ContactForm />
            </div>
            <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <h3 className="text-2xl font-bold">Contact Details</h3>
                <div className="mt-6 space-y-4">
                  {contactDetails.map((detail, index) => (
                    <div key={detail.title} className="flex items-start gap-4 transition-all duration-300 hover:text-primary animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                      <detail.icon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">{detail.title}</h4>
                        {detail.href ? (
                           <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.value}</a>
                        ) : (
                           <p className="text-muted-foreground">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
               <div>
                <h3 className="text-2xl font-bold">Our Offices</h3>
                <div className="mt-6 space-y-4">
                  {offices.map((office, index) => (
                    <div key={office.location} className="flex items-start gap-4 transition-all duration-300 hover:text-primary animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">{office.location}</h4>
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Why Choose Synabl?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We provide comprehensive AI solutions with proven results and expert guidance.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Card key={item.title} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
