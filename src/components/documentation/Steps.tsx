import React from 'react'
import { cn } from '@/utils'

export interface StepItem {
  title: string
  content?: React.ReactNode
  description?: React.ReactNode
}

export interface StepsProps {
  steps: StepItem[]
  className?: string
}

export const Steps: React.FC<StepsProps> = ({ steps, className }) => {
  return (
    <div className={cn('space-y-6 my-6 text-left', className)}>
      {steps.map((step, index) => {
        const body = step.content !== undefined ? step.content : step.description

        return (
          <div key={index} className="flex gap-4 relative">
            {/* Vertical connecting line */}
            {index !== steps.length - 1 && (
              <div
                className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-[var(--color-border)]"
                aria-hidden="true"
              />
            )}

            {/* Number Badge */}
            <div className="h-8 w-8 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-bold text-xs flex items-center justify-center shrink-0 z-10 shadow-xs">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 pb-2 space-y-2">
              <h4 className="text-[15px] font-semibold text-[var(--color-foreground)]">
                {step.title}
              </h4>
              {body && (
                <div className="text-[14px] leading-relaxed text-[var(--color-foreground-secondary)]">
                  {body}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
