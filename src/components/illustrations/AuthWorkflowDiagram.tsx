import React, { useState } from 'react'
import { KeyRound, ShieldCheck, Lock, CheckCircle2, Sparkles } from 'lucide-react'
import { Padlock } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const AuthWorkflowDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<'interactive' | 'sequence'>('interactive')
  const [padlockReadout, setPadlockReadout] = useState('Locked')

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
          <div className="h-6 w-6 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Lock className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            Cryptographic Authentication & Token Scoping
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            Zero-Trust HSM
          </span>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setMode('interactive')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'interactive'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            HSM Token Lock
          </button>
          <button
            type="button"
            onClick={() => setMode('sequence')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'sequence'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            4-Stage Workflow
          </button>
        </div>
      </div>

      {mode === 'interactive' ? (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
          <div className="w-full max-w-[260px] sm:max-w-[280px] shrink-0">
            <Padlock
              intensity={0.8}
              onRead={(val) => setPadlockReadout(val || 'Auth Gate')}
              className="w-full"
              label="Interactive cryptographic authentication padlock"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Shackle Status: {padlockReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Hardware Security Module (HSM) Cryptographic Gating
            </h4>
            <p className="leading-relaxed">
              Hover near the padlock. The shackle automatically springs out and unlocks as the pointer approaches, modeling the sub-millisecond edge validation of cryptographically signed SHA-256 Bearer tokens and mutual TLS certificates.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">SIGNATURE SCHEME</span>
                <span className="font-bold text-[var(--color-foreground)]">Ed25519 / RSA-4096</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">REVOCATION LOOKUP</span>
                <span className="font-bold text-[var(--color-foreground)]">&lt; 1ms In-Memory CRL</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Step 1 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                1
              </span>
              <KeyRound className="h-4 w-4 text-[var(--color-primary)]" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Client Request</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Inbound call passes <code className="text-[10px] bg-[var(--color-surface)] px-1 py-0.5 rounded border border-[var(--color-border)] font-mono">Authorization: Bearer aic_live_...</code>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                2
              </span>
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Edge HSM Decrypt</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Edge gateway validates cryptographic token signature and checks revocation CRL in &lt;1ms.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
              <Lock className="h-4 w-4 text-purple-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Scope Enforcement</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Evaluates requested action against granted role permissions (<code className="text-[10px] bg-[var(--color-surface)] px-1 py-0.5 rounded border border-[var(--color-border)] font-mono">vps:write</code>).
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                4
              </span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Tenant Execution</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Request executes against target hypervisor cluster with isolated tenant namespace.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
