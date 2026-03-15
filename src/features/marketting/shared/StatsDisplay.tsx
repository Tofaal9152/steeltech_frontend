interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsDisplayProps {
  stats: Stat[];
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              {stat.description && (
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
