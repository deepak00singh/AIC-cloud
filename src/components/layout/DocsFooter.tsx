import React from 'react'
import { Link } from 'react-router-dom'
import { AICLogo } from '@/components/common/AICLogo'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

const CURRENT_YEAR = 2026

export const DocsFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)]/60 transition-colors mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <AICLogo size="md" />
            <p className="mt-4 text-xs sm:text-sm text-[var(--color-foreground-secondary)] max-w-sm leading-relaxed">
              Enterprise cloud documentation, KVM virtualization architecture, accelerated compute reference models, and developer platform APIs.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-neutral-900 border border-indigo-500/20 dark:border-neutral-800 text-indigo-600 dark:text-neutral-300 text-xs font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 dark:text-neutral-400" />
              <span>Documentation Platform Status: Active</span>
            </div>
          </div>

          {/* Infrastructure Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
              Compute
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-foreground-secondary)]">
              <li>
                <Link to="/docs/user/vps/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  Cloud VPS
                </Link>
              </li>
              <li>
                <Link to="/docs/user/dedicated-servers/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/docs/user/gpu/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  Cloud GPU
                </Link>
              </li>
              <li>
                <Link to="/docs/user/app-hosting/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  App Hosting
                </Link>
              </li>
              <li>
                <Link to="/docs/user/storage/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  Object Storage <span className="text-[10px] text-amber-500 font-mono font-medium">(Preview)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
              Developers
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-foreground-secondary)]">
              <li>
                <Link to="/docs/developers/introduction" className="hover:text-[var(--color-primary)] transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/docs/developers/authentication" className="hover:text-[var(--color-primary)] transition-colors">
                  Authentication & Keys
                </Link>
              </li>
              <li>
                <Link to="/docs/developers/api/vps" className="hover:text-[var(--color-primary)] transition-colors">
                  VPS REST API
                </Link>
              </li>
              <li>
                <Link to="/docs/developers/api/gpu" className="hover:text-[var(--color-primary)] transition-colors">
                  GPU Cluster API
                </Link>
              </li>
              <li>
                <Link to="/docs/developers/webhooks/overview" className="hover:text-[var(--color-primary)] transition-colors">
                  Webhooks & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Legal Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
              Resources
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-foreground-secondary)]">
              <li>
                <a
                  href="https://cloud.aic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"
                >
                  <span>Cloud Console</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link to="/design-system-preview" className="hover:text-[var(--color-primary)] transition-colors">
                  Design Tokens
                </Link>
              </li>
              <li>
                <span className="text-[var(--color-foreground-muted)] text-[11px]">
                  Conceptual Specs
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-foreground-muted)]">
          <p>© {CURRENT_YEAR} AIC Cloud Inc. All rights reserved. Technical documentation platform.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[var(--color-foreground)] transition-colors">Privacy Policy</span>
            <span className="hover:text-[var(--color-foreground)] transition-colors">Terms of Service</span>
            <span className="hover:text-[var(--color-foreground)] transition-colors">Security Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
