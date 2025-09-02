import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("group flex items-center", className)} aria-label="Synabl Intelligence Home">
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent">
          Synabl
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          Intelligence Synergized
        </span>
      </div>
    </div>
  );
}
