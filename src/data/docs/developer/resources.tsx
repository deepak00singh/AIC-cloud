import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
  Callout,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { IllustrativeApiNotice, RelatedLinks } from '../common'
import { CheckCircle2, AlertTriangle } from 'lucide-react'
import { DatacenterTopologyVisual } from '@/components/hairline/DatacenterTopologyVisual'
import { InspectionLoupeVisual } from '@/components/hairline/InspectionLoupeVisual'

export const developerResourcesPages: Record<string, DocPageData> = {
  '/docs/developers/resources/glossary': {
    slug: '/docs/developers/resources/glossary',
    section: 'developers',
    category: 'Resources',
    title: 'Developer Platform Glossary',
    description:
      'Definitions of cloud infrastructure, virtualization, networking, and developer platform terminology used across AIC Cloud.',
    badge: 'Reference',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'compute-virtualization', title: 'Compute & Virtualization', level: 2 },
      { id: 'networking-routing', title: 'Networking & Routing', level: 2 },
      { id: 'security-api-standards', title: 'Security & API Standards', level: 2 },
    ],
    prev: {
      title: 'Retry Handling',
      href: '/docs/developers/webhooks/retry-handling',
    },
    next: {
      title: 'Troubleshooting',
      href: '/docs/developers/resources/troubleshooting',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          This glossary defines standard architectural terms and platform conventions used across the AIC Cloud REST API, documentation, SDKs, and developer tooling.
        </p>

        <section id="compute-virtualization" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Compute & Virtualization
          </h2>
          <div className="space-y-3">
            {[
              {
                term: 'KVM (Kernel-based Virtual Machine)',
                def: 'A full virtualization module for the Linux kernel that turns the host kernel into a hypervisor. AIC Cloud VPS instances run atop enterprise KVM with dedicated hardware virtualization extensions.',
              },
              {
                term: 'NVMe (Non-Volatile Memory Express)',
                def: 'A high-performance storage protocol operating over direct PCIe Gen 5 lanes, delivering sustained 7,000+ MB/s read throughput and microsecond latency for cloud storage volumes.',
              },
              {
                term: 'NVLink & NVSwitch',
                def: 'NVIDIA high-speed multi-GPU interconnect delivering 900 GB/s bidirectional interconnect bandwidth between H100/A100 accelerators, bypassing host CPU PCIe bottlenecks during distributed tensor parallelism.',
              },
              {
                term: 'Bare Metal',
                def: 'Single-tenant physical servers without hypervisor abstraction layers, providing 100% direct access to hardware CPU cores, memory controllers, and network interface cards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <span className="text-[14px] font-bold text-[var(--color-foreground)] block mb-1">{item.term}</span>
                <span className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">{item.def}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="networking-routing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Networking & Routing
          </h2>
          <DatacenterTopologyVisual />
          <div className="space-y-3">
            {[
              {
                term: 'BGP Anycast',
                def: 'A network routing technique where identical IP addresses are announced across multiple global datacenters. Inbound user requests are automatically routed to the topologically closest point of presence.',
              },
              {
                term: 'CIDR (Classless Inter-Domain Routing)',
                def: 'A method for allocating IP addresses and IP routing. Expressed as an IP prefix followed by a slash and prefix length (e.g. 10.0.0.0/16 represents 65,536 private IP addresses).',
              },
              {
                term: 'VPC (Virtual Private Cloud)',
                def: 'A logically isolated software-defined network partition within an AIC Cloud region where compute instances communicate securely over encrypted VXLAN tunnels.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <span className="text-[14px] font-bold text-[var(--color-foreground)] block mb-1">{item.term}</span>
                <span className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">{item.def}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="security-api-standards" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Security & API Standards
          </h2>
          <div className="space-y-3">
            {[
              {
                term: 'HMAC-SHA256',
                def: 'Keyed-Hash Message Authentication Code using SHA-256. Employed by AIC Cloud Webhooks to verify payload integrity and authenticity using your secret key.',
              },
              {
                term: 'RFC 7807 (Problem Details)',
                def: 'A standardized JSON format for carrying machine-readable error details in HTTP responses, providing consistent fields like type, title, status, and detail.',
              },
              {
                term: 'Idempotency',
                def: 'A property of certain API operations whereby an operation can be applied multiple times without altering the result beyond the initial application.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <span className="text-[14px] font-bold text-[var(--color-foreground)] block mb-1">{item.term}</span>
                <span className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">{item.def}</span>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          links={[
            { title: 'Developer Troubleshooting', href: '/docs/developers/resources/troubleshooting', description: 'Diagnosing API and network anomalies' },
            { title: 'Developer FAQ', href: '/docs/developers/resources/faq', description: 'Common technical inquiries' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/resources/troubleshooting': {
    slug: '/docs/developers/resources/troubleshooting',
    section: 'developers',
    category: 'Resources',
    title: 'Developer Troubleshooting & Diagnostics',
    description:
      'Diagnostic checklists, root cause analysis, error codes, and troubleshooting workflows for API, webhook, and network integrations.',
    badge: 'Diagnostics',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'auth-diagnostics', title: 'Authentication & Scope Failures', level: 2 },
      { id: 'webhook-issues', title: 'Webhook Signature Failures (Raw Body Pitfall)', level: 2 },
      { id: 'rate-limit-mitigation', title: '429 Rate Limit Spikes', level: 2 },
      { id: 'ssh-injection-failures', title: 'SSH Cloud-Init Injection Failures', level: 2 },
    ],
    prev: {
      title: 'Glossary',
      href: '/docs/developers/resources/glossary',
    },
    next: {
      title: 'FAQ',
      href: '/docs/developers/resources/faq',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          When integrating with the AIC Cloud developer platform, use this reference guide to identify and resolve common authentication, payload formatting, network routing, and webhook execution problems.
        </p>

        <section id="auth-diagnostics" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Authentication & Scope Failures
          </h2>
          <InspectionLoupeVisual />
          <div className="p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
            <h3 className="text-sm font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Symptom: HTTP 403 Forbidden with code INSUFFICIENT_SCOPE
            </h3>
            <p className="text-[13px] text-[var(--color-foreground)]">
              <strong>Root Cause:</strong> Your API key is authenticated correctly, but the token was generated without the required permission scope (e.g., attempting to create a VPS instance using a token with only <InlineCode>vps:read</InlineCode> permissions).
            </p>
            <p className="text-[13px] text-[var(--color-foreground)]">
              <strong>Resolution:</strong> Navigate to AIC Cloud Console &gt; API Keys, edit your token, and grant <InlineCode>vps:write</InlineCode> or <InlineCode>gpu:write</InlineCode> permission scopes.
            </p>
          </div>
        </section>

        <section id="webhook-issues" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Webhook Signature Failures (Raw Body Pitfall)
          </h2>
          <Callout variant="error" title="Critical Developer Gotcha: Parsed vs Raw Bodies">
            The most common webhook verification bug occurs when passing a parsed JSON JavaScript object (<InlineCode>req.body</InlineCode>) to the verification function instead of the raw unparsed UTF-8 Buffer/String. Express/Fastify parsers re-serialize JSON with different whitespace or key ordering, altering the cryptographic hash.
          </Callout>

          <CodeBlock
            language="typescript"
            filename="express-raw-body-fix.ts"
            code={`// CORRECT: Preserve raw buffer in Express for webhook route
import express from 'express';

const app = express();

// Use express.raw for webhook route to preserve exact bytes
app.post(
  '/webhooks/aic-cloud',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    const rawBody = req.body.toString('utf-8');
    const signature = req.headers['x-aic-signature'] as string;
    
    const isValid = verifyWebhookSignature(rawBody, signature, process.env.WEBHOOK_SECRET!);
    if (!isValid) return res.status(401).send('Invalid signature');
    
    const event = JSON.parse(rawBody);
    // Process event...
    res.status(200).send('OK');
  }
);`}
          />
        </section>

        <section id="rate-limit-mitigation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            429 Rate Limit Spikes
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            If your automated workers experience sudden 429 Too Many Requests spikes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground)]">
            <li>Ensure client scripts inspect the <InlineCode>Retry-After</InlineCode> header and sleep rather than immediately retrying in a tight while loop.</li>
            <li>Implement randomized jitter (<InlineCode>Math.random() * 500ms</InlineCode>) to avoid concurrent client retry bursts.</li>
            <li>For high-volume CI/CD pipelines, contact Support to request a workspace quota increase.</li>
          </ul>
        </section>

        <section id="ssh-injection-failures" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            SSH Cloud-Init Injection Failures
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            If an instance launches but SSH connection times out or rejects your key:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground)]">
            <li>Verify you specified the public key identifier (<InlineCode>ssh_key_ids: ["ssh_key_..."]</InlineCode>) during the initial POST request. Cloud-init only runs on the very first boot.</li>
            <li>Verify local key file permissions (<InlineCode>chmod 600 ~/.ssh/id_ed25519</InlineCode>).</li>
            <li>Check if your local IP is blocked by the instance's attached security firewall rules.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Developer FAQ', href: '/docs/developers/resources/faq', description: 'Frequently asked questions' },
            { title: 'Developer Best Practices', href: '/docs/developers/resources/best-practices', description: 'Architecture recommendations' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/resources/faq': {
    slug: '/docs/developers/resources/faq',
    section: 'developers',
    category: 'Resources',
    title: 'Developer Frequently Asked Questions',
    description:
      'Answers to common technical, architectural, rate limit, and infrastructure automation questions from AIC Cloud developers.',
    badge: 'FAQ',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'automation-tooling', title: 'Automation & Tooling', level: 2 },
      { id: 'api-security', title: 'API & Security Conventions', level: 2 },
      { id: 'billing-resources', title: 'Resource Billing & Quotas', level: 2 },
    ],
    prev: {
      title: 'Troubleshooting',
      href: '/docs/developers/resources/troubleshooting',
    },
    next: {
      title: 'Best Practices',
      href: '/docs/developers/resources/best-practices',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Find rapid answers to architectural questions regarding the AIC Cloud API, integration tooling, credential scoping, and billing calculation models.
        </p>

        <section id="automation-tooling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automation & Tooling
          </h2>
          <div className="space-y-4">
            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-surface)]">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                Can I use Terraform or OpenTofu with AIC Cloud?
              </h3>
              <p className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">
                Yes. AIC Cloud maintains an official Terraform provider (<InlineCode>aic-cloud/aic</InlineCode>) supporting full infrastructure-as-code management for Cloud VPS instances, VPC subnets, firewall rules, and SSH keys.
              </p>
            </div>

            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-surface)]">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                What is the maximum payload size for REST API requests?
              </h3>
              <p className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">
                The API gateway permits request bodies up to 10 MB for standard REST mutations. Custom cloud-init user-data scripts or Dockerfile definitions must fit within this limit.
              </p>
            </div>
          </div>
        </section>

        <section id="api-security" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            API & Security Conventions
          </h2>
          <div className="space-y-4">
            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-surface)]">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                Are API keys shared across workspace members?
              </h3>
              <p className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">
                No. API keys are generated under individual user credentials within a tenant organization. All actions executed via an API key are attributed to that specific user in the audit log for compliance.
              </p>
            </div>

            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-surface)]">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                Can I restrict an API key to specific IP addresses?
              </h3>
              <p className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">
                Yes. When creating or updating an API key, you can provide an array of IPv4 or IPv6 CIDR blocks. Inbound requests originating from unlisted IP addresses will be rejected with HTTP 403 Forbidden.
              </p>
            </div>
          </div>
        </section>

        <section id="billing-resources" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Resource Billing & Quotas
          </h2>
          <div className="space-y-4">
            <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] p-4 bg-[var(--color-surface)]">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                How is Cloud GPU billing calculated?
              </h3>
              <p className="text-[13px] text-[var(--color-foreground-muted)] leading-[22px]">
                Cloud GPU instances are billed on a per-second basis with a one-minute initial minimum. When a GPU node is deleted via API, billing ceases immediately at the second of termination.
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            { title: 'Best Practices', href: '/docs/developers/resources/best-practices', description: 'Production architecture standards' },
            { title: 'Developer Quickstart', href: '/docs/developers/quickstart', description: 'Interactive setup guide' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/resources/best-practices': {
    slug: '/docs/developers/resources/best-practices',
    section: 'developers',
    category: 'Resources',
    title: 'Developer Best Practices',
    description:
      'Production architecture recommendations, credential hygiene, connection management, idempotency, and high availability design.',
    badge: 'Architecture',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'security-credentials', title: '1. Credential Hygiene & Scoping', level: 2 },
      { id: 'resilience-idempotency', title: '2. Idempotency & Safe Retries', level: 2 },
      { id: 'connection-pooling', title: '3. HTTP Connection Pooling & Keep-Alive', level: 2 },
      { id: 'observability-tracing', title: '4. Distributed Tracing & Request IDs', level: 2 },
      { id: 'webhook-async', title: '5. Asynchronous Webhook Processing', level: 2 },
    ],
    prev: {
      title: 'FAQ',
      href: '/docs/developers/resources/faq',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Follow these engineering standards to ensure your applications integrate securely, reliably, and efficiently with the AIC Cloud infrastructure control plane.
        </p>

        <section id="security-credentials" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            1. Credential Hygiene & Scoping
          </h2>
          <div className="space-y-2">
            {[
              'Never hardcode API keys or webhook signing secrets in application source code.',
              'Use managed secret injection (AWS Secrets Manager, HashiCorp Vault, Doppler, Kubernetes Secrets).',
              'Grant minimal required scopes per service (e.g. read-only tokens for telemetry dashboards).',
              'Implement automated key rotation schedules with a maximum key age of 90 days.',
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[var(--color-foreground)]">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="resilience-idempotency" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            2. Idempotency & Safe Retries
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Network glitches can cause client timeouts even if the backend server successfully received and processed the creation request. Always generate a unique v4 UUID and attach it via the <InlineCode>Idempotency-Key</InlineCode> header on POST operations.
          </p>
          <Callout variant="tip" title="Deterministic Idempotency Keys">
            For pipeline jobs, construct idempotency keys from unique job identifiers (e.g. <InlineCode>deploy-job-12345-vps</InlineCode>) to guarantee that retrying the CI step cannot accidentally spawn duplicate billable hardware.
          </Callout>
        </section>

        <section id="connection-pooling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            3. HTTP Connection Pooling & Keep-Alive
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Establishing a new TLS 1.3 handshake on every API call introduces 50–150ms of needless network latency. Reuse TCP connections with persistent HTTP keep-alive agents across all API clients:
          </p>
          <CodeBlock
            language="typescript"
            filename="agent.ts"
            code={`import https from 'node:https';

// Configure high-performance persistent connection agent
export const keepAliveAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 50,
  maxFreeSockets: 10,
  timeout: 60000,
});`}
          />
        </section>

        <section id="observability-tracing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            4. Distributed Tracing & Request IDs
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Always extract and log the <InlineCode>x-request-id</InlineCode> header from every API response in your structured application logs (Datadog, Grafana Loki, CloudWatch). If an incident occurs, our support team can trace hypervisor logs in seconds using this identifier.
          </p>
        </section>

        <section id="webhook-async" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            5. Asynchronous Webhook Processing
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Never perform heavy computation, synchronous database queries, or long-running tasks inside your HTTP webhook endpoint handler. Doing so risks exceeding the 10-second delivery timeout:
          </p>
          <Steps
            steps={[
              {
                title: 'Verify Signature',
                description: 'Validate HMAC-SHA256 signature and timestamp in constant time.',
              },
              {
                title: 'Enqueue to Background Queue',
                description: 'Push the raw event onto Redis, RabbitMQ, AWS SQS, or Celery.',
              },
              {
                title: 'Return HTTP 200 Immediately',
                description: 'Acknowledge delivery to AIC Cloud within 50ms.',
              },
              {
                title: 'Process Off-Thread',
                description: 'Worker pool processes the event asynchronously with automatic retry capability.',
              },
            ]}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Developer Platform Introduction', href: '/docs/developers/introduction', description: 'Platform overview' },
            { title: 'API Fundamentals Overview', href: '/docs/developers/api/overview', description: 'Core communication standards' },
          ]}
        />
      </div>
    ),
  },
}
