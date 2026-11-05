import type { DocPageData } from '@/types/docs'
import {
  Callout,
  InlineCode,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Table } from '@/components/documentation/Table'
import { Tabs } from '@/components/documentation/Tabs'
import { RelatedLinks } from '../common'
import { Server, Cpu, Cloud, CreditCard } from 'lucide-react'
import { VpsVirtualizationDiagram } from '@/components/illustrations/VpsVirtualizationDiagram'
import { GpuArchitectureDiagram } from '@/components/illustrations/GpuArchitectureDiagram'
import { AppHostingDeploymentDiagram } from '@/components/illustrations/AppHostingDeploymentDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { VisualProductCard } from '@/components/documentation/VisualProductCard'
import { DatacenterTopologyVisual } from '@/components/hairline/DatacenterTopologyVisual'
import { CloudMetricsPlotVisual } from '@/components/hairline/CloudMetricsPlotVisual'
import { SecurityLockersVisual } from '@/components/hairline/SecurityLockersVisual'

export const gettingStartedPages: Record<string, DocPageData> = {
  '/docs/user/introduction': {
    slug: '/docs/user/introduction',
    section: 'user',
    category: 'Getting Started',
    title: 'Introduction to AIC Cloud',
    description:
      'Discover the core architecture, high-performance computing capabilities, and foundational concepts powering AIC Cloud infrastructure.',
    badge: 'Overview',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'core-platform-pillars', title: 'Core Platform Pillars', level: 2 },
      { id: 'infrastructure-architecture', title: 'Hardware & Virtualization Architecture', level: 2 },
      { id: 'prerequisites', title: 'Prerequisites & Access', level: 2 },
      { id: 'onboarding-roadmap', title: 'Onboarding Roadmap', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting & Support', level: 2 },
    ],
    next: {
      title: 'Create an Account',
      href: '/docs/user/getting-started/create-account',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/datacenter-hero.jpg"
          imageAlt="AIC Cloud Enterprise Infrastructure"
          badgeText="Customer & Infrastructure Docs"
          badgeColor="primary"
          title="AIC Cloud Infrastructure Platform"
          description="High-performance KVM virtual private servers, bare metal dedicated clusters, NVIDIA H100 AI supercomputing, and automated Git-to-PaaS application hosting."
          stats={[
            { label: 'Hypervisor', value: 'Type-1 KVM' },
            { label: 'Accelerators', value: 'H100 SXM5' },
            { label: 'Storage', value: 'NVMe Gen4/Gen5' },
            { label: 'Network', value: '100Gbps Mesh' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud is a modern cloud computing platform designed for developers, engineering teams, and machine learning researchers. It provides instant access to high-performance virtual private servers, single-tenant dedicated hardware, high-throughput GPU accelerators, and automated containerized application hosting.
        </p>

        <section id="core-platform-pillars" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Core Platform Pillars
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Explore the foundational computing modules offered across our global data centers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            <VisualProductCard
              to="/docs/user/vps/introduction"
              imageSrc="/images/vps-3d.jpg"
              imageAlt="Cloud VPS Server Blade"
              badge="KVM VPS"
              badgeVariant="primary"
              title="Cloud VPS"
              description="Deploy flexible virtual private servers powered by dedicated CPU cores, enterprise NVMe storage, and isolated VPC networks."
              tags={['KVM', 'NVMe', 'Dedicated vCPU']}
              ctaText="Explore VPS"
            />
            <VisualProductCard
              to="/docs/user/dedicated-servers/introduction"
              imageSrc="/images/dedicated-3d.jpg"
              imageAlt="Dedicated Bare Metal Server Rack"
              badge="Bare Metal"
              badgeVariant="primary"
              title="Dedicated Servers"
              description="Single-tenant bare metal hardware providing bare-metal performance, hardware RAID, and complete root isolation."
              tags={['Single-Tenant', 'AMD EPYC', 'IPMI']}
              ctaText="Explore Dedicated"
            />
            <VisualProductCard
              to="/docs/user/gpu/introduction"
              imageSrc="/images/gpu-3d.jpg"
              imageAlt="NVIDIA H100 AI Supercomputer Accelerator"
              badge="NVIDIA H100"
              badgeVariant="purple"
              title="Cloud GPU"
              description="High-throughput accelerator clusters tailored for PyTorch, LLM fine-tuning, computer vision, and distributed inference."
              tags={['H100 SXM5', 'NVLink 4.0', 'PyTorch']}
              ctaText="Explore GPUs"
            />
            <VisualProductCard
              to="/docs/user/app-hosting/introduction"
              imageSrc="/images/app-hosting-3d.jpg"
              imageAlt="Automated Git Deployment CI/CD Pipeline"
              badge="PaaS"
              badgeVariant="emerald"
              title="App Hosting"
              description="Connect your GitHub repository for automated continuous integration, preview environments, custom domains, and SSL."
              tags={['Git Deploy', 'Docker', 'Automatic SSL']}
              ctaText="Explore Hosting"
            />
            <VisualProductCard
              to="/docs/user/storage/introduction"
              imageSrc="/images/storage-3d.jpg"
              imageAlt="Distributed Cloud Object Storage Vault"
              badge="Preview"
              badgeVariant="amber"
              title="Object Storage"
              description="S3-compatible distributed object storage providing high durability and multi-region replication (Forthcoming Service)."
              tags={['S3 Compatible', 'Multi-Region', 'Preview']}
              ctaText="Explore Storage"
            />
          </div>
        </section>

        <section id="infrastructure-architecture" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hardware & Virtualization Architecture
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Explore the underlying hypervisor virtualization, SXM5 NVLink interconnect topologies, and automated blue/green container deployment pipelines:
          </p>
          <div className="pt-2">
            <Tabs
              items={[
                {
                  id: 'vps-stack',
                  label: 'KVM Virtualization Stack',
                  content: <VpsVirtualizationDiagram />,
                },
                {
                  id: 'gpu-mesh',
                  label: 'NVIDIA H100 GPU Fabric',
                  content: <GpuArchitectureDiagram />,
                },
                {
                  id: 'app-hosting',
                  label: 'App Hosting CI/CD Pipeline',
                  content: <AppHostingDeploymentDiagram />,
                },
                {
                  id: 'global-mesh',
                  label: 'Global Anycast Fabric',
                  content: <DatacenterTopologyVisual />,
                },
              ]}
            />
          </div>
        </section>

        <section id="prerequisites" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Prerequisites & Access
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            To use AIC Cloud console and deploy resources, ensure you meet the following baseline requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>A modern web browser supporting WebAssembly and TLS 1.3 (Chrome 110+, Firefox 115+, Safari 16+, or Edge 110+).</li>
            <li>A verified email address for organization communications, alerts, and password resets.</li>
            <li>A valid payment method or billing agreement for compute allocation.</li>
            <li>An OpenSSH client installed on your local workstation for remote server terminal management.</li>
          </ul>
        </section>

        <section id="onboarding-roadmap" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Onboarding Roadmap
          </h2>
          <Steps
            steps={[
              {
                title: 'Register Organization & User Account',
                content: (
                  <p>
                    Follow the registration guide to establish your organization workspace, configure strong credentials, and activate two-factor authentication.
                  </p>
                ),
              },
              {
                title: 'Review Console Dashboard',
                content: (
                  <p>
                    Familiarize yourself with the centralized console navigation, project scoping, and real-time operational telemetry.
                  </p>
                ),
              },
              {
                title: 'Launch Compute Instances',
                content: (
                  <p>
                    Navigate to <InlineCode>Cloud VPS</InlineCode> or <InlineCode>Cloud GPU</InlineCode> to launch your first virtual machines with automated cloud-init setup.
                  </p>
                ),
              },
            ]}
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting & Support
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If you encounter difficulty accessing the portal or experience unexpected console timeouts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Verify your internet connection and ensure corporate proxies permit outbound traffic to port 443.</li>
            <li>Clear browser cookies and session storage if you experience persistent redirection loops.</li>
            <li>Check the platform status indicator in the top navigation bar for maintenance notices.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Create an Account', href: '/docs/user/getting-started/create-account', description: 'Step-by-step account signup instructions.' },
            { title: 'Dashboard Overview', href: '/docs/user/getting-started/dashboard-overview', description: 'Tour the console navigation and telemetry.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/getting-started/create-account': {
    slug: '/docs/user/getting-started/create-account',
    section: 'user',
    category: 'Getting Started',
    title: 'Create an Account',
    description:
      'Step-by-step walkthrough to register a new user profile, verify your email credentials, and configure Multi-Factor Authentication.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'registration-steps', title: 'Registration Steps', level: 2 },
      { id: 'password-policy', title: 'Password Security Policy', level: 2 },
      { id: 'mfa-configuration', title: 'Multi-Factor Authentication (MFA)', level: 2 },
      { id: 'troubleshooting-registration', title: 'Troubleshooting Signup', level: 2 },
    ],
    previous: {
      title: 'Introduction',
      href: '/docs/user/introduction',
    },
    next: {
      title: 'Dashboard Overview',
      href: '/docs/user/getting-started/dashboard-overview',
    },
    content: (
      <div className="space-y-8 text-left">
        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Creating an AIC Cloud account grants you access to the unified cloud console where you can launch virtual servers, orchestrate GPU accelerators, and invite team members into shared organization workspaces.
        </p>

        <section id="registration-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Registration Steps
          </h2>
          <Steps
            steps={[
              {
                title: 'Navigate to the Signup Portal',
                content: (
                  <p>
                    Open the account registration page at <InlineCode>https://aiccloud.in/dashboard</InlineCode> and enter your business or personal email address.
                  </p>
                ),
              },
              {
                title: 'Confirm Verification Email',
                content: (
                  <p>
                    A 6-digit confirmation code will be dispatched to your inbox. Enter the code within 15 minutes to confirm ownership of the email account.
                  </p>
                ),
              },
              {
                title: 'Establish Account Password',
                content: (
                  <p>
                    Create a password adhering to our enterprise security criteria. We recommend using a dedicated password manager to generate an alphanumeric passphrase.
                  </p>
                ),
              },
              {
                title: 'Create Your Primary Organization',
                content: (
                  <p>
                    Enter your company or project workspace name. Resources will be grouped under this primary organization for billing and RBAC management.
                  </p>
                ),
              },
            ]}
          />
        </section>

        <section id="password-policy" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Password Security Policy
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            To safeguard cloud infrastructure against brute-force attacks, passwords must satisfy the following minimum requirements:
          </p>
          <Table
            columns={[
              { key: 'rule', header: 'Security Requirement' },
              { key: 'detail', header: 'Standard' },
            ]}
            data={[
              { rule: 'Minimum Length', detail: 'At least 12 characters' },
              { rule: 'Character Complexity', detail: 'Must include uppercase, lowercase, numbers, and symbols' },
              { rule: 'Breach Screening', detail: 'Checked automatically against known compromised password databases' },
              { rule: 'Common Patterns', detail: 'Sequential patterns and dictionary words are prohibited' },
            ]}
          />
        </section>

        <section id="mfa-configuration" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Multi-Factor Authentication (MFA)
          </h2>
          <SecurityLockersVisual />
          <Callout variant="info" title="Mandatory Security Recommendation">
            Multi-Factor Authentication is strongly recommended for all accounts with compute provisioning privileges.
          </Callout>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            You can pair any Time-based One-Time Password (TOTP) authenticator application (such as Google Authenticator, 1Password, or Bitwarden):
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Go to <strong>Console &gt; Account Settings &gt; Security</strong>.</li>
            <li>Select <strong>Enable Two-Factor Authentication</strong>.</li>
            <li>Scan the displayed QR code with your mobile authenticator app.</li>
            <li>Enter the 6-digit verification token generated by your app.</li>
            <li>Securely store your one-time emergency backup recovery codes in an encrypted vault.</li>
          </ol>
        </section>

        <section id="troubleshooting-registration" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Signup
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Verification email not received:</strong> Inspect your spam/junk folder and ensure your mail server does not block transactional emails from <InlineCode>support@aiccloud.in</InlineCode>.</li>
            <li><strong>Expired verification code:</strong> Verification tokens expire after 15 minutes. Click &ldquo;Resend Code&rdquo; on the signup screen to request a fresh token.</li>
            <li><strong>Account lockout:</strong> Entering an incorrect password 5 times triggers a temporary 15-minute protective cooldown.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Dashboard Overview', href: '/docs/user/getting-started/dashboard-overview', description: 'Tour the management console.' },
            { title: 'Account Management', href: '/docs/user/getting-started/account-management', description: 'Configure profile and RBAC settings.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/getting-started/dashboard-overview': {
    slug: '/docs/user/getting-started/dashboard-overview',
    section: 'user',
    category: 'Getting Started',
    title: 'Dashboard Overview',
    description:
      'A guided tour of the AIC Cloud console navigation, instance monitoring telemetry, organization switching, and resource scoping.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'navigation-structure', title: 'Navigation Structure', level: 2 },
      { id: 'project-scoping', title: 'Organization & Project Scoping', level: 2 },
      { id: 'resource-telemetry', title: 'Resource Telemetry & Alerts', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Console Views', level: 2 },
    ],
    previous: {
      title: 'Create an Account',
      href: '/docs/user/getting-started/create-account',
    },
    next: {
      title: 'Account Management',
      href: '/docs/user/getting-started/account-management',
    },
    content: (
      <div className="space-y-8 text-left">
        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud management dashboard serves as your primary control plane. From a single unified interface, you can monitor global infrastructure health, inspect live resource usage graphs, spin up virtual machines, and manage financial invoices.
        </p>

        <section id="navigation-structure" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Navigation Structure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Server className="h-4 w-4 text-[var(--color-primary)]" />
                  Compute & VPS
                </CardTitle>
                <CardDescription>
                  List, launch, start, stop, snapshot, and rebuild Linux virtual machines and bare-metal nodes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[var(--color-primary)]" />
                  Accelerator Clusters
                </CardTitle>
                <CardDescription>
                  Provision GPU instances, monitor tensor core utilization, and manage shared volume mounts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-[var(--color-primary)]" />
                  App Hosting
                </CardTitle>
                <CardDescription>
                  View live deployment streams, environment variables, build artifacts, and custom domain SSL states.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-[var(--color-primary)]" />
                  Billing & Quotas
                </CardTitle>
                <CardDescription>
                  Track hourly compute consumption, download PDF invoices, and request higher resource quotas.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="project-scoping" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Organization & Project Scoping
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Resources in AIC Cloud are structured hierarchically:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Organization:</strong> The top-level account boundary holding billing credentials and root administrative policies.</li>
            <li><strong>Projects:</strong> Logical sub-environments (e.g. <InlineCode>Production</InlineCode>, <InlineCode>Staging</InlineCode>, <InlineCode>Testing</InlineCode>) that isolate network VPCs, servers, and team access.</li>
          </ul>
        </section>

        <section id="resource-telemetry" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Resource Telemetry & Alerts
          </h2>
          <CloudMetricsPlotVisual />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            The dashboard displays real-time health metrics updated every 15 seconds:
          </p>
          <Table
            columns={[
              { key: 'metric', header: 'Telemetry Metric' },
              { key: 'interval', header: 'Sampling Rate' },
              { key: 'description', header: 'Operational Value' },
            ]}
            data={[
              { metric: 'CPU Utilization', interval: '15 seconds', description: 'Tracks percent processor core consumption across all threads.' },
              { metric: 'Memory Pressure', interval: '30 seconds', description: 'Monitors active RAM allocation versus cached page buffers.' },
              { metric: 'Disk IOPS', interval: '30 seconds', description: 'Calculates read/write operations per second on attached NVMe volumes.' },
              { metric: 'Network Bandwidth', interval: '10 seconds', description: 'Measures inbound/outbound gigabits per second throughput.' },
            ]}
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Console Views
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Metrics graph showing &ldquo;Data unavailable&rdquo;:</strong> Verify that the host instance is running and has completed boot initialization.</li>
            <li><strong>Cannot view specific projects:</strong> Confirm that your account has been assigned adequate RBAC privileges by your workspace administrator.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Account Management', href: '/docs/user/getting-started/account-management', description: 'Manage team seats and security policies.' },
            { title: 'Create a VPS Instance', href: '/docs/user/vps/create-vps', description: 'Launch your first virtual private server.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/getting-started/account-management': {
    slug: '/docs/user/getting-started/account-management',
    section: 'user',
    category: 'Getting Started',
    title: 'Account Management & RBAC',
    description:
      'Manage profile information, configure Role-Based Access Control, invite team members, and oversee billing preferences.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'profile-settings', title: 'Profile Settings', level: 2 },
      { id: 'team-rbac-roles', title: 'Team Members & RBAC Roles', level: 2 },
      { id: 'billing-invoices', title: 'Billing & Invoices', level: 2 },
      { id: 'troubleshooting-permissions', title: 'Troubleshooting Permissions', level: 2 },
    ],
    previous: {
      title: 'Dashboard Overview',
      href: '/docs/user/getting-started/dashboard-overview',
    },
    next: {
      title: 'Cloud VPS Overview',
      href: '/docs/user/vps/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Account management provides administrative tools to regulate access to cloud resources. Through granular Role-Based Access Control (RBAC), organization owners can delegate deployment permissions while restricting access to financial invoices and destructive deletion workflows.
        </p>

        <section id="profile-settings" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Profile Settings
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            From the <strong>Settings &gt; Profile</strong> panel, you can update your display name, primary contact address, and notification preferences. Changes to notification settings take effect immediately across email and console alert channels.
          </p>
        </section>

        <section id="team-rbac-roles" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Team Members & RBAC Roles
          </h2>
          <SecurityLockersVisual />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every user invited to an organization is assigned one of four standard RBAC roles:
          </p>
          <Table
            columns={[
              { key: 'role', header: 'RBAC Role' },
              { key: 'scope', header: 'Permissions & Scope' },
              { key: 'restrictions', header: 'Operational Restrictions' },
            ]}
            data={[
              { role: 'Owner', scope: 'Complete authority over billing, organization deletion, API keys, and all resources', restrictions: 'None' },
              { role: 'Administrator', scope: 'Full operational control over compute instances, network VPCs, and team invitations', restrictions: 'Cannot delete the organization or transfer ownership' },
              { role: 'Developer', scope: 'Provision, start, stop, restart, and SSH into servers; deploy app hosting workloads', restrictions: 'Cannot view invoices or modify organization membership' },
              { role: 'Billing Contact', scope: 'Access invoices, download receipts, and update credit card or payment terms', restrictions: 'Cannot inspect or deploy compute infrastructure' },
            ]}
          />
        </section>

        <section id="billing-invoices" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Billing & Invoices
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            AIC Cloud uses utility metering billed per second of active compute allocation. Invoices are finalized on the 1st day of each calendar month. Automatic payment receipts and itemized PDF statements are stored under <strong>Billing &gt; Invoices</strong>.
          </p>
        </section>

        <section id="troubleshooting-permissions" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Permissions
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;403 Forbidden: Action not permitted&rdquo;:</strong> Contact your organization Owner to verify your account has been assigned the <InlineCode>Developer</InlineCode> or <InlineCode>Administrator</InlineCode> role.</li>
            <li><strong>Pending team invitation:</strong> Invitations expire after 7 days. If a member hasn&apos;t joined, click &ldquo;Resend Invite&rdquo; from the Team settings tab.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Cloud VPS Overview', href: '/docs/user/vps/introduction', description: 'Explore virtual private servers.' },
            { title: 'Dashboard Overview', href: '/docs/user/getting-started/dashboard-overview', description: 'Review console telemetry.' },
          ]}
        />
      </div>
    ),
  },
}
