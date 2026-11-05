import React, { useState } from 'react'
import { Webhook, ShieldCheck, RefreshCw, Send, Sparkles } from 'lucide-react'
import { Relay } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const WebhookDeliveryDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<'relay' | 'stages'>('relay')
  const [relayReadout, setRelayReadout] = useState('Hop 0 (Standby)')

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
          <div className="h-6 w-6 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Webhook className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            Webhook Event Lifecycle & HMAC Verification
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            4-Branch Relay
          </span>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setMode('relay')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'relay'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Hop-by-Hop Relay
          </button>
          <button
            type="button"
            onClick={() => setMode('stages')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'stages'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Lifecycle Steps
          </button>
        </div>
      </div>

      {mode === 'relay' ? (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-purple-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Relay
              intensity={0.8}
              onRead={(val) => setRelayReadout(val || 'Active Hop')}
              className="w-full"
              label="Interactive 4-branch webhook event relay"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Relay Position: {relayReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Real-Time Hop-by-Hop Event Stream Routing
            </h4>
            <p className="leading-relaxed">
              Hover across the branch tiles. The path from the event dispatch hub to the destination leaf lights up hop by hop. Each branch illustrates an outbound consumer route with automatic backpressure buffers, cryptographic HMAC signing, and exponential retry queues.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">SIGNATURE HEADER</span>
                <span className="font-bold text-[var(--color-foreground)]">X-AIC-Signature (SHA256)</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">RETRY BUFFER</span>
                <span className="font-bold text-[var(--color-foreground)]">72-Hour Backoff</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Step 1 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                Event Trigger
              </span>
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Infrastructure Event</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Instance finishes boot (<code className="text-[10px] font-mono">vps.instance.provisioned</code>) or build finishes.
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                2
              </span>
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">Sign Payload</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Computes HMAC-SHA256 hash using endpoint secret <code className="text-[10px] font-mono">whsec_...</code> and appends timestamp.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="h-5 w-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
                3
              </span>
              <Send className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-xs font-bold text-[var(--color-foreground)]">HTTPS Dispatch</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              POST dispatched to receiver URL with <code className="text-[10px] font-mono">X-AIC-Signature</code> header (10s timeout).
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
            <div className="text-xs font-bold text-[var(--color-foreground)]">Ack or Backoff</div>
            <div className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
              Receiver responds with HTTP 200. On timeout/5xx, automated 72-hour backoff retry activates.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
