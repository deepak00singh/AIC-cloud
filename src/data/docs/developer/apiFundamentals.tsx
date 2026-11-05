import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
  Callout,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Table } from '@/components/documentation/Table'
import { Tabs } from '@/components/documentation/Tabs'
import { IllustrativeApiNotice, RelatedLinks } from '../common'
import { KeyRound, Zap, Globe } from 'lucide-react'
import { AuthWorkflowDiagram } from '@/components/illustrations/AuthWorkflowDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { LoadBalancerTurntableVisual } from '@/components/hairline/LoadBalancerTurntableVisual'
import { SecurityLockersVisual } from '@/components/hairline/SecurityLockersVisual'
import { CloudMetricsPlotVisual } from '@/components/hairline/CloudMetricsPlotVisual'

export const developerApiFundamentalsPages: Record<string, DocPageData> = {
  '/docs/developers/api/overview': {
    slug: '/docs/developers/api/overview',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'REST API Overview',
    description:
      'Core architecture, communication standards, conventions, and HTTP transport mechanisms powering the AIC Cloud REST API v1.',
    badge: 'Core Spec',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'design-philosophy', title: 'Design Philosophy', level: 2 },
      { id: 'http-transport', title: 'HTTP Transport & Wire Format', level: 2 },
      { id: 'idempotency-concurrency', title: 'Idempotency and Concurrency', level: 2 },
      { id: 'sample-healthcheck', title: 'API Discovery & Healthcheck', level: 2 },
    ],
    prev: {
      title: 'API Concepts',
      href: '/docs/developers/concepts',
    },
    next: {
      title: 'Base URL',
      href: '/docs/developers/api/base-url',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud REST API provides programmatic access to compute instances, block storage, private networks, and container deployment services. Built around RESTful principles, all resources use predictable URLs, standard HTTP response codes, and return JSON-encoded bodies for requests and errors.
        </p>

        <section id="design-philosophy" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Design Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[var(--color-primary)]" />
                  Resource-Oriented
                </CardTitle>
                <CardDescription>
                  Endpoints map directly to physical and virtual cloud assets using canonical plural nouns (<InlineCode>/v1/vps/instances</InlineCode>).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-[var(--color-primary)]" />
                  Stateless Auth
                </CardTitle>
                <CardDescription>
                  Every inbound request is authenticated independently via RFC 6750 cryptographic Bearer tokens.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[var(--color-primary)]" />
                  Predictable Envelope
                </CardTitle>
                <CardDescription>
                  Consistent top-level JSON responses encapsulating status, data payload, execution latency, and metadata.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="http-transport" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            HTTP Transport & Wire Format
          </h2>
          <LoadBalancerTurntableVisual />
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            All API calls must be encrypted over TLS 1.3 (with fallback to TLS 1.2). Unencrypted HTTP traffic to port 80 will fail immediately with connection dropped or return HTTP 301 redirects to HTTPS.
          </p>

          <Table
            headers={['Header', 'Required', 'Description', 'Example']}
            rows={[
              [
                <InlineCode key="auth">Authorization</InlineCode>,
                'Yes',
                'Bearer token carrying your generated API Key',
                'Bearer aic_live_9f8e7d6c5b4a3...',
              ],
              [
                <InlineCode key="accept">Accept</InlineCode>,
                'Recommended',
                'Expected MIME type of the server response',
                'application/json',
              ],
              [
                <InlineCode key="content-type">Content-Type</InlineCode>,
                'Conditional',
                'Required for POST, PUT, and PATCH bodies',
                'application/json; charset=utf-8',
              ],
              [
                <InlineCode key="idempotency">Idempotency-Key</InlineCode>,
                'Optional',
                'Unique UUID preventing duplicate mutation actions on network retry',
                '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
              ],
            ]}
          />
        </section>

        <section id="idempotency-concurrency" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Idempotency and Concurrency
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            To prevent duplicate operations like spinning up two identical GPU instances during transient connection timeouts, attach an <InlineCode>Idempotency-Key</InlineCode> header with a unique v4 UUID.
          </p>
          <Callout variant="tip" title="Idempotency Retention Window">
            AIC Cloud caches idempotency keys for 24 hours. Repeating a POST request with the identical key returns the cached response status and payload without charging or creating duplicate instances.
          </Callout>
        </section>

        <section id="sample-healthcheck" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            API Discovery & Healthcheck
          </h2>
          <CodeBlock
            language="bash"
            filename="healthcheck.sh"
            code={`# Perform illustrative ping against the AIC Cloud API cluster
curl -X GET "https://api.aiccloud.in/health" \\
  -H "Accept: application/json"`}
          />

          <CodeBlock
            language="json"
            filename="response.json"
            code={`{
  "status": "healthy",
  "version": "1.4.0",
  "cluster_region": "us-east-dc1",
  "timestamp": "2026-11-05T20:00:00Z"
}`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Base URL Configuration', href: '/docs/developers/api/base-url', description: 'Production and sandbox host endpoints' },
            { title: 'Authentication & Bearer Tokens', href: '/docs/developers/api/authentication', description: 'Generating and securing your API keys' },
            { title: 'Rate Limiting Rules', href: '/docs/developers/api/rate-limiting', description: 'Leaky bucket thresholds and burst capacities' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/base-url': {
    slug: '/docs/developers/api/base-url',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'Base URL Configuration',
    description:
      'Host endpoints, environment domains, regional edge routing, and network topology for AIC Cloud API calls.',
    badge: 'Endpoints',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'environment-endpoints', title: 'Environment Endpoints', level: 2 },
      { id: 'regional-routing', title: 'Regional Edge Routing', level: 2 },
      { id: 'dns-failover', title: 'DNS Architecture & Failover', level: 2 },
    ],
    prev: {
      title: 'REST API Overview',
      href: '/docs/developers/api/overview',
    },
    next: {
      title: 'Authentication',
      href: '/docs/developers/api/authentication',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          All AIC Cloud API requests are routed over globally distributed Anycast edge proxies. Choose between the production gateway and test mode keys depending on whether you are running production deployments or automated integration tests.
        </p>

        <section id="environment-endpoints" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Environment Endpoints
          </h2>
          <Table
            headers={['Environment', 'Production Base URL', 'Intended Purpose', 'Rate Limits']}
            rows={[
              [
                <span key="prod" className="font-semibold text-emerald-600 dark:text-emerald-400">Production</span>,
                <InlineCode key="prod-url">https://api.aiccloud.in</InlineCode>,
                'Real compute, GPU, app, and storage provisioning',
                '1,000 to 10,000 req / hr',
              ],
              [
                <span key="sbx" className="font-semibold text-indigo-600 dark:text-indigo-400">OpenAPI Spec</span>,
                <InlineCode key="sbx-url">https://api.aiccloud.in/openapi.json</InlineCode>,
                'Official OpenAPI 3.1 schema for SDK and contract generation',
                'Unrestricted / Cached',
              ],
            ]}
          />
        </section>

        <section id="regional-routing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Regional Edge Routing
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            While requests default to Anycast routing (directing you to the closest geographical point of presence), regional affinity headers can be specified if you require data residency guarantee or low latency to a specific datacenter (e.g., Mumbai, Delhi NCR, Gravelines France):
          </p>

          <CodeBlock
            language="bash"
            filename="regional-request.sh"
            code={`curl -X GET "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "AIC-Target-Region: mumbai-in" \\
  -H "Accept: application/json"`}
          />
        </section>

        <section id="dns-failover" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            DNS Architecture & Failover
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            AIC Cloud uses dynamic multi-provider Anycast DNS with automatic sub-second healthchecks. If an edge point of presence experiences degradation, traffic automatically fails over to the next nearest POP without requiring SDK client reconfiguration.
          </p>
          <Callout variant="warning" title="DNS Caching Best Practice">
            Avoid hardcoding IP addresses or overriding TTL settings longer than 60 seconds in internal DNS caching daemons (e.g., Unbound or dnsmasq) to ensure automated failover functions seamlessly.
          </Callout>
        </section>

        <RelatedLinks
          links={[
            { title: 'Authentication', href: '/docs/developers/api/authentication', description: 'Generating and securing API keys' },
            { title: 'HTTP Status Codes', href: '/docs/developers/api/status-codes', description: 'Standard RFC return codes' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/authentication': {
    slug: '/docs/developers/api/authentication',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'API Authentication',
    description:
      'Cryptographic token security, Authorization header conventions, token lifecycle, and secure credential handling.',
    badge: 'Security',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'bearer-header', title: 'The Authorization Header', level: 2 },
      { id: 'auth-workflow', title: 'Authentication Handshake', level: 2 },
      { id: 'common-errors', title: 'Authentication Failures', level: 2 },
      { id: 'security-hygiene', title: 'Credential Security Hygiene', level: 2 },
    ],
    prev: {
      title: 'Base URL',
      href: '/docs/developers/api/base-url',
    },
    next: {
      title: 'API Keys',
      href: '/docs/developers/api/api-keys',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud API uses Bearer token authentication over TLS. To authenticate, include your secret API key in the standard HTTP <InlineCode>Authorization</InlineCode> request header.
        </p>

        <section id="bearer-header" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            The Authorization Header
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Every programmatic request must present the Bearer scheme followed by a single space and your token string:
          </p>

          <CodeBlock
            language="http"
            filename="HTTP Request Header"
            code={`# Method 1: Standard Bearer Token
Authorization: Bearer aic_live_your_secret_key

# Method 2: Alternate Custom Header
X-API-Key: aic_live_your_secret_key`}
          />

          <CodeBlock
            language="bash"
            filename="cURL Example"
            code={`curl -X GET "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Accept: application/json"`}
          />
        </section>

        <section id="auth-workflow" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Authentication Handshake
          </h2>
          <SecurityLockersVisual />
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground-secondary)]">
            The cryptographic handshake validates API tokens at the network edge before traffic reaches tenant compute infrastructure:
          </p>

          <AuthWorkflowDiagram />

          <Steps
            steps={[
              {
                title: 'Token Generation',
                description: 'Generate an API key with granular permissions in the AIC Cloud Console under API Management.',
              },
              {
                title: 'Secret Storage',
                description: 'Inject the token into your application environment variables (e.g. AIC_API_KEY). Never commit it to git.',
              },
              {
                title: 'Edge Decryption & Verification',
                description: 'The edge proxy decodes the token prefix, verifies the cryptographic signature against the HSM, and enforces role scopes.',
              },
              {
                title: 'Request Execution',
                description: 'Upon verification, the request is forwarded to backend microservices with injected tenant context.',
              },
            ]}
          />
        </section>

        <section id="common-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Authentication Failures
          </h2>
          <Table
            headers={['HTTP Status', 'Error Code', 'Reason', 'Resolution']}
            rows={[
              [
                <InlineCode key="401">401 Unauthorized</InlineCode>,
                'AUTH_HEADER_MISSING',
                'No Authorization header was provided in the HTTP request',
                'Add Authorization: Bearer YOUR_API_KEY header to your client call',
              ],
              [
                <InlineCode key="401-inv">401 Unauthorized</InlineCode>,
                'AUTH_TOKEN_INVALID',
                'The token has been revoked, rotated, or expired',
                'Generate a fresh API key in the web console and update your secret manager',
              ],
              [
                <InlineCode key="403">403 Forbidden</InlineCode>,
                'INSUFFICIENT_SCOPE',
                'Token is valid, but lacks the necessary permission scope for this action',
                'Check key permissions and grant read/write permissions for the requested subsystem',
              ],
            ]}
          />
        </section>

        <section id="security-hygiene" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Credential Security Hygiene
          </h2>
          <Callout variant="error" title="Never Leak Credentials in Public Repositories">
            AIC Cloud continuously scans public GitHub repositories for leaked credentials. If a key matching our pattern is detected in a public repository, the key is automatically invalidated within seconds and an alert email is sent to your account administrator.
          </Callout>
        </section>

        <RelatedLinks
          links={[
            { title: 'API Keys Management', href: '/docs/developers/api/api-keys', description: 'Lifecycle, rotation, and scoped tokens' },
            { title: 'Error Handling', href: '/docs/developers/api/error-handling', description: 'RFC 7807 structured error objects' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/api-keys': {
    slug: '/docs/developers/api/api-keys',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'API Keys & Scopes',
    description:
      'Key formats, least-privilege scoping, automated rotation policies, IP whitelisting, and secret revocation.',
    badge: 'Credentials',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'token-formats', title: 'Token Naming & Formats', level: 2 },
      { id: 'granular-scopes', title: 'Granular Access Scopes', level: 2 },
      { id: 'rotation-lifecycle', title: 'Zero-Downtime Rotation Lifecycle', level: 2 },
      { id: 'ip-restrictions', title: 'CIDR & IP Restrictions', level: 2 },
    ],
    prev: {
      title: 'Authentication',
      href: '/docs/developers/api/authentication',
    },
    next: {
      title: 'Request Format',
      href: '/docs/developers/api/request-format',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          API Keys are high-entropy cryptographic strings that uniquely identify your workspace and authenticate requests. AIC Cloud supports granular scope permissions so keys can be restricted to specific infrastructure resources.
        </p>

        <section id="token-formats" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Token Naming & Formats
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            All API keys employ clear prefix identifiers indicating environment and scope for automated secret scanner discovery:
          </p>
          <Table
            headers={['Prefix', 'Environment', 'Example Token Format']}
            rows={[
              [
                <InlineCode key="live">aic_live_</InlineCode>,
                'Production Cluster',
                'aic_live_9f8e7d6c5b4a3210fedcba9876543210',
              ],
              [
                <InlineCode key="test">aic_test_</InlineCode>,
                'Sandbox / Mocking',
                'aic_test_0123456789abcdef0123456789abcdef',
              ],
              [
                <InlineCode key="ro">aic_ro_</InlineCode>,
                'Read-Only Telemetry',
                'aic_ro_456789abcdef0123456789abcdef0123',
              ],
            ]}
          />
        </section>

        <section id="granular-scopes" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Granular Access Scopes
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Follow the principle of least privilege. Do not use global admin tokens for automated microservices or monitoring daemons:
          </p>
          <Table
            headers={['Scope String', 'Permission Granted', 'Recommended Consumer']}
            rows={[
              [
                <InlineCode key="vps:read">vps:read</InlineCode>,
                'Inspect VPS instances, IP addresses, specs, and status metrics',
                'Prometheus exporters, observability dashboards',
              ],
              [
                <InlineCode key="vps:write">vps:write</InlineCode>,
                'Provision, reboot, scale, rebuild, and delete VPS instances',
                'Terraform / OpenTofu deployment workers, CI/CD pipelines',
              ],
              [
                <InlineCode key="gpu:write">gpu:write</InlineCode>,
                'Provision, start, stop, and destroy high-performance GPU nodes',
                'Slurm orchestrators, Ray clusters, training jobs',
              ],
              [
                <InlineCode key="apps:deploy">apps:deploy</InlineCode>,
                'Trigger builds, rollback revisions, and modify app environment vars',
                'GitHub Actions runners, GitLab CI runners',
              ],
            ]}
          />
        </section>

        <section id="rotation-lifecycle" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Zero-Downtime Rotation Lifecycle
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            When rotating credentials in production systems, use overlapping key lifetimes to avoid service interruptions:
          </p>
          <Steps
            steps={[
              {
                title: 'Generate Secondary Key',
                description: 'Issue a new key with identical scopes in the Console. Both keys will function concurrently.',
              },
              {
                title: 'Deploy to Secret Stores',
                description: 'Update HashiCorp Vault, AWS Secrets Manager, or Kubernetes Secrets with the new key.',
              },
              {
                title: 'Verify Traffic Shift',
                description: 'Inspect Console API audit logs to verify inbound traffic has transitioned to the new key ID.',
              },
              {
                title: 'Revoke Old Key',
                description: 'Delete the older key from the console. Revocation propagates globally within 500ms.',
              },
            ]}
          />
        </section>

        <section id="ip-restrictions" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            CIDR & IP Restrictions
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            You can optionally bind an API key to a static IP address or CIDR range (e.g. <InlineCode>198.51.100.0/24</InlineCode>). Inbound requests presenting this token from unauthorized IP origins will be rejected immediately with HTTP 403 Forbidden.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Authentication Spec', href: '/docs/developers/api/authentication', description: 'Token validation rules' },
            { title: 'Request Format', href: '/docs/developers/api/request-format', description: 'Structuring payloads and query parameters' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/request-format': {
    slug: '/docs/developers/api/request-format',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'Request Format',
    description:
      'Payload conventions, JSON serialization, query parameter formatting, pagination parameters, and content types.',
    badge: 'Protocol',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'content-types', title: 'Content Types & Encoding', level: 2 },
      { id: 'query-parameters', title: 'Query Parameter Conventions', level: 2 },
      { id: 'pagination-syntax', title: 'Pagination & Sorting', level: 2 },
      { id: 'sample-payload', title: 'Sample POST Mutation Request', level: 2 },
    ],
    prev: {
      title: 'API Keys',
      href: '/docs/developers/api/api-keys',
    },
    next: {
      title: 'Response Format',
      href: '/docs/developers/api/response-format',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Requests to the AIC Cloud REST API follow uniform conventions across all services. Payloads must be valid JSON formatted with snake_case keys and UTF-8 encoding.
        </p>

        <section id="content-types" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Content Types & Encoding
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            POST, PUT, and PATCH bodies must specify the header <InlineCode>Content-Type: application/json; charset=utf-8</InlineCode>. Sending form-urlencoded or non-JSON payloads will result in HTTP 415 Unsupported Media Type.
          </p>
        </section>

        <section id="query-parameters" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Query Parameter Conventions
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Filter and sort requests using query parameters. Arrays should be passed as comma-separated values:
          </p>
          <CodeBlock
            language="bash"
            filename="Query Parameters Example"
            code={`GET /v1/vps/instances?region=us-east-dc1&status=running,provisioning&limit=25`}
          />
        </section>

        <section id="pagination-syntax" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Pagination & Sorting
          </h2>
          <Table
            headers={['Parameter', 'Type', 'Default', 'Description']}
            rows={[
              [<InlineCode key="limit">limit</InlineCode>, 'integer', '20', 'Number of records to return (1-100)'],
              [<InlineCode key="starting_after">starting_after</InlineCode>, 'string (UUID)', 'null', 'Cursor token for keyset pagination'],
              [<InlineCode key="ending_before">ending_before</InlineCode>, 'string (UUID)', 'null', 'Cursor token for reverse pagination'],
              [<InlineCode key="sort_by">sort_by</InlineCode>, 'string', 'created_at:desc', 'Attribute name and direction (asc/desc)'],
            ]}
          />
        </section>

        <section id="sample-payload" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Sample POST Mutation Request
          </h2>
          <CodeBlock
            language="json"
            filename="payload.json"
            code={`{
  "name": "worker-us-east-01",
  "plan": "vps.standard.4c8g",
  "region": "us-east-dc1",
  "image": "ubuntu-24.04-lts",
  "ssh_key_ids": [
    "ssh_key_9f8e7d6c5b4a"
  ],
  "tags": {
    "environment": "production",
    "tier": "compute-worker"
  },
  "enable_backups": true
}`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Response Format', href: '/docs/developers/api/response-format', description: 'Payload structure and pagination envelope' },
            { title: 'Status Codes', href: '/docs/developers/api/status-codes', description: 'HTTP return codes' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/response-format': {
    slug: '/docs/developers/api/response-format',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'Response Format',
    description:
      'Standardized top-level JSON envelopes, pagination metadata, timestamps, and data types.',
    badge: 'Schema',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'envelope-schema', title: 'Standard JSON Envelope', level: 2 },
      { id: 'list-pagination', title: 'Paginated List Response', level: 2 },
      { id: 'time-formats', title: 'Date & Time Standards', level: 2 },
    ],
    prev: {
      title: 'Request Format',
      href: '/docs/developers/api/request-format',
    },
    next: {
      title: 'HTTP Status Codes',
      href: '/docs/developers/api/status-codes',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          All responses from the AIC Cloud API return structured JSON. Successful responses contain a root <InlineCode>data</InlineCode> object or array, while lists include a <InlineCode>pagination</InlineCode> cursor block.
        </p>

        <section id="envelope-schema" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Standard Single-Resource Envelope
          </h2>
          <CodeBlock
            language="json"
            filename="single-resource-response.json"
            code={`{
  "object": "vps_instance",
  "data": {
    "id": "vps_01hq7b3k8j9m1n2p3q4r5s6t7u",
    "name": "worker-us-east-01",
    "status": "running",
    "plan": "vps.standard.4c8g",
    "region": "us-east-dc1",
    "ip_address": "198.51.100.42",
    "vcpus": 4,
    "memory_mb": 8192,
    "disk_gb": 160,
    "created_at": "2026-11-05T18:30:00Z"
  },
  "request_id": "req_01hq7b5v6x7y8z9a0b1c2d3e4f",
  "latency_ms": 14
}`}
          />
        </section>

        <section id="list-pagination" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Paginated List Response
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            When querying lists, <InlineCode>data</InlineCode> is an array and a <InlineCode>pagination</InlineCode> object provides cursor tokens:
          </p>
          <CodeBlock
            language="json"
            filename="list-response.json"
            code={`{
  "object": "list",
  "data": [
    {
      "id": "vps_01hq7b3k8j9m1n2p3q4r5s6t7u",
      "name": "worker-us-east-01",
      "status": "running"
    },
    {
      "id": "vps_01hq7b9z1a2b3c4d5e6f7g8h9j",
      "name": "worker-us-east-02",
      "status": "running"
    }
  ],
  "pagination": {
    "has_more": true,
    "total_count": 48,
    "starting_cursor": "vps_01hq7b3k8j9m1n2p3q4r5s6t7u",
    "ending_cursor": "vps_01hq7b9z1a2b3c4d5e6f7g8h9j"
  },
  "request_id": "req_01hq7b8k9l0m1n2o3p4q5r6s7t"
}`}
          />
        </section>

        <section id="time-formats" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Date & Time Standards
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            All timestamps in the API are represented in ISO 8601 extended format in Coordinated Universal Time (UTC) with explicit <InlineCode>Z</InlineCode> zone designators: <InlineCode>YYYY-MM-DDTHH:MM:SSZ</InlineCode>.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'HTTP Status Codes', href: '/docs/developers/api/status-codes', description: 'HTTP response codes' },
            { title: 'Error Handling', href: '/docs/developers/api/error-handling', description: 'Error envelope schema' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/status-codes': {
    slug: '/docs/developers/api/status-codes',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'HTTP Status Codes',
    description:
      'Standard HTTP response status codes returned by the AIC Cloud API and their operational meanings.',
    badge: 'HTTP Codes',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'success-codes', title: '2xx Success Codes', level: 2 },
      { id: 'client-errors', title: '4xx Client Error Codes', level: 2 },
      { id: 'server-errors', title: '5xx Server Error Codes', level: 2 },
    ],
    prev: {
      title: 'Response Format',
      href: '/docs/developers/api/response-format',
    },
    next: {
      title: 'Error Handling',
      href: '/docs/developers/api/error-handling',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud API relies on conventional HTTP status codes to communicate request outcomes. Codes in the 2xx range indicate success, 4xx indicate client-side input or authorization issues, and 5xx represent internal server anomalies.
        </p>

        <section id="success-codes" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            2xx Success Codes
          </h2>
          <Table
            headers={['Code', 'Status', 'Usage']}
            rows={[
              [<InlineCode key="200">200 OK</InlineCode>, 'Success', 'Standard response for successful GET, PUT, or PATCH requests.'],
              [<InlineCode key="201">201 Created</InlineCode>, 'Created', 'Resource successfully created via POST. Includes the newly generated object.'],
              [<InlineCode key="202">202 Accepted</InlineCode>, 'Accepted', 'Asynchronous job queued (e.g. server bare metal provisioning or disk snapshot).'],
              [<InlineCode key="204">204 No Content</InlineCode>, 'No Content', 'Resource successfully deleted via DELETE. No body returned.'],
            ]}
          />
        </section>

        <section id="client-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            4xx Client Error Codes
          </h2>
          <Table
            headers={['Code', 'Status', 'Usage']}
            rows={[
              [<InlineCode key="400">400 Bad Request</InlineCode>, 'Invalid Input', 'Malformed JSON, missing required fields, or validation constraint failure.'],
              [<InlineCode key="401">401 Unauthorized</InlineCode>, 'Unauthenticated', 'Invalid, expired, or missing Bearer token.'],
              [<InlineCode key="403">403 Forbidden</InlineCode>, 'Access Denied', 'Token authenticated but lacks required scope or IP whitelisting violated.'],
              [<InlineCode key="404">404 Not Found</InlineCode>, 'Resource Missing', 'Requested resource ID does not exist in your tenant workspace.'],
              [<InlineCode key="409">409 Conflict</InlineCode>, 'State Conflict', 'Resource in transitioning state (e.g., trying to reboot an instance currently rebuilding).'],
              [<InlineCode key="429">429 Too Many Requests</InlineCode>, 'Rate Limited', 'Exceeded per-minute rate limit threshold. Check Retry-After header.'],
            ]}
          />
        </section>

        <section id="server-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            5xx Server Error Codes
          </h2>
          <Table
            headers={['Code', 'Status', 'Usage']}
            rows={[
              [<InlineCode key="500">500 Internal Server Error</InlineCode>, 'Fatal Error', 'Unexpected failure on the API gateway or backend microservice. Retry with backoff.'],
              [<InlineCode key="502">502 Bad Gateway</InlineCode>, 'Upstream Error', 'Edge proxy received an invalid response from datacenter hypervisor daemon.'],
              [<InlineCode key="503">503 Service Unavailable</InlineCode>, 'Maintenance', 'API subsystem undergoing scheduled maintenance. Check status page.'],
            ]}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Error Handling', href: '/docs/developers/api/error-handling', description: 'RFC 7807 problem details schema' },
            { title: 'Rate Limiting', href: '/docs/developers/api/rate-limiting', description: 'Quota handling and backoff algorithms' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/error-handling': {
    slug: '/docs/developers/api/error-handling',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'Error Handling & Problem Details',
    description:
      'RFC 7807 compliant problem details, machine-readable error codes, validation error arrays, and debugging request IDs.',
    badge: 'Diagnostics',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'rfc7807-structure', title: 'RFC 7807 Error Envelope', level: 2 },
      { id: 'validation-errors', title: 'Field Validation Errors', level: 2 },
      { id: 'request-id-tracing', title: 'Request ID Tracing', level: 2 },
    ],
    prev: {
      title: 'HTTP Status Codes',
      href: '/docs/developers/api/status-codes',
    },
    next: {
      title: 'Rate Limiting',
      href: '/docs/developers/api/rate-limiting',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          When an error occurs, the AIC Cloud API returns a consistent JSON payload adhering to the RFC 7807 "Problem Details for HTTP APIs" specification. This allows automated clients to parse discrete machine error codes without relying on fragile string matching.
        </p>

        <section id="rfc7807-structure" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            RFC 7807 Error Envelope
          </h2>
          <CodeBlock
            language="json"
            filename="error-response.json"
            code={`{
  "type": "https://aiccloud.in/docs/errors/RESOURCE_CONFLICT",
  "title": "Resource State Conflict",
  "status": 409,
  "code": "INSTANCE_NOT_STOPPED",
  "detail": "Instance vps_01hq7b3k cannot be resized while running. Please stop the instance before changing plan.",
  "instance": "/v1/vps/instances/vps_01hq7b3k/resize",
  "request_id": "req_01hq7c89abc1234567890",
  "timestamp": "2026-11-05T19:42:10Z"
}`}
          />
        </section>

        <section id="validation-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Field Validation Errors
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            When a 400 Bad Request is returned due to schema errors, an <InlineCode>invalid_params</InlineCode> array enumerates every failing parameter:
          </p>
          <CodeBlock
            language="json"
            filename="validation-error.json"
            code={`{
  "type": "https://aiccloud.in/docs/errors/VALIDATION_FAILED",
  "title": "Invalid Parameters",
  "status": 400,
  "code": "VALIDATION_FAILED",
  "detail": "One or more fields failed schema verification.",
  "invalid_params": [
    {
      "name": "plan",
      "reason": "Plan 'vps.ultra.99c' does not exist in region 'us-east-dc1'."
    },
    {
      "name": "ssh_key_ids[0]",
      "reason": "SSH key ID was not found in your account."
    }
  ],
  "request_id": "req_01hq7c98fed9876543210"
}`}
          />
        </section>

        <section id="request-id-tracing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Request ID Tracing
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Every API response contains an <InlineCode>x-request-id</InlineCode> HTTP header and matching <InlineCode>request_id</InlineCode> JSON field. When contacting AIC Cloud Support regarding failed operations, always quote this ID.
          </p>
          <Callout variant="tip" title="Support Diagnostic Fast Track">
            Our engineers can instantly correlate your request ID with distributed OpenTelemetry traces across hypervisor daemons and database replicas.
          </Callout>
        </section>

        <RelatedLinks
          links={[
            { title: 'Rate Limiting Rules', href: '/docs/developers/api/rate-limiting', description: '429 error mitigation' },
            { title: 'Developer Best Practices', href: '/docs/developers/resources/best-practices', description: 'Idempotency and backoff' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api/rate-limiting': {
    slug: '/docs/developers/api/rate-limiting',
    section: 'developers',
    category: 'API Fundamentals',
    title: 'Rate Limiting & Throttling',
    description:
      'Token bucket algorithm, quota tiers, response rate-limit headers, and exponential backoff retry patterns.',
    badge: 'Traffic Rules',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'quota-tiers', title: 'Account Quota Tiers', level: 2 },
      { id: 'rate-limit-headers', title: 'Rate Limit Response Headers', level: 2 },
      { id: 'handling-429', title: 'Handling 429 & Exponential Backoff', level: 2 },
      { id: 'retry-code', title: 'Exponential Backoff Code Example', level: 2 },
    ],
    prev: {
      title: 'Error Handling',
      href: '/docs/developers/api/error-handling',
    },
    next: {
      title: 'VPS API Overview',
      href: '/docs/developers/api-reference/vps',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/api-architecture-3d.jpg"
          imageAlt="AIC Cloud REST API Architecture"
          badgeText="REST API v1 Specification"
          badgeColor="primary"
          title="REST API Architecture & Transport"
          description="Resource-oriented HTTP endpoints, predictable collections, RFC 7807 error envelopes, and automated idempotency protections."
          stats={[
            { label: 'Payload Format', value: 'application/json' },
            { label: 'Transport', value: 'TLS 1.3 / HTTP/2' },
            { label: 'Rate Limiting', value: 'Token Bucket Policy' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          To maintain high availability and protect shared infrastructure, AIC Cloud enforces rate limits on inbound API requests using a token bucket algorithm. Rate limits are evaluated per workspace across all active API keys.
        </p>

        <section id="quota-tiers" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Account Quota Tiers
          </h2>
          <CloudMetricsPlotVisual />
          <Table
            headers={['Tier', 'Read Limit (GET)', 'Write Limit (POST/PUT/DEL)', 'Burst Allowance']}
            rows={[
              ['Standard Tier', '600 req / min', '120 req / min', '30 req / sec'],
              ['Professional Tier', '1,800 req / min', '360 req / min', '60 req / sec'],
              ['Enterprise Tier', '6,000 req / min', '1,200 req / min', '150 req / sec'],
            ]}
          />
        </section>

        <section id="rate-limit-headers" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Rate Limit Response Headers
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Every API response includes real-time telemetry indicating your remaining quota:
          </p>
          <Table
            headers={['Header', 'Example', 'Description']}
            rows={[
              [<InlineCode key="limit">X-RateLimit-Limit</InlineCode>, '1200', 'Maximum allowed requests in the current 60-second window'],
              [<InlineCode key="rem">X-RateLimit-Remaining</InlineCode>, '1184', 'Number of requests remaining before throttling triggers'],
              [<InlineCode key="reset">X-RateLimit-Reset</InlineCode>, '1762381260', 'Unix epoch timestamp when the current quota bucket resets'],
              [<InlineCode key="retry">Retry-After</InlineCode>, '12', 'Only sent on HTTP 429. Number of seconds to wait before retrying'],
            ]}
          />
        </section>

        <section id="handling-429" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Handling 429 & Exponential Backoff
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            When rate limits are exceeded, the API responds with HTTP 429 Too Many Requests. Automated scripts must inspect the <InlineCode>Retry-After</InlineCode> header or apply exponential backoff with full jitter to avoid stampeding herd locks.
          </p>
        </section>

        <section id="retry-code" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Exponential Backoff Code Example
          </h2>
          <Tabs
            items={[
              {
                id: 'typescript',
                label: 'TypeScript',
                content: (
                  <CodeBlock
                    language="typescript"
                    filename="retryClient.ts"
                    code={`async function fetchWithBackoff(url: string, options: RequestInit, retries = 5): Promise<Response> {
  let attempt = 0;
  while (attempt < retries) {
    const res = await fetch(url, options);
    if (res.status !== 429) return res;

    const retryAfter = res.headers.get('Retry-After');
    const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.pow(2, attempt) * 1000 + Math.random() * 500;
    
    console.warn(\`Rate limited. Retrying after \${delay}ms (attempt \${attempt + 1}/\${retries})\`);
    await new Promise((r) => setTimeout(r, delay));
    attempt++;
  }
  throw new Error('Exceeded maximum rate limit retries.');
}`}
                  />
                ),
              },
              {
                id: 'python',
                label: 'Python',
                content: (
                  <CodeBlock
                    language="python"
                    filename="retry_client.py"
                    code={`import time
import random
import requests

def request_with_backoff(method, url, max_retries=5, **kwargs):
    for attempt in range(max_retries):
        res = requests.request(method, url, **kwargs)
        if res.status_code != 429:
            return res
        
        retry_after = res.headers.get("Retry-After")
        if retry_after:
            delay = float(retry_after)
        else:
            delay = (2 ** attempt) + random.uniform(0.1, 0.5)
            
        print(f"Rate limited (429). Retrying in {delay:.2f}s...")
        time.sleep(delay)
        
    raise RuntimeError("Exceeded maximum API retries due to rate limiting.")`}
                  />
                ),
              },
            ]}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'VPS API Reference', href: '/docs/developers/api-reference/vps', description: 'Explore VPS endpoints' },
            { title: 'Best Practices', href: '/docs/developers/resources/best-practices', description: 'Production architectural guidance' },
          ]}
        />
      </div>
    ),
  },
}
