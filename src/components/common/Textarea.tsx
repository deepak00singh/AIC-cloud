import React from 'react'
import { cn } from '@/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  errorMessage?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      disabled,
      id,
      rows = 3,
      ...props
    },
    ref,
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const isError = Boolean(errorMessage)

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[13px] font-medium text-[var(--color-foreground)] select-none"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={
            errorMessage
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          className={cn(
            'w-full p-3 text-[14px] bg-[var(--color-surface)] text-[var(--color-foreground)]',
            'border rounded-[var(--radius-md)] transition-colors duration-150 resize-y',
            'placeholder:text-[var(--color-foreground-muted)]',
            'hover:border-[var(--color-foreground-muted)]/40',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
            isError
              ? 'border-[var(--color-error)] focus-visible:ring-[var(--color-error)]'
              : 'border-[var(--color-border)] focus-visible:ring-[var(--color-ring)] focus-visible:border-[var(--color-primary)]',
            disabled &&
              'bg-[var(--color-background-secondary)] opacity-60 cursor-not-allowed pointer-events-none border-[var(--color-border)]',
            className,
          )}
          {...props}
        />

        {errorMessage ? (
          <p
            id={`${textareaId}-error`}
            className="text-[12px] text-[var(--color-error)] font-medium"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${textareaId}-helper`}
            className="text-[12px] text-[var(--color-foreground-muted)]"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'

