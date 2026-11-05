import React, { useState } from 'react'
import { Database, Sparkles } from 'lucide-react'
import { Vault, Drawer } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const StorageVaultDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<'vault' | 'hierarchy'>('vault')
  const [vaultReadout, setVaultReadout] = useState('Standby')
  const [drawerReadout, setDrawerReadout] = useState('Folder 0')

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
          <div className="h-6 w-6 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Database className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            Distributed S3 Object Storage & Encryption Architecture
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            Envelope AES-256
          </span>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setMode('vault')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'vault'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Encrypted Vault
          </button>
          <button
            type="button"
            onClick={() => setMode('hierarchy')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'hierarchy'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Bucket Partitions
          </button>
        </div>
      </div>

      {mode === 'vault' ? (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-amber-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Vault
              intensity={0.8}
              onRead={(val) => setVaultReadout(val || 'Dial Ready')}
              className="w-full"
              label="Interactive cryptographic S3 object storage vault"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Vault Status: {vaultReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Hardware-Enforced Envelope Encryption at Rest
            </h4>
            <p className="leading-relaxed">
              Rotate the dial with your cursor. Every uploaded object chunk is sealed with a unique AES-256 data encryption key (DEK) wrapped by your organization master key (KEK) inside a tamper-resistant hardware security module.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">ENCRYPTION STANDARD</span>
                <span className="font-bold text-[var(--color-foreground)]">SSE-KMS / AES-256-GCM</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">REPLICATION SCHEME</span>
                <span className="font-bold text-[var(--color-foreground)]">Multi-AZ Erasure Coding</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Drawer
              intensity={0.75}
              onRead={(val) => setDrawerReadout(val || 'Partition Active')}
              className="w-full"
              label="Interactive bucket storage drawer partitions"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Drawer Tier: {drawerReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Hierarchical Object Partitions & Lifecycle Tiers
            </h4>
            <p className="leading-relaxed">
              Pointer height opens the partitions. S3 buckets manage data across tiers: Hot Tier (zero-latency model inference weights), Cool Tier (weekly snapshot archives), and Glacier Tier (cold deep archiving with regulatory retention).
            </p>
            <div className="p-2.5 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-foreground-muted)]">
              Move cursor vertically to pull out bucket partition tiers and inspect divider partitions.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
