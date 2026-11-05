import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export interface PageLink {
  title: string
  href: string
}

export interface PreviousNextProps {
  previous?: PageLink
  next?: PageLink
}

export const PreviousNext: React.FC<PreviousNextProps> = ({ previous, next }) => {
  if (!previous && !next) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-[var(--color-border)]">
      {previous ? (
        <Link
          to={previous.href}
          className="group flex flex-col p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all text-left"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-foreground-muted)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <span className="text-[14px] sm:text-[15px] font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.href}
          className="group flex flex-col p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all text-right items-end sm:col-start-2"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-foreground-muted)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-[14px] sm:text-[15px] font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {next.title}
          </span>
        </Link>
      ) : null}
    </div>
  )
}

