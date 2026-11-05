import React, { useState } from 'react'
import { Cpu, Zap, Sparkles } from 'lucide-react'
import { Hub } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const GpuArchitectureDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mode, setMode] = useState<'mesh' | 'schematic'>('mesh')
  const [nodeReadout, setNodeReadout] = useState('All nodes linked')

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
            <Cpu className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            NVIDIA H100 SXM5 Multi-GPU NVLink Mesh Topology
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            900 GB/s Mesh
          </span>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setMode('mesh')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'mesh'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Interactive Fabric
          </button>
          <button
            type="button"
            onClick={() => setMode('schematic')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              mode === 'schematic'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Node Matrix
          </button>
        </div>
      </div>

      {mode === 'mesh' ? (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-purple-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Hub
              intensity={0.8}
              onRead={(val) => setNodeReadout(val || 'Node Link Active')}
              className="w-full"
              label="Interactive 8-node GPU accelerator fabric"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Topology State: {nodeReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              8-Accelerator All-to-All NVLink 4.0 Interconnect
            </h4>
            <p className="leading-relaxed">
              Hover across the 8 peripheral tiles. Each tile represents an independent SXM5 accelerator node communicating directly over 3rd-generation NVSwitches with 900 GB/s bidirectional throughput, bypassing host PCIe bottlenecks for linear model scaling.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">TOTAL HBM3 POOL</span>
                <span className="font-bold text-[var(--color-foreground)]">640 GB / Node</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">PEER-TO-PEER BANDWIDTH</span>
                <span className="font-bold text-[var(--color-foreground)]">900 GB/s Mesh</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((gpuId) => (
              <div
                key={gpuId}
                className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-center space-y-1.5"
              >
                <div className="h-7 w-7 mx-auto rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-xs">
                  GPU {gpuId}
                </div>
                <div className="text-[11px] font-bold text-[var(--color-foreground)]">H100 80GB</div>
                <div className="text-[10px] text-[var(--color-foreground-muted)] font-mono">HBM3 (3.35 TB/s)</div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300">
              <Zap className="h-4 w-4 text-purple-500" />
              <span>NVSwitch 3rd Gen Fabric (All-to-All Full Mesh)</span>
            </div>
            <p className="text-[11px] text-[var(--color-foreground-muted)] max-w-md mx-auto">
              Direct GPU-to-GPU peer memory access bypassing host CPU PCIe lanes for distributed tensor parallelism.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[4, 5, 6, 7].map((gpuId) => (
              <div
                key={gpuId}
                className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-center space-y-1.5"
              >
                <div className="h-7 w-7 mx-auto rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-xs">
                  GPU {gpuId}
                </div>
                <div className="text-[11px] font-bold text-[var(--color-foreground)]">H100 80GB</div>
                <div className="text-[10px] text-[var(--color-foreground-muted)] font-mono">HBM3 (3.35 TB/s)</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
