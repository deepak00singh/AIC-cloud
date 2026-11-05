import React from 'react'
import { cn } from '@/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const isError = Boolean(errorMessage)

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[13px] font-medium text-[var(--color-foreground)] select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-[var(--color-foreground-muted)]">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={isError}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={cn(
              'w-full h-9 px-3 text-[14px] bg-[var(--color-surface)] text-[var(--color-foreground)]',
              'border rounded-[var(--radius-md)] transition-colors duration-150',
              'placeholder:text-[var(--color-foreground-muted)]',
              'hover:border-[var(--color-foreground-muted)]/40',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
              isError
                ? 'border-[var(--color-error)] focus-visible:ring-[var(--color-error)]'
                : 'border-[var(--color-border)] focus-visible:ring-[var(--color-ring)] focus-visible:border-[var(--color-primary)]',
              disabled &&
                'bg-[var(--color-background-secondary)] opacity-60 cursor-not-allowed pointer-events-none border-[var(--color-border)]',
              Boolean(leftIcon) && 'pl-9',
              Boolean(rightIcon) && 'pr-9',
              className,
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 flex items-center pointer-events-none text-[var(--color-foreground-muted)]">
              {rightIcon}
            </div>
          )}
        </div>

        {errorMessage ? (
          <p
            id={`${inputId}-error`}
            className="text-[12px] text-[var(--color-error)] font-medium"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${inputId}-helper`}
            className="text-[12px] text-[var(--color-foreground-muted)]"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'
