'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 border-b",
      isScrolled || isOpen ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent bg-background"
    )}>
      <div className="container flex h-20 items-center">
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 bg-background">
                <Link href="/" className="mr-6 flex items-center" onClick={() => setIsOpen(false)}>
                  <Logo />
                </Link>
                <div className="mt-8 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-base font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/">
             <Logo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <nav className="flex items-center space-x-8 text-lg font-medium">
              {navLinks.map((link) => (
                 <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'relative transition-colors hover:text-primary',
                       pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent"></span>
                    )}
                  </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-end">
             <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 shadow-md shadow-accent/20 hover:shadow-accent/30 hidden sm:flex">
                <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
