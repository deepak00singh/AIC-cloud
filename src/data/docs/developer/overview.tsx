import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Tabs } from '@/components/documentation/Tabs'
import { Table } from '@/components/documentation/Table'
import { IllustrativeApiNotice, RelatedLinks } from '../common'
import { DeveloperApiHeroIllustration } from '@/components/illustrations/DeveloperApiHeroIllustration'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { VisualProductCard } from '@/components/documentation/VisualProductCard'

export const developerOverviewPages: Record<string, DocPageData> = {
  '/docs/developers/introduction': {
    slug: '/docs/developers/introduction',
    section: 'developers',
    category: 'Developer Overview',
    title: 'Developer Platform Introduction',
    description:
      'Architectural overview of the AIC Cloud developer ecosystem, REST API specifications, SDK client libraries, and programmatic infrastructure automation.',
    badge: 'Overview',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'interactive-code-preview', title: 'Interactive API Request Preview', level: 2 },
      { id: 'developer-ecosystem', title: 'Developer Tooling Ecosystem', level: 2 },
      { id: 'api-design-principles', title: 'API Design Principles', level: 2 },
      { id: 'getting-started-steps', title: 'Recommended Integration Path', level: 2 },
    ],
    next: {
      title: 'Developer Quickstart',
      href: '/docs/developers/quickstart',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/datacenter-aisle.jpg"
          imageAlt="AIC Cloud Developer Infrastructure"
          badgeText="Developer Control Plane"
          badgeColor="primary"
          title="AIC Cloud Developer Platform"
          description="Manage servers, GPUs, apps, and storage using clean REST APIs, official SDKs, and real-time webhooks."
          stats={[
            { label: 'API Version', value: 'REST v1' },
            { label: 'Base URL', value: 'api.aiccloud.in' },
            { label: 'Format', value: 'JSON' },
            { label: 'Security', value: 'Bearer Token' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud Developer Platform allows you to launch, monitor, resize, and delete cloud resources with code. You can integrate server creation into your deployment pipelines, automated scripts, or internal dashboards using standard HTTP requests.
        </p>

        <section id="interactive-code-preview" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Sample API Requests
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Explore working request examples in cURL, Node.js, and Python below:
          </p>
          <div className="pt-2">
            <DeveloperApiHeroIllustration />
          </div>
        </section>

        <section id="developer-ecosystem" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Developer Tooling Ecosystem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <VisualProductCard
              to="/docs/developers/api/overview"
              imageSrc="/images/api-architecture-3d.jpg"
              imageAlt="REST API Architecture"
              badge="REST API v1"
              badgeVariant="primary"
              title="Resource-Oriented REST API"
              description="Standard UTF-8 JSON endpoints, idempotency headers, predictable CRUD collections, and RFC 7807 problem details."
              tags={['HTTP/2', 'TLS 1.3', 'Idempotency Keys']}
              ctaText="Read REST API Specs"
            />

            <VisualProductCard
              to="/docs/developers/api/authentication"
              imageSrc="/images/security-shield.jpg"
              imageAlt="API Authentication & Security"
              badge="Bearer Security"
              badgeVariant="purple"
              title="Cryptographic Authentication"
              description="Hardware Security Module token verification, granular permission scopes, and zero-downtime secret rotation."
              tags={['Bearer Token', 'HSM Verification', 'Scoped Roles']}
              ctaText="Explore Auth Flow"
            />

            <VisualProductCard
              to="/docs/developers/webhooks/overview"
              imageSrc="/images/networking-cables.jpg"
              imageAlt="Real-Time Webhook Engine"
              badge="Event Stream"
              badgeVariant="emerald"
              title="Real-Time Webhooks"
              description="Push notifications delivered to your endpoints upon instance creation, failure, or scaling with HMAC-SHA256 signatures."
              tags={['HMAC-SHA256', '72h Retry Backoff', 'Push Delivery']}
              ctaText="Explore Webhooks"
            />

            <VisualProductCard
              to="/docs/developers/integrations/nodejs"
              imageSrc="/images/developer-workspace.jpg"
              imageAlt="Official Client SDKs"
              badge="Official SDKs"
              badgeVariant="primary"
              title="Client SDKs & Libraries"
              description="Strongly-typed packages for TypeScript/Node.js and Python with automated exponential backoff retries and timeouts."
              tags={['npm @aic/sdk', 'pip aic-cloud', 'Go pkg']}
              ctaText="Inspect SDK Libraries"
            />

            <VisualProductCard
              to="/docs/developers/integrations/rest-api"
              imageSrc="/images/app-deployment.jpg"
              imageAlt="CI/CD and HTTP Client Integrations"
              badge="Integrations"
              badgeVariant="primary"
              title="CI/CD & System Integrations"
              description="Integrate automated infrastructure provisioning workflows into GitHub Actions, GitLab CI, and custom microservices."
              tags={['GitHub Actions', 'GitLab CI', 'cURL']}
              ctaText="Explore Integrations"
            />
          </div>
        </section>

        <section id="api-design-principles" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            API Design Principles
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Predictable URLs:</strong> Collections follow pluralized REST conventions (e.g. <InlineCode>/v1/instances</InlineCode>, <InlineCode>/v1/volumes</InlineCode>).</li>
            <li><strong>Standard HTTP Verbs:</strong> <InlineCode>GET</InlineCode> for reads, <InlineCode>POST</InlineCode> for mutations, <InlineCode>PATCH</InlineCode> for updates, <InlineCode>DELETE</InlineCode> for teardowns.</li>
            <li><strong>Idempotency Guarantees:</strong> State-altering <InlineCode>POST</InlineCode> requests accept an <InlineCode>Idempotency-Key</InlineCode> header to protect against accidental duplicate provisioning.</li>
            <li><strong>Uniform Error Envelopes:</strong> Structured error objects complying with RFC 7807 problem details specifications.</li>
          </ul>
        </section>

        <section id="getting-started-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Recommended Integration Path
          </h2>
          <Steps
            steps={[
              {
                title: 'Review the Developer Quickstart',
                content: <p>Execute an authenticated sample request using cURL or Python in under 5 minutes.</p>,
              },
              {
                title: 'Understand Platform Concepts',
                content: <p>Familiarize yourself with pagination cursors, rate limits, and idempotency keys.</p>,
              },
              {
                title: 'Explore the API Reference',
                content: <p>Inspect request schemas and sample JSON payloads for VPS, GPU, and Webhook endpoints.</p>,
              },
            ]}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Developer Quickstart', href: '/docs/developers/quickstart', description: 'Make your first API call.' },
            { title: 'API Concepts', href: '/docs/developers/concepts', description: 'Idempotency and pagination.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/quickstart': {
    slug: '/docs/developers/quickstart',
    section: 'developers',
    category: 'Developer Overview',
    title: 'Developer Quickstart Guide',
    description:
      'Generate an API key, construct an authenticated HTTP request, and query available compute clusters in under 5 minutes.',
    badge: 'Quickstart',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'prerequisites', title: 'Prerequisites', level: 2 },
      { id: 'quickstart-steps', title: 'Step-by-Step Quickstart', level: 2 },
      { id: 'code-examples', title: 'Sample API Requests', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Initial Requests', level: 2 },
    ],
    previous: {
      title: 'Developer Platform Introduction',
      href: '/docs/developers/introduction',
    },
    next: {
      title: 'API Concepts',
      href: '/docs/developers/concepts',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="GET https://api.aiccloud.in/api/v1/vps" />
        </section>

        <section id="prerequisites" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Prerequisites
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>An active AIC Cloud developer account.</li>
            <li>A generated API key with <InlineCode>read</InlineCode> permissions.</li>
            <li>A local terminal with <InlineCode>curl</InlineCode>, Node.js 18+, or Python 3.10+.</li>
          </ul>
        </section>

        <section id="quickstart-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Step-by-Step Quickstart
          </h2>
          <Steps
            steps={[
              {
                title: 'Generate an API Secret Key',
                content: <p>Go to <strong>Console &gt; Developer Settings &gt; API Keys</strong> and create a key labeled <InlineCode>quickstart-test</InlineCode>.</p>,
              },
              {
                title: 'Export Key in Your Terminal',
                content: (
                  <CodeBlock
                    code="export AIC_API_KEY='aic_live_YOUR_API_KEY'"
                    language="bash"
                    filename="Terminal"
                  />
                ),
              },
              {
                title: 'Execute Your First Query',
                content: <p>Run one of the code examples below to query active compute instances in your organization.</p>,
              },
            ]}
          />
        </section>

        <section id="code-examples" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Sample API Requests
          </h2>
          <Tabs
            items={[
              {
                id: 'curl',
                label: 'cURL',
                content: (
                  <CodeBlock
                    code={`curl -X GET "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Content-Type: application/json"`}
                    language="bash"
                    filename="cURL Request"
                  />
                ),
              },
              {
                id: 'nodejs',
                label: 'Node.js',
                content: (
                  <CodeBlock
                    code={`// Official AIC Cloud API request
const apiKey = process.env.AIC_API_KEY;

const response = await fetch('https://api.aiccloud.in/api/v1/vps', {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
console.log(data);`}
                    language="javascript"
                    filename="quickstart.js"
                  />
                ),
              },
              {
                id: 'python',
                label: 'Python',
                content: (
                  <CodeBlock
                    code={`import os
import requests

api_key = os.environ.get("AIC_API_KEY")

response = requests.get(
    "https://api.aiccloud.in/api/v1/vps",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    },
)

print(response.status_code)
print(response.json())`}
                    language="python"
                    filename="quickstart.py"
                  />
                ),
              },
            ]}
          />

          <h4 className="text-[14px] font-semibold text-[var(--color-foreground)] pt-2">
            Illustrative JSON Response
          </h4>
          <CodeBlock
            code={`{
  "object": "list",
  "data": [
    {
      "id": "inst_01j9a8b7c6d5e4f3",
      "name": "production-web-01",
      "region": "us-east-1",
      "plan": "general-medium",
      "status": "running",
      "ip_address": "198.51.100.45",
      "created_at": "2026-11-01T12:00:00Z"
    }
  ],
  "has_more": false,
  "total_count": 1
}`}
            language="json"
            filename="Sample Response"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Initial Requests
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>HTTP 401 Unauthorized:</strong> Ensure your Authorization header includes the exact word <InlineCode>Bearer</InlineCode> followed by a single space and your key.</li>
            <li><strong>HTTP 403 Forbidden:</strong> The key was created without read privileges for compute instances. Re-generate a key with appropriate scopes.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'API Concepts', href: '/docs/developers/concepts', description: 'Idempotency and cursors.' },
            { title: 'Authentication Guide', href: '/docs/developers/api/authentication', description: 'Bearer token details.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/concepts': {
    slug: '/docs/developers/concepts',
    section: 'developers',
    category: 'Developer Overview',
    title: 'Core API Concepts',
    description:
      'Master fundamental platform mechanics including idempotency keys, cursor-based pagination, resource identifiers, and ISO 8601 timestamps.',
    badge: 'Concepts',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'resource-identifiers', title: 'Resource Identifiers (Prefixed IDs)', level: 2 },
      { id: 'idempotency-keys', title: 'Idempotent Mutations', level: 2 },
      { id: 'cursor-pagination', title: 'Cursor-Based Pagination', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Idempotency Conflicts', level: 2 },
    ],
    previous: {
      title: 'Developer Quickstart',
      href: '/docs/developers/quickstart',
    },
    next: {
      title: 'REST API Overview',
      href: '/docs/developers/api/overview',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud REST API enforces consistent conventions across all resource domains. Understanding these core patterns ensures robust integration when orchestrating large-scale automation.
        </p>

        <section id="resource-identifiers" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Resource Identifiers (Prefixed IDs)
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every resource ID is prefixed with its entity type for human readability in logs and debugger traces:
          </p>
          <Table
            columns={[
              { key: 'prefix', header: 'ID Prefix' },
              { key: 'resource', header: 'Resource Type' },
              { key: 'sample', header: 'Sample Identifier' },
            ]}
            data={[
              { prefix: 'inst_', resource: 'Virtual Private Server Instance', sample: 'inst_01j9a8b7c6d5e4f3' },
              { prefix: 'gpu_', resource: 'GPU Accelerator Cluster Node', sample: 'gpu_01j9a8x9y8z7w6v5' },
              { prefix: 'vol_', resource: 'Block Storage Volume', sample: 'vol_01j9b2c3d4e5f6g7' },
              { prefix: 'app_', resource: 'Hosted Web Application', sample: 'app_01j9c4d5e6f7g8h9' },
              { prefix: 'wh_', resource: 'Webhook Subscription Endpoint', sample: 'wh_01j9d6e7f8g9h0i1' },
            ]}
          />
        </section>

        <section id="idempotency-keys" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Idempotent Mutations
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Network glitches can cause client timeouts before confirmation is received. To prevent accidental duplicate provisioning, pass a unique UUID in the <InlineCode>Idempotency-Key</InlineCode> header:
          </p>
          <CodeBlock
            code={`curl -X POST "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Idempotency-Key: e8a9134b-4b19-4822-a982-f568e2193b82" \\
  -H "Content-Type: application/json" \\
  -d '{"plan": "vps-4g", "region": "mumbai-in"}'`}
            language="bash"
            filename="Idempotent Request"
          />
        </section>

        <section id="cursor-pagination" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Cursor-Based Pagination
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            List endpoints return up to 100 items per page and utilize cursor-based pagination parameters:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><InlineCode>limit</InlineCode>: Number of records to return (default 20, max 100).</li>
            <li><InlineCode>starting_after</InlineCode>: Cursor ID of the last item from the previous page.</li>
            <li><InlineCode>ending_before</InlineCode>: Reverse cursor ID to navigate backwards.</li>
          </ul>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Idempotency Conflicts
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>HTTP 409 Conflict:</strong> Reusing the same idempotency key with different request payload bodies is rejected. Generate a fresh UUID for distinct mutations.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'REST API Overview', href: '/docs/developers/api/overview', description: 'Base URLs and headers.' },
            { title: 'Error Handling', href: '/docs/developers/api/error-handling', description: 'RFC 7807 error structures.' },
          ]}
        />
      </div>
    ),
  },
}

