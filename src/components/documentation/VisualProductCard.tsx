import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export interface VisualProductCardProps {
  to: string
  imageSrc: string
  imageAlt: string
  badge?: string
  badgeVariant?: 'primary' | 'purple' | 'emerald' | 'amber' | 'slate'
  title: string
  description: string
  tags?: string[]
  ctaText?: string
}

export const VisualProductCard: React.FC<VisualProductCardProps> = ({
  to,
  imageSrc,
  imageAlt,
  badge,
  badgeVariant = 'primary',
  title,
  description,
  tags = [],
  ctaText = 'View Documentation',
}) => {
  const variantStyles = {
    primary: {
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700',
      hoverBorder: 'hover:border-indigo-500/60 dark:hover:border-neutral-500 hover:shadow-indigo-500/10 dark:hover:shadow-none',
      arrowColor: 'text-indigo-600 dark:text-white',
      titleHover: 'group-hover:text-indigo-600 dark:group-hover:text-white',
    },
    purple: {
      badge: 'bg-purple-500/20 text-purple-300 border-purple-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700',
      hoverBorder: 'hover:border-purple-500/60 dark:hover:border-neutral-500 hover:shadow-purple-500/10 dark:hover:shadow-none',
      arrowColor: 'text-purple-600 dark:text-white',
      titleHover: 'group-hover:text-purple-600 dark:group-hover:text-white',
    },
    emerald: {
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700',
      hoverBorder: 'hover:border-emerald-500/60 dark:hover:border-neutral-500 hover:shadow-emerald-500/10 dark:hover:shadow-none',
      arrowColor: 'text-emerald-600 dark:text-white',
      titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-white',
    },
    amber: {
      badge: 'bg-amber-500/20 text-amber-300 border-amber-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700',
      hoverBorder: 'hover:border-amber-500/60 dark:hover:border-neutral-500 hover:shadow-amber-500/10 dark:hover:shadow-none',
      arrowColor: 'text-amber-600 dark:text-white',
      titleHover: 'group-hover:text-amber-600 dark:group-hover:text-white',
    },
    slate: {
      badge: 'bg-slate-500/20 text-slate-300 border-slate-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700',
      hoverBorder: 'hover:border-slate-400 dark:hover:border-neutral-500 hover:shadow-slate-500/10 dark:hover:shadow-none',
      arrowColor: 'text-[var(--color-primary)] dark:text-white',
      titleHover: 'group-hover:text-[var(--color-primary)] dark:group-hover:text-white',
    },
  }

  const currentVariant = variantStyles[badgeVariant] || variantStyles.primary

  return (
    <Link
      to={to}
      className={`group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] ${currentVariant.hoverBorder} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left`}
    >
      {/* Top Image Banner - High Contrast, No Milky Washout */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
        />

        {/* Minimal Dark Scrim Only at Top for Badge Contrast */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-xs ${currentVariant.badge}`}
            >
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-1.5">
          <h3 className={`text-base sm:text-lg font-bold text-[var(--color-foreground)] ${currentVariant.titleHover} transition-colors tracking-tight`}>
            {title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] border border-[var(--color-border-subtle)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className={`pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold ${currentVariant.arrowColor}`}>
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
