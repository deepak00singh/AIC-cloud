import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/common'

export interface ContentCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  badge?: string
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  href,
  icon,
  badge,
}) => {
  return (
    <Link
      to={href}
      className="group relative flex flex-col p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-sm)] transition-all text-left"
    >
      <div className="flex items-center justify-between mb-3">
        {icon && (
          <div className="p-2 rounded-[var(--radius-md)] bg-[var(--color-background-secondary)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary-subtle)] transition-colors">
            {icon}
          </div>
        )}
        {badge && (
          <Badge variant="neutral" size="sm">
            {badge}
          </Badge>
        )}
      </div>

      <h4 className="text-[15px] font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors flex items-center justify-between">
        <span>{title}</span>
        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary)]" />
      </h4>

      <p className="text-[13px] text-[var(--color-foreground-secondary)] leading-relaxed mt-1.5 flex-1">
        {description}
      </p>
    </Link>
  )
}

