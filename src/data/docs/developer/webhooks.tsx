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
import { ShieldCheck, Bell } from 'lucide-react'
import { WebhookDeliveryDiagram } from '@/components/illustrations/WebhookDeliveryDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'

export const developerWebhooksPages: Record<string, DocPageData> = {
  '/docs/developers/webhooks/overview': {
    slug: '/docs/developers/webhooks/overview',
    section: 'developers',
    category: 'Webhooks',
    title: 'Webhooks Overview',
    description:
      'Real-time event delivery architecture, event catalog, subscription models, and asynchronous notification flow.',
    badge: 'Events',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'why-webhooks', title: 'Why Webhooks vs. Polling', level: 2 },
      { id: 'event-catalog', title: 'Supported Event Catalog', level: 2 },
      { id: 'delivery-lifecycle', title: 'Delivery Flow & Expectations', level: 2 },
    ],
    prev: {
      title: 'REST API Integration',
      href: '/docs/developers/integrations/rest-api',
    },
    next: {
      title: 'Webhook Configuration',
      href: '/docs/developers/webhooks/configuration',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/networking-cables.jpg"
          imageAlt="Webhooks Event Delivery Stream"
          badgeText="Real-Time Event Engine"
          badgeColor="emerald"
          title="Webhooks & Event Delivery"
          description="Instant HTTP POST event delivery with HMAC-SHA256 signatures, exponential backoff retries, and comprehensive delivery logs."
          stats={[
            { label: 'Delivery Model', value: 'Real-Time HTTP Push' },
            { label: 'Signature', value: 'HMAC-SHA256' },
            { label: 'Retry Strategy', value: 'Exponential Backoff' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/webhooks" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Webhooks allow your external applications to receive real-time HTTP POST notifications whenever significant events occur within your AIC Cloud infrastructure. Instead of continuously polling REST API endpoints for status changes, webhooks push notifications the millisecond an event completes.
        </p>

        <section id="why-webhooks" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Why Webhooks vs. Polling
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[var(--color-primary)]" />
                  Instant Event Dispatch
                </CardTitle>
                <CardDescription>
                  Receive events like instance readiness or build failures within 200ms of occurrence, drastically reducing automation pipeline latency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--color-primary)]" />
                  Eliminate API Quota Waste
                </CardTitle>
                <CardDescription>
                  Save thousands of redundant GET polling requests per hour, reserving your API rate limit buckets for critical operational mutations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="event-catalog" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Supported Event Catalog
          </h2>
          <Table
            headers={['Event Name', 'Subsystem', 'Trigger Condition']}
            rows={[
              [<InlineCode key="e1">vps.instance.provisioned</InlineCode>, 'Cloud VPS', 'Instance completed boot sequence and public IP is reachable'],
              [<InlineCode key="e2">vps.instance.stopped</InlineCode>, 'Cloud VPS', 'Instance shutdown initiated by console, API, or guest OS'],
              [<InlineCode key="e3">gpu.node.ready</InlineCode>, 'Cloud GPU', 'GPU accelerator drivers verified and node ready for workloads'],
              [<InlineCode key="e4">app.deployment.succeeded</InlineCode>, 'App Hosting', 'Container build and zero-downtime traffic shift completed'],
              [<InlineCode key="e5">app.deployment.failed</InlineCode>, 'App Hosting', 'Build failed during compile or healthcheck failed'],
              [<InlineCode key="e6">backup.snapshot.completed</InlineCode>, 'Storage / Backup', 'Automated nightly snapshot stored and verified'],
            ]}
          />
        </section>

        <section id="delivery-lifecycle" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Delivery Flow & Expectations
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Your receiving HTTP endpoint must respond with an HTTP status code in the 2xx range (such as 200 OK or 202 Accepted) within <strong>10 seconds</strong>. Any other response code or connection timeout is treated as delivery failure and scheduled for exponential backoff retry.
          </p>

          <WebhookDeliveryDiagram />
        </section>

        <RelatedLinks
          links={[
            { title: 'Webhook Configuration', href: '/docs/developers/webhooks/configuration', description: 'Registering endpoints and secrets' },
            { title: 'Signature Verification', href: '/docs/developers/webhooks/signature-verification', description: 'HMAC-SHA256 verification' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/webhooks/configuration': {
    slug: '/docs/developers/webhooks/configuration',
    section: 'developers',
    category: 'Webhooks',
    title: 'Webhook Configuration',
    description:
      'Registering webhook endpoints, selecting event filters, rotating webhook signing secrets, and triggering test events.',
    badge: 'Setup',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'registration-steps', title: 'Registering an Endpoint', level: 2 },
      { id: 'signing-secrets', title: 'Managing Webhook Secrets', level: 2 },
      { id: 'testing-endpoints', title: 'Dispatching Test Ping Events', level: 2 },
    ],
    prev: {
      title: 'Webhooks Overview',
      href: '/docs/developers/webhooks/overview',
    },
    next: {
      title: 'Event Structure',
      href: '/docs/developers/webhooks/event-structure',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/networking-cables.jpg"
          imageAlt="Webhooks Event Delivery Stream"
          badgeText="Real-Time Event Engine"
          badgeColor="emerald"
          title="Webhooks & Event Delivery"
          description="Instant HTTP POST event delivery with HMAC-SHA256 signatures, exponential backoff retries, and comprehensive delivery logs."
          stats={[
            { label: 'Delivery Model', value: 'Real-Time HTTP Push' },
            { label: 'Signature', value: 'HMAC-SHA256' },
            { label: 'Retry Strategy', value: 'Exponential Backoff' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/webhooks/endpoints" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Webhook endpoints can be configured either through the AIC Cloud Web Console under Developer Settings &gt; Webhooks or programmatically via the REST API.
        </p>

        <section id="registration-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Registering an Endpoint
          </h2>
          <Steps
            steps={[
              {
                title: 'Deploy an HTTPS Receiver',
                description: 'Ensure your server is accessible via public HTTPS with a valid TLS certificate. Self-signed certificates are rejected.',
              },
              {
                title: 'Add Endpoint URL',
                description: 'Specify your full destination URL (e.g. https://api.yourdomain.com/webhooks/aic-cloud).',
              },
              {
                title: 'Select Event Subscriptions',
                description: 'Choose specific events (e.g. vps.instance.provisioned) or subscribe to wildcard categories (*).',
              },
              {
                title: 'Save Webhook Signing Secret',
                description: 'Copy the generated whsec_... key into your receiver environment variables.',
              },
            ]}
          />
        </section>

        <section id="signing-secrets" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Managing Webhook Secrets
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Each endpoint is assigned a unique signing secret prefixed with <InlineCode>whsec_</InlineCode>. This secret is shared exclusively between AIC Cloud and your server to cryptographically verify payload integrity.
          </p>
          <Callout variant="tip" title="Secret Rotation">
            When rotating webhook secrets, AIC Cloud signs events with both the old and new secrets for a 24-hour grace window, allowing you to update your application server without dropping events.
          </Callout>
        </section>

        <section id="testing-endpoints" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Dispatching Test Ping Events
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Click <strong>Send Test Ping</strong> in the console or send a POST request to dispatch an illustrative synthetic test event:
          </p>
          <CodeBlock
            language="bash"
            filename="test_ping.sh"
            code={`curl -X POST "https://api.aiccloud.in/api/v1/webhooks/endpoints/whe_01hq7b3k/test" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"event_type": "ping"}'`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Event Structure', href: '/docs/developers/webhooks/event-structure', description: 'JSON payload schema' },
            { title: 'Signature Verification', href: '/docs/developers/webhooks/signature-verification', description: 'Cryptographic validation' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/webhooks/event-structure': {
    slug: '/docs/developers/webhooks/event-structure',
    section: 'developers',
    category: 'Webhooks',
    title: 'Webhook Event Structure',
    description:
      'Standard JSON envelope schemas, metadata properties, timestamps, and resource payload payloads for webhook deliveries.',
    badge: 'Schema',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'envelope-schema', title: 'Standard Event Envelope', level: 2 },
      { id: 'sample-payloads', title: 'Real-World Event Payloads', level: 2 },
      { id: 'schema-versioning', title: 'Schema Versioning Guarantees', level: 2 },
    ],
    prev: {
      title: 'Webhook Configuration',
      href: '/docs/developers/webhooks/configuration',
    },
    next: {
      title: 'Signature Verification',
      href: '/docs/developers/webhooks/signature-verification',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/networking-cables.jpg"
          imageAlt="Webhooks Event Delivery Stream"
          badgeText="Real-Time Event Engine"
          badgeColor="emerald"
          title="Webhooks & Event Delivery"
          description="Instant HTTP POST event delivery with HMAC-SHA256 signatures, exponential backoff retries, and comprehensive delivery logs."
          stats={[
            { label: 'Delivery Model', value: 'Real-Time HTTP Push' },
            { label: 'Signature', value: 'HMAC-SHA256' },
            { label: 'Retry Strategy', value: 'Exponential Backoff' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/webhooks" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          All webhook payloads arrive as serialized UTF-8 JSON HTTP POST bodies. Every event shares a standardized top-level envelope containing delivery metadata and the affected resource payload.
        </p>

        <section id="envelope-schema" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Standard Event Envelope
          </h2>
          <Table
            headers={['Field', 'Type', 'Description']}
            rows={[
              [<InlineCode key="id">id</InlineCode>, 'string (UUID)', 'Globally unique identifier for this specific event occurrence (e.g. evt_01hq7...)'],
              [<InlineCode key="event">event</InlineCode>, 'string', 'Dotted event name (e.g. vps.instance.provisioned)'],
              [<InlineCode key="created_at">created_at</InlineCode>, 'string (ISO 8601)', 'UTC timestamp when the event was generated on the server'],
              [<InlineCode key="api_version">api_version</InlineCode>, 'string', 'API version schema format (e.g. 2026-11-01)'],
              [<InlineCode key="data">data</InlineCode>, 'object', 'The full resource representation at the time of event generation'],
            ]}
          />
        </section>

        <section id="sample-payloads" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Real-World Event Payloads
          </h2>
          <Tabs
            items={[
              {
                id: 'vps-event',
                label: 'vps.instance.provisioned',
                content: (
                  <CodeBlock
                    language="json"
                    filename="event-instance-provisioned.json"
                    code={`{
  "id": "evt_01hq8e7f6a5b4c3d2e1f0a9b8c",
  "event": "vps.instance.provisioned",
  "created_at": "2026-11-05T20:45:00Z",
  "api_version": "2026-11-01",
  "data": {
    "id": "vps_01hq7b3k8j9m1n2p3q4r5s6t7u",
    "name": "worker-us-east-01",
    "status": "running",
    "plan": "vps.standard.4c8g",
    "region": "us-east-dc1",
    "ipv4": "198.51.100.42",
    "provision_duration_seconds": 18.4
  }
}`}
                  />
                ),
              },
              {
                id: 'app-event',
                label: 'app.deployment.failed',
                content: (
                  <CodeBlock
                    language="json"
                    filename="event-deployment-failed.json"
                    code={`{
  "id": "evt_01hq8f9a8b7c6d5e4f3a2b1c0d",
  "event": "app.deployment.failed",
  "created_at": "2026-11-05T20:50:12Z",
  "api_version": "2026-11-01",
  "data": {
    "app_id": "app_01hq7x9z8y7x6w5v4u3t2s1r",
    "deployment_id": "dep_01hq8f8z7y6x5w4v3u2t1s",
    "commit_hash": "4b825dc642cb6eb9a060e54bf8d69288fbee4904",
    "error_stage": "build",
    "exit_code": 1,
    "error_summary": "npm ERR! Missing script: build"
  }
}`}
                  />
                ),
              },
            ]}
          />
        </section>

        <section id="schema-versioning" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Schema Versioning Guarantees
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            AIC Cloud adheres strictly to backward-compatible event evolution:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground)]">
            <li>New fields may be added to <InlineCode>data</InlineCode> at any time without incrementing API version.</li>
            <li>Existing fields will never be renamed or deleted within a major version.</li>
            <li>Enums may receive new member values; receivers should write fallback branches.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Signature Verification', href: '/docs/developers/webhooks/signature-verification', description: 'Securing payload endpoints' },
            { title: 'Retry Handling', href: '/docs/developers/webhooks/retry-handling', description: 'Idempotency and retry schedules' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/webhooks/signature-verification': {
    slug: '/docs/developers/webhooks/signature-verification',
    section: 'developers',
    category: 'Webhooks',
    title: 'Webhook Signature Verification',
    description:
      'Cryptographic HMAC-SHA256 signature verification to prevent spoofing, payload tampering, and replay attacks.',
    badge: 'Security',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'security-model', title: 'Security Architecture', level: 2 },
      { id: 'signature-header', title: 'The X-AIC-Signature Header', level: 2 },
      { id: 'verification-code', title: 'Implementation Examples', level: 2 },
      { id: 'replay-mitigation', title: 'Mitigating Replay Attacks', level: 2 },
    ],
    prev: {
      title: 'Event Structure',
      href: '/docs/developers/webhooks/event-structure',
    },
    next: {
      title: 'Retry Handling',
      href: '/docs/developers/webhooks/retry-handling',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/networking-cables.jpg"
          imageAlt="Webhooks Event Delivery Stream"
          badgeText="Real-Time Event Engine"
          badgeColor="emerald"
          title="Webhooks & Event Delivery"
          description="Instant HTTP POST event delivery with HMAC-SHA256 signatures, exponential backoff retries, and comprehensive delivery logs."
          stats={[
            { label: 'Delivery Model', value: 'Real-Time HTTP Push' },
            { label: 'Signature', value: 'HMAC-SHA256' },
            { label: 'Retry Strategy', value: 'Exponential Backoff' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/webhooks" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Because webhook endpoints are public HTTP URLs, malicious actors could theoretically forge fake HTTP POST payloads. To verify that requests originate genuine from AIC Cloud and that the payload has not been modified in transit, every delivery carries a cryptographic HMAC-SHA256 signature.
        </p>

        <section id="security-model" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            The X-AIC-Signature Header
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Each delivery includes the <InlineCode>X-AIC-Signature</InlineCode> header containing a timestamp and hex-encoded HMAC hash:
          </p>
          <CodeBlock
            language="http"
            filename="Header Example"
            code={`X-AIC-Signature: t=1762381200,v1=5257182e7ded0a13c3143823c4e03b30f7042431f7f99791309ff2e7ff6e40d0`}
          />
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            The signature is computed over the string concatenation: <InlineCode>{'${t}.${rawBody}'}</InlineCode> using your webhook secret (<InlineCode>whsec_...</InlineCode>) as the HMAC key.
          </p>
        </section>

        <section id="verification-code" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Implementation Examples
          </h2>
          <Tabs
            items={[
              {
                id: 'node',
                label: 'Node.js (TypeScript)',
                content: (
                  <CodeBlock
                    language="typescript"
                    filename="verifySignature.ts"
                    code={`import crypto from 'node:crypto';

export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
  toleranceSeconds = 300
): boolean {
  const parts = signatureHeader.split(',');
  const timestampPart = parts.find((p) => p.startsWith('t='));
  const signaturePart = parts.find((p) => p.startsWith('v1='));

  if (!timestampPart || !signaturePart) return false;

  const timestamp = parseInt(timestampPart.split('=')[1], 10);
  const receivedSig = signaturePart.split('=')[1];

  // Prevent replay attacks (tolerance: 5 minutes)
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestamp) > toleranceSeconds) {
    return false;
  }

  const payloadToSign = \`\${timestamp}.\${rawBody}\`;
  const computedSig = crypto
    .createHmac('sha256', secret)
    .update(payloadToSign)
    .digest('hex');

  // Constant-time comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(computedSig, 'hex'),
    Buffer.from(receivedSig, 'hex')
  );
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
                    filename="verify_signature.py"
                    code={`import hmac
import hashlib
import time

def verify_webhook_signature(raw_body: bytes, signature_header: str, secret: str, tolerance: int = 300) -> bool:
    pairs = dict(item.split("=") for item in signature_header.split(","))
    if "t" not in pairs or "v1" not in pairs:
        return False
        
    timestamp = int(pairs["t"])
    received_sig = pairs["v1"]
    
    # Check timestamp freshness
    now = int(time.time())
    if abs(now - timestamp) > tolerance:
        return False
        
    payload_to_sign = f"{timestamp}.".encode("utf-8") + raw_body
    computed_sig = hmac.new(
        secret.encode("utf-8"),
        payload_to_sign,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(computed_sig, received_sig)`}
                  />
                ),
              },
            ]}
          />
        </section>

        <section id="replay-mitigation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Mitigating Replay Attacks
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            A replay attack occurs when an attacker intercepts a valid payload and re-transmits it later. By verifying that the timestamp <InlineCode>t</InlineCode> is within 300 seconds (5 minutes) of current server time and storing processed <InlineCode>id</InlineCode> values in Redis or a cache, your receivers remain entirely impervious to replay attempts.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Retry Handling', href: '/docs/developers/webhooks/retry-handling', description: 'Idempotency and backoff' },
            { title: 'Developer Best Practices', href: '/docs/developers/resources/best-practices', description: 'Reliable message handling' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/webhooks/retry-handling': {
    slug: '/docs/developers/webhooks/retry-handling',
    section: 'developers',
    category: 'Webhooks',
    title: 'Webhook Retry & Dead-Letter Handling',
    description:
      'Delivery schedules, exponential backoff rules, duplicate event deduplication, and dead-letter alerting.',
    badge: 'Reliability',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'retry-schedule', title: 'Exponential Backoff Schedule', level: 2 },
      { id: 'idempotent-processing', title: 'Idempotent Deduplication Pattern', level: 2 },
      { id: 'endpoint-disabling', title: 'Automatic Endpoint Disabling', level: 2 },
    ],
    prev: {
      title: 'Signature Verification',
      href: '/docs/developers/webhooks/signature-verification',
    },
    next: {
      title: 'Glossary',
      href: '/docs/developers/resources/glossary',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/networking-cables.jpg"
          imageAlt="Webhooks Event Delivery Stream"
          badgeText="Real-Time Event Engine"
          badgeColor="emerald"
          title="Webhooks & Event Delivery"
          description="Instant HTTP POST event delivery with HMAC-SHA256 signatures, exponential backoff retries, and comprehensive delivery logs."
          stats={[
            { label: 'Delivery Model', value: 'Real-Time HTTP Push' },
            { label: 'Signature', value: 'HMAC-SHA256' },
            { label: 'Retry Strategy', value: 'Exponential Backoff' },
          ]}
        />

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/webhooks" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Networks are inherently unreliable. If your receiving application server is undergoing deployment, experiences database connection saturation, or returns a 5xx error, AIC Cloud will automatically retry event delivery over a 72-hour window.
        </p>

        <section id="retry-schedule" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Exponential Backoff Schedule
          </h2>
          <Table
            headers={['Attempt Number', 'Delay from Initial Attempt', 'Action on Failure']}
            rows={[
              ['Attempt 1', 'Immediate (0s)', 'Queue attempt 2 on non-2xx or timeout'],
              ['Attempt 2', '1 minute', 'Queue attempt 3'],
              ['Attempt 3', '5 minutes', 'Queue attempt 4'],
              ['Attempt 4', '30 minutes', 'Queue attempt 5'],
              ['Attempt 5', '2 hours', 'Queue attempt 6'],
              ['Attempt 6', '12 hours', 'Queue attempt 7'],
              ['Attempt 7', '24 hours', 'Final attempt; dispatch dead-letter notification'],
            ]}
          />
        </section>

        <section id="idempotent-processing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Idempotent Deduplication Pattern
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Because network retries can occasionally result in your server receiving the same event more than once (at-least-once delivery guarantee), always write idempotent webhook handlers:
          </p>
          <CodeBlock
            language="typescript"
            filename="idempotentHandler.ts"
            code={`import { redisClient } from './redis';

async function handleWebhookEvent(event: { id: string; event: string; data: any }) {
  // Check if this event ID has already been processed within the last 72 hours
  const wasSet = await redisClient.set(\`webhook:processed:\${event.id}\`, '1', {
    NX: true,
    EX: 259200, // 72 hours
  });

  if (!wasSet) {
    console.log(\`Skipping duplicate event: \${event.id}\`);
    return { status: 'already_processed' };
  }

  // Safely execute business logic knowing event is guaranteed novel
  await processEventPayload(event);
  return { status: 'success' };
}`}
          />
        </section>

        <section id="endpoint-disabling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automatic Endpoint Disabling
          </h2>
          <Callout variant="error" title="Dead-Letter Auto-Disable Rule">
            If an endpoint fails 100% of delivery attempts continuously for 5 consecutive days, AIC Cloud automatically disables the webhook subscription to prevent traffic amplification. An urgent operational alert is dispatched to account administrators with remediation instructions.
          </Callout>
        </section>

        <RelatedLinks
          links={[
            { title: 'Developer Glossary', href: '/docs/developers/resources/glossary', description: 'Cloud infrastructure terminology' },
            { title: 'Best Practices', href: '/docs/developers/resources/best-practices', description: 'Production architectural checklist' },
          ]}
        />
      </div>
    ),
  },
}
