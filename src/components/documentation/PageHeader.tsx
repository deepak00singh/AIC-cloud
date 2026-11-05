import React from 'react'
import { Badge } from '@/components/common'
import { Calendar } from 'lucide-react'

export interface PageHeaderProps {
  category: string
  title: string
  description: string
  badge?: string
  isComingSoon?: boolean
  lastUpdated?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  description,
  badge,
  isComingSoon = false,
  lastUpdated = 'November 2026',
}) => {
  return (
    <header className="pb-6 mb-8 border-b border-[var(--color-border-subtle)] space-y-3 text-left">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          {category}
        </span>

        {isComingSoon && (
          <Badge variant="warning" size="sm" dot>
            Coming Soon
          </Badge>
        )}

        {badge && !isComingSoon && (
          <Badge variant="primary" size="sm">
            {badge}
          </Badge>
        )}
      </div>

      <h1 className="text-[32px] sm:text-[36px] font-bold tracking-tight text-[var(--color-foreground)] leading-[1.2]">
        {title}
      </h1>

      <p className="text-[16px] sm:text-[17px] leading-[28px] text-[var(--color-foreground-secondary)] max-w-3xl">
        {description}
      </p>

      <div className="flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)] pt-1">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Last updated: {lastUpdated}</span>
      </div>
    </header>
  )
}

