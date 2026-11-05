import React, { useState } from 'react'
import { GitBranch, Box, Zap, RefreshCw, Sparkles } from 'lucide-react'
import { Branches, Exploded } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const AppHostingDeploymentDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<'git' | 'runtime' | 'steps'>('git')
  const [gitReadout, setGitReadout] = useState('main @ HEAD')
  const [explodedReadout, setExplodedReadout] = useState('Layer 0')

  return (
    <div
      className={`my-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] text-left overflow-hidden ${className}`}
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
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <GitBranch className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            Continuous Git Deployment & Zero-Downtime Traffic Shift
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            Git Push
          </span>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setMode('git')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'git'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Git Graph
          </button>
          <button
            type="button"
            onClick={() => setMode('runtime')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'runtime'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Runtime Stack
          </button>
          <button
            type="button"
            onClick={() => setMode('steps')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'steps'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Pipeline Steps
          </button>
        </div>
      </div>

      {mode === 'git' && (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-emerald-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Branches
              intensity={0.75}
              onRead={(val) => setGitReadout(val || 'Commit Active')}
              className="w-full"
              label="Interactive Git commit branching graph"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Graph Focus: {gitReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Branch-Triggered Automatic Ephemeral Previews
            </h4>
            <p className="leading-relaxed">
              Hover across the commit graph. Pushing to feature branches automatically provisions an isolated preview URL with its own environment variables. Merging into <code className="px-1 py-0.5 rounded bg-[var(--color-background-secondary)] text-[var(--color-primary)] font-mono">main</code> seamlessly initiates blue/green production deployment.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">WEBHOOK LATENCY</span>
                <span className="font-bold text-[var(--color-foreground)]">&lt; 250ms Event Hook</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">ROLLBACK SPEED</span>
                <span className="font-bold text-[var(--color-foreground)]">Instant 1-Click Rollback</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'runtime' && (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Exploded
              intensity={0.7}
              onRead={(val) => setExplodedReadout(val || 'Runtime Layer')}
              className="w-full"
              label="Interactive 4-layer exploded container runtime"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Inspection Layer: {explodedReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Exploded Application Runtime Architecture
            </h4>
            <p className="leading-relaxed">
              Moving your pointer across opens the gap between layers; moving down picks a layer. Inspect the complete ingress path: Anycast SSL Edge Proxy → Reverse Proxy Ingress Router → Container Worker Sandboxes → Attached Persistent SSD Volumes.
            </p>
            <div className="p-2.5 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-foreground-muted)]">
              Move cursor across to open the layers; move down to focus a specific subsystem.
            </div>
          </div>
        </div>
      )}

      {mode === 'steps' && (
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Step 1 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                1
              </span>
              <GitBranch className="h-4 w-4 text-[var(--color-primary)]" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Git Push</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Developer pushes commit to GitHub tracking branch (<code className="text-[10px] font-mono">main</code>).
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                2
              </span>
              <Box className="h-4 w-4 text-purple-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Container Build</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Automated OCI buildpack or Dockerfile compiles code and executes unit tests.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Health Verification</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Spins up green container instance and executes HTTP healthchecks on port.
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                4
              </span>
              <RefreshCw className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Traffic Shift</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Edge proxy shifts 100% of live user traffic instantly. Previous release remains available for 1-click rollback.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
