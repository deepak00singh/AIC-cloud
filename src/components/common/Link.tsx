import React from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/utils'

export type LinkVariant = 'default' | 'subtle' | 'inline'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  external?: boolean
  showExternalIcon?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = 'default',
      external,
      showExternalIcon = false,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const isExternal = external ?? (href?.startsWith('http') || href?.startsWith('//'))

    const baseStyles =
      'inline-flex items-center gap-1 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-xs'

    const variantStyles: Record<LinkVariant, string> = {
      default:
        'text-[var(--color-primary)] font-medium hover:text-[var(--color-primary-hover)] hover:underline underline-offset-4',
      subtle:
        'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:underline underline-offset-4',
      inline:
        'text-[var(--color-primary)] font-medium underline underline-offset-2 decoration-[var(--color-primary)]/40 hover:decoration-[var(--color-primary)]',
    }

    return (
      <a
        ref={ref}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        <span>{children}</span>
        {isExternal && showExternalIcon && (
          <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden="true" />
        )}
      </a>
    )
  },
)

Link.displayName = 'Link'

