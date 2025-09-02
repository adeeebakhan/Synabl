
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CtaSection } from '@/components/cta-section';
import {
  BrainCircuit,
  Database,
  AreaChart,
  Code,
  Rocket,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Users,
  Clock,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

const stats = [
  { icon: Briefcase, value: '50+', label: 'Successful Projects' },
  { icon: Users, value: '8', label: 'Industry Partners' },
  { icon: Clock, value: '24/7', label: 'Expert Support' },
  { icon: Star, value: '100%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Strategy Consulting',
    description: 'Develop comprehensive AI roadmaps aligned with business objectives, identifying high-impact opportunities for AI implementation.',
  },
  {
    icon: Code,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models to solve complex business problems, from predictive analytics to computer vision and natural language processing.',
  },
  {
    icon: AreaChart,
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with intuitive dashboards that drive informed decision-making.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to collect, process, and store data efficiently for AI applications.',
  },
  {
    icon: Rocket,
    title: 'MLOps Implementation',
    description: 'Streamline the deployment, monitoring, and maintenance of ML models with best practices for operational excellence.',
  },
  {
    icon: GraduationCap,
    title: 'AI Training & Education',
    description: 'Empower your team with the knowledge and skills needed to leverage AI technologies effectively.',
  },
];

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: Infinity, y: Infinity });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 150;
        
        if (distance < mouseRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseRadius - distance) / mouseRadius;
            const maxForce = 3;
            this.x -= forceDirectionX * force * maxForce;
            this.y -= forceDirectionY * force * maxForce;
        }

        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (context) {
            context.fillStyle = 'rgba(255, 255, 255, 0.8)';
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            context.fill();
        }
      }
    }

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const speedX = Math.random() * 0.4 - 0.2;
        const speedY = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    };

    const connectParticles = () => {
      if (!context) return;
      const maxDistance = 120;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) + Math.pow(particles[a].y - particles[b].y, 2)
          );

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        connectParticles();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mousePosition.current = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
      }
    };

    const handleMouseOut = () => {
      mousePosition.current = { x: Infinity, y: Infinity };
    };
    
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);

    resizeCanvas();
    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="absolute inset-0 z-0 overflow-hidden bg-background"></div>;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative group py-32 md:py-48 overflow-hidden dark text-foreground">
        <AnimatedBackground />
        <div className="container relative z-10 mx-auto px-4 text-center">
         <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl [animation-delay:0.2s] [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
  Transforming Businesses with <span className="ai-powered neon-glow">AI-Powered</span> Intelligence
</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:0.4s]">
            Synabl is a cutting-edge AI and Machine Learning consultancy helping businesses harness data to drive innovation and growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up [animation-delay:0.6s]">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30 w-full sm:w-auto">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group transition-transform hover:scale-110 duration-300 animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                <stat.icon className="mx-auto h-12 w-12 text-primary transition-colors duration-300 group-hover:text-accent" />
                <p className="mt-4 text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
              We provide end-to-end AI and data science solutions tailored to your business needs.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group flex transform flex-col bg-card/50 backdrop-blur-sm border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/80 hover:border-primary/20 animate-fade-in-up" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardHeader>
                  <Button variant="link" asChild className="p-0 text-primary group-hover:underline justify-start">
                    <Link href="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Start Your AI Journey?"
        description="Transform your business with our cutting-edge AI solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
        enableTypingEffect={true}
      />
    </div>
  );
}
