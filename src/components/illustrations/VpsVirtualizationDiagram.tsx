import React, { useState } from 'react'
import { Server, HardDrive, Cpu, Shield, Sparkles } from 'lucide-react'
import { Cabinet, Stack } from '@lucasmarkes/hairline/react'
import { cn } from '@/utils'

export const VpsVirtualizationDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [viewMode, setViewMode] = useState<'blades' | 'stack' | 'logical'>('blades')
  const [bladeReadout, setBladeReadout] = useState('Idle')
  const [stackReadout, setStackReadout] = useState('Idle')

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
      {/* Top Header with Interactive View Switcher */}
      <div className="p-4 sm:p-5 border-b border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Server className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
            KVM Virtualization & Hardware Stack
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Sparkles className="h-2.5 w-2.5" />
            Interactive 3D
          </span>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
          <button
            type="button"
            onClick={() => setViewMode('blades')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              viewMode === 'blades'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Blade Rack
          </button>
          <button
            type="button"
            onClick={() => setViewMode('stack')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              viewMode === 'stack'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Virtualization Stack
          </button>
          <button
            type="button"
            onClick={() => setViewMode('logical')}
            className={cn(
              'px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer',
              viewMode === 'logical'
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            Logical Layers
          </button>
        </div>
      </div>

      {/* Main Body */}
      {viewMode === 'blades' && (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-blue-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Cabinet
              intensity={0.7}
              onRead={(val) => setBladeReadout(val || 'Blade Active')}
              className="w-full"
              label="Interactive KVM blade server chassis"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Active Rail: {bladeReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              Blade-Chassis Isolation & Hardware Affinity
            </h4>
            <p className="leading-relaxed">
              Move your pointer vertically across the 12 blade rails above. Each compute blade represents a physical hypervisor node housing isolated KVM slices with dedicated CPU pin sets and non-oversubscribed DDR5 memory channels.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">CHASSIS DENSITY</span>
                <span className="font-bold text-[var(--color-foreground)]">12 Node Blades / 4U</span>
              </div>
              <div className="p-2 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)]">
                <span className="text-slate-400 block text-[10px]">BUS ARCHITECTURE</span>
                <span className="font-bold text-[var(--color-foreground)]">PCIe 5.0 x16 Fabric</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'stack' && (
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-indigo-500/[0.03] to-transparent">
          <div className="w-full max-w-[280px] sm:max-w-[320px] shrink-0">
            <Stack
              intensity={0.75}
              onRead={(val) => setStackReadout(val || 'Stack Layer')}
              className="w-full"
              label="Interactive 5-layer virtualization stack"
            />
          </div>
          <div className="space-y-3 flex-1 text-xs text-[var(--color-foreground-secondary)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-mono text-xs font-bold text-[var(--color-foreground)]">
                Layer State: {stackReadout}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--color-foreground)]">
              5-Layer Virtualization Execution Boundary
            </h4>
            <p className="leading-relaxed">
              Hover across the five stack frames to expand execution layers: Physical Silicon (0) → AMD-V / VT-x Hardware Microcode (1) → Linux Type-1 KVM Kernel (2) → QEMU Device Emulation (3) → Guest OS Application Sandbox (4).
            </p>
            <div className="p-2.5 rounded-lg bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] text-[11px] font-mono text-[var(--color-foreground-muted)]">
              Pointer height uncouples and lifts the stack frames to inspect kernel boundaries.
            </div>
          </div>
        </div>
      )}

      {viewMode === 'logical' && (
        <div className="p-5 sm:p-6 space-y-3">
          {/* Guest Instances Layer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['VPS Instance #1 (Ubuntu)', 'VPS Instance #2 (Debian)', 'VPS Instance #3 (Docker)'].map((guest, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-center space-y-1">
                <span className="text-xs font-bold text-[var(--color-foreground)]">{guest}</span>
                <div className="text-[10px] text-[var(--color-foreground-muted)] font-mono">Isolated Kernel & RAM</div>
              </div>
            ))}
          </div>

          {/* Hypervisor Layer */}
          <div className="p-3 rounded-xl border border-blue-500/30 bg-blue-500/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-300">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>Type-1 Enterprise KVM Hypervisor Layer</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--color-foreground-muted)]">Hardware Virt Extension</span>
          </div>

          {/* Physical Host Hardware */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-tertiary)] flex items-center gap-3">
              <Cpu className="h-5 w-5 text-indigo-500 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">AMD EPYC / Intel Xeon Cores</div>
                <div className="text-[10px] text-[var(--color-foreground-muted)]">Guaranteed vCPU Thread Pinning</div>
              </div>
            </div>
            <div className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-tertiary)] flex items-center gap-3">
              <HardDrive className="h-5 w-5 text-emerald-500 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[var(--color-foreground)]">Enterprise NVMe RAID-10</div>
                <div className="text-[10px] text-[var(--color-foreground-muted)]">Up to 7,000+ MB/s Read & Sub-1ms Latency</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
