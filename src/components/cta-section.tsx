
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type CtaSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  enableTypingEffect?: boolean;
};

const useTypingEffect = (text: string, speed = 100, pause = 2000) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    let i = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
        if (i < text.length) {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            timeoutId = setTimeout(type, speed);
        } else {
            timeoutId = setTimeout(() => {
                i = 0;
                setDisplayedText('');
                type();
            }, pause);
        }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [text, speed, pause]);

  return displayedText;
};

export function CtaSection({ title, description, buttonText, buttonLink, enableTypingEffect = false }: CtaSectionProps) {
  const animatedTitle = enableTypingEffect ? useTypingEffect(title) : title;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-secondary/50 border-t border-b py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in-up h-12">
          {isClient && enableTypingEffect ? (
            <>
              {animatedTitle}
              <span className="inline-block animate-pulse">|</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
          {description}
        </p>
        <div className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
