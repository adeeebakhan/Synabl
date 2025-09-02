import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const servicesLinks = [
  { name: 'AI Strategy Consulting', href: '/services' },
  { name: 'Machine Learning Solutions', href: '/services' },
  { name: 'Data Analytics', href: '/services' },
  { name: 'Data Engineering', href: '/services' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Clientele', href: '/clientele' },
  { name: 'Testimonials', href: '/testimonials' },
];


export function Footer() {
  return (
    <footer className="dark bg-background text-foreground border-t border-border/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Transforming businesses through AI-powered intelligence. Our innovative solutions help organizations unlock the full potential of their data.
            </p>
            <div className="flex space-x-2">
               <Link href="https://www.linkedin.com/company/synabl-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground bg-foreground/10 p-2 rounded-full hover:text-primary hover:bg-foreground/20 transition-colors" aria-label="LinkedIn">
                 <Linkedin className="h-5 w-5" />
               </Link>
               <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground bg-foreground/10 p-2 rounded-full hover:text-primary hover:bg-foreground/20 transition-colors" aria-label="Twitter">
                 <Twitter className="h-5 w-5" />
               </Link>
               <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground bg-foreground/10 p-2 rounded-full hover:text-primary hover:bg-foreground/20 transition-colors" aria-label="Github">
                 <Github className="h-5 w-5" />
               </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h3 className="text-xl font-semibold text-white relative w-fit mb-4">
                    Services
                    <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {servicesLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                 <h3 className="text-xl font-semibold text-white relative w-fit mb-4">
                    Company
                    <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

               <div>
                 <h3 className="text-xl font-semibold text-white relative w-fit mb-4">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li>Email: <a href="mailto:info@synabl.com" className="hover:text-primary transition-colors">info@synabl.com</a></li>
                    <li>Phone: <a href="tel:+916363240862" className="hover:text-primary transition-colors">+91-6363240862</a></li>
                    <li>Address: No.2, 1st cross,new income tax layout,chandra layout,Bangalore 560072</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Synabl Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
