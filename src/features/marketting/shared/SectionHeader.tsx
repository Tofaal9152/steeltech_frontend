interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  accent?: boolean;
}

export function SectionHeader({ title, description, centered = true, accent = true }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-muted-foreground max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
