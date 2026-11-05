import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Server,
  HardDrive,
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Webhook,
  Box,
  Code2,
  ArrowRight,
  Layers,
  Zap,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/utils'

export type MegaMenuType = 'compute' | 'developers' | 'architecture' | null

export interface DocsMegaMenuProps {
  activeMenu: MegaMenuType
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

interface MegaMenuTopicLinkProps {
  to: string
  onClick: () => void
  children: React.ReactNode
  badge?: string
  badgeVariant?: 'primary' | 'purple' | 'emerald' | 'amber' | 'cyan' | 'blue'
}

const MegaMenuTopicLink: React.FC<MegaMenuTopicLinkProps> = ({
  to,
  onClick,
  children,
  badge,
  badgeVariant = 'primary',
}) => {
  const badgeClasses = {
    primary: 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)] border border-[var(--color-primary)]/20',
    purple: 'bg-purple-500/10 dark:bg-neutral-800 text-purple-600 dark:text-neutral-300 border border-purple-500/20 dark:border-neutral-700',
    emerald: 'bg-emerald-500/10 dark:bg-neutral-800 text-emerald-600 dark:text-neutral-300 border border-emerald-500/20 dark:border-neutral-700',
    amber: 'bg-amber-500/10 dark:bg-neutral-800 text-amber-600 dark:text-neutral-300 border border-amber-500/20 dark:border-neutral-700',
    cyan: 'bg-cyan-500/10 dark:bg-neutral-800 text-cyan-600 dark:text-neutral-300 border border-cyan-500/20 dark:border-neutral-700',
    blue: 'bg-blue-500/10 dark:bg-neutral-800 text-blue-600 dark:text-neutral-300 border border-blue-500/20 dark:border-neutral-700',
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className="group/topic flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-all select-none"
    >
      <div className="flex items-center gap-2 min-w-0">
        <ChevronRight className="h-3.5 w-3.5 text-[var(--color-foreground-muted)] group-hover/topic:text-[var(--color-primary)] group-hover/topic:translate-x-0.5 transition-all shrink-0" />
        <span className="truncate">{children}</span>
      </div>
      {badge && (
        <span className={cn('text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ml-1.5', badgeClasses[badgeVariant])}>
          {badge}
        </span>
      )}
    </Link>
  )
}

