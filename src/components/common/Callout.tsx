import React from 'react'
import { Info, CheckCircle2, AlertTriangle, AlertOctagon, Lightbulb } from 'lucide-react'
import { cn } from '@/utils'

export type CalloutVariant = 'info' | 'success' | 'warning' | 'danger' | 'tip' | 'error'

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant
  title?: string
  icon?: React.ReactNode
}

export const Callout: React.FC<CalloutProps> = ({
  className,
  variant = 'info',
  title,
  icon,
  children,
  ...props
}) => {
  const configs: Record<
    CalloutVariant,
    {
      container: string
      titleColor: string
      defaultIcon: React.ReactNode
      defaultTitle: string
    }
  > = {
    info: {
      container:
        'bg-[var(--color-info-bg)] border-[var(--color-info-border)] text-[var(--color-foreground)] border-l-[var(--color-info)]',
      titleColor: 'text-[var(--color-info-text)]',
      defaultIcon: <Info className="h-5 w-5 text-[var(--color-info)] shrink-0" />,
      defaultTitle: 'Note',
    },
    tip: {
      container:
        'bg-[var(--color-info-bg)] border-[var(--color-info-border)] text-[var(--color-foreground)] border-l-[var(--color-primary)]',
      titleColor: 'text-[var(--color-primary)]',
      defaultIcon: <Lightbulb className="h-5 w-5 text-[var(--color-primary)] shrink-0" />,
      defaultTitle: 'Tip',
    },
    success: {
      container:
        'bg-[var(--color-success-bg)] border-[var(--color-success-border)] text-[var(--color-foreground)] border-l-[var(--color-success)]',
      titleColor: 'text-[var(--color-success-text)]',
      defaultIcon: <CheckCircle2 className="h-5 w-5 text-[var(--color-success)] shrink-0" />,
      defaultTitle: 'Success',
    },
    warning: {
      container:
        'bg-[var(--color-warning-bg)] border-[var(--color-warning-border)] text-[var(--color-foreground)] border-l-[var(--color-warning)]',
      titleColor: 'text-[var(--color-warning-text)]',
      defaultIcon: <AlertTriangle className="h-5 w-5 text-[var(--color-warning)] shrink-0" />,
      defaultTitle: 'Warning',
    },
    danger: {
      container:
        'bg-[var(--color-error-bg)] border-[var(--color-error-border)] text-[var(--color-foreground)] border-l-[var(--color-error)]',
      titleColor: 'text-[var(--color-error-text)]',
      defaultIcon: <AlertOctagon className="h-5 w-5 text-[var(--color-error)] shrink-0" />,
      defaultTitle: 'Caution',
    },
    error: {
      container:
        'bg-[var(--color-error-bg)] border-[var(--color-error-border)] text-[var(--color-foreground)] border-l-[var(--color-error)]',
      titleColor: 'text-[var(--color-error-text)]',
      defaultIcon: <AlertOctagon className="h-5 w-5 text-[var(--color-error)] shrink-0" />,
      defaultTitle: 'Error',
    },
  }

  const activeConfig = configs[variant]
  const displayTitle = title ?? activeConfig.defaultTitle
  const displayIcon = icon ?? activeConfig.defaultIcon

  return (
    <div
      role={variant === 'danger' || variant === 'warning' || variant === 'error' ? 'alert' : 'region'}
      className={cn(
        'flex items-start gap-3.5 p-4 rounded-[var(--radius-md)] border border-l-4 my-4 text-left transition-colors',
        activeConfig.container,
        className,
      )}
      {...props}
    >
      <div className="mt-0.5" aria-hidden="true">
        {displayIcon}
      </div>

      <div className="flex-1 space-y-1">
        {displayTitle && (
          <h5 className={cn('text-sm font-semibold tracking-tight', activeConfig.titleColor)}>
            {displayTitle}
          </h5>
        )}
        <div className="text-[13px] leading-relaxed text-[var(--color-foreground-secondary)]">
          {children}
        </div>
      </div>
    </div>
  )
}
