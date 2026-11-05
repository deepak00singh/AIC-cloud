import React from 'react'
import { motion } from 'framer-motion'
import { Server, Cpu, Database, Cloud, Shield, Zap, Globe, Layers } from 'lucide-react'

export const CloudInfrastructureHeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Container Frame */}
      <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md p-6 shadow-[var(--shadow-lg)] overflow-hidden">
        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--color-border-subtle)] text-xs text-[var(--color-foreground-muted)]">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono font-medium text-[var(--color-foreground)]">AIC Anycast Global Network</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <Globe className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            <span>Multi-Region Active</span>
          </div>
        </div>

        {/* 3-Tier Distributed Architecture Diagram */}
        <div className="space-y-4">
          {/* Tier 1: Anycast Edge & Ingress */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/80 p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)] flex items-center gap-1.5">
                  <span>Global Anycast POP Ingress</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-semibold">
                    TLS 1.3
                  </span>
                </div>
                <div className="text-[11px] text-[var(--color-foreground-muted)]">
                  Sub-millisecond BGP edge routing & DDoS scrubbing
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <Zap className="h-3.5 w-3.5" />
              <span>&lt; 5ms</span>
            </div>
          </div>

          {/* Flow Lines */}
          <div className="flex justify-around px-8 py-0.5 text-[var(--color-border)]">
            <div className="w-px h-3 bg-gradient-to-b from-[var(--color-border)] to-[var(--color-primary)]" />
            <div className="w-px h-3 bg-gradient-to-b from-[var(--color-border)] to-[var(--color-secondary)]" />
            <div className="w-px h-3 bg-gradient-to-b from-[var(--color-border)] to-[var(--color-border)]" />
          </div>

          {/* Tier 2: Compute & Acceleration Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Cloud VPS Node */}
            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="h-7 w-7 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Server className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  KVM
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Cloud VPS</div>
                <div className="text-[11px] text-[var(--color-foreground-muted)]">Dedicated vCPU & NVMe</div>
              </div>
            </motion.div>

            {/* Cloud GPU Node */}
            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-xl border border-purple-500/30 bg-gradient-to-b from-purple-500/5 to-transparent p-3 shadow-xs space-y-2 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-purple-500 mr-2 mt-2 animate-ping" />
              <div className="flex items-center justify-between">
                <div className="h-7 w-7 rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Cpu className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400">
                  H100 SXM5
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Cloud GPU</div>
                <div className="text-[11px] text-[var(--color-foreground-muted)]">NVLink 4.0 900 GB/s</div>
              </div>
            </motion.div>

            {/* App Hosting Node */}
            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-xs space-y-2 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="h-7 w-7 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Cloud className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Containers
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">App Hosting</div>
                <div className="text-[11px] text-[var(--color-foreground-muted)]">Git push to live</div>
              </div>
            </motion.div>
          </div>

          {/* Flow Lines */}
          <div className="flex justify-center py-0.5 text-[var(--color-border)]">
            <div className="w-px h-3 bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-border)]" />
          </div>

          {/* Tier 3: Storage & Security Backplane */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/80 p-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[var(--color-foreground)]">
              <Database className="h-4 w-4 text-[var(--color-primary)]" />
              <span className="font-semibold">Object Storage Backplane</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-medium">
                S3 API Preview
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--color-foreground-muted)] text-[11px] font-mono">
              <Shield className="h-3.5 w-3.5 text-emerald-500" />
              <span className="hidden sm:inline">AES-256 Encrypted</span>
            </div>
          </div>
        </div>

        {/* Footer Meta Strip */}
        <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] text-[var(--color-foreground-muted)] font-mono">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3 w-3 text-[var(--color-primary)]" />
            <span>Control Plane API v1</span>
          </div>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            All Systems Operational
          </span>
        </div>
      </div>
    </div>
  )
}

