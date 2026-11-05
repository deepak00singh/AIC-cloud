import type { DocPageData } from '@/types/docs'
import {
  Callout,
  InlineCode,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Table } from '@/components/documentation/Table'

// User Documentation Modules (36 pages)
import { gettingStartedPages } from './docs/user/gettingStarted'
import { cloudVpsPages } from './docs/user/cloudVps'
import { dedicatedServersPages } from './docs/user/dedicatedServers'
import { cloudGpuPages } from './docs/user/cloudGpu'
import { appHostingPages } from './docs/user/appHosting'
import { objectStoragePages } from './docs/user/objectStorage'

// Developer Documentation Modules (28 pages)
import { developerOverviewPages } from './docs/developer/overview'
import { developerApiFundamentalsPages } from './docs/developer/apiFundamentals'
import { developerApiReferencePages } from './docs/developer/apiReference'
import { developerIntegrationsPages } from './docs/developer/integrations'
import { developerWebhooksPages } from './docs/developer/webhooks'
import { developerResourcesPages } from './docs/developer/resources'

/**
 * Complete master registry of all documentation pages across User and Developer sections.
 * 64 production-grade technical pages.
 */
export const documentationPages: Record<string, DocPageData> = {
  // User Documentation (36 pages)
  ...gettingStartedPages,
  ...cloudVpsPages,
  ...dedicatedServersPages,
  ...cloudGpuPages,
  ...appHostingPages,
  ...objectStoragePages,

  // Developer Documentation (28 pages)
  ...developerOverviewPages,
  ...developerApiFundamentalsPages,
  ...developerApiReferencePages,
  ...developerIntegrationsPages,
  ...developerWebhooksPages,
  ...developerResourcesPages,
}

/**
 * Universal page lookup and fallback generator.
 * If a custom page exists in the registry, it is returned.
 * If an unmapped or deep link is visited, generates a clean, structured documentation view.
 */
export function getDocumentationPage(slug: string): DocPageData | undefined {
  if (documentationPages[slug]) {
    return documentationPages[slug]
  }

  // Derive title & category from the slug
  const segments = slug.split('/').filter(Boolean)
  const isDevelopers = segments[1] === 'developers'
  const section = isDevelopers ? 'developers' : 'user'

  const rawTitle = segments[segments.length - 1] || 'Documentation'
  const title = rawTitle
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const rawCategory = segments[2] || (isDevelopers ? 'Overview' : 'General')
  const category = rawCategory
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const isComingSoon = slug.includes('/storage') || slug.includes('storage')

  return {
    slug,
    section,
    category,
    title,
    description: `Comprehensive technical guide and architectural instructions for ${title} on the AIC Cloud platform.`,
    badge: isComingSoon ? 'Coming Soon' : 'Guide',
    isComingSoon,
    lastUpdated: 'November 2026',
    toc: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'key-concepts', title: 'Key Concepts & Configuration', level: 2 },
      { id: 'implementation-steps', title: 'Implementation Steps', level: 2 },
      { id: 'additional-resources', title: 'Additional Resources', level: 2 },
    ],
    content: (
      <div className="space-y-8 text-left">
        <Callout
          variant={isComingSoon ? 'warning' : 'info'}
          title={isComingSoon ? 'Feature Preview (Coming Soon)' : 'Illustrative API Specification'}
        >
          {isComingSoon
            ? 'AIC Cloud Object Storage is currently presented as a forthcoming service under active engineering development. These specifications represent planned features.'
            : 'These API examples and technical guides are illustrative and are not verified production API contracts. Refer to official AIC Cloud specifications before integrating.'}
        </Callout>

        <section id="overview" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Overview
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
            The {title} service provides robust, scalable primitives for managing your cloud infrastructure. Whether orchestrating high-availability clusters or deploying automated pipelines, this section covers foundational requirements.
          </p>
        </section>

        <section id="key-concepts" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Key Concepts & Configuration
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
            Before configuring {title}, verify that your workspace environment meets the following criteria:
          </p>

          <Table
            headers={['Parameter', 'Type', 'Description']}
            rows={[
              [<InlineCode key="p1">regionId</InlineCode>, 'string', 'Geographical zone identifier (e.g. us-east-dc1).'],
              [<InlineCode key="p2">instanceType</InlineCode>, 'string', 'Hardware profile allocation name.'],
              [<InlineCode key="p3">autoScale</InlineCode>, 'boolean', 'Enables dynamic node allocation under load.'],
            ]}
          />
        </section>

        <section id="implementation-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Implementation Steps
          </h2>

          <Steps
            steps={[
              {
                title: 'Review Requirements',
                description: `Ensure you have appropriate organization permissions to configure ${title}.`,
              },
              {
                title: 'Execute Configuration',
                description: 'Apply settings using the web console or programmatically through our REST API endpoints.',
              },
              {
                title: 'Verify Deployment',
                description: 'Inspect health check telemetry to confirm that your resources have reached an active operational state.',
              },
            ]}
          />
        </section>

        <section id="additional-resources" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Additional Resources
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
            Explore related documentation sections or reach out to our technical community for architectural questions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground)]">
            <li>Review the platform <InlineCode>Changelog</InlineCode> for the latest feature rollouts.</li>
            <li>Consult the <InlineCode>Error Codes</InlineCode> guide for troubleshooting details.</li>
          </ul>
        </section>
      </div>
    ),
  }
}
