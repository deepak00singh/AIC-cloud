import React, { useState } from 'react'
import {
  Cabinet,
  Hub,
  Patch,
  Branches,
  Vault,
} from '@lucasmarkes/hairline/react'
import { Server, Cpu, Network, GitBranch, Shield } from 'lucide-react'
import { cn } from '@/utils'

interface ArchitectureTab {
  id: string
  label: string
  icon: React.ReactNode
  badge: string
  title: string
  description: string
  bulletPoints: string[]
  component: () => React.ReactNode
}

export const ArchitecturePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vps')

  const tabs: ArchitectureTab[] = [
    {
      id: 'vps',
      label: 'Cloud VPS',
      icon: <Server className="h-4 w-4" />,
      badge: 'Compute',
      title: 'High-Speed Virtual Private Servers',
      description:
        'Fast KVM virtual servers with 100% dedicated CPU cores, fast NVMe SSD storage, and free DDoS protection. Launch in seconds.',
      bulletPoints: [
        'Dedicated CPU cores with zero resource sharing',
        'Fast NVMe SSD storage with high speed',
        'Available in Mumbai, Delhi NCR, and Europe from ₹99/mo',
      ],
      component: () => (
        <Cabinet
          intensity={0.75}
          className="w-full h-full"
          label="KVM server rack illustration"
        />
      ),
    },
    {
      id: 'gpu',
      label: 'Cloud GPU',
      icon: <Cpu className="h-4 w-4" />,
      badge: 'AI & Machine Learning',
      title: 'NVIDIA GPUs for AI & Deep Learning',
      description:
        'High-power NVIDIA GPUs (RTX 4090, A100, H100) for running AI models, fine-tuning, and image generation. Billed by the minute from your wallet.',
      bulletPoints: [
        'Pre-installed PyTorch, CUDA, ComfyUI, Ollama, and vLLM',
        'Billed per minute starting at ₹27.74/hr (~₹38/hr)',
        'Fast high-bandwidth memory for LLMs and Diffusion models',
      ],
      component: () => (
        <Hub
          intensity={0.8}
          className="w-full h-full"
          label="GPU cluster illustration"
        />
      ),
    },
    {
      id: 'network',
      label: 'Private Network',
      icon: <Network className="h-4 w-4" />,
      badge: 'Networking',
      title: 'Secure Private Cloud Networking',
      description:
        'Connect your servers, databases, and GPUs on a private internal network with zero data transfer costs.',
      bulletPoints: [
        'Isolated private VPC network for your servers',
        'Zero internal data transfer fees between instances',
        'Built-in firewall to protect your ports and apps',
      ],
      component: () => (
        <Patch
          intensity={0.75}
          className="w-full h-full"
          label="Network patch panel illustration"
        />
      ),
    },
    {
      id: 'git',
      label: 'App Hosting',
      icon: <GitBranch className="h-4 w-4" />,
      badge: 'Git-to-PaaS',
      title: 'Deploy Directly from GitHub & GitLab',
      description:
        'Push your code to GitHub or GitLab. We automatically build, test, and deploy your app with free SSL certificates.',
      bulletPoints: [
        'Automatic deployments on git push',
        'Free automatic Let’s Encrypt SSL certificates',
        'Instant 1-click rollbacks if anything goes wrong',
      ],
      component: () => (
        <Branches
          intensity={0.75}
          className="w-full h-full"
          label="Git deployment illustration"
        />
      ),
    },
    {
      id: 'security',
      label: 'Security & Keys',
      icon: <Shield className="h-4 w-4" />,
      badge: 'Security',
      title: 'API Keys & Access Control',
      description:
        'Manage your infrastructure with secure API keys. Control read and write permissions for each team member or service.',
      bulletPoints: [
        'Simple API keys starting with aic_live_',
        'Granular permissions for compute, storage, and apps',
        'Encrypted environment variables for sensitive tokens',
      ],
      component: () => (
        <Vault
          intensity={0.8}
          className="w-full h-full"
          label="Security vault illustration"
        />
      ),
    },
  ]

  const current = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <div
      className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg overflow-hidden text-left"
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
      {/* Top Header & Tab Navigation */}
      <div className="p-4 sm:p-6 border-b border-[var(--color-border)] bg-[var(--color-background-secondary)]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-1.5">
            <span>AIC Cloud Platform</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            How AIC Cloud Infrastructure Works
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-foreground-secondary)] mt-0.5">
            Click any section below to see how our servers, GPUs, networks, and apps work together.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer',
                  isActive
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                    : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)]',
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content: Split Two-Column View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border)]">
        {/* Left Column: Interactive Visual */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/[0.02] to-transparent">
          <div className="w-full max-w-[380px] aspect-[5/4] relative flex items-center justify-center">
            {current.component()}
          </div>
          <p className="text-xs text-[var(--color-foreground-muted)] text-center mt-3">
            Interactive illustration — move your cursor over the graphic
          </p>
        </div>

        {/* Right Column: Clear, Simple Explanations */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[var(--color-surface)]">
          <div className="space-y-3">
            <span className="inline-block px-2.5 py-1 rounded-md bg-[var(--color-background-secondary)] border border-[var(--color-border)] text-xs font-mono font-semibold text-[var(--color-primary)]">
              {current.badge}
            </span>

            <h4 className="text-lg sm:text-xl font-bold text-[var(--color-foreground)] leading-snug">
              {current.title}
            </h4>

            <p className="text-sm text-[var(--color-foreground-secondary)] leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                Key Features
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-foreground-secondary)]">
                {current.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-foreground-muted)]">
            Explore our complete user guides and developer documentation to get started.
          </div>
        </div>
      </div>
    </div>
  )
}
