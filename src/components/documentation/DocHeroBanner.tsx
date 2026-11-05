import React from 'react'

export interface DocHeroBannerProps {
  imageSrc: string
  imageAlt: string
  badgeText?: string
  badgeColor?: 'primary' | 'purple' | 'emerald' | 'amber'
  title: string
  description?: string
  stats?: Array<{ label: string; value: string }>
  isConceptual?: boolean
}

export const DocHeroBanner: React.FC<DocHeroBannerProps> = ({
  imageSrc,
  imageAlt,
  badgeText,
  badgeColor = 'primary',
  title,
  description,
  stats,
  isConceptual = true,
}) => {
  const badgeClasses = {
    primary: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-400/30 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700',
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-400/30 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700',
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md my-6 group">
      {/* Background Image with Gradient Overlay - High Visibility */}
      <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden bg-black">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 opacity-75 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Floating Content Over Image */}
      <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-end text-left">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {badgeText && (
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border backdrop-blur-md ${badgeClasses[badgeColor]}`}
            >
              {badgeText}
            </span>
          )}
          {isConceptual && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono text-neutral-400 bg-white/10 backdrop-blur-md border border-white/10">
              Conceptual Reference
            </span>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed drop-shadow-sm line-clamp-2 sm:line-clamp-none">
            {description}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  {s.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white font-mono">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


