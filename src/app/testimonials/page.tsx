import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote, Target, Zap, TrendingDown, Star } from 'lucide-react';
import { CtaSection } from '@/components/cta-section';

const testimonials = [
  {
    quote: "Synabl's AI solutions have revolutionized our patient diagnosis process. Their predictive analytics platform has improved our diagnostic accuracy by 40% and reduced diagnosis time from hours to minutes. The team's expertise in healthcare AI is unmatched.",
    name: 'Mr. Jatin',
    title: 'CEO, Welleazy',
  },
  {
    quote: "The machine learning models developed by Synabl have completely transformed our supply chain operations. We've reduced costs by 25% while improving food safety compliance. Their understanding of the food industry is exceptional.",
    name: 'Michael Rodriguez',
    title: 'Operations Director, FoodTech Inc.',
  },
  {
    quote: "Working with Synabl has been a game-changer for our pharmaceutical research. Their AI-powered drug discovery platform has accelerated our development timeline by 60%, allowing us to bring life-saving treatments to market faster.",
    name: 'Dr. Emily Watson',
    title: 'Research Director, PharmaAI',
  },
  {
    quote: "The predictive analytics solution from Synabl has transformed our agricultural operations. We can now predict crop yields with 95% accuracy and optimize resource allocation, resulting in 30% higher productivity.",
    name: 'James Mitchell',
    title: 'Head of Analytics, AgriData',
  },
   {
    quote: "Synabl's expertise in bioanalytics has been instrumental in advancing our research capabilities. Their machine learning models have identified patterns in complex biological data that were previously impossible to detect.",
    name: 'Dr. Lisa Park',
    title: 'Lead Scientist, BioAnalytics',
  },
  {
    quote: "The nutrition optimization platform developed by Synabl has revolutionized how we approach personalized nutrition. We can now provide data-driven recommendations that improve health outcomes for our clients.",
    name: 'Rachel Thompson',
    title: 'Chief Nutritionist, NutriTech',
  },
];

const metrics = [
    { icon: Target, value: "95%", label: "Prediction Accuracy" },
    { icon: Zap, value: "60%", label: "Time Reduction" },
    { icon: TrendingDown, value: "35%", label: "Cost Savings" },
    { icon: Star, value: "100%", label: "Client Satisfaction" },
];

export default function TestimonialsPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="What Our Clients Say"
        subtitle="Hear from industry leaders who have transformed their businesses with our AI solutions."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="flex flex-col border-transparent bg-card/50 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 animate-fade-in-up group" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardContent className="pt-6 flex-grow">
                  <Quote className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:text-accent" />
                  <blockquote className="mt-4 text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardHeader>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.title}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Impact Across Industries</h2>
                <p className="mt-4 text-lg text-muted-foreground">Quantifiable results from our AI solutions across different sectors.</p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                {metrics.map((metric, index) => (
                    <div key={metric.label} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                        <metric.icon className="mx-auto h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:text-accent" />
                        <p className="mt-4 text-4xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{metric.value}</p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">{metric.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Share Your Success?"
        description="Let us know how our AI solutions have impacted your business."
        buttonText="Contact Us"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
