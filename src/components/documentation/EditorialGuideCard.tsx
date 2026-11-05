import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Clock } from 'lucide-react'

export interface EditorialGuideCardProps {
  to: string
  imageSrc: string
  imageAlt: string
  category: string
  title: string
  description: string
  readTime?: string
  badgeColor?: 'indigo' | 'purple' | 'emerald' | 'amber'
}

export const EditorialGuideCard: React.FC<EditorialGuideCardProps> = ({
  to,
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  readTime = '5 min read',
  badgeColor = 'indigo',
}) => {
  const categoryColorClasses = {
    indigo: 'text-indigo-600 dark:text-neutral-400',
    purple: 'text-purple-600 dark:text-neutral-400',
    emerald: 'text-emerald-600 dark:text-neutral-400',
    amber: 'text-amber-600 dark:text-neutral-400',
  }

  return (
    <Link
      to={to}
      className="group flex flex-col sm:flex-row rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-md transition-all overflow-hidden text-left"
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-44 md:w-52 h-40 sm:h-auto shrink-0 overflow-hidden bg-black">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-[var(--color-surface)] opacity-40 sm:opacity-70" />
      </div>

      {/* Guide Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
            <span className={categoryColorClasses[badgeColor]}>{category}</span>
            <span className="flex items-center gap-1 text-[var(--color-foreground-muted)] lowercase font-normal">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
          <span>Read Tutorial</span>
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

