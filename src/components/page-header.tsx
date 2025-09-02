type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{subtitle}</p>
      </div>
    </section>
  );
}
