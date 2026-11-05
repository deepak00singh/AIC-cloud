import React from 'react'
import { Callout, InlineCode } from '@/components/common'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utils'

export type VerificationStatus =
  | 'Verified Product Information'
  | 'Illustrative Example'
  | 'Preview Feature'
  | 'Coming Soon'
  | 'Requires Official Confirmation'

export const VerificationBadge: React.FC<{ status: VerificationStatus; className?: string }> = ({
  status,
  className,
}) => {
  const styles: Record<VerificationStatus, string> = {
    'Verified Product Information': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    'Illustrative Example': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    'Preview Feature': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    'Coming Soon': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    'Requires Official Confirmation': 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20',
  }

  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border select-none', styles[status], className)}>
      {status}
    </span>
  )
}

export const IllustrativeApiNotice: React.FC<{ endpoint?: string }> = ({ endpoint = 'https://api.aiccloud.in' }) => (
  <Callout variant="info" title="Official Production API v1">
    All REST API endpoints conform to the official AIC Cloud OpenAPI 3.1 specification. Generate API keys in Dashboard &gt; Settings &gt; API Keys.
    <div className="mt-1 text-xs font-mono text-[var(--color-primary)]">
      Production Base URL: <InlineCode>{endpoint}</InlineCode> &bull; OpenAPI Spec: <InlineCode>https://api.aiccloud.in/openapi.json</InlineCode>
    </div>
  </Callout>
)

export const ForthcomingStorageNotice: React.FC = () => (
  <Callout variant="info" title="AIC Object Storage — Launching Soon">
    AIC Cloud Object Storage provides 100% S3-compatible endpoints with Starter (₹199/mo, 50 GB), Growth (₹499/mo, 250 GB), and Scale (₹1,499/mo, 1 TB) tiers. Compatible with AWS CLI, boto3, and rclone.
  </Callout>
)

export const RequiresOfficialConfirmationNotice: React.FC<{ topic: string; details?: string }> = ({
  topic,
  details,
}) => (
  <Callout variant="warning" title="Requires Official Confirmation">
    {details || `The technical specifications and service level commitments for ${topic} presented here represent general architectural guidance and require confirmation against official AIC Cloud Master Service Agreements (MSA) or active product catalogs.`}
  </Callout>
)

export const RelatedLinks: React.FC<{ links: { title: string; href: string; description?: string }[] }> = ({ links }) => (
  <div className="pt-4 border-t border-[var(--color-border-subtle)] space-y-3">
    <h3 className="text-[16px] font-semibold text-[var(--color-foreground)]">
      Related Documentation
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="group flex flex-col p-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:shadow-xs transition-all text-left"
        >
          <span className="text-[13px] font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors flex items-center justify-between">
            <span>{link.title}</span>
            <ArrowRight className="h-3.5 w-3.5 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          {link.description && (
            <span className="text-[12px] text-[var(--color-foreground-muted)] line-clamp-1 mt-0.5">
              {link.description}
            </span>
          )}
        </Link>
      ))}
    </div>
  </div>
)
