import React from 'react'
import { cn } from '@/utils'

export type CardVariant = 'default' | 'interactive' | 'subtle' | 'elevated'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = 'rounded-[var(--radius-lg)] transition-all duration-200'

    const variantStyles: Record<CardVariant, string> = {
      default:
        'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]',
      interactive:
        'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:border-[var(--color-primary)]/50 hover:shadow-[var(--shadow-md)] cursor-pointer',
      subtle:
        'bg-[var(--color-card-subtle-bg)] border border-[var(--color-card-subtle-border)]',
      elevated:
        'bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-md)]',
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    )
  },
)

Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-5 pb-3', className)}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-[17px] font-semibold tracking-tight text-[var(--color-foreground)] leading-snug',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-[13px] text-[var(--color-foreground-secondary)] leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-5 pt-0 border-t border-[var(--color-border-subtle)] mt-4', className)}
      {...props}
    />
  ),
)
CardFooter.displayName = 'CardFooter'

