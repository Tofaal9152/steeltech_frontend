import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string;
  description?: string;
  buttons?: Array<{
    label: string;
    href: string;
    variant?: 'default' | 'outline';
  }>;
}

export function CTASection({ title, description, buttons = [] }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/10 border-t border-b border-border">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
        )}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant === 'outline' ? 'outline' : 'default'}
                className={button.variant === 'outline' ? '' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}
              >
                <Link href={button.href}>
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
