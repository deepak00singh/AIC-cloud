import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Terminal } from 'lucide-react'
import { Button } from '@/components/common'
import { Query } from '@lucasmarkes/hairline/react'

export const NotFoundPage: React.FC = () => {
  const [queryAngle, setQueryAngle] = useState('0°')

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="max-w-md w-full space-y-5">
        {/* Interactive Isometric Query Figure */}
        <div
          className="w-36 h-28 mx-auto relative flex items-center justify-center"
          style={
            {
              '--hairline-plate': 'var(--color-background)',
              '--hairline-hi': 'var(--color-primary)',
              '--hairline-edge': 'var(--color-foreground)',
              '--hairline-mid': 'var(--color-border)',
              '--hairline-lo': 'var(--color-border-subtle)',
              '--hairline-stroke': '1',
            } as React.CSSProperties
          }
        >
          <Query
            intensity={0.8}
            onRead={(val) => setQueryAngle(val || '0°')}
            className="w-full h-full"
            label="Interactive question mark"
          />
        </div>

        <div className="text-[11px] font-mono text-[var(--color-foreground-muted)]">
          Inquiry Vector: <span className="text-[var(--color-primary)] font-bold">{queryAngle}</span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--color-error-bg)] text-[var(--color-error)] border border-[var(--color-error-border)]">
            404 NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
            Page Not Found
          </h1>
          <p className="text-[14px] text-[var(--color-foreground-secondary)] leading-relaxed">
            The documentation article you requested could not be located. It may have been moved, renamed, or is currently being authored.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/docs/user/introduction">
            <Button variant="primary" leftIcon={<Home className="h-4 w-4" />}>
              User Documentation
            </Button>
          </Link>
          <Link to="/docs/developers/introduction">
            <Button variant="outline" leftIcon={<Terminal className="h-4 w-4" />}>
              Developer Overview
            </Button>
          </Link>
        </div>

        <div className="pt-6 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-foreground-muted)]">
          <Link
            to="/docs/user/introduction"
            className="inline-flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Return to Documentation Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

