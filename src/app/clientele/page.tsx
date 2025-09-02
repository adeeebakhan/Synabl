import { PageHeader } from '@/components/page-header';
import { CtaSection } from '@/components/cta-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, UtensilsCrossed, Car, Dumbbell, Target, TrendingUp, Zap, Star } from 'lucide-react';

const clientLogos = [
  { src: '/Logos/well_easy.svg', alt: 'Welleazy - Medical Solutions' },
  { src: '/Logos/mobilitytech.svg', alt: 'MediSolutions - Healthcare Tech' },
  { src: '/Logos/sportai.svg', alt: 'FoodTech Inc - Food Innovation' },
  { src: '/Logos/autodrive.svg', alt: 'NutriTech - Nutrition Science' },
  { src: '/Logos/nutritech.svg', alt: 'AutoDrive AI - Autonomous Driving' },
];

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Medical',
    description:
      'Developing predictive diagnostics, patient outcome analysis, and personalized treatment solutions that improve patient care and operational efficiency.',
    clients: ['HealthCorp', 'MediSolutions'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    description:
      'Optimizing supply chains, ensuring food safety compliance, and enabling innovative nutrition solutions through AI and analytics.',
    clients: ['FoodTech Inc', 'NutriTech'],
  },
  {
    icon: Car,
    title: 'Automobile & Mobility',
    description:
      'Enabling autonomous driving, predictive maintenance, and real-time telematics using AI-powered vehicle data platforms.',
    clients: ['AutoDrive AI', 'MobilityTech'],
  },
  {
    icon: Dumbbell,
    title: 'Sports Analytics',
    description:
      'Delivering performance insights, gesture recognition, and injury prediction using AI models tailored for sports environments.',
    clients: ['SportAI', 'PlayMetrics'],
  },
];

const metrics = [
  { icon: Target, value: '40%', label: 'Average Accuracy Improvement' },
  { icon: TrendingUp, value: '25%', label: 'Cost Reduction' },
  { icon: Zap, value: '60%', label: 'Process Acceleration' },
  { icon: Star, value: '100%', label: 'Client Satisfaction' },
];

export default function ClientelePage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="Our Clientele"
        subtitle="We partner with leading organizations across industries to deliver transformative AI solutions."
      />

      {/* Trusted By Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our client portfolio spans multiple industries with a focus on AI-powered transformation.
            </p>
          </div>

          {/* Client Logo Ticker */}
          <div className="relative w-full overflow-hidden bg-muted py-6 mt-10">
            <div className="flex animate-marquee whitespace-nowrap">
              {clientLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 mx-8 transition-transform duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
                />
              ))}
              {/* Duplicate logos for seamless loop */}
              {clientLogos.map((logo, i) => (
                <img
                  key={`dup-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 mx-8 transition-transform duration-300 hover:scale-110 filter grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Industry Focus</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We specialize in delivering AI solutions across key sectors where data-driven insights create maximum impact.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Card
                key={industry.title}
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                      <industry.icon className="h-6 w-6 text-primary group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-primary">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Success Metrics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our partnerships deliver measurable results across key performance indicators.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up group bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <metric.icon className="mx-auto h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:text-accent" />
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-foreground">{metric.value}</p>
                  <p className="mt-2 text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Join Our Growing Client Base"
        description="Ready to transform your business with AI? Let's discuss how we can help you achieve your goals."
        buttonText="Start Your AI Journey"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