export const DocsMegaMenu: React.FC<DocsMegaMenuProps> = ({
  activeMenu,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (activeMenu) {
      window.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeMenu, onClose])

  if (!activeMenu) return null

  return (
    <AnimatePresence>
      <div
        ref={menuRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-16 left-0 w-full z-40 bg-[var(--color-surface)]/98 backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 py-7"
        >
          {/* =========================================================================
              MENU 1: COMPUTE & INFRASTRUCTURE (USER DOCS)
              ========================================================================= */}
          {activeMenu === 'compute' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              {/* Left Promo / Spotlight Card */}
              <div className="lg:col-span-3 flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/60 overflow-hidden group">
                <div className="relative h-40 w-full overflow-hidden bg-black">
                  <img
                    src="/images/vps-3d.jpg"
                    alt="AIC Cloud Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-indigo-600/90 dark:bg-neutral-800 text-white dark:text-neutral-200 text-[10px] font-mono font-bold">
                    Compute Cloud
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[var(--color-foreground)]">
                      Enterprise Compute
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed">
                      Deploy KVM virtual private servers, single-tenant dedicated hardware, and H100 AI superclusters in seconds.
                    </p>
                  </div>
                  <Link
                    to="/docs/user/introduction"
                    onClick={onClose}
                    className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-xs"
                  >
                    <span>Explore User Docs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Multi-Column Categories with Explicit Topics Header */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Column 1: Cloud VPS */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <Server className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Cloud VPS
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Fast virtual servers with dedicated CPU &amp; NVMe storage.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/user/vps/introduction" onClick={onClose}>
                      Overview & Architecture
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/vps/create-vps" onClick={onClose}>
                      Create a VPS Instance
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/vps/configuration" onClick={onClose}>
                      Network & Firewall Setup
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/vps/ssh-access" onClick={onClose} badge="Key Auth" badgeVariant="primary">
                      Ed25519 SSH Access
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/vps/manage" onClick={onClose}>
                      Manage & Resizing
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/vps/troubleshooting" onClick={onClose}>
                      Troubleshooting VPS
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 2: Dedicated Servers */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <HardDrive className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Dedicated Servers
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      100% private physical servers with IPMI remote control.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/user/dedicated/introduction" onClick={onClose}>
                      Bare Metal Overview
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/dedicated/overview" onClick={onClose} badge="AMD EPYC" badgeVariant="blue">
                      Hardware Specifications
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/dedicated/provisioning" onClick={onClose}>
                      Server Provisioning
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/dedicated/management" onClick={onClose}>
                      IPMI & Power Controls
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/dedicated/troubleshooting" onClick={onClose}>
                      Hardware Diagnostics
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 3: Cloud GPU */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Cloud GPU
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      NVIDIA GPUs for AI models, billed per minute from wallet.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/user/gpu/introduction" onClick={onClose}>
                      GPU Architecture
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/gpu/overview" onClick={onClose} badge="H100 SXM5" badgeVariant="purple">
                      Accelerator Flavors
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/gpu/create-instance" onClick={onClose}>
                      Create GPU Instance
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/gpu/workload-setup" onClick={onClose} badge="AI Stack" badgeVariant="purple">
                      PyTorch & vLLM Setup
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/gpu/troubleshooting" onClick={onClose}>
                      CUDA Diagnostics
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 4: App Hosting & Storage */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Cloud className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        PaaS & Storage
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Git deploy in seconds &amp; S3-compatible cloud storage.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/user/app-hosting/introduction" onClick={onClose}>
                      App Hosting Overview
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/app-hosting/create-app" onClick={onClose} badge="Auto CI" badgeVariant="emerald">
                      Deploy from GitHub
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/app-hosting/custom-domains" onClick={onClose} badge="Anycast" badgeVariant="emerald">
                      Custom Domains & SSL
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/storage/introduction" onClick={onClose} badge="Preview" badgeVariant="amber">
                      Object Storage S3
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/user/storage/create-bucket" onClick={onClose}>
                      Create S3 Bucket
                    </MegaMenuTopicLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              MENU 2: DEVELOPER PLATFORM (DEVELOPER DOCS)
              ========================================================================= */}
          {activeMenu === 'developers' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              {/* Left Promo Card */}
              <div className="lg:col-span-3 flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/60 overflow-hidden group">
                <div className="relative h-40 w-full overflow-hidden bg-black">
                  <img
                    src="/images/api-architecture-3d.jpg"
                    alt="Developer API Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-indigo-600/90 dark:bg-neutral-800 text-white dark:text-neutral-200 text-[10px] font-mono font-bold">
                    REST API v1
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[var(--color-foreground)]">
                      Developer Ecosystem
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed">
                      Programmatically provision compute, configure VPC firewall rules, and receive cryptographically signed webhook events.
                    </p>
                  </div>
                  <Link
                    to="/docs/developers/quickstart"
                    onClick={onClose}
                    className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-xs"
                  >
                    <span>Developer Quickstart</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Multi-Column Categories */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Column 1: API Fundamentals */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        API Fundamentals
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Standard JSON endpoints and clear error messages.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/developers/api/overview" onClick={onClose}>
                      API Overview & Conventions
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/base-url" onClick={onClose} badge="REST v1" badgeVariant="primary">
                      Base URLs & Versions
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/request-format" onClick={onClose}>
                      Request & Idempotency
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/response-format" onClick={onClose}>
                      Response Envelope Format
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/rate-limiting" onClick={onClose} badge="Token Bucket" badgeVariant="primary">
                      Rate Limiting Specs
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 2: Authentication */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Authentication & Keys
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Bearer token authentication and granular permissions.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/developers/api/authentication" onClick={onClose} badge="Bearer" badgeVariant="purple">
                      Authentication Flow
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/api-keys" onClick={onClose}>
                      API Key Management
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/status-codes" onClick={onClose}>
                      HTTP Status Codes
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api/error-handling" onClick={onClose}>
                      Error Handling & Retries
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 3: Webhooks */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Webhook className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Webhooks & Events
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Real-time HTTPS event notifications for server actions.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/developers/webhooks/overview" onClick={onClose}>
                      Webhooks Overview
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/webhooks/configuration" onClick={onClose}>
                      Endpoint Setup & SSL
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/webhooks/event-structure" onClick={onClose}>
                      Event Schema & Payload
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/webhooks/signature-verification" onClick={onClose} badge="SHA-256" badgeVariant="emerald">
                      HMAC Verification
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/webhooks/retry-handling" onClick={onClose}>
                      Exponential Backoff Retries
                    </MegaMenuTopicLink>
                  </div>
                </div>

                {/* Column 4: Client SDKs & Reference */}
                <div className="space-y-2">
                  <div className="p-1 pb-2.5 border-b border-[var(--color-border-subtle)] space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                        <Box className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-[var(--color-foreground)] tracking-tight">
                        Official SDKs
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-foreground-muted)] leading-relaxed">
                      Official client libraries for Node.js and Python.
                    </p>
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="flex items-center gap-1.5 px-2 mb-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span>TOPICS &amp; GUIDES</span>
                    </div>
                    <MegaMenuTopicLink to="/docs/developers/integrations/nodejs" onClick={onClose} badge="Official" badgeVariant="cyan">
                      Node.js & TypeScript SDK
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/integrations/python" onClick={onClose} badge="PyPI" badgeVariant="cyan">
                      Python SDK (pip)
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api-reference/vps" onClick={onClose}>
                      VPS Instance API Reference
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/api-reference/gpu" onClick={onClose}>
                      GPU Cluster API Reference
                    </MegaMenuTopicLink>
                    <MegaMenuTopicLink to="/docs/developers/resources/faq" onClick={onClose}>
                      Developer FAQ & Diagnostics
                    </MegaMenuTopicLink>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              MENU 3: ARCHITECTURE & SIMULATIONS (INTERACTIVE HAIRLINE MODELS)
              ========================================================================= */}
          {activeMenu === 'architecture' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              {/* Left Promo Card */}
              <div className="lg:col-span-4 flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/60 overflow-hidden group">
                <div className="relative h-44 w-full overflow-hidden bg-black">
                  <img
                    src="/images/datacenter-aisle.jpg"
                    alt="AIC Cloud Datacenter Corridor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-indigo-600/90 dark:bg-neutral-800 text-white dark:text-neutral-200 text-[10px] font-mono font-bold">
                    Hardware Topologies
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[var(--color-foreground)]">
                      Interactive Architecture Simulations
                    </h4>
                    <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed">
                      Move cursor across mathematical isometric models to inspect blade rails, NVLink 4.0 meshes, and zero-trust HSM cryptographic vaults.
                    </p>
                  </div>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-xs"
                  >
                    <span>Inspect Homepage Simulation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Models Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Link
                  to="/docs/user/vps/introduction"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
                    <Server className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 font-bold">
                      Cabinet & Stack
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    KVM Compute Blades
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    Interactive 12-blade chassis pulling out on hover, revealing physical vCPU core pinning.
                  </p>
                </Link>

                <Link
                  to="/docs/user/gpu/introduction"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-purple-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-purple-600 dark:text-purple-400">
                    <Cpu className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-bold">
                      Hub & Phosphor
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    NVLink GPU Fabric
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    8-accelerator NVSwitch interconnect mesh with live glowing tensor core phosphor matrix.
                  </p>
                </Link>

                <Link
                  to="/docs/user/storage/introduction"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-amber-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
                    <Database className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 font-bold">
                      Vault & Drawer
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    S3 Bucket Encryption
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    Rotating combination dial vault door unlocking AES-256 KMS object partitions.
                  </p>
                </Link>

                <Link
                  to="/docs/user/vps/configuration"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-blue-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-blue-600 dark:text-blue-400">
                    <Layers className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 font-bold">
                      Patch & Sieve
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    VPC Patch & Packet Sieve
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    24-port physical patch panel with 3-tier stateful firewall inspection mesh.
                  </p>
                </Link>

                <Link
                  to="/docs/user/app-hosting/introduction"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-emerald-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
                    <Zap className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                      Branches & Exploded
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Git Push & Runtime Layers
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    Commit graph branching with 4-layer exploded microservices application runtime.
                  </p>
                </Link>

                <Link
                  to="/docs/developers/webhooks/overview"
                  onClick={onClose}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-purple-500/50 hover:shadow-md transition-all group block space-y-2 select-none"
                >
                  <div className="flex items-center justify-between text-purple-600 dark:text-purple-400">
                    <Webhook className="h-5 w-5" />
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-bold">
                      Relay & Padlock
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-[var(--color-foreground)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Webhook Relay & Token HSM
                  </h5>
                  <p className="text-xs text-[var(--color-foreground-muted)] leading-relaxed">
                    Hop-by-hop event stream delivery and cryptographic padlock spring validation.
                  </p>
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
