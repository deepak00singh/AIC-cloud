import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
} from '@/components/common'
import { Table } from '@/components/documentation/Table'
import { Tabs } from '@/components/documentation/Tabs'
import { IllustrativeApiNotice, RelatedLinks } from '../common'
import { CheckCircle2 } from 'lucide-react'
import { SdkPackageTreeVisual } from '@/components/hairline/SdkPackageTreeVisual'

export const developerIntegrationsPages: Record<string, DocPageData> = {
  '/docs/developers/integrations/nodejs': {
    slug: '/docs/developers/integrations/nodejs',
    section: 'developers',
    category: 'Integrations',
    title: 'Node.js & TypeScript SDK',
    description:
      'Official TypeScript and Node.js client library with full type safety, automatic retries, and async stream support.',
    badge: 'TypeScript SDK',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'installation', title: 'Installation & Package Setup', level: 2 },
      { id: 'initialization', title: 'Client Initialization', level: 2 },
      { id: 'resource-methods', title: 'Resource Methods & TypeScript Types', level: 2 },
      { id: 'error-handling-sdk', title: 'SDK Error Classes', level: 2 },
    ],
    prev: {
      title: 'Instance Management Examples',
      href: '/docs/developers/api-reference/instance-management',
    },
    next: {
      title: 'Python Integration',
      href: '/docs/developers/integrations/python',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The <InlineCode>@aic-cloud/sdk</InlineCode> package provides complete TypeScript typings for all AIC Cloud API resources, built-in exponential backoff, request timeout management, and native AbortSignal support for Node.js 18+ and modern runtime environments (Bun, Deno, Cloudflare Workers).
        </p>

        <section id="installation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Installation & Package Setup
          </h2>
          <Tabs
            items={[
              {
                id: 'npm',
                label: 'npm',
                content: <CodeBlock language="bash" code="npm install @aic-cloud/sdk" />,
              },
              {
                id: 'pnpm',
                label: 'pnpm',
                content: <CodeBlock language="bash" code="pnpm add @aic-cloud/sdk" />,
              },
              {
                id: 'yarn',
                label: 'yarn',
                content: <CodeBlock language="bash" code="yarn add @aic-cloud/sdk" />,
              },
            ]}
          />
          <SdkPackageTreeVisual />
        </section>

        <section id="initialization" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Client Initialization
          </h2>
          <CodeBlock
            language="typescript"
            filename="client.ts"
            code={`import { AICCloudClient } from '@aic-cloud/sdk';

// Automatically reads process.env.AIC_API_KEY if omitted
export const aic = new AICCloudClient({
  apiKey: process.env.AIC_API_KEY,
  baseUrl: 'https://api.aiccloud.in',
  timeoutMs: 30000,
  maxRetries: 3,
});`}
          />
        </section>

        <section id="resource-methods" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Resource Methods & TypeScript Types
          </h2>
          <CodeBlock
            language="typescript"
            filename="services.ts"
            code={`import { aic } from './client';
import type { VPSInstance, CreateVPSOptions } from '@aic-cloud/sdk/types';

async function deployWebServer(): Promise<VPSInstance> {
  const options: CreateVPSOptions = {
    name: 'web-frontend-01',
    plan: 'vps.standard.4c8g',
    region: 'us-east-dc1',
    image: 'ubuntu-24.04-lts',
    tags: {
      role: 'frontend',
      env: 'production',
    },
  };

  const instance = await aic.vps.create(options);
  console.log(\`Provisioning \${instance.name} (ID: \${instance.id})\`);
  return instance;
}`}
          />
        </section>

        <section id="error-handling-sdk" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            SDK Error Classes
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Catch strongly typed errors inheriting from <InlineCode>AICCloudError</InlineCode>:
          </p>
          <CodeBlock
            language="typescript"
            filename="errorHandling.ts"
            code={`import { 
  AICCloudError, 
  AuthenticationError, 
  RateLimitError, 
  ConflictError 
} from '@aic-cloud/sdk/errors';

try {
  await aic.vps.reboot('vps_non_existent');
} catch (error) {
  if (error instanceof RateLimitError) {
    console.warn(\`Rate limited. Retry after \${error.retryAfterSeconds}s\`);
  } else if (error instanceof AuthenticationError) {
    console.error('Invalid API Key provided');
  } else if (error instanceof AICCloudError) {
    console.error(\`API Failure: \${error.code} - \${error.message}\`);
    console.error(\`Request ID: \${error.requestId}\`);
  }
}`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Python Integration', href: '/docs/developers/integrations/python', description: 'Python client documentation' },
            { title: 'REST API Integration', href: '/docs/developers/integrations/rest-api', description: 'Raw HTTP integration' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/integrations/python': {
    slug: '/docs/developers/integrations/python',
    section: 'developers',
    category: 'Integrations',
    title: 'Python SDK & ML Pipelines',
    description:
      'Python client library for automated GPU cluster provisioning, training job orchestration, and data science workflows.',
    badge: 'Python SDK',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'installation', title: 'Installation', level: 2 },
      { id: 'sync-async', title: 'Synchronous & Asynchronous Clients', level: 2 },
      { id: 'ml-orchestration', title: 'ML Pipeline & GPU Provisioning', level: 2 },
      { id: 'exception-handling', title: 'Exception Hierarchy', level: 2 },
    ],
    prev: {
      title: 'Node.js Integration',
      href: '/docs/developers/integrations/nodejs',
    },
    next: {
      title: 'REST API Integration',
      href: '/docs/developers/integrations/rest-api',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The <InlineCode>aic-cloud</InlineCode> Python library is designed for data scientists and ML platform engineers orchestrating PyTorch, TensorFlow, and HuggingFace workloads across AIC Cloud accelerated GPU instances.
        </p>

        <section id="installation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Installation
          </h2>
          <CodeBlock
            language="bash"
            code="pip install aic-cloud"
          />
        </section>

        <section id="sync-async" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Synchronous & Asynchronous Clients
          </h2>
          <Tabs
            items={[
              {
                id: 'sync',
                label: 'Synchronous',
                content: (
                  <CodeBlock
                    language="python"
                    filename="sync_usage.py"
                    code={`import os
from aic_cloud import AICClient

client = AICClient(api_key=os.environ["AIC_API_KEY"])

# List active instances
instances = client.vps.list()
for inst in instances:
    print(f"{inst.name}: {inst.status} ({inst.ipv4})")`}
                  />
                ),
              },
              {
                id: 'async',
                label: 'AsyncIO',
                content: (
                  <CodeBlock
                    language="python"
                    filename="async_usage.py"
                    code={`import asyncio
import os
from aic_cloud import AsyncAICClient

async def main():
    async with AsyncAICClient(api_key=os.environ["AIC_API_KEY"]) as client:
        instances = await client.vps.list()
        print(f"Discovered {len(instances)} instances asynchronously.")

asyncio.run(main())`}
                  />
                ),
              },
            ]}
          />
        </section>

        <section id="ml-orchestration" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            ML Pipeline & GPU Provisioning
          </h2>
          <CodeBlock
            language="python"
            filename="train_pipeline.py"
            code={`import os
from aic_cloud import AICClient

client = AICClient(api_key=os.environ["AIC_API_KEY"])

def launch_training_cluster():
    # Provision 8x NVIDIA H100 SXM5 node
    cluster_node = client.gpu.create(
        name="llama3-70b-finetune",
        gpu_model="nvidia-h100-sxm5-80gb",
        gpu_count=8,
        region="us-east-dc1",
        image="cuda-12.4-pytorch-2.3",
        ssh_key_ids=["ssh_key_9f8e7d6c5b4a"]
    )
    
    print(f"Allocating H100 cluster node: {cluster_node.id}")
    return cluster_node`}
          />
        </section>

        <section id="exception-handling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Exception Hierarchy
          </h2>
          <Table
            headers={['Exception Class', 'HTTP Trigger', 'Common Handling']}
            rows={[
              [<InlineCode key="auth">AuthenticationError</InlineCode>, '401 Unauthorized', 'Re-authenticate or update environment variables'],
              [<InlineCode key="rate">RateLimitError</InlineCode>, '429 Too Many Requests', 'Inspect `e.retry_after` and sleep'],
              [<InlineCode key="conflict">ConflictError</InlineCode>, '409 Conflict', 'Wait for instance transition to finish'],
              [<InlineCode key="api">AICAPIError</InlineCode>, 'Any 4xx/5xx', 'Base class with `e.status_code` and `e.request_id`'],
            ]}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU API Reference', href: '/docs/developers/api-reference/gpu', description: 'Accelerator specifications' },
            { title: 'REST API Integration', href: '/docs/developers/integrations/rest-api', description: 'Direct HTTP clients' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/integrations/rest-api': {
    slug: '/docs/developers/integrations/rest-api',
    section: 'developers',
    category: 'Integrations',
    title: 'Direct REST API Integration',
    description:
      'Integrating with raw HTTP clients in Go, Python Requests, Axios, and native Fetch without third-party SDK dependencies.',
    badge: 'Raw HTTP',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'direct-http-architecture', title: 'Direct HTTP Architecture', level: 2 },
      { id: 'client-examples', title: 'Multi-Language Implementation Recipes', level: 2 },
      { id: 'production-checklist', title: 'Production HTTP Client Checklist', level: 2 },
    ],
    prev: {
      title: 'Python Integration',
      href: '/docs/developers/integrations/python',
    },
    next: {
      title: 'Webhook Overview',
      href: '/docs/developers/webhooks/overview',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          If you are working in languages without official SDKs (such as Go, Rust, Ruby, or PHP) or prefer zero third-party dependencies, the AIC Cloud API can be consumed with standard HTTP clients.
        </p>

        <section id="direct-http-architecture" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Direct HTTP Architecture
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Every direct HTTP implementation must enforce:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground)]">
            <li>Strict TLS 1.2+ validation (never disable SSL verification).</li>
            <li>Connection keep-alive pooling to reuse TCP connections.</li>
            <li>An explicit request timeout (recommended: 15–30 seconds).</li>
            <li>Header <InlineCode>User-Agent: your-service/version</InlineCode> for telemetry identification.</li>
          </ul>
        </section>

        <section id="client-examples" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Multi-Language Implementation Recipes
          </h2>
          <Tabs
            items={[
              {
                id: 'go',
                label: 'Go (net/http)',
                content: (
                  <CodeBlock
                    language="go"
                    filename="client.go"
                    code={`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "time"
)

type AICClient struct {
    BaseURL    string
    APIKey     string
    HTTPClient *http.Client
}

func NewClient(apiKey string) *AICClient {
    return &AICClient{
        BaseURL: "https://api.aiccloud.in",
        APIKey:  apiKey,
        HTTPClient: &http.Client{
            Timeout: 15 * time.Second,
        },
    }
}

func (c *AICClient) ListInstances() (*http.Response, error) {
    req, err := http.NewRequest("GET", c.BaseURL+"/vps/instances", nil)
    if err != nil {
        return nil, err
    }
    req.Header.Set("Authorization", "Bearer "+c.APIKey)
    req.Header.Set("Accept", "application/json")
    return c.HTTPClient.Do(req)
}`}
                  />
                ),
              },
              {
                id: 'axios',
                label: 'Node.js (Axios)',
                content: (
                  <CodeBlock
                    language="typescript"
                    filename="axiosClient.ts"
                    code={`import axios from 'axios';

const aicHttp = axios.create({
  baseURL: 'https://api.aiccloud.in',
  timeout: 15000,
  headers: {
    'Authorization': \`Bearer \${process.env.AIC_API_KEY}\`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export async function fetchVPSList() {
  const { data } = await aicHttp.get('/api/v1/vps');
  return data;
}`}
                  />
                ),
              },
              {
                id: 'requests',
                label: 'Python (Requests)',
                content: (
                  <CodeBlock
                    language="python"
                    filename="requests_client.py"
                    code={`import os
import requests

session = requests.Session()
session.headers.update({
    "Authorization": f"Bearer {os.environ['AIC_API_KEY']}",
    "Accept": "application/json",
})

response = session.get("https://api.aiccloud.in/api/v1/vps", timeout=15)
response.raise_for_status()
data = response.json()`}
                  />
                ),
              },
            ]}
          />
        </section>

        <section id="production-checklist" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Production HTTP Client Checklist
          </h2>
          <div className="space-y-3">
            {[
              'Configure connect timeout (3s) and read timeout (15s)',
              'Implement exponential backoff on HTTP 429 and 503',
              'Parse RFC 7807 problem details in error handling blocks',
              'Pass Idempotency-Key headers on non-idempotent POST operations',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[14px] text-[var(--color-foreground)]">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          links={[
            { title: 'Webhook Overview', href: '/docs/developers/webhooks/overview', description: 'Event-driven integrations' },
            { title: 'Best Practices', href: '/docs/developers/resources/best-practices', description: 'Production security and reliability' },
          ]}
        />
      </div>
    ),
  },
}
