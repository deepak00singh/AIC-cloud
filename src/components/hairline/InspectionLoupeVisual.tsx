import React from 'react'
import { Loupe } from '@lucasmarkes/hairline/react'

export const InspectionLoupeVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`my-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col items-center justify-center text-center shadow-xs ${className}`}
      style={
        {
          '--hairline-plate': 'var(--color-surface)',
          '--hairline-hi': 'var(--color-primary)',
          '--hairline-edge': 'var(--color-foreground)',
          '--hairline-mid': 'var(--color-border)',
          '--hairline-lo': 'var(--color-border-subtle)',
          '--hairline-stroke': '1',
        } as React.CSSProperties
      }
    >
      <div className="w-full max-w-[260px] h-[190px] flex items-center justify-center">
        <Loupe intensity={0.8} className="w-full h-full" />
      </div>
      <p className="text-xs text-[var(--color-foreground-muted)] mt-2">
        Server health check and log inspection
      </p>
    </div>
  )
}
