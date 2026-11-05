import React from 'react'
import { cn } from '@/utils'
import { ChevronDown } from 'lucide-react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  options?: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      errorMessage,
      options,
      children,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const isError = Boolean(errorMessage)

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[13px] font-medium text-[var(--color-foreground)] select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={isError}
            aria-describedby={
              errorMessage
                ? `${selectId}-error`
                : helperText
                  ? `${selectId}-helper`
                  : undefined
            }
            className={cn(
              'w-full h-9 pl-3 pr-9 text-[14px] bg-[var(--color-surface)] text-[var(--color-foreground)]',
              'border rounded-[var(--radius-md)] appearance-none cursor-pointer transition-colors duration-150',
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
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          <ChevronDown
            className="absolute right-3 h-4 w-4 pointer-events-none text-[var(--color-foreground-muted)]"
            aria-hidden="true"
          />
        </div>

        {errorMessage ? (
          <p
            id={`${selectId}-error`}
            className="text-[12px] text-[var(--color-error)] font-medium"
          >
            {errorMessage}
          </p>
        ) : helperText ? (
          <p
            id={`${selectId}-helper`}
            className="text-[12px] text-[var(--color-foreground-muted)]"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Select.displayName = 'Select'

