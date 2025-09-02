import { PageHeader } from '@/components/page-header';
import { CtaSection } from '@/components/cta-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI Strategy Consulting',
    description: 'We help organizations develop comprehensive AI roadmaps aligned with business objectives, identifying high-impact opportunities for AI implementation across various departments and processes.',
    features: ['AI Readiness Assessment', 'Strategic Roadmap Development', 'ROI Analysis and Business Case', 'Implementation Planning'],
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models designed to solve complex business problems, from predictive analytics to computer vision and natural language processing applications.',
    features: ['Predictive Analytics Models', 'Computer Vision Applications', 'Natural Language Processing', 'Deep Learning Solutions'],
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with advanced analytics and intuitive dashboards that drive informed decision-making across your organization.',
    features: ['Advanced Data Analysis', 'Interactive Dashboards', 'Business Intelligence', 'Real-time Reporting'],
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to collect, process, and store data efficiently, ensuring it\'s ready for AI applications and analytics.',
    features: ['Data Pipeline Development', 'Cloud Infrastructure Setup', 'Data Quality Management', 'ETL/ELT Processes'],
  },
  {
    title: 'MLOps Implementation',
    description: 'Streamline the deployment, monitoring, and maintenance of ML models with best practices for operational excellence and continuous improvement.',
    features: ['Model Deployment Automation', 'Performance Monitoring', 'Version Control & Governance', 'Continuous Integration/Deployment'],
  },
  {
    title: 'AI Training & Education',
    description: 'Empower your team with the knowledge and skills needed to understand, work with, and leverage AI technologies effectively in their daily workflows.',
    features: ['Executive AI Workshops', 'Technical Training Programs', 'Custom Curriculum Development', 'Ongoing Support & Mentoring'],
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Assessment',
    description: 'We begin by understanding your business challenges, data landscape, and goals to identify the most impactful AI opportunities.',
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Develop a comprehensive AI strategy with a clear roadmap, timeline, and success metrics aligned with your business objectives.',
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Build and rigorously test AI solutions using best practices and cutting-edge technologies to ensure reliability and performance.',
  },
  {
    step: 4,
    title: 'Deployment & Integration',
    description: 'Seamlessly integrate AI solutions into your existing systems with minimal disruption to your operations.',
  },
  {
    step: 5,
    title: 'Monitoring & Optimization',
    description: 'Continuously monitor performance and optimize solutions to ensure they deliver maximum value and adapt to changing needs.',
  },
];

export default function ServicesPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive AI and data science solutions designed to transform your business and drive innovation."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} className="flex flex-col bg-card/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up group border-transparent hover:border-primary/20" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardHeader>
                  <Button variant="outline" className="group mt-auto transition-transform hover:scale-105 hover:bg-primary/10 w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that ensures successful AI implementation and maximum ROI.
            </p>
          </div>
          <div className="relative mt-16">
             <div aria-hidden="true" className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-border/50 md:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative flex flex-col md:flex-row items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold transition-transform duration-300 hover:scale-110 md:mx-auto">
                    {step.step}
                  </div>
                  <div className="w-full rounded-lg bg-background p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/20 border border-transparent md:ml-6 md:w-auto md:flex-1">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection
        title="Ready to Get Started?"
        description="Let's discuss how our AI solutions can transform your business and drive growth."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
