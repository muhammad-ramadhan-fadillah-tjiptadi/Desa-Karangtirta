
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export interface CtaProps {
  ctaEnabled?: boolean;
  text?: string;
  link?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function Cta({ cta }: { cta: CtaProps }) {
  if (!cta.ctaEnabled) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cta.link?.startsWith('#')) {
      e.preventDefault();
      const targetId = cta.link.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Button 
      variant={cta.variant ?? "default"} 
      size={cta.size ?? "default"} 
      className={cn(cta.className)}
      asChild
    >
      <a href={cta.link ?? "#"} onClick={handleClick}>{cta.text}</a>
    </Button>
  );
}
