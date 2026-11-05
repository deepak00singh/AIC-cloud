import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/common'
import { Steps } from '@/components/documentation/Steps'
import { Table } from '@/components/documentation/Table'
import { ForthcomingStorageNotice, RelatedLinks } from '../common'
import { Database, Shield, Zap } from 'lucide-react'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { StorageVaultDiagram } from '@/components/illustrations/StorageVaultDiagram'

export const objectStoragePages: Record<string, DocPageData> = {
  '/docs/user/storage/introduction': {
    slug: '/docs/user/storage/introduction',
    section: 'user',
    category: 'Object Storage',
    title: 'Object Storage Overview',
    description:
      'Architectural preview of AIC Cloud S3-compatible distributed object storage providing high durability, low egress fees, and multi-region replication.',
    badge: 'Coming Soon',
    isComingSoon: true,
    lastUpdated: 'November 2026',
    toc: [
      { id: 'service-status', title: 'Availability Status', level: 2 },
      { id: 'planned-architecture', title: 'Planned Storage Architecture', level: 2 },
      { id: 's3-api-compatibility', title: 'S3 API Compatibility', level: 2 },
      { id: 'early-access', title: 'Early Access & Migration Support', level: 2 },
    ],
    previous: {
      title: 'Troubleshooting App Hosting',
      href: '/docs/user/app-hosting/troubleshooting',
    },
    next: {
      title: 'Create a Storage Bucket',
      href: '/docs/user/storage/create-bucket',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/cloud-storage.jpg"
          imageAlt="Distributed Cloud Object Storage"
          badgeText="Storage Architecture Preview"
          badgeColor="amber"
          title="Distributed Object Storage Overview"
          description="High-durability, S3-compatible distributed storage engineered for model weights, dataset repositories, and unstructured asset delivery."
          stats={[
            { label: 'Compatibility', value: 'AWS S3 REST API' },
            { label: 'Replication', value: 'Multi-Region Mesh' },
            { label: 'Status', value: 'Preview Feature' },
          ]}
        />

        <ForthcomingStorageNotice />

        <section id="service-status" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Storage Tiers &amp; Pricing
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            AIC Cloud Object Storage provides 100% AWS S3-compatible endpoints at predictable monthly rates with zero hidden API request charges:
          </p>
          <Table
            columns={[
              { key: 'tier', header: 'Storage Tier' },
              { key: 'capacity', header: 'Storage Capacity' },
              { key: 'egress', header: 'Included Egress' },
              { key: 'features', header: 'Key Features' },
              { key: 'price', header: 'Monthly Price' },
            ]}
            data={[
              { tier: 'Starter', capacity: '50 GB NVMe Storage', egress: '100 GB / month', features: 'Standard S3 API, Web Console, TLS 1.3', price: '₹199/mo' },
              { tier: 'Growth', capacity: '250 GB NVMe Storage', egress: '500 GB / month', features: 'Object Versioning, Granular IAM, Daily Snapshots', price: '₹499/mo' },
              { tier: 'Scale', capacity: '1 TB (1,000 GB)', egress: '2 TB / month', features: 'Edge CDN Caching, AES-256 At Rest, 99.99% SLA', price: '₹1,499/mo' },
            ]}
          />
        </section>

        <section id="planned-architecture" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Planned Storage Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--color-primary)]" />
                  11 9s Durability
                </CardTitle>
                <CardDescription>
                  Erasure coding distribution across independent availability zones safeguards data against concurrent drive and chassis failures.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[var(--color-primary)]" />
                  Zero Internal Egress
                </CardTitle>
                <CardDescription>
                  Transfer data between AIC compute instances, GPU clusters, and storage buckets without internal egress surcharges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Database className="h-4 w-4 text-[var(--color-primary)]" />
                  S3 Protocol Native
                </CardTitle>
                <CardDescription>
                  Drop-in replacement for AWS S3 CLI, Boto3, AWS SDK for JavaScript, and MinIO storage tooling.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <StorageVaultDiagram />
        </section>

        <section id="s3-api-compatibility" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            S3 API Compatibility
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Upon release, you will be able to query storage using existing AWS tools by specifying the custom endpoint:
          </p>
          <CodeBlock
            code={`# Sample AWS CLI usage with official AIC endpoint
aws s3 ls s3://my-dataset-bucket/ \\
  --endpoint-url https://storage.aiccloud.in`}
            language="bash"
            filename="Terminal (Sample)"
          />
        </section>

        <section id="early-access" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Early Access & Migration Support
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Engineering teams with large dataset migration requirements (&gt; 50 TB) can request early access by contacting our technical solutions architects.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Create a Storage Bucket', href: '/docs/user/storage/create-bucket', description: 'Bucket provisioning specifications.' },
            { title: 'Upload Files', href: '/docs/user/storage/upload-files', description: 'Upload workflow preview.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/storage/create-bucket': {
    slug: '/docs/user/storage/create-bucket',
    section: 'user',
    category: 'Object Storage',
    title: 'Create a Storage Bucket',
    description:
      'Planned procedures for provisioning distributed object storage buckets, configuring global naming rules, and selecting replication policies.',
    badge: 'Coming Soon',
    isComingSoon: true,
    lastUpdated: 'November 2026',
    toc: [
      { id: 'service-status', title: 'Availability Status', level: 2 },
      { id: 'naming-rules', title: 'Bucket Naming Constraints', level: 2 },
      { id: 'planned-creation-steps', title: 'Planned Bucket Creation Steps', level: 2 },
      { id: 'access-control-lists', title: 'Access Control Lists (ACLs)', level: 2 },
    ],
    previous: {
      title: 'Object Storage Overview',
      href: '/docs/user/storage/introduction',
    },
    next: {
      title: 'Upload Files',
      href: '/docs/user/storage/upload-files',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/cloud-storage.jpg"
          imageAlt="Distributed Cloud Object Storage"
          badgeText="Storage Architecture Preview"
          badgeColor="amber"
          title="Distributed Object Storage Overview"
          description="High-durability, S3-compatible distributed storage engineered for model weights, dataset repositories, and unstructured asset delivery."
          stats={[
            { label: 'Compatibility', value: 'AWS S3 REST API' },
            { label: 'Replication', value: 'Multi-Region Mesh' },
            { label: 'Status', value: 'Preview Feature' },
          ]}
        />

        <ForthcomingStorageNotice />

        <section id="service-status" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Availability Status
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Bucket creation is a forthcoming capability. This document describes the planned workflow and naming conventions.
          </p>
        </section>

        <section id="naming-rules" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Bucket Naming Constraints
          </h2>
          <Table
            columns={[
              { key: 'rule', header: 'Naming Constraint' },
              { key: 'specification', header: 'Standard Specification' },
            ]}
            data={[
              { rule: 'Uniqueness', specification: 'Globally unique across the entire AIC Cloud platform' },
              { rule: 'Length', specification: 'Between 3 and 63 characters' },
              { rule: 'Character Set', specification: 'Lowercase letters, numbers, and hyphens only' },
              { rule: 'Formatting', specification: 'Must begin and end with an alphanumeric character; no consecutive hyphens' },
            ]}
          />
        </section>

        <section id="planned-creation-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Planned Bucket Creation Steps
          </h2>
          <Steps
            steps={[
              {
                title: 'Open Storage Console',
                content: <p>Navigate to <strong>Console &gt; Storage &gt; Buckets</strong> and click <strong>Create Bucket</strong>.</p>,
              },
              {
                title: 'Specify Global Bucket Name',
                content: <p>Enter a unique identifier such as <InlineCode>company-backups-2027</InlineCode>.</p>,
              },
              {
                title: 'Choose Primary Storage Region',
                content: <p>Select the geographical zone nearest to your primary data ingestion sources.</p>,
              },
              {
                title: 'Configure Default Encryption',
                content: <p>All buckets enforce server-side AES-256 encryption by default at zero additional fee.</p>,
              },
            ]}
          />
        </section>

        <section id="access-control-lists" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Access Control Lists (ACLs)
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Buckets will default to <strong>Private</strong>. Public read access requires explicit administrator confirmation to prevent accidental public disclosure of proprietary assets.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Upload Files', href: '/docs/user/storage/upload-files', description: 'Upload workflow preview.' },
            { title: 'Manage Objects', href: '/docs/user/storage/manage-objects', description: 'Pre-signed URLs and lifecycle.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/storage/upload-files': {
    slug: '/docs/user/storage/upload-files',
    section: 'user',
    category: 'Object Storage',
    title: 'Upload Files & Data Ingestion',
    description:
      'Planned instructions for uploading objects via console drag-and-drop, AWS S3 CLI compatibility, and multi-part upload streaming.',
    badge: 'Coming Soon',
    isComingSoon: true,
    lastUpdated: 'November 2026',
    toc: [
      { id: 'service-status', title: 'Availability Status', level: 2 },
      { id: 'cli-upload-examples', title: 'Planned CLI Upload Methods', level: 2 },
      { id: 'multipart-uploads', title: 'Multipart Uploads for Large Datasets', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Transfer Timeouts', level: 2 },
    ],
    previous: {
      title: 'Create a Storage Bucket',
      href: '/docs/user/storage/create-bucket',
    },
    next: {
      title: 'Manage Objects',
      href: '/docs/user/storage/manage-objects',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/cloud-storage.jpg"
          imageAlt="Distributed Cloud Object Storage"
          badgeText="Storage Architecture Preview"
          badgeColor="amber"
          title="Distributed Object Storage Overview"
          description="High-durability, S3-compatible distributed storage engineered for model weights, dataset repositories, and unstructured asset delivery."
          stats={[
            { label: 'Compatibility', value: 'AWS S3 REST API' },
            { label: 'Replication', value: 'Multi-Region Mesh' },
            { label: 'Status', value: 'Preview Feature' },
          ]}
        />

        <ForthcomingStorageNotice />

        <section id="service-status" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Availability Status
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            File upload endpoints are currently in developer testing. The code samples below represent planned interface specifications.
          </p>
        </section>

        <section id="cli-upload-examples" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Planned CLI Upload Methods
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Synchronize local folders to an AIC storage bucket using the standard AWS CLI:
          </p>
          <CodeBlock
            code={`# Sample sync command for AIC Object Storage
aws s3 sync ./training-data s3://my-ml-bucket/data/ \\
  --endpoint-url https://storage.aiccloud.in`}
            language="bash"
            filename="Terminal (Sample)"
          />
        </section>

        <section id="multipart-uploads" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Multipart Uploads for Large Datasets
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Files exceeding 100 MB will automatically utilize S3 multipart uploads, chunking payloads into 16 MB blocks to permit parallel thread transfers and automatic retry on packet drops.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Transfer Timeouts
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Upon release, upload integrity will be verified via client-side MD5 / SHA-256 checksum headers (<InlineCode>Content-MD5</InlineCode>) to guarantee corrupt objects are rejected before storage commit.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Manage Objects', href: '/docs/user/storage/manage-objects', description: 'Lifecycle rules and versioning.' },
            { title: 'Developer Overview', href: '/docs/developers/introduction', description: 'Explore developer APIs.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/storage/manage-objects': {
    slug: '/docs/user/storage/manage-objects',
    section: 'user',
    category: 'Object Storage',
    title: 'Manage Objects & Lifecycle Rules',
    description:
      'Planned features for pre-signed download URLs, object versioning, expiration lifecycle policies, and metadata tagging.',
    badge: 'Coming Soon',
    isComingSoon: true,
    lastUpdated: 'November 2026',
    toc: [
      { id: 'service-status', title: 'Availability Status', level: 2 },
      { id: 'presigned-urls', title: 'Pre-Signed URL Generation', level: 2 },
      { id: 'object-versioning', title: 'Object Versioning & Retention', level: 2 },
      { id: 'lifecycle-policies', title: 'Lifecycle Expiration Rules', level: 2 },
    ],
    previous: {
      title: 'Upload Files',
      href: '/docs/user/storage/upload-files',
    },
    next: {
      title: 'Developer Platform Introduction',
      href: '/docs/developers/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/cloud-storage.jpg"
          imageAlt="Distributed Cloud Object Storage"
          badgeText="Storage Architecture Preview"
          badgeColor="amber"
          title="Distributed Object Storage Overview"
          description="High-durability, S3-compatible distributed storage engineered for model weights, dataset repositories, and unstructured asset delivery."
          stats={[
            { label: 'Compatibility', value: 'AWS S3 REST API' },
            { label: 'Replication', value: 'Multi-Region Mesh' },
            { label: 'Status', value: 'Preview Feature' },
          ]}
        />

        <ForthcomingStorageNotice />

        <section id="service-status" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Availability Status
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Lifecycle automation and pre-signed URL capabilities are planned features.
          </p>
        </section>

        <section id="presigned-urls" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Pre-Signed URL Generation
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Grant temporary, cryptographically signed read or write access to private objects without disclosing your API secret credentials:
          </p>
          <CodeBlock
            code={`# Planned Python Boto3 pre-signed URL generation example
url = s3_client.generate_presigned_url(
    'get_object',
    Params={'Bucket': 'my-bucket', 'Key': 'dataset.tar.gz'},
    ExpiresIn=3600  # 1 hour TTL
)`}
            language="python"
            filename="Sample Python"
          />
        </section>

        <section id="object-versioning" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Object Versioning & Retention
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Enabling versioning preserves prior iterations of an object when overwritten or deleted, safeguarding against accidental deletions and ransomware tampering.
          </p>
        </section>

        <section id="lifecycle-policies" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Lifecycle Expiration Rules
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Configure automated rules to expire temporary log objects after 30 days or transition older backup archives to lower-cost cold storage tiers.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Object Storage Overview', href: '/docs/user/storage/introduction', description: 'Architecture preview.' },
            { title: 'Developer Platform Introduction', href: '/docs/developers/introduction', description: 'Explore developer APIs.' },
          ]}
        />
      </div>
    ),
  },
}
