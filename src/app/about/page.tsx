import { PageHeader } from '@/components/page-header';
import { CtaSection } from '@/components/cta-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Shield, Handshake, Award, Rocket, Eye } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "We constantly push the boundaries of what's possible with AI, exploring emerging technologies and methodologies to provide our clients with cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our work, ensuring transparency, fairness, and responsible AI development that respects privacy and human rights.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'We believe in the power of partnership, working closely with our clients and fostering a collaborative environment that drives innovation and success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional results in every project, maintaining the highest quality standards and continuously improving our processes and solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="About Synabl"
        subtitle="Pioneering the future of AI-driven business transformation through innovative solutions and strategic expertise."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To democratize AI technology and make it accessible to businesses of all sizes, enabling them to harness the transformative power of artificial intelligence to drive innovation, efficiency, and growth.
              </p>
            </div>
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To be the global leader in AI consulting, recognized for our expertise in delivering cutting-edge solutions that create meaningful impact across industries and contribute to a smarter, more connected world.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="bg-secondary/50 py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center text-center gap-12">
      
      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Founded on the belief that AI should serve humanity and drive positive change... Synabl was born from a simple yet powerful vision: to bridge the gap between cutting-edge AI research and practical business application.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Since our inception, we have been committed to translating complex AI concepts into actionable business solutions. Our multidisciplinary team combines deep technical expertise with strategic business acumen, ensuring that every solution we deliver not only leverages the latest AI advances but also aligns with our clients' specific goals and challenges.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Today, we are proud to have partnered with leading organizations across healthcare, food & beverage, and other industries, helping them unlock the full potential of their data and transform their operations through intelligent automation and predictive analytics.
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {/* <Image
          src="https://picsum.photos/600/400"
          alt="Our Story"
          width={600}
          height={400}
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mx-auto"
          data-ai-hint="AI technology"
        /> */}
      </div>
    </div>
  </div>
</section>

      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our work and define who we are.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={value.title} className="group text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                    <value.icon className="h-8 w-8 text-primary transition-colors group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="transition-colors group-hover:text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Transform Your Business?"
        description="Join the companies that have already discovered the power of AI with Synabl."
        buttonText="Start Your Journey"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
