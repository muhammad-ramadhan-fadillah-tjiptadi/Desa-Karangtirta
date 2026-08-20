
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

  return (
    <Button 
      variant={cta.variant ?? "default"} 
      size={cta.size ?? "default"} 
      className={cn(cta.className)}
      asChild
    >
      <a href={cta.link ?? "#"}>{cta.text}</a>
    </Button>
  );
}
