import React, { useState } from 'react'
import { cn } from '@/utils'
import { Sparkles } from 'lucide-react'

export interface HairlineFigureCardProps {
  title?: string
  subtitle?: string
  badge?: string
  badgeVariant?: 'indigo' | 'purple' | 'emerald' | 'amber' | 'cyan'
  children: (props: {
    onRead: (text: string) => void
    intensity?: number
    play?: boolean
  }) => React.ReactNode
  captionPrefix?: string
  defaultCaption?: string
  className?: string
  aspectRatio?: string
  interactiveHint?: string
}

const badgeVariants = {
  indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
}

export const HairlineFigureCard: React.FC<HairlineFigureCardProps> = ({
  title,
  subtitle,
  badge = 'Interactive Isometric',
  badgeVariant = 'indigo',
  children,
  captionPrefix = 'State',
  defaultCaption = 'Hover to interact',
  className,
  aspectRatio = '5 / 4',
  interactiveHint = 'Move pointer across the figure',
}) => {
  const [caption, setCaption] = useState<string>(defaultCaption)

  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-all overflow-hidden text-left flex flex-col',
        className,
      )}
      style={
        {
          '--hairline-plate': 'var(--color-surface)',
          '--hairline-hi': 'var(--color-primary)',
          '--hairline-edge': 'var(--color-foreground)',
          '--hairline-mid': 'var(--color-border)',
          '--hairline-lo': 'var(--color-border-subtle)',
          '--hairline-stroke': '0.9',
        } as React.CSSProperties
      }
    >
      {/* Header bar with title & interactive badge */}
      {(title || badge) && (
        <div className="px-5 py-3.5 border-b border-[var(--color-border-subtle)] flex items-center justify-between gap-3 bg-[var(--color-background-secondary)]/50">
          <div className="min-w-0">
            {title && (
              <h4 className="text-sm font-bold text-[var(--color-foreground)] tracking-tight truncate">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="text-xs text-[var(--color-foreground-secondary)] truncate">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {badge && (
              <span
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold font-mono border',
                  badgeVariants[badgeVariant],
                )}
              >
                <Sparkles className="h-2.5 w-2.5" />
                <span>{badge}</span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Isometric Figure Canvas Area */}
      <div className="relative p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-transparent via-[var(--color-background-secondary)]/20 to-transparent">
        <div className="w-full max-w-[340px]" style={{ aspectRatio }}>
          {children({
            onRead: (val) => setCaption(val || defaultCaption),
            intensity: 0.65,
          })}
        </div>
      </div>

      {/* Footer bar with live telemetry / readout */}
      <div className="px-4 py-2.5 border-t border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)]/70 flex items-center justify-between text-xs font-mono text-[var(--color-foreground-muted)]">
        <span className="text-[11px] truncate flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[var(--color-foreground-secondary)]">{interactiveHint}</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-semibold text-[var(--color-primary)]">
          {captionPrefix}: {caption}
        </span>
      </div>
    </div>
  )
}

export interface HairlineFigureProps {
  children: React.ReactNode
  caption?: string
  height?: number
  className?: string
  onRead?: (val: string) => void
}

export const HairlineFigure: React.FC<HairlineFigureProps> = ({
  children,
  caption,
  height = 280,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 flex flex-col items-center justify-center overflow-hidden transition-all shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)]',
        className,
      )}
      style={
        {
          minHeight: `${height}px`,
          '--hairline-plate': 'var(--color-surface)',
          '--hairline-hi': 'var(--color-primary)',
          '--hairline-edge': 'var(--color-foreground)',
          '--hairline-mid': 'var(--color-border)',
          '--hairline-lo': 'var(--color-border-subtle)',
          '--hairline-stroke': '0.9',
        } as React.CSSProperties
      }
    >
      <div className="w-full flex items-center justify-center">{children}</div>
      {caption && (
        <span className="text-[11px] font-mono text-[var(--color-foreground-muted)] mt-2 text-center">
          {caption}
        </span>
      )}
    </div>
  )
}

