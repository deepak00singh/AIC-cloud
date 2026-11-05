import React, { useState } from 'react'
import {
  Button,
  Badge,
  Input,
  Select,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CodeBlock,
  InlineCode,
  Callout,
  Link,
} from '@/components/common'
import {
  Search,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Zap,
  Server,
  Layers,
  Sparkles,
} from 'lucide-react'

export const DesignSystemPreview: React.FC = () => {
  const [activePreviewTheme, setActivePreviewTheme] = useState<'light' | 'dark'>('light')

  const sampleTypeScriptCode = `import { AICCloudClient } from '@aic-cloud/sdk'

// Initialize authenticated client instance
const client = new AICCloudClient({
  apiKey: process.env.AIC_API_KEY,
  region: 'us-east-1',
  timeoutMs: 5000,
})

// Provision distributed inference cluster
export async function provisionCluster(clusterName: string) {
  const response = await client.clusters.create({
    name: clusterName,
    nodeType: 'accelerator-large',
    nodeCount: 4,
    autoScale: true,
  })

  console.log(\`Cluster online: \${response.clusterId}\`)
  return response
}`

  return (
    <div className={activePreviewTheme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-200">
        {/* Top Header */}
        <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-10 shadow-[var(--shadow-sm)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-[var(--radius-md)] bg-[var(--color-primary)] flex items-center justify-center text-white shadow-[var(--shadow-sm)] font-bold text-sm">
                AIC
              </div>
              <div>
                <h1 className="text-[16px] font-bold tracking-tight text-[var(--color-foreground)] leading-tight">
                  AIC Cloud Design System
                </h1>
                <p className="text-[12px] text-[var(--color-foreground-muted)]">
                  Step 2 — Design Tokens & UI Primitives Specification
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="primary" size="sm" dot>
                Light Default (WCAG AA)
              </Badge>
              <div className="flex items-center bg-[var(--color-background-tertiary)] p-1 rounded-[var(--radius-md)] border border-[var(--color-border)]">
                <button
                  type="button"
                  onClick={() => setActivePreviewTheme('light')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                    activePreviewTheme === 'light'
                      ? 'bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-[var(--shadow-sm)]'
                      : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]'
                  }`}
                >
                  Light Mode
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreviewTheme('dark')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                    activePreviewTheme === 'dark'
                      ? 'bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-[var(--shadow-sm)]'
                      : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]'
                  }`}
                >
                  Dark Mode
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          {/* SECTION A: Brand Color Palette */}
          <section id="section-colors" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="h-4 w-4" />
                Section A
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Brand & Semantic Color Palette
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Centralized color tokens defined as CSS custom properties with light and dark theme bindings.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[16px] font-semibold text-[var(--color-foreground)]">
                Core Brand Tokens
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                  <div className="h-12 w-full rounded-[var(--radius-sm)] bg-[#4F46E5] shadow-inner" />
                  <div className="text-xs">
                    <p className="font-semibold text-[var(--color-foreground)]">Primary Blue</p>
                    <p className="text-[var(--color-foreground-muted)] font-mono">#4F46E5</p>
                    <p className="text-[10px] text-[var(--color-foreground-muted)]">--color-primary</p>
                  </div>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                  <div className="h-12 w-full rounded-[var(--radius-sm)] bg-[#4338CA] shadow-inner" />
                  <div className="text-xs">
                    <p className="font-semibold text-[var(--color-foreground)]">Primary Hover</p>
                    <p className="text-[var(--color-foreground-muted)] font-mono">#4338CA</p>
                    <p className="text-[10px] text-[var(--color-foreground-muted)]">--color-primary-hover</p>
                  </div>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                  <div className="h-12 w-full rounded-[var(--radius-sm)] bg-[#7C3AED] shadow-inner" />
                  <div className="text-xs">
                    <p className="font-semibold text-[var(--color-foreground)]">Secondary Purple</p>
                    <p className="text-[var(--color-foreground-muted)] font-mono">#7C3AED</p>
                    <p className="text-[10px] text-[var(--color-foreground-muted)]">--color-secondary</p>
                  </div>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                  <div className="h-12 w-full rounded-[var(--radius-sm)] bg-[#111827] shadow-inner" />
                  <div className="text-xs">
                    <p className="font-semibold text-[var(--color-foreground)]">Dark Navy</p>
                    <p className="text-[var(--color-foreground-muted)] font-mono">#111827</p>
                    <p className="text-[10px] text-[var(--color-foreground-muted)]">--color-dark-navy</p>
                  </div>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                  <div className="h-12 w-full rounded-[var(--radius-sm)] bg-[#1F2937] shadow-inner" />
                  <div className="text-xs">
                    <p className="font-semibold text-[var(--color-foreground)]">Charcoal</p>
                    <p className="text-[var(--color-foreground-muted)] font-mono">#1F2937</p>
                    <p className="text-[10px] text-[var(--color-foreground-muted)]">--color-charcoal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[16px] font-semibold text-[var(--color-foreground)]">
                Status Tokens (With Lighter Background Variants)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-success-border)] bg-[var(--color-success-bg)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--color-success-text)]">Success</span>
                    <span className="h-3 w-3 rounded-full bg-[var(--color-success)]" />
                  </div>
                  <p className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                    #16A34A / #F0FDF4
                  </p>
                  <p className="text-[10px] text-[var(--color-foreground-muted)]">
                    --color-success
                  </p>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--color-warning-text)]">Warning</span>
                    <span className="h-3 w-3 rounded-full bg-[var(--color-warning)]" />
                  </div>
                  <p className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                    #D97706 / #FFFBEB
                  </p>
                  <p className="text-[10px] text-[var(--color-foreground-muted)]">
                    --color-warning
                  </p>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-error-border)] bg-[var(--color-error-bg)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--color-error-text)]">Error</span>
                    <span className="h-3 w-3 rounded-full bg-[var(--color-error)]" />
                  </div>
                  <p className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                    #DC2626 / #FEF2F2
                  </p>
                  <p className="text-[10px] text-[var(--color-foreground-muted)]">
                    --color-error
                  </p>
                </div>

                <div className="p-3 rounded-[var(--radius-md)] border border-[var(--color-info-border)] bg-[var(--color-info-bg)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--color-info-text)]">Info</span>
                    <span className="h-3 w-3 rounded-full bg-[var(--color-info)]" />
                  </div>
                  <p className="text-xs text-[var(--color-foreground-secondary)] font-mono">
                    #2563EB / #EFF6FF
                  </p>
                  <p className="text-[10px] text-[var(--color-foreground-muted)]">
                    --color-info
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION B: Typography Hierarchy */}
          <section id="section-typography" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Layers className="h-4 w-4" />
                Section B
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Typography Hierarchy
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Inter (Primary Sans) and JetBrains Mono (Code) with strict proportion and line heights.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-6 shadow-[var(--shadow-sm)]">
              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Display / 48px : 56px
                </div>
                <div className="text-[48px] leading-[56px] font-bold tracking-tight text-[var(--color-foreground)]">
                  Cloud Infrastructure
                </div>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  H1 / 36px : 44px
                </div>
                <div className="text-[36px] leading-[44px] font-bold tracking-tight text-[var(--color-foreground)]">
                  Authentication & API Tokens
                </div>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  H2 / 28px : 36px
                </div>
                <div className="text-[28px] leading-[36px] font-semibold tracking-tight text-[var(--color-foreground)]">
                  Configuring Distributed Webhooks
                </div>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  H3 / 22px : 30px
                </div>
                <div className="text-[22px] leading-[30px] font-semibold text-[var(--color-foreground)]">
                  Request Header Specifications
                </div>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  H4 / 18px : 26px
                </div>
                <div className="text-[18px] leading-[26px] font-semibold text-[var(--color-foreground)]">
                  Rate Limiting, Quotas, and Retries
                </div>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Body Large / 17px : 28px
                </div>
                <p className="text-[17px] leading-[28px] text-[var(--color-foreground)]">
                  AIC Cloud enables software engineers to orchestrate high-throughput microservices across multiple geographical regions with sub-millisecond edge resolution.
                </p>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Body / 15px : 25px
                </div>
                <p className="text-[15px] leading-[25px] text-[var(--color-foreground-secondary)]">
                  All requests directed to the AIC Cloud REST API must contain a cryptographically signed Bearer JWT token inside the standard Authorization request header.
                </p>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Body Small / 13px : 20px
                </div>
                <p className="text-[13px] leading-[20px] text-[var(--color-foreground-muted)]">
                  Session tokens expire automatically after 3,600 seconds. Automated token refresh mechanisms are strongly recommended for sustained background tasks.
                </p>
              </div>

              <div className="pb-4 border-b border-[var(--color-border-subtle)] flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Caption / 12px : 18px
                </div>
                <p className="text-[12px] leading-[18px] font-medium tracking-wide text-[var(--color-foreground-muted)] uppercase">
                  SPECIFICATION REVISION 2.4.0 · STABLE CHANNEL
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="w-48 shrink-0 text-xs text-[var(--color-foreground-muted)] font-mono">
                  Code / 13px : 21px
                </div>
                <div className="font-mono text-[13px] leading-[21px] text-[var(--color-primary)]">
                  const cluster = await aic.clusters.get(&apos;cluster-us-east-4a&apos;);
                </div>
              </div>
            </div>
          </section>

          {/* SECTION C: Spacing Scale */}
          <section id="section-spacing" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Zap className="h-4 w-4" />
                Section C
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Spacing Scale (4px Base Unit)
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Consistent rhythm tokens ensuring layout predictability and visual balance.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-3 shadow-[var(--shadow-sm)]">
              {[
                { token: 'space-1', px: '4px', width: 'w-1' },
                { token: 'space-2', px: '8px', width: 'w-2' },
                { token: 'space-3', px: '12px', width: 'w-3' },
                { token: 'space-4', px: '16px', width: 'w-4' },
                { token: 'space-5', px: '20px', width: 'w-5' },
                { token: 'space-6', px: '24px', width: 'w-6' },
                { token: 'space-8', px: '32px', width: 'w-8' },
                { token: 'space-10', px: '40px', width: 'w-10' },
                { token: 'space-12', px: '48px', width: 'w-12' },
                { token: 'space-16', px: '64px', width: 'w-16' },
                { token: 'space-20', px: '80px', width: 'w-20' },
                { token: 'space-24', px: '96px', width: 'w-24' },
              ].map((item) => (
                <div key={item.token} className="flex items-center text-xs">
                  <span className="w-24 font-mono font-medium text-[var(--color-foreground)]">
                    {item.token}
                  </span>
                  <span className="w-16 font-mono text-[var(--color-foreground-muted)]">
                    {item.px}
                  </span>
                  <div className="flex-1 flex items-center">
                    <div
                      style={{ width: item.px }}
                      className="h-3 rounded-xs bg-[var(--color-primary)] shadow-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION D: Button Variants and States */}
          <section id="section-buttons" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <ShieldCheck className="h-4 w-4" />
                Section D
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Button Variants & Interactive States
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Primary, secondary, outline, ghost, and danger variants with size and loading support.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-6 shadow-[var(--shadow-sm)]">
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-3">
                  Visual Variants
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-3">
                  Size Hierarchy (sm, md, lg)
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small (32px)</Button>
                  <Button size="md">Medium (36px)</Button>
                  <Button size="lg">Large (40px)</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-3">
                  States (Icons, Loading, Disabled)
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Get Started
                  </Button>
                  <Button variant="secondary" leftIcon={<Terminal className="h-4 w-4" />}>
                    Open CLI
                  </Button>
                  <Button isLoading>Processing</Button>
                  <Button disabled>Disabled Action</Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION E: Badges */}
          <section id="section-badges" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="h-4 w-4" />
                Section E
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Status & Category Badges
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Subtle tinted backgrounds, crisp borders, and accessible high-contrast text.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4 shadow-[var(--shadow-sm)]">
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-3">
                  Status Indicator Badges (With Dots)
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="success" dot>
                    Operational
                  </Badge>
                  <Badge variant="warning" dot>
                    Degraded Performance
                  </Badge>
                  <Badge variant="error" dot>
                    Cluster Offline
                  </Badge>
                  <Badge variant="info" dot>
                    Syncing Data
                  </Badge>
                  <Badge variant="neutral" dot>
                    Scheduled Maintenance
                  </Badge>
                  <Badge variant="primary" dot>
                    Active Release
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-3">
                  Standard Badges & Sizes
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" size="sm">
                    POST
                  </Badge>
                  <Badge variant="success" size="sm">
                    200 OK
                  </Badge>
                  <Badge variant="warning" size="sm">
                    429 RATE LIMIT
                  </Badge>
                  <Badge variant="error" size="sm">
                    500 SERVER ERROR
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    v2.4.0
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION F: Input Fields */}
          <section id="section-inputs" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Layers className="h-4 w-4" />
                Section F
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Form & Input Fields
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Accessible inputs, search fields, selects, and textareas with standard focus and error states.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Cluster Name"
                  placeholder="e.g. production-us-east-1"
                  helperText="Unique identifier for your compute cluster."
                />

                <Input
                  label="Search Documentation"
                  placeholder="Search APIs, webhooks, SDKs..."
                  leftIcon={<Search className="h-4 w-4" />}
                  rightIcon={
                    <span className="text-[11px] font-mono border border-[var(--color-border)] bg-[var(--color-background-tertiary)] px-1.5 py-0.5 rounded-[var(--radius-sm)]">
                      ⌘K
                    </span>
                  }
                />

                <Select
                  label="Target Deployment Region"
                  helperText="Choose the geographical zone nearest to your users."
                  options={[
                    { value: 'us-east-1', label: 'US East (N. Virginia)' },
                    { value: 'us-west-2', label: 'US West (Oregon)' },
                    { value: 'eu-central-1', label: 'Europe (Frankfurt)' },
                    { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)' },
                  ]}
                />

                <Input
                  label="API Endpoint URL"
                  defaultValue="ftp://invalid-protocol.com"
                  errorMessage="Endpoint must use https:// protocol."
                />

                <div className="md:col-span-2">
                  <Textarea
                    label="Cluster Configuration Notes"
                    placeholder="Enter architectural notes, environment variables, or rollout descriptions..."
                    helperText="Markdown syntax is supported for technical notes."
                  />
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Read-only Account ID"
                    defaultValue="acc_98314782019481"
                    disabled
                    helperText="This field is managed by organization policy."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION G: Cards */}
          <section id="section-cards" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Server className="h-4 w-4" />
                Section G
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Cards & Content Containers
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Surface containers with clean borders, subtle shadows, and interactive states.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Default Card */}
              <Card variant="default">
                <CardHeader>
                  <Badge variant="neutral" size="sm" className="w-fit mb-1">
                    Standard
                  </Badge>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    Clean surface with standard border and subtle shadow for ordinary documentation blocks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[var(--color-foreground-secondary)]">
                    Suitable for specifications, parameter descriptions, and metric summaries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#section-cards" variant="subtle" className="text-xs">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>

              {/* Interactive Card */}
              <Card variant="interactive">
                <CardHeader>
                  <Badge variant="primary" size="sm" className="w-fit mb-1">
                    Clickable
                  </Badge>
                  <CardTitle className="flex items-center justify-between">
                    <span>Interactive Card</span>
                    <ArrowRight className="h-4 w-4 text-[var(--color-primary)]" />
                  </CardTitle>
                  <CardDescription>
                    Responds to hover with border tint and elevation. Designed for navigational doc hubs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[var(--color-foreground-secondary)]">
                    Ideal for API categories, developer guides, and SDK reference links.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs font-semibold text-[var(--color-primary)]">
                    Browse SDKs →
                  </span>
                </CardFooter>
              </Card>

              {/* Subtle Card */}
              <Card variant="subtle">
                <CardHeader>
                  <Badge variant="info" size="sm" className="w-fit mb-1">
                    Muted
                  </Badge>
                  <CardTitle>Subtle Card</CardTitle>
                  <CardDescription>
                    Uses secondary background tint for secondary contextual notes or sidebar summaries.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[var(--color-foreground-secondary)]">
                    Keeps visual weight light when placed alongside dense documentation tables.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs text-[var(--color-foreground-muted)]">
                    Passive container
                  </span>
                </CardFooter>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="success" size="sm" className="w-fit mb-1">
                    Elevated
                  </Badge>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    Higher elevation shadow for dropdown menus, modal popovers, and featured items.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[var(--color-foreground-secondary)]">
                    Provides clean depth separation over content surfaces.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    Action Target
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* SECTION H: Code Block Example */}
          <section id="section-code" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Terminal className="h-4 w-4" />
                Section H
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Code Blocks & Inline Code
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Monospace typography (JetBrains Mono) on dark developer-friendly surfaces with copy-to-clipboard.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[15px] text-[var(--color-foreground)]">
                You can initialize the AIC Cloud client by calling <InlineCode>new AICCloudClient()</InlineCode> with your credential configuration. Inline tokens such as <InlineCode>timeoutMs</InlineCode> and <InlineCode>autoScale: true</InlineCode> are visually distinct from prose.
              </p>

              <CodeBlock
                code={sampleTypeScriptCode}
                language="typescript"
                filename="provisionCluster.ts"
                showLineNumbers
              />
            </div>
          </section>

          {/* SECTION I: Callout Variants */}
          <section id="section-callouts" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Zap className="h-4 w-4" />
                Section I
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Technical Callouts & Admonitions
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Semantic contextual callouts for notes, success states, warnings, and security alerts.
              </p>
            </div>

            <div className="space-y-3">
              <Callout variant="info" title="Rate Limit Information">
                Standard tier projects are allocated an execution quota of 10,000 API requests per minute. For enterprise capacity bursts, please coordinate with your technical account manager.
              </Callout>

              <Callout variant="success" title="Cluster Provisioned Successfully">
                Your compute node pool has completed health probes and is now actively receiving distributed inference traffic on port 443.
              </Callout>

              <Callout variant="warning" title="Deprecated API Version">
                REST API version 1.1 endpoints are scheduled for deprecation on December 31, 2026. Please migrate your integrations to <InlineCode>v2.4.0</InlineCode> to prevent disruption.
              </Callout>

              <Callout variant="danger" title="Destructive Production Action">
                Terminating an active security group drops all stateful TCP connections immediately. This action cannot be undone and will cause transient network timeouts.
              </Callout>
            </div>
          </section>

          {/* SECTION J: Light and Dark Theme Comparison */}
          <section id="section-comparison" className="space-y-6">
            <div className="border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs tracking-wider uppercase">
                <Layers className="h-4 w-4" />
                Section J
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-[var(--color-foreground)]">
                Side-by-Side Light & Dark Theme Comparison
              </h2>
              <p className="text-[15px] text-[var(--color-foreground-secondary)] mt-1">
                Visual proof of consistent contrast, typography, and component styling across both color schemes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Light Theme Panel */}
              <div className="rounded-[var(--radius-lg)] border border-slate-200 bg-white text-slate-900 p-6 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Light Theme (Default)</h4>
                    <p className="text-xs text-slate-500 font-mono">
                      Surface: #FFFFFF · Background: #FFFFFF · Text: #111827
                    </p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 font-medium">
                    Default
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size="sm">
                      Primary Action
                    </Button>
                    <Button variant="secondary" size="sm">
                      Secondary
                    </Button>
                    <Button variant="outline" size="sm">
                      Outline
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" size="sm" dot>
                      200 OK
                    </Badge>
                    <Badge variant="warning" size="sm" dot>
                      Warning
                    </Badge>
                    <Badge variant="info" size="sm">
                      v2.4
                    </Badge>
                  </div>

                  <Input
                    label="Light Input"
                    placeholder="Placeholder text in light theme"
                    defaultValue="cluster-alpha-01"
                  />

                  <Callout variant="info" title="Light Theme Callout">
                    Notice the readable contrast on soft tinted background with deep navy text.
                  </Callout>
                </div>
              </div>

              {/* Dark Theme Panel */}
              <div className="dark rounded-[var(--radius-lg)] border border-[#262626] bg-[#000000] text-[#EDEDED] p-6 space-y-6 shadow-lg">
                <div className="flex items-center justify-between border-b border-[#262626] pb-3">
                  <div>
                    <h4 className="text-base font-bold text-[#EDEDED]">Dark Theme (.dark)</h4>
                    <p className="text-xs text-[#A1A1A1] font-mono">
                      Surface: #000000 · Background: #000000 · Text: #EDEDED
                    </p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-sm bg-[#171717] text-[#D4D4D4] font-medium border border-[#262626]">
                    .dark Scope
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size="sm">
                      Primary Action
                    </Button>
                    <Button variant="secondary" size="sm">
                      Secondary
                    </Button>
                    <Button variant="outline" size="sm">
                      Outline
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" size="sm" dot>
                      200 OK
                    </Badge>
                    <Badge variant="warning" size="sm" dot>
                      Warning
                    </Badge>
                    <Badge variant="info" size="sm">
                      v2.4
                    </Badge>
                  </div>

                  <Input
                    label="Dark Input"
                    placeholder="Placeholder text in dark theme"
                    defaultValue="cluster-alpha-01"
                  />

                  <Callout variant="info" title="Dark Theme Callout">
                    Notice the calibrated opacity backgrounds preventing harsh glare in dark mode.
                  </Callout>
                </div>
              </div>
            </div>
          </section>

          {/* Links & Navigation Primitives Demo */}
          <section className="border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-foreground-muted)] gap-4">
            <div>
              <span>AIC Cloud Design System · Technical Specification v1.0.0</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#section-colors" variant="subtle">
                Color Tokens
              </Link>
              <Link href="#section-typography" variant="subtle">
                Typography
              </Link>
              <Link href="#section-buttons" variant="subtle">
                Buttons
              </Link>
              <Link href="#section-code" variant="subtle">
                Code Blocks
              </Link>
              <Link href="https://github.com" external showExternalIcon variant="default">
                GitHub Repo
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
