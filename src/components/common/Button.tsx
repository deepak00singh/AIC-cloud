import React from 'react'
import { cn } from '@/utils'
import { Loader2 } from 'lucide-react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed'

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'h-8 px-3 text-[13px] gap-1.5 rounded-[var(--radius-sm)]',
      md: 'h-9 px-4 text-[14px] gap-2 rounded-[var(--radius-md)]',
      lg: 'h-10 px-5 text-[15px] gap-2.5 rounded-[var(--radius-lg)]',
    }

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] shadow-[var(--shadow-sm)] border border-transparent',
      secondary:
        'bg-[var(--color-background-tertiary)] text-[var(--color-foreground)] hover:bg-[var(--color-border)] active:opacity-90 border border-[var(--color-border)]',
      outline:
        'bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] border border-[var(--color-border)] hover:border-[var(--color-foreground-muted)]/30',
      ghost:
        'bg-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] border border-transparent',
      danger:
        'bg-[var(--color-error)] text-white hover:opacity-90 active:opacity-95 shadow-[var(--shadow-sm)] border border-transparent',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    )
  },
)

Button.displayName = 'Button'

