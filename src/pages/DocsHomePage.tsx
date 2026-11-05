import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  Search,
  ArrowRight,
  Terminal,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { VisualProductCard } from '@/components/documentation/VisualProductCard'
import { EditorialGuideCard } from '@/components/documentation/EditorialGuideCard'
import { ArchitecturePlayground } from '@/components/hairline/ArchitecturePlayground'
import { Terrain } from '@lucasmarkes/hairline/react'

export interface DocsHomePageProps {
  onOpenSearch?: () => void
}

interface DocsOutletContext {
  onOpenSearch?: () => void
}

export const DocsHomePage: React.FC<DocsHomePageProps> = ({ onOpenSearch: propOnOpenSearch }) => {
  const outletCtx = useOutletContext<DocsOutletContext | null>()
  const handleOpenSearch = propOnOpenSearch || outletCtx?.onOpenSearch

  return (
    <div className="w-full text-left">
      {/* =========================================================================
          HERO SECTION — BALANCED EDITORIAL & 3D CLOUD INFRASTRUCTURE VISUAL
          ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        {/* Soft, Subtle Ambient Light (Clean & Seamless) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-500/8 via-purple-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headline, Search & Navigation Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 text-xs font-semibold shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-neutral-400" />
                <span>AIC Cloud Platform Documentation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-[1.12]">
                Build without limits on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-white dark:via-neutral-100 dark:to-neutral-300">
                  AIC Cloud
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-foreground-secondary)] max-w-xl leading-relaxed">
                Explore production-ready cloud compute architectures, dedicated bare-metal infrastructure, accelerated GPU clusters, and programmatic REST APIs.
              </p>

              {/* Prominent Search Bar Trigger */}
              <div className="pt-1 max-w-md">
                <button
                  type="button"
                  onClick={handleOpenSearch}
                  className="w-full flex items-center justify-between h-13 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground-muted)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-foreground)] transition-all cursor-pointer shadow-sm group text-left"
                >
                  <div className="flex items-center gap-3">
                    <Search className="h-4 w-4 text-[var(--color-foreground-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                    <span className="text-sm">Search 64+ guides, APIs, and references...</span>
                  </div>
                  <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[11px] font-mono font-medium text-[var(--color-foreground-muted)]">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* Dual Primary Entry Points */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/docs/user/introduction"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-md shadow-indigo-500/20 dark:shadow-none"
                >
                  <span>Explore User Documentation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/docs/developers/introduction"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] text-sm font-semibold hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-all shadow-xs"
                >
                  <Terminal className="h-4 w-4 text-[var(--color-primary)]" />
                  <span>Developer API & SDKs</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Large Unboxed Interactive Isometric Infrastructure Grid */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
              {/* Ambient Soft Glow Behind the Graphic */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent dark:from-white/5 dark:via-neutral-900/20 dark:to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Large Interactive Terrain Animation (As big as the hero right space) */}
              <div
                className="relative w-full max-w-[640px] aspect-[5/4] flex items-center justify-center select-none"
                style={
                  {
                    '--hairline-plate': 'var(--color-surface)',
                    '--hairline-hi': 'var(--color-primary)',
                    '--hairline-edge': 'var(--color-foreground)',
                    '--hairline-mid': 'var(--color-border)',
                    '--hairline-lo': 'var(--color-border-subtle)',
                    '--hairline-stroke': '1.15',
                  } as React.CSSProperties
                }
              >
                <div className="w-full h-full scale-130 sm:scale-140 lg:scale-155 origin-center transition-transform duration-500 flex items-center justify-center">
                  <Terrain
                    play={true}
                    intensity={0.9}
                    className="w-full h-full cursor-grab active:cursor-grabbing drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION A — CORE CLOUD INFRASTRUCTURE (5 PRODUCTS ONLY)
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1">
                Section A
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-foreground)]">
                Core Cloud Infrastructure
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] max-w-2xl mt-1">
                Explore the five foundational computing and storage services offered across AIC Cloud data centers.
              </p>
            </div>
            <Link
              to="/docs/user/introduction"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              <span>View All User Guides</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 3 + 2 Visual Layout for Hierarchy */}
          <div className="space-y-6">
            {/* Top Row: 3 Primary Infrastructure Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1. Cloud VPS */}
              <VisualProductCard
                to="/docs/user/vps/introduction"
                imageSrc="/images/vps-3d.jpg"
                imageAlt="AIC Cloud VPS KVM Server Blade 3D Illustration"
                badge="Virtual Compute"
                badgeVariant="primary"
                title="Cloud VPS"
                description="Fast virtual servers with dedicated CPU cores, fast NVMe SSD storage, and free DDoS protection. Starting from ₹99/mo."
                tags={['KVM Hypervisor', 'Dedicated vCPU', 'NVMe Storage']}
                ctaText="Explore Cloud VPS"
              />

              {/* 2. Dedicated Servers */}
              <VisualProductCard
                to="/docs/user/dedicated-servers/introduction"
                imageSrc="/images/dedicated-3d.jpg"
                imageAlt="Enterprise Bare Metal Server Rack 3D Illustration"
                badge="Bare Metal"
                badgeVariant="slate"
                title="Dedicated Servers"
                description="100% private physical servers with Intel Core i7, AMD EPYC, and Intel Xeon processors. Starting from ₹1,840/mo."
                tags={['Single-Tenant', 'AMD EPYC', 'Hardware RAID']}
                ctaText="Explore Bare Metal"
              />

              {/* 3. Cloud GPU */}
              <VisualProductCard
                to="/docs/user/gpu/introduction"
                imageSrc="/images/gpu-3d.jpg"
                imageAlt="AI Supercomputer Accelerator Cluster 3D Illustration"
                badge="AI & Deep Learning"
                badgeVariant="purple"
                title="Cloud GPU"
                description="NVIDIA RTX 4090, A100, and H100 GPUs for AI training and inference. Billed per minute from ₹27.74/hr."
                tags={['NVIDIA H100 & RTX', 'Pre-installed PyTorch', 'Per-Minute Billing']}
                ctaText="Explore GPU Clusters"
              />
            </div>

            {/* Bottom Row: 2 Complementary Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 4. App Hosting */}
              <VisualProductCard
                to="/docs/user/app-hosting/introduction"
                imageSrc="/images/app-hosting-3d.jpg"
                imageAlt="Automated Git Deployment CI/CD Pipeline 3D Illustration"
                badge="Managed PaaS"
                badgeVariant="emerald"
                title="App Hosting"
                description="Deploy apps directly from GitHub or GitLab with automatic builds, zero downtime, and free SSL. From ₹99/mo."
                tags={['Git Push Deploy', 'Docker / OCI', 'Automatic SSL']}
                ctaText="Explore App Hosting"
              />

              {/* 5. Object Storage (Preview) */}
              <VisualProductCard
                to="/docs/user/storage/introduction"
                imageSrc="/images/storage-3d.jpg"
                imageAlt="Distributed Cloud Object Storage Vault 3D Illustration"
                badge="S3 Storage"
                badgeVariant="amber"
                title="Object Storage"
                description="100% S3-compatible cloud storage for files, backups, and AI datasets. Starting from ₹199/mo."
                tags={['S3 API Compatible', 'Multi-Part Upload', 'From ₹199/mo']}
                ctaText="View Storage Specs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B — DEVELOPER ECOSYSTEM (5 DEVELOPER PILLARS)
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1">
                Section B
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-foreground)]">
                Developer Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] max-w-2xl mt-1">
                Programmatic infrastructure automation tools, secure authentication protocols, client SDKs, and event stream engines.
              </p>
            </div>
            <Link
              to="/docs/developers/introduction"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              <span>Explore All Developer Docs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. API Reference */}
            <Link
              to="/docs/developers/api/overview"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-500/60 dark:hover:border-neutral-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
                <img
                  src="/images/api-architecture-3d.jpg"
                  alt="REST API Architecture"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700 text-[11px] font-mono font-bold backdrop-blur-md">
                  REST API v1
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                    API Reference
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
                    Simple REST endpoints, standard JSON responses, and easy error handling for all cloud services.
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-white">
                  <span>Inspect Endpoints</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* 2. Authentication */}
            <Link
              to="/docs/developers/api/authentication"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-purple-500/60 dark:hover:border-neutral-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
                <img
                  src="/images/security-shield.jpg"
                  alt="API Authentication & Security"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700 text-[11px] font-mono font-bold backdrop-blur-md">
                  Security
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                    Authentication & Keys
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
                    Secure your API calls with simple bearer tokens and role-based permissions.
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-white">
                  <span>Review Auth Flow</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* 3. Integrations */}
            <Link
              to="/docs/developers/integrations/rest-api"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-blue-500/60 dark:hover:border-neutral-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
                <img
                  src="/images/app-deployment.jpg"
                  alt="System Integrations"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700 text-[11px] font-mono font-bold backdrop-blur-md">
                  CI/CD
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                    Integrations & CI/CD
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
                    Connect server management to GitHub Actions, GitLab CI, and deployment pipelines.
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-white">
                  <span>View Integrations</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* 4. Webhooks */}
            <Link
              to="/docs/developers/webhooks/overview"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-emerald-500/60 dark:hover:border-neutral-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
                <img
                  src="/images/networking-cables.jpg"
                  alt="Real-Time Webhooks"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700 text-[11px] font-mono font-bold backdrop-blur-md">
                  Events
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--color-foreground)] group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">
                    Webhooks & Events
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
                    Get instant notifications whenever your servers start, restart, or finish tasks.
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-white">
                  <span>Configure Webhooks</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* 5. SDKs */}
            <Link
              to="/docs/developers/integrations/nodejs"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-500/60 dark:hover:border-neutral-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-left md:col-span-2 lg:col-span-2"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black border-b border-[var(--color-border-subtle)]">
                <img
                  src="/images/developer-workspace.jpg"
                  alt="Official Client SDKs"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 dark:bg-neutral-900/90 dark:text-neutral-200 dark:border-neutral-700 text-[11px] font-mono font-bold backdrop-blur-md">
                  SDK Libraries
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[var(--color-foreground)] group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                      Official Client SDKs
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:bg-neutral-800 dark:text-neutral-300 font-bold">npm</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:bg-neutral-800 dark:text-neutral-300 font-bold">pip</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:bg-neutral-800 dark:text-neutral-300 font-bold">go</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed line-clamp-2">
                    Strongly-typed client abstractions with automated retry controllers, persistent HTTP/2 connection pooling, and request tracing.
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-white">
                  <span>Install Client Libraries</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C — START BUILDING (VISUAL 4-STAGE JOURNEY)
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1">
              Onboarding Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-foreground)]">
              Start Building on AIC Cloud
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] max-w-2xl mt-1">
              Follow four progressive milestones to take your application from initial setup to production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <Link
              to="/docs/user/introduction"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black">
                <img
                  src="/images/datacenter-hero.jpg"
                  alt="Explore the Platform"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-indigo-600 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono font-bold text-xs shadow-xs">
                  01
                </div>
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    Explore Platform
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed mt-1">
                    Review foundational capabilities, access controls, and organization management.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[var(--color-primary)] pt-2">
                  Read Overview →
                </span>
              </div>
            </Link>

            {/* Stage 2 */}
            <Link
              to="/docs/user/vps/introduction"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black">
                <img
                  src="/images/server-racks.jpg"
                  alt="Understand the Infrastructure"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-indigo-600 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono font-bold text-xs shadow-xs">
                  02
                </div>
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    Understand Architecture
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed mt-1">
                    Inspect hypervisor virtualization, dedicated vCPU pinning, and storage topologies.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[var(--color-primary)] pt-2">
                  Inspect Specs →
                </span>
              </div>
            </Link>

            {/* Stage 3 */}
            <Link
              to="/docs/user/vps/ssh-access"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black">
                <img
                  src="/images/developer-workspace.jpg"
                  alt="Configure Your Environment"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-indigo-600 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono font-bold text-xs shadow-xs">
                  03
                </div>
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    Configure Environment
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed mt-1">
                    Set up Ed25519 SSH keys, configure security firewall rules, and allocate isolated VPCs.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[var(--color-primary)] pt-2">
                  Configure Access →
                </span>
              </div>
            </Link>

            {/* Stage 4 */}
            <Link
              to="/docs/user/app-hosting/introduction"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black">
                <img
                  src="/images/app-deployment.jpg"
                  alt="Deploy Your Application"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-indigo-600 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono font-bold text-xs shadow-xs">
                  04
                </div>
              </div>
              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    Deploy Applications
                  </h3>
                  <p className="text-xs text-[var(--color-foreground-secondary)] leading-relaxed mt-1">
                    Launch containerized apps with zero-downtime blue/green rollouts and automated SSL.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[var(--color-primary)] pt-2">
                  Start Deploying →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D — INFRASTRUCTURE ARCHITECTURE SHOWCASE (ILLUSTRATIVE OVERVIEW)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-[var(--color-border)] bg-black py-20 md:py-28 text-white">
        {/* Full-width Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/datacenter-aisle.jpg"
            alt="Hyperscale Data Center Infrastructure Corridor"
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center md:text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-neutral-200">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400 dark:text-neutral-300" />
              <span>Conceptual Platform Architecture Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Engineered for Compute-Intensive Workloads.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
              AIC Cloud infrastructure incorporates hardware-assisted hypervisor virtualization, isolated VPC networking, high-speed NVMe storage arrays, and accelerated GPU computing topologies.
            </p>
          </div>

          {/* Architectural Principles (Accurately Labeled Conceptual Reference) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-white/15">
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-white">
                Hardware Isolation
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                KVM Kernel Separation
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-indigo-400 dark:text-neutral-200">
                Multi-Zone Routing
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                Anycast Ingress Topologies
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 dark:text-neutral-200">
                NVMe Storage
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                Low-Latency Local Volumes
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-purple-400 dark:text-neutral-200">
                Zero-Trust Auth
              </div>
              <div className="text-xs text-neutral-400 font-medium">
                Cryptographic Token Verification
              </div>
            </div>
          </div>

          {/* Interactive Isometric Architecture Simulator (Powered by Hairline Engine) */}
          <div className="pt-6">
            <ArchitecturePlayground />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E — POPULAR GUIDES (EDITORIAL LAYOUT WITH THUMBNAILS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1">
                Popular Guides & Tutorials
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-foreground)]">
                Featured Technical Walkthroughs
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-foreground-secondary)] max-w-2xl mt-1">
                Step-by-step guides written for site reliability engineers, cloud architects, and ML teams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EditorialGuideCard
              to="/docs/user/vps/ssh-access"
              imageSrc="/images/developer-workspace.jpg"
              imageAlt="SSH Key Authentication Guide"
              category="Security Guide"
              badgeColor="indigo"
              readTime="4 min read"
              title="Connecting Securely via Ed25519 SSH Keys"
              description="Generate elliptic-curve SSH keys, attach public keys to instances, and disable insecure password logins."
            />

            <EditorialGuideCard
              to="/docs/user/vps/create-vps"
              imageSrc="/images/server-racks.jpg"
              imageAlt="Create a VPS Instance"
              category="Compute Setup"
              badgeColor="indigo"
              readTime="5 min read"
              title="Deploying Your First KVM Virtual Private Server"
              description="Select instance dimensions, pick an operating system image, attach cloud-init scripts, and verify boot telemetry."
            />

            <EditorialGuideCard
              to="/docs/user/gpu/workload-setup"
              imageSrc="/images/gpu-hardware.jpg"
              imageAlt="Cloud GPU Workload Setup"
              category="Machine Learning"
              badgeColor="purple"
              readTime="8 min read"
              title="High-Throughput PyTorch & vLLM on Accelerators"
              description="Configure CUDA environments, install acceleration packages, and serve large language models with modern inference engines."
            />

            <EditorialGuideCard
              to="/docs/user/app-hosting/create-app"
              imageSrc="/images/app-deployment.jpg"
              imageAlt="App Hosting Git Deploy"
              category="Application PaaS"
              badgeColor="emerald"
              readTime="6 min read"
              title="Automated Continuous Deployment from GitHub"
              description="Link your repository, set runtime buildpack environment secrets, and configure zero-downtime blue/green routing."
            />

            <EditorialGuideCard
              to="/docs/developers/api/authentication"
              imageSrc="/images/security-shield.jpg"
              imageAlt="API Authentication"
              category="Developer Security"
              badgeColor="indigo"
              readTime="5 min read"
              title="API Key Management & Scoped Bearer Tokens"
              description="Create production API tokens, enforce environment restrictions, and rotate secrets without downtime."
            />

            <EditorialGuideCard
              to="/docs/user/storage/introduction"
              imageSrc="/images/cloud-storage.jpg"
              imageAlt="S3 Object Storage Buckets"
              category="Storage Preview"
              badgeColor="amber"
              readTime="4 min read"
              title="S3-Compatible Object Storage & Replication"
              description="Architect multi-part uploads, configure CORS policies, and manage distributed replication buckets."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
