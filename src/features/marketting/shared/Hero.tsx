interface HeroProps {
  title: string;
  description?: string;
  subtitle?: string;
  minHeight?: string;
}

export function Hero({ title, description, subtitle, minHeight = 'min-h-80' }: HeroProps) {
  return (
    <section className={`${minHeight} bg-gradient-to-b from-secondary to-background flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h1>
        {(description || subtitle) && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {description || subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
