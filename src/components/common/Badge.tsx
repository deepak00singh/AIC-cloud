import React from 'react'
import { cn } from '@/utils'

export type BadgeVariant = 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-medium border select-none transition-colors'

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-[11px] leading-[14px] px-2 py-0.5 rounded-[var(--radius-sm)] gap-1',
    md: 'text-[12px] leading-[16px] px-2.5 py-1 rounded-[var(--radius-sm)] gap-1.5',
  }

  const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
    primary: {
      container:
        'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] border-[var(--color-primary)]/20',
      dot: 'bg-[var(--color-primary)]',
    },
    neutral: {
      container:
        'bg-[var(--color-neutral-bg)] text-[var(--color-neutral-text)] border-[var(--color-neutral-border)]',
      dot: 'bg-[var(--color-neutral)]',
    },
    success: {
      container:
        'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]',
      dot: 'bg-[var(--color-success)]',
    },
    warning: {
      container:
        'bg-[var(--color-warning-bg)] text-[var(--color-warning-text)] border-[var(--color-warning-border)]',
      dot: 'bg-[var(--color-warning)]',
    },
    error: {
      container:
        'bg-[var(--color-error-bg)] text-[var(--color-error-text)] border-[var(--color-error-border)]',
      dot: 'bg-[var(--color-error)]',
    },
    info: {
      container:
        'bg-[var(--color-info-bg)] text-[var(--color-info-text)] border-[var(--color-info-border)]',
      dot: 'bg-[var(--color-info)]',
    },
  }

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant].container, className)}
      {...props}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', variantStyles[variant].dot)}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

