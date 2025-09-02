import { PageHeader } from '@/components/page-header';
import { CtaSection } from '@/components/cta-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, UtensilsCrossed, Car, Dumbbell } from 'lucide-react';

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Medical',
    description: 'Developing predictive diagnostics, patient outcome analysis, and personalized treatment solutions that improve patient care and operational efficiency.',
    clients: ['HealthCorp', 'MediSolutions'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    description: 'Optimizing supply chains, ensuring food safety compliance, and enabling innovative nutrition solutions through AI and analytics.',
    clients: ['FoodTech Inc', 'NutriTech'],
  },
  {
    icon: Car,
    title: 'Automobile & Mobility',
    description: 'Enabling autonomous driving, predictive maintenance, and real-time telematics using AI-powered vehicle data platforms.',
    clients: ['AutoDrive AI', 'MobilityTech'],
  },
  {
    icon: Dumbbell,
    title: 'Sports Analytics',
    description: 'Delivering performance insights, gesture recognition, and injury prediction using AI models tailored for sports environments.',
    clients: ['SportAI', 'PlayMetrics'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="Industry Focus"
        subtitle="We specialize in delivering AI solutions across key sectors where data-driven insights create maximum impact."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-4">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold text-foreground">Client Examples:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {industry.clients.map((client) => (
                      <div key={client} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-all duration-300 hover:bg-primary/20 hover:scale-105">
                        {client}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Transform Your Industry"
        description="Let's build an AI solution tailored to the unique challenges of your sector."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
