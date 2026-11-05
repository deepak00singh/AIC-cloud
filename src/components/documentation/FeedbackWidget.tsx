import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react'

export const FeedbackWidget: React.FC = () => {
  const [feedbackState, setFeedbackState] = useState<'idle' | 'submitted'>('idle')
  const [, setResponse] = useState<'yes' | 'no' | null>(null)

  const handleFeedback = (val: 'yes' | 'no') => {
    setResponse(val)
    setFeedbackState('submitted')
  }

  return (
    <div className="mt-10 p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background-secondary)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
      <div>
        <h4 className="text-[14px] font-semibold text-[var(--color-foreground)]">
          Was this documentation helpful?
        </h4>
        <p className="text-[12px] text-[var(--color-foreground-muted)]">
          Your feedback directly shapes our developer platform guides.
        </p>
      </div>

      {feedbackState === 'submitted' ? (
        <div className="flex items-center gap-2 text-[var(--color-success)] text-xs font-medium">
          <CheckCircle2 className="h-4 w-4" />
          <span>Thank you for your feedback!</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleFeedback('yes')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-medium text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer shadow-xs"
          >
            <ThumbsUp className="h-3.5 w-3.5" />
            Yes
          </button>
          <button
            type="button"
            onClick={() => handleFeedback('no')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-medium text-[var(--color-foreground)] hover:border-[var(--color-error)] hover:text-[var(--color-error)] transition-all cursor-pointer shadow-xs"
          >
            <ThumbsDown className="h-3.5 w-3.5" />
            No
          </button>
        </div>
      )}
    </div>
  )
}
