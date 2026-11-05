import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { BreadcrumbItem } from '@/types/navigation'

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center text-[13px] text-[var(--color-foreground-muted)] mb-5 overflow-x-auto whitespace-nowrap scrollbar-none">
      <Link
        to="/"
        className="flex items-center hover:text-[var(--color-primary)] transition-colors p-1 rounded hover:bg-[var(--color-background-secondary)]"
        aria-label="AIC Cloud Docs Home"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <React.Fragment key={`${item.title}-${index}`}>
            <ChevronRight className="h-3.5 w-3.5 mx-2 text-[var(--color-border)] shrink-0" aria-hidden="true" />
            {isLast || !item.href ? (
              <span className="font-medium text-[var(--color-foreground)] select-none" aria-current={isLast ? 'page' : undefined}>
                {item.title}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-[var(--color-foreground)] transition-colors"
              >
                {item.title}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
