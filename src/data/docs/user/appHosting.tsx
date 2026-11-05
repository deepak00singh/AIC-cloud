import type { DocPageData } from '@/types/docs'
import {
  Callout,
  CodeBlock,
  InlineCode,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Table } from '@/components/documentation/Table'
import { RelatedLinks } from '../common'
import { GitBranch, Shield, RefreshCw } from 'lucide-react'
import { AppHostingDeploymentDiagram } from '@/components/illustrations/AppHostingDeploymentDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { DnsDishVisual } from '@/components/hairline/DnsDishVisual'

export const appHostingPages: Record<string, DocPageData> = {
  '/docs/user/app-hosting/introduction': {
    slug: '/docs/user/app-hosting/introduction',
    section: 'user',
    category: 'App Hosting',
    title: 'App Hosting Overview',
    description:
      'Continuous deployment platform for frontend frameworks, Node.js, Python, and Docker web applications with zero-downtime rolls and global SSL.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'platform-features', title: 'Platform Capabilities', level: 2 },
      { id: 'supported-frameworks', title: 'Supported Frameworks & Runtimes', level: 2 },
      { id: 'deployment-lifecycle', title: 'Deployment Lifecycle', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting & Support', level: 2 },
    ],
    previous: {
      title: 'Troubleshooting Cloud GPU',
      href: '/docs/user/gpu/troubleshooting',
    },
    next: {
      title: 'Create an Application',
      href: '/docs/user/app-hosting/create-app',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/app-deployment.jpg"
          imageAlt="Continuous App Hosting & Deployment"
          badgeText="Managed PaaS"
          badgeColor="emerald"
          title="App Hosting Platform Overview"
          description="Deploy apps from GitHub or GitLab in seconds with automatic builds, zero downtime, and free SSL. Starting from ₹99/mo."
          stats={[
            { label: 'Deploy Trigger', value: 'git push' },
            { label: 'Pricing', value: 'From ₹99/month' },
            { label: 'SSL Certificate', value: 'Free Let’s Encrypt' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud App Hosting lets you deploy web applications directly from code without managing servers. Connect your GitHub or GitLab repository, and every time you push code, your application builds and deploys automatically with zero downtime.
        </p>

        <section id="platform-features" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Key Platform Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <GitBranch className="h-4 w-4 text-[var(--color-primary)]" />
                  Automatic Git Deploys
                </CardTitle>
                <CardDescription>
                  Every push to your main branch triggers an automatic build and smooth zero-downtime deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-[var(--color-primary)]" />
                  Instant Rollbacks
                </CardTitle>
                <CardDescription>
                  Revert to any previous stable deployment version in seconds with zero service disruption.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--color-primary)]" />
                  Automatic SSL & Edge
                </CardTitle>
                <CardDescription>
                  Global Anycast edge routing with automated Let&apos;s Encrypt TLS certificates and DDoS filtering.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="supported-frameworks" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Supported Frameworks &amp; Runtimes (From ₹99/mo)
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Our buildpacks automatically detect and compile major modern programming frameworks on every <InlineCode>git push</InlineCode>, with automated Let&apos;s Encrypt SSL and zero-downtime container replacement:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Node.js / TypeScript:</strong> Next.js, Remix, Vite, Astro, Express, Fastify, NestJS</li>
            <li><strong>Python:</strong> FastAPI, Django, Flask, Starlette</li>
            <li><strong>Golang:</strong> Native binary compilation via Go 1.22+</li>
            <li><strong>PHP &amp; Ruby:</strong> Laravel, WordPress, Ruby on Rails</li>
            <li><strong>Custom Dockerfile:</strong> Any OCI-compliant container listening on an HTTP port</li>
          </ul>
        </section>

        <section id="deployment-lifecycle" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Deployment Lifecycle
          </h2>

          <AppHostingDeploymentDiagram />

          <Steps
            steps={[
              {
                title: 'Source Ingestion',
                content: <p>AIC Cloud securely clones the latest commit from your connected GitHub repository.</p>,
              },
              {
                title: 'Isolated Build Sandbox',
                content: <p>Dependencies are fetched, cached, and compiled inside an ephemeral security sandbox.</p>,
              },
              {
                title: 'Containerization & Health Check',
                content: <p>A production container is assembled and probed via HTTP readiness checks before accepting traffic.</p>,
              },
              {
                title: 'Zero-Downtime Traffic Switch',
                content: <p>Edge routers switch traffic seamlessly to the new container. The previous container is drained gracefully.</p>,
              },
            ]}
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting & Support
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Inspect live streaming stdout and stderr deployment logs under <strong>Console &gt; App Hosting &gt; [App] &gt; Logs</strong> to identify build failure stack traces.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Create an Application', href: '/docs/user/app-hosting/create-app', description: 'Configure app workspace.' },
            { title: 'Connect GitHub Repository', href: '/docs/user/app-hosting/connect-github', description: 'Integrate Git webhooks.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/create-app': {
    slug: '/docs/user/app-hosting/create-app',
    section: 'user',
    category: 'App Hosting',
    title: 'Create an Application',
    description:
      'Initialize a new hosted application, define your runtime environment, and select between Git repository, Dockerfile, or container image.',
    badge: 'Tutorial',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'creation-methods', title: 'Deployment Source Methods', level: 2 },
      { id: 'setup-steps', title: 'Application Setup Steps', level: 2 },
      { id: 'resource-sizing', title: 'Container Resource Sizing', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Creation Issues', level: 2 },
    ],
    previous: {
      title: 'App Hosting Overview',
      href: '/docs/user/app-hosting/introduction',
    },
    next: {
      title: 'Connect GitHub Repository',
      href: '/docs/user/app-hosting/connect-github',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="creation-methods" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Deployment Source Methods
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Choose the deployment method that fits your delivery workflow:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>GitHub Integration:</strong> Connect a repository for automated builds on git commit.</li>
            <li><strong>Root Dockerfile:</strong> Provide a custom Dockerfile within your repository for full build control.</li>
            <li><strong>Pre-Built OCI Image:</strong> Deploy directly from Docker Hub, GitHub Packages (GHCR), or a private container registry.</li>
          </ul>
        </section>

        <section id="setup-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Application Setup Steps
          </h2>
          <Steps
            steps={[
              {
                title: 'Open App Hosting Drawer',
                content: <p>Go to <strong>Console &gt; App Hosting</strong> and click <strong>Create Application</strong>.</p>,
              },
              {
                title: 'Set Unique Application Name',
                content: <p>Choose a name such as <InlineCode>api-gateway-prod</InlineCode>. This generates an initial <InlineCode>.aicapps.io</InlineCode> staging URL.</p>,
              },
              {
                title: 'Link Source Repository',
                content: <p>Select your authorized GitHub organization and repository from the dropdown picker.</p>,
              },
              {
                title: 'Choose Resource Profile',
                content: <p>Select the RAM and CPU allocation for your runtime container.</p>,
              },
            ]}
          />
        </section>

        <section id="resource-sizing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Container Resource Sizing
          </h2>
          <Table
            columns={[
              { key: 'plan', header: 'Container Tier' },
              { key: 'cpu', header: 'Dedicated CPU' },
              { key: 'memory', header: 'RAM' },
              { key: 'concurrency', header: 'Max Concurrency' },
            ]}
            data={[
              { plan: 'Starter', cpu: '0.5 vCPU', memory: '512 MB', concurrency: '50 concurrent HTTP connections' },
              { plan: 'Standard', cpu: '1.0 vCPU', memory: '2 GB', concurrency: '250 concurrent HTTP connections' },
              { plan: 'Performance', cpu: '2.0 vCPU', memory: '4 GB', concurrency: '1,000 concurrent HTTP connections' },
            ]}
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Creation Issues
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Repository list empty:</strong> Ensure you have authorized the AIC Cloud GitHub application on the specific organization owning the repository.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Connect GitHub Repository', href: '/docs/user/app-hosting/connect-github', description: 'Configure GitHub authorization.' },
            { title: 'Configure Build Settings', href: '/docs/user/app-hosting/build-settings', description: 'Setup build commands.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/connect-github': {
    slug: '/docs/user/app-hosting/connect-github',
    section: 'user',
    category: 'App Hosting',
    title: 'Connect GitHub Repository',
    description:
      'Authorize the official AIC Cloud GitHub App, select repository access scopes, and configure production and preview branch triggers.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'authorization-flow', title: 'GitHub App Authorization Flow', level: 2 },
      { id: 'branch-mapping', title: 'Production & Preview Branch Mapping', level: 2 },
      { id: 'security-permissions', title: 'GitHub Permission Boundaries', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting GitHub Webhooks', level: 2 },
    ],
    previous: {
      title: 'Create an Application',
      href: '/docs/user/app-hosting/create-app',
    },
    next: {
      title: 'Configure Build Settings',
      href: '/docs/user/app-hosting/build-settings',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="authorization-flow" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            GitHub App Authorization Flow
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Connecting GitHub utilizes the modern GitHub App protocol rather than broad personal access tokens:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Click <strong>Connect GitHub</strong> inside the AIC Cloud console.</li>
            <li>Select your personal account or corporate GitHub Organization.</li>
            <li>Choose <strong>All Repositories</strong> or restrict access to <strong>Only select repositories</strong>.</li>
            <li>Confirm permissions. GitHub redirects you back to AIC Cloud with your authenticated repository catalog.</li>
          </ol>
        </section>

        <section id="branch-mapping" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Production & Preview Branch Mapping
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Configure how Git branches map to deployment domains:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Production Branch:</strong> Pushes to <InlineCode>main</InlineCode> automatically build and deploy to your primary custom domain.</li>
            <li><strong>Pull Request Previews:</strong> Pull requests generate isolated preview URLs (e.g. <InlineCode>pr-42.myapp.aicapps.io</InlineCode>) for team review.</li>
          </ul>
        </section>

        <section id="security-permissions" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            GitHub Permission Boundaries
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            AIC Cloud requests read-only repository contents access and write access to commit statuses (to display green checkmarks on pull requests). We never request administrative or billing permissions on your GitHub account.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting GitHub Webhooks
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Push to branch does not trigger build:</strong> Go to <strong>GitHub &gt; Repository Settings &gt; Webhooks</strong> and verify the AIC Cloud webhook displays a green checkmark without HTTP 504 timeouts.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Configure Build Settings', href: '/docs/user/app-hosting/build-settings', description: 'Setup build commands.' },
            { title: 'Environment Variables', href: '/docs/user/app-hosting/env-vars', description: 'Inject runtime secrets.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/build-settings': {
    slug: '/docs/user/app-hosting/build-settings',
    section: 'user',
    category: 'App Hosting',
    title: 'Configure Build Settings',
    description:
      'Specify compilation commands, define artifact publish directories, configure Node.js and Python runtime versions, and tune caching.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'standard-build-settings', title: 'Standard Build Configurations', level: 2 },
      { id: 'buildpack-detection', title: 'Automatic Framework Presets', level: 2 },
      { id: 'dependency-caching', title: 'Build Cache Optimization', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Build Failures', level: 2 },
    ],
    previous: {
      title: 'Connect GitHub Repository',
      href: '/docs/user/app-hosting/connect-github',
    },
    next: {
      title: 'Environment Variables',
      href: '/docs/user/app-hosting/env-vars',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="standard-build-settings" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Standard Build Configurations
          </h2>
          <Table
            columns={[
              { key: 'setting', header: 'Setting Property' },
              { key: 'sample', header: 'Example Value' },
              { key: 'description', header: 'Purpose' },
            ]}
            data={[
              { setting: 'Root Directory', sample: './ or /apps/web', description: 'Specifies the sub-folder containing package.json or requirements.txt in a monorepo.' },
              { setting: 'Build Command', sample: 'npm run build', description: 'Command executed in the sandbox to compile production code.' },
              { setting: 'Output Directory', sample: 'dist or .next', description: 'Folder containing finalized static HTML, JS, and server bundle output.' },
              { setting: 'Install Command', sample: 'npm ci --legacy-peer-deps', description: 'Custom dependency resolution command.' },
            ]}
          />
        </section>

        <section id="buildpack-detection" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automatic Framework Presets
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If your repository includes standard framework config files (<InlineCode>next.config.js</InlineCode>, <InlineCode>vite.config.ts</InlineCode>, or <InlineCode>pyproject.toml</InlineCode>), AIC Cloud auto-fills optimal build settings:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Next.js:</strong> Build <InlineCode>next build</InlineCode>, Output <InlineCode>.next</InlineCode></li>
            <li><strong>Vite / React:</strong> Build <InlineCode>vite build</InlineCode>, Output <InlineCode>dist</InlineCode></li>
            <li><strong>FastAPI:</strong> Build <InlineCode>pip install -r requirements.txt</InlineCode>, Start <InlineCode>uvicorn main:app --host 0.0.0.0 --port $PORT</InlineCode></li>
          </ul>
        </section>

        <section id="dependency-caching" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Build Cache Optimization
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            AIC Cloud caches <InlineCode>node_modules</InlineCode>, pip wheels, and compiler caches between builds. Typical repeat deployments build in under 20 seconds.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Build Failures
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Command not found: pnpm&rdquo;:</strong> If using pnpm, ensure <InlineCode>packageManager</InlineCode> is specified in your <InlineCode>package.json</InlineCode> (e.g. <InlineCode>&quot;packageManager&quot;: &quot;pnpm@9.0.0&quot;</InlineCode>).</li>
            <li><strong>Out of Memory during build:</strong> Monorepos with extensive TypeScript checks can trigger heap limits. Append <InlineCode>NODE_OPTIONS=--max_old_space_size=4096</InlineCode> in Environment Variables.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Environment Variables', href: '/docs/user/app-hosting/env-vars', description: 'Configure runtime secrets.' },
            { title: 'Deploy an Application', href: '/docs/user/app-hosting/deploy', description: 'Trigger continuous deployments.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/env-vars': {
    slug: '/docs/user/app-hosting/env-vars',
    section: 'user',
    category: 'App Hosting',
    title: 'Environment Variables & Secrets',
    description:
      'Manage encrypted runtime configuration, inject API keys, configure environment scopes, and bulk-import .env file configurations.',
    badge: 'Security',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'managing-secrets', title: 'Managing Encrypted Secrets', level: 2 },
      { id: 'environment-scoping', title: 'Environment Scoping (Prod vs Preview)', level: 2 },
      { id: 'dotenv-bulk-import', title: 'Bulk .env Import Workflow', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Missing Environment Variables', level: 2 },
    ],
    previous: {
      title: 'Configure Build Settings',
      href: '/docs/user/app-hosting/build-settings',
    },
    next: {
      title: 'Deploy an Application',
      href: '/docs/user/app-hosting/deploy',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="managing-secrets" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Managing Encrypted Secrets
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Environment variables are encrypted at rest using AES-256-GCM and injected into your application runtime container upon launch. Variable values are automatically masked in build logs to prevent accidental credential leakage.
          </p>
        </section>

        <section id="environment-scoping" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Environment Scoping (Prod vs Preview)
          </h2>
          <Table
            columns={[
              { key: 'scope', header: 'Variable Scope' },
              { key: 'target', header: 'Active Environment' },
              { key: 'example', header: 'Typical Use Case' },
            ]}
            data={[
              { scope: 'Production', target: 'Production custom domain builds', example: 'Production database connection strings and live Stripe API keys' },
              { scope: 'Preview', target: 'Pull request staging containers', example: 'Sandbox databases, mock payment gateways, test credentials' },
              { scope: 'All Environments', target: 'Every deployment branch', example: 'Public feature flags, logging levels, Sentry DSN' },
            ]}
          />
        </section>

        <section id="dotenv-bulk-import" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Bulk .env Import Workflow
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Under <strong>App Hosting &gt; [App] &gt; Environment Variables</strong>, click <strong>Import .env</strong> to paste plaintext key-value blocks. AIC Cloud parses comments, strips whitespace, and encrypts secrets instantaneously.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Missing Environment Variables
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Frontend cannot read variable:</strong> Frameworks like Vite require public client variables to start with <InlineCode>VITE_</InlineCode> (or <InlineCode>NEXT_PUBLIC_</InlineCode> in Next.js) to bundle them into browser code.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Deploy an Application', href: '/docs/user/app-hosting/deploy', description: 'Trigger production release.' },
            { title: 'Manage Deployments', href: '/docs/user/app-hosting/manage-deployments', description: 'Rollback deployments.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/deploy': {
    slug: '/docs/user/app-hosting/deploy',
    section: 'user',
    category: 'App Hosting',
    title: 'Deploy an Application',
    description:
      'Trigger deployments via Git commits, execute manual console builds, monitor live compile outputs, and perform zero-downtime rolls.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'triggering-deployments', title: 'Triggering Deployments', level: 2 },
      { id: 'zero-downtime-switching', title: 'Zero-Downtime Traffic Switching', level: 2 },
      { id: 'live-build-streaming', title: 'Live Build Log Streaming', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Deployment Halts', level: 2 },
    ],
    previous: {
      title: 'Environment Variables',
      href: '/docs/user/app-hosting/env-vars',
    },
    next: {
      title: 'Manage Deployments',
      href: '/docs/user/app-hosting/manage-deployments',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="triggering-deployments" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Triggering Deployments
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Deployments can be executed through multiple mechanisms:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Automatic Git Webhook:</strong> Push commits to your configured production branch.</li>
            <li><strong>Manual Redeploy:</strong> Navigate to <strong>Deployments &gt; Redeploy</strong> to rebuild with the existing cache or trigger a clean build.</li>
            <li><strong>Deploy Hook URL:</strong> Trigger automated builds from external CI pipelines (GitHub Actions, GitLab CI) using a secret HTTP POST hook.</li>
          </ul>
        </section>

        <section id="zero-downtime-switching" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Zero-Downtime Traffic Switching
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Our ingress proxies maintain active HTTP sessions on older containers while routing new requests to the verified deployment. No requests are dropped during the cutover.
          </p>
        </section>

        <section id="live-build-streaming" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Live Build Log Streaming
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Watch build execution in real time:
          </p>
          <CodeBlock
            code={`[10:14:02] Fetching source from GitHub commit c48a19b...
[10:14:04] Restoring build cache for node_modules...
[10:14:07] Executing 'npm run build'...
[10:14:15] Build finished successfully in 8.2s.
[10:14:16] Probing container HTTP /healthz endpoint...
[10:14:17] Health check 200 OK. Cutover complete.`}
            language="bash"
            filename="Build Logs"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Deployment Halts
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Health check timed out:</strong> Ensure your application listens on port <InlineCode>process.env.PORT</InlineCode> or <InlineCode>8080</InlineCode> and responds to HTTP GET requests with status 200 within 30 seconds.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Manage Deployments', href: '/docs/user/app-hosting/manage-deployments', description: 'Rollback releases.' },
            { title: 'Custom Domains', href: '/docs/user/app-hosting/custom-domains', description: 'Configure custom domains.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/manage-deployments': {
    slug: '/docs/user/app-hosting/manage-deployments',
    section: 'user',
    category: 'App Hosting',
    title: 'Manage Deployments & Rollbacks',
    description:
      'Inspect previous release versions, perform instant rollbacks, stream runtime stdout logs, and manage horizontal container scaling.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'deployment-history', title: 'Deployment History & Audit Log', level: 2 },
      { id: 'instant-rollbacks', title: 'Instant Rollbacks', level: 2 },
      { id: 'runtime-logs', title: 'Runtime Logs & Container Telemetry', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Rollback Discrepancies', level: 2 },
    ],
    previous: {
      title: 'Deploy an Application',
      href: '/docs/user/app-hosting/deploy',
    },
    next: {
      title: 'Custom Domains',
      href: '/docs/user/app-hosting/custom-domains',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="deployment-history" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Deployment History & Audit Log
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every build generates an immutable deployment artifact linked to its Git commit hash, committer name, build duration, and status.
          </p>
        </section>

        <section id="instant-rollbacks" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Instant Rollbacks
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If a newly released build exhibits runtime errors, rollback to a prior version without recompiling:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Go to <strong>App Hosting &gt; [App] &gt; Deployments</strong>.</li>
            <li>Locate the last known stable deployment.</li>
            <li>Click <strong>Actions &gt; Rollback to this Deployment</strong>.</li>
            <li>Ingress routers redirect traffic to the cached container within 5 seconds.</li>
          </ol>
        </section>

        <section id="runtime-logs" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Runtime Logs & Container Telemetry
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Stream live server outputs and filter by log level (INFO, WARN, ERROR) to debug runtime exceptions in production.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Rollback Discrepancies
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Rollback succeeds but errors persist:</strong> If your deployment introduced backward-incompatible database schema migrations, rollbacks may require running database migration down-scripts.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Custom Domains', href: '/docs/user/app-hosting/custom-domains', description: 'Configure custom domains.' },
            { title: 'Troubleshooting App Hosting', href: '/docs/user/app-hosting/troubleshooting', description: 'Solve hosting errors.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/custom-domains': {
    slug: '/docs/user/app-hosting/custom-domains',
    section: 'user',
    category: 'App Hosting',
    title: 'Custom Domains & SSL',
    description:
      'Map custom apex domains and subdomains, configure DNS CNAME/A records, and manage automated Let\'s Encrypt SSL certificates.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'dns-records', title: 'DNS Configuration Records', level: 2 },
      { id: 'adding-domain-steps', title: 'Adding a Domain in Console', level: 2 },
      { id: 'ssl-certificates', title: 'Automatic SSL Certificate Provisioning', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting DNS Verification', level: 2 },
    ],
    previous: {
      title: 'Manage Deployments',
      href: '/docs/user/app-hosting/manage-deployments',
    },
    next: {
      title: 'Troubleshooting App Hosting',
      href: '/docs/user/app-hosting/troubleshooting',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="dns-records" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            DNS Configuration Records
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Point your DNS records to the AIC Cloud edge network:
          </p>
          <Table
            columns={[
              { key: 'type', header: 'Record Type' },
              { key: 'name', header: 'Host / Name' },
              { key: 'target', header: 'Target Value' },
              { key: 'purpose', header: 'Configuration' },
            ]}
            data={[
              { type: 'CNAME', name: 'app or www', target: 'cname.aicapps.io', purpose: 'Standard subdomains (e.g. app.yourcompany.com)' },
              { type: 'A', name: '@ (Apex Domain)', target: '198.51.100.25', purpose: 'Root apex domains (e.g. yourcompany.com)' },
            ]}
          />
          <DnsDishVisual />
        </section>

        <section id="adding-domain-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Adding a Domain in Console
          </h2>
          <Steps
            steps={[
              {
                title: 'Enter Domain Name',
                content: <p>Go to <strong>App Hosting &gt; Settings &gt; Custom Domains</strong> and enter your domain name.</p>,
              },
              {
                title: 'Create DNS Records',
                content: <p>Open your DNS provider (Cloudflare, GoDaddy, AWS Route 53) and add the CNAME or A record specified above.</p>,
              },
              {
                title: 'Verify DNS Propagation',
                content: <p>Click <strong>Verify Records</strong>. Our edge network tests global DNS propagation and verifies ownership.</p>,
              },
            ]}
          />
        </section>

        <section id="ssl-certificates" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automatic SSL Certificate Provisioning
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Once DNS records resolve, AIC Cloud automatically provisions a Let&apos;s Encrypt TLS certificate. Certificates renew automatically 30 days prior to expiration.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting DNS Verification
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;DNS verification pending&rdquo;:</strong> DNS propagation can take up to 2 hours depending on your registrar&apos;s TTL setting.</li>
            <li><strong>Cloudflare Proxy Error (Error 525 / SSL Handshake):</strong> If using Cloudflare DNS, set encryption mode to <strong>Full (Strict)</strong>.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Troubleshooting App Hosting', href: '/docs/user/app-hosting/troubleshooting', description: 'Solve hosting errors.' },
            { title: 'Object Storage Overview', href: '/docs/user/storage/introduction', description: 'Forthcoming storage features.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/app-hosting/troubleshooting': {
    slug: '/docs/user/app-hosting/troubleshooting',
    section: 'user',
    category: 'App Hosting',
    title: 'Troubleshooting App Hosting',
    description:
      'Diagnose failed container builds, resolve port binding crashes, debug environment variable loading, and fix SSL handshakes.',
    badge: 'Troubleshooting',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'build-failures', title: 'Build Failures & Missing Packages', level: 2 },
      { id: 'port-binding-errors', title: 'Port Binding & Health Check Failures', level: 2 },
      { id: 'crashed-containers', title: 'Crashed Containers & Exit Codes', level: 2 },
      { id: 'ssl-handshake-issues', title: 'SSL Handshake & HTTPS Redirections', level: 2 },
    ],
    previous: {
      title: 'Custom Domains',
      href: '/docs/user/app-hosting/custom-domains',
    },
    next: {
      title: 'Object Storage Overview',
      href: '/docs/user/storage/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="build-failures" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Build Failures & Missing Packages
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If builds fail during <InlineCode>npm ci</InlineCode> or <InlineCode>npm run build</InlineCode>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Ensure required dependencies are listed under <InlineCode>dependencies</InlineCode> in <InlineCode>package.json</InlineCode>, not only under local developer tooling.</li>
            <li>Lockfile discrepancies between <InlineCode>package-lock.json</InlineCode> and <InlineCode>package.json</InlineCode> will cause <InlineCode>npm ci</InlineCode> to abort. Regenerate your lockfile locally.</li>
          </ul>
        </section>

        <section id="port-binding-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Port Binding & Health Check Failures
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Hosted applications must bind to the dynamic <InlineCode>PORT</InlineCode> environment variable provided by AIC Cloud:
          </p>
          <CodeBlock
            code={`// Node.js Express example
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log(\`Server listening on port \${port}\`);
});`}
            language="javascript"
            filename="server.js"
          />
          <Callout variant="warning" title="Avoid Binding to localhost">
            Never bind your listener to <InlineCode>127.0.0.1</InlineCode> (localhost). The ingress edge proxy cannot route traffic into loopback adapters; always bind to <InlineCode>0.0.0.0</InlineCode>.
          </Callout>
        </section>

        <section id="crashed-containers" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Crashed Containers & Exit Codes
          </h2>
          <Table
            columns={[
              { key: 'code', header: 'Exit Code' },
              { key: 'meaning', header: 'Underlying Root Cause' },
              { key: 'resolution', header: 'Resolution Strategy' },
            ]}
            data={[
              { code: 'Exit Code 1', meaning: 'Uncaught application runtime exception', resolution: 'Inspect runtime logs for unhandled JavaScript promise rejections or Python Tracebacks.' },
              { code: 'Exit Code 137', meaning: 'Container terminated due to Out-Of-Memory (OOM)', resolution: 'Scale container memory plan tier under App Settings.' },
              { code: 'Exit Code 143', meaning: 'Graceful SIGTERM signal timeout', resolution: 'Ensure server closes database connections promptly during graceful shutdown.' },
            ]}
          />
        </section>

        <section id="ssl-handshake-issues" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            SSL Handshake & HTTPS Redirections
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If your domain returns <InlineCode>SSL_ERROR_NO_CYPHER_OVERLAP</InlineCode>, the certificate is still pending initial ACME challenge verification. Wait 5 minutes and test via <InlineCode>curl -I https://yourdomain.com</InlineCode>.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Custom Domains', href: '/docs/user/app-hosting/custom-domains', description: 'DNS configuration.' },
            { title: 'Object Storage Overview', href: '/docs/user/storage/introduction', description: 'Forthcoming storage features.' },
          ]}
        />
      </div>
    ),
  },
}
