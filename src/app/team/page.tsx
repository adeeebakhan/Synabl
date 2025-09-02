import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Lightbulb, Handshake, Shield, BrainCircuit } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Kalpani N P',
    title: 'Director, Business Development',
    image: '/images/kalpani.jpeg',
    dataAiHint: 'professional headshot woman',
    bio: 'Kalpani N P brings a strategic edge to our AI initiatives by aligning technology with business goals and market demands. With over a decade of experience in business and marketing across the technology and service industries, she plays a pivotal role in driving digital transformation and delivering impactful, client-centric solutions.',
    expertise: ['Business Strategy', 'Digital Transformation', 'Client Relations'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Karthik',
    title: 'Co-Founder & Head of Data Science',
    image: '',
    dataAiHint: 'professional headshot man',
    bio: "Karthik is a Co-Founder of Synabl and leads the Data Science division. He brings a wealth of expertise in statistical modeling and predictive analytics, particularly within the healthcare sector. With a vision for impactful AI, he has been instrumental in building Synabl's data science strategy and driving innovation in patient outcome prediction and clinical optimization.",
    expertise: ['Statistical Modeling', 'Healthcare Analytics', 'Predictive Analytics'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Hemanth',
    title: 'Co-Founder & ML Engineering Lead',
    image: '',
    dataAiHint: 'professional headshot man',
    bio: 'As a Co-Founder of Synabl, Hemanth spearheads machine learning engineering and platform scalability. With deep expertise in MLOps and cloud-native AI infrastructure, he has led the design and deployment of production-grade ML systems at scale. Hemanth plays a critical role in shaping the technical architecture and ensuring seamless delivery of AI-powered solutions.',
    expertise: ['MLOps', 'Cloud Architecture', 'System Scalability'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Paul Kaunds',
    title: 'Strategic Advisor',
    image: '/images/paul.jpeg',
    dataAiHint: 'professional headshot man',
    bio: 'Paul Kaunds brings over 20 years of experience in AI/ML, custom ASIC design, and quantum computing solutions. As the Founder and CEO of a cutting-edge technology firm based in the UK, he has been instrumental in driving innovation at the intersection of artificial intelligence and hardware acceleration. Paul serves as a strategic advisor to Synabl, offering high-level guidance in business scaling and technology roadmapping.',
    expertise: ['AI Strategy', 'Machine Learning', 'Business Development'],
    social: { linkedin: '#', twitter: '#' },
  },
];

const cultureValues = [
    { icon: Lightbulb, title: "Innovation First", description: "We believe in pushing the boundaries of what's possible with AI and machine learning, constantly exploring emerging technologies to provide cutting-edge solutions." },
    { icon: Handshake, title: "Collaborative Partnership", description: "We work alongside our clients as true partners, taking the time to understand business challenges and goals to deliver solutions that create real value." },
    { icon: Shield, title: "Ethical AI", description: "We are committed to developing AI solutions that are transparent, fair, and respect user privacy, ensuring technology serves humanity responsibly." },
    { icon: BrainCircuit, title: "Continuous Learning", description: "Our team stays at the forefront of AI research and development, continuously updating our skills and knowledge to deliver the best solutions." },
]

export default function TeamPage() {
  return (
    <div className="animate-fade-in-up">
      <PageHeader
        title="Meet Our Team"
        subtitle="Our expert team combines deep technical knowledge with business acumen to deliver exceptional AI solutions."
      />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl group animate-fade-in-up bg-card/50 hover:bg-card/80 border-transparent hover:border-primary/20" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 w-full md:h-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      objectFit="cover"
                      data-ai-hint={member.dataAiHint}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.title}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm">Expertise Highlights:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                         {member.expertise.map((item) => (
                             <Badge key={item} variant="secondary" className="transition-colors duration-300 group-hover:bg-primary/20">{item}</Badge>
                         ))}
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-2">
                      <Link href={member.social.linkedin} passHref>
                        <Button variant="outline" size="icon" aria-label={`${member.name}'s LinkedIn`} className="transition-transform hover:scale-110 hover:bg-accent/80">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={member.social.twitter} passHref>
                        <Button variant="outline" size="icon" aria-label={`${member.name}'s Twitter`} className="transition-transform hover:scale-110 hover:bg-accent/80">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Culture & Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">What drives us as a team and how we approach every project.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {cultureValues.map((value, index) => (
                    <div key={value.title} className="text-center group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                            <value.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 text-lg font-medium text-foreground">{value.title}</h3>
                        <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
