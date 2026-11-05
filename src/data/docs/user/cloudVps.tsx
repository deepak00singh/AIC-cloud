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
import { RelatedLinks } from '../common'
import { Server, Shield, HardDrive } from 'lucide-react'
import { VpsVirtualizationDiagram } from '@/components/illustrations/VpsVirtualizationDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { VpcNetworkPatchVisual } from '@/components/hairline/VpcNetworkPatchVisual'
import { FirewallSieveVisual } from '@/components/hairline/FirewallSieveVisual'
import { SshTerminalVisual } from '@/components/hairline/SshTerminalVisual'
import { CloudMetricsPlotVisual } from '@/components/hairline/CloudMetricsPlotVisual'
import { VolumeSnapshotFloppyVisual } from '@/components/hairline/VolumeSnapshotFloppyVisual'
import { InspectionLoupeVisual } from '@/components/hairline/InspectionLoupeVisual'

export const cloudVpsPages: Record<string, DocPageData> = {
  '/docs/user/vps/introduction': {
    slug: '/docs/user/vps/introduction',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Cloud VPS Overview',
    description:
      'High-performance virtual private servers powered by KVM virtualization, dedicated vCPU threads, and high-speed NVMe storage.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'vps-architecture', title: 'VPS Infrastructure & Architecture', level: 2 },
      { id: 'recommended-use-cases', title: 'Recommended Use Cases', level: 2 },
      { id: 'baseline-specifications', title: 'Baseline Specifications', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting & Support', level: 2 },
    ],
    previous: {
      title: 'Account Management',
      href: '/docs/user/getting-started/account-management',
    },
    next: {
      title: 'Create a VPS Instance',
      href: '/docs/user/vps/create-vps',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Private KVM virtual servers with 100% dedicated CPU, fast NVMe SSD storage, and free DDoS protection."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4 SSD' },
            { label: 'Network', value: '1 Gbps Uplink' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud Virtual Private Servers (VPS) give you your own private virtual machine with guaranteed CPU cores and fast NVMe SSD storage. Your server runs in an isolated KVM environment, so other users on the host never slow down your apps or databases.
        </p>

        <section id="vps-architecture" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            VPS Infrastructure &amp; Features
          </h2>

          <VpsVirtualizationDiagram />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Server className="h-4 w-4 text-[var(--color-primary)]" />
                  KVM Virtualization
                </CardTitle>
                <CardDescription>
                  100% private virtual machine. Your CPU cores and RAM are reserved exclusively for your workloads.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-[var(--color-primary)]" />
                  NVMe Gen4 Storage
                </CardTitle>
                <CardDescription>
                  High-speed enterprise NVMe SSDs provide instant boot times and fast database read and write speeds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--color-primary)]" />
                  DDoS Protected
                </CardTitle>
                <CardDescription>
                  Free edge protection automatically blocks attacks to keep your websites and servers online.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="recommended-use-cases" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Recommended Use Cases
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Production Web Applications:</strong> Host containerized microservices, Node.js, Python, Ruby, or Go HTTP servers.</li>
            <li><strong>Relational & Document Databases:</strong> Run PostgreSQL, MySQL, Redis, or MongoDB with persistent local NVMe throughput.</li>
            <li><strong>Continuous Integration Runners:</strong> Execute isolated Docker builds, test suites, and deployment workers.</li>
            <li><strong>VPN & Gateway Proxies:</strong> Operate WireGuard gateways, OpenVPN endpoints, and Nginx reverse proxies.</li>
          </ul>
        </section>

        <section id="baseline-specifications" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Official Cloud VPS Plans &amp; Pricing
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground-secondary)]">
            Every Cloud VPS plan includes high-speed PCIe Gen4 NVMe arrays, dedicated non-oversubscribed vCPUs, hardware KVM virtualization, and free edge Anti-DDoS mitigation. Available in France (from ₹99/mo) and India (from ₹149/mo):
          </p>
          <Table
            columns={[
              { key: 'plan', header: 'Plan Name' },
              { key: 'vcpus', header: 'Dedicated vCPU' },
              { key: 'memory', header: 'RAM' },
              { key: 'storage', header: 'NVMe Gen4 SSD' },
              { key: 'france', header: 'France (Europe)' },
              { key: 'india', header: 'India (Mumbai / Delhi NCR)' },
            ]}
            data={[
              { plan: '1 GB Entry', vcpus: '1 vCPU', memory: '1 GB RAM', storage: '10 GB NVMe', france: '₹99/mo', india: '₹149/mo' },
              { plan: '2 GB Standard', vcpus: '1 vCPU', memory: '2 GB RAM', storage: '20 GB NVMe', france: '₹199/mo', india: '₹249/mo' },
              { plan: '4 GB Pro', vcpus: '2 vCPU', memory: '4 GB RAM', storage: '40 GB NVMe', france: '₹399/mo', india: '₹469/mo' },
              { plan: '6 GB Growth', vcpus: '2 vCPU', memory: '6 GB RAM', storage: '60 GB NVMe', france: '₹599/mo', india: '₹679/mo' },
              { plan: '8 GB Enterprise', vcpus: '2–4 vCPU', memory: '8 GB RAM', storage: '80 GB NVMe', france: '₹799/mo', india: '₹899/mo' },
              { plan: '12 GB Heavy', vcpus: '3–4 vCPU', memory: '12 GB RAM', storage: '120 GB NVMe', france: '₹1,199/mo', india: '₹1,399/mo' },
              { plan: '16 GB Max', vcpus: '4–6 vCPU', memory: '16 GB RAM', storage: '160 GB NVMe', france: '₹1,599/mo', india: '₹1,899/mo' },
              { plan: '32 GB Mega', vcpus: '8 vCPU', memory: '32 GB RAM', storage: '320 GB NVMe', france: '₹3,199/mo', india: '₹3,699/mo' },
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] text-xs text-[var(--color-foreground-secondary)]">
              <strong className="text-[var(--color-foreground)] block mb-1">Optional Add-ons:</strong>
              Dedicated IPv4: ₹99/month &bull; Automated Daily Backups: ₹49/month.
            </div>
            <div className="p-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] text-xs text-[var(--color-foreground-secondary)]">
              <strong className="text-[var(--color-foreground)] block mb-1">Billing Commitment Discounts:</strong>
              6-Month Commitment: 5% Off &bull; 12-Month Commitment: 10% Off. Same renewal price guaranteed.
            </div>
          </div>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting & Support
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If your virtual private server fails to respond to ping probes or SSH handshakes, inspect the live console VNC output from <strong>Console &gt; VPS &gt; Actions &gt; Web Console</strong> to examine bootloader logs.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Create a VPS Instance', href: '/docs/user/vps/create-vps', description: 'Step-by-step server provisioning.' },
            { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access', description: 'Authenticate using public key cryptography.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/create-vps': {
    slug: '/docs/user/vps/create-vps',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Create a VPS Instance',
    description:
      'Step-by-step instructions for selecting an operating system image, region, plan size, and launching a virtual private server.',
    badge: 'Tutorial',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'prerequisites', title: 'Prerequisites', level: 2 },
      { id: 'provisioning-steps', title: 'Provisioning Steps', level: 2 },
      { id: 'cloud-init-setup', title: 'Automated Cloud-Init Script', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Launch Errors', level: 2 },
    ],
    previous: {
      title: 'Cloud VPS Overview',
      href: '/docs/user/vps/introduction',
    },
    next: {
      title: 'VPS Configuration',
      href: '/docs/user/vps/configuration',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="prerequisites" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Prerequisites
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>An active AIC Cloud account with compute provisioning quota.</li>
            <li>A public SSH key (<InlineCode>id_ed25519.pub</InlineCode> or <InlineCode>id_rsa.pub</InlineCode>) generated on your local workstation.</li>
          </ul>
        </section>

        <section id="provisioning-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Provisioning Steps
          </h2>
          <Steps
            steps={[
              {
                title: 'Open the Instance Provisioning Modal',
                content: (
                  <p>
                    Log into the console and navigate to <strong>Compute &gt; VPS</strong>. Click <strong>Create VPS</strong> in the top-right corner.
                  </p>
                ),
              },
              {
                title: 'Select Operating System Image',
                content: (
                  <p>
                    Select your preferred Linux distribution: Ubuntu 24.04 LTS (Recommended), Debian 12, or AlmaLinux 9.
                  </p>
                ),
              },
              {
                title: 'Choose Deployment Region',
                content: (
                  <p>
                    Choose the data center closest to your primary user base (e.g. US East, US West, Europe Central, or Asia Pacific).
                  </p>
                ),
              },
              {
                title: 'Select Hardware Plan',
                content: (
                  <p>
                    Select a tier that matches your expected memory and processor demands. You can easily upgrade plans later via hot-resizing.
                  </p>
                ),
              },
              {
                title: 'Attach Public SSH Keys',
                content: (
                  <p>
                    Choose a saved SSH public key or paste an <InlineCode>ssh-ed25519</InlineCode> string to enable passwordless root access.
                  </p>
                ),
              },
            ]}
          />
        </section>

        <section id="cloud-init-setup" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automated Cloud-Init Script
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Optionally supply a cloud-init script in the &ldquo;Advanced Configuration&rdquo; drawer to install packages during initial boot:
          </p>

          <CodeBlock
            code={`#cloud-config
package_update: true
package_upgrade: true
packages:
  - curl
  - git
  - ufw
  - docker.io

runcmd:
  - ufw allow 22/tcp
  - ufw allow 80/tcp
  - ufw allow 443/tcp
  - ufw --force enable
  - systemctl enable docker`}
            language="bash"
            filename="cloud-init.yaml"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Launch Errors
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Quota Exceeded&rdquo;:</strong> New accounts have an initial limit of 5 concurrent VPS instances. Submit a quota increase request via the Billing tab to expand capacity.</li>
            <li><strong>&ldquo;Invalid SSH Public Key&rdquo;:</strong> Ensure you are pasting your <em>public</em> key ending in <InlineCode>.pub</InlineCode>, never your private key.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'VPS Configuration', href: '/docs/user/vps/configuration', description: 'Configure networking and disks.' },
            { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access', description: 'Connect to your newly launched VPS.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/configuration': {
    slug: '/docs/user/vps/configuration',
    section: 'user',
    category: 'Cloud VPS',
    title: 'VPS Configuration & Sizing',
    description:
      'Fine-tune network interfaces, manage attached block storage volumes, configure security groups, and customize kernel parameters.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'network-and-vpc', title: 'Network & VPC Configuration', level: 2 },
      { id: 'security-groups', title: 'Security Groups & Firewall Rules', level: 2 },
      { id: 'block-storage-scaling', title: 'Attached Block Storage Volumes', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Network Configuration', level: 2 },
    ],
    previous: {
      title: 'Create a VPS Instance',
      href: '/docs/user/vps/create-vps',
    },
    next: {
      title: 'Start, Stop and Restart VPS',
      href: '/docs/user/vps/start-stop-restart',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Type-1 KVM hypervisor isolation, 1:1 dedicated vCPU allocation, and enterprise PCIe Gen4 NVMe storage arrays."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4' },
            { label: 'Backbone', value: '10 Gbps Redundant' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          After provisioning your virtual private server, you can modify its network topologies, attach additional block storage volumes, and configure granular firewall filtering rules without rebuilding the instance.
        </p>

        <section id="network-and-vpc" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Network & VPC Configuration
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every VPS includes both a dedicated static public IPv4 address and an internal private IPv4 interface scoped to your organization&apos;s Virtual Private Cloud (VPC). Internal traffic between instances within the same region travels over our isolated 10Gbps mesh and incurs zero egress fees.
          </p>
          <VpcNetworkPatchVisual />
        </section>

        <section id="security-groups" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Security Groups & Firewall Rules
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Security groups act as stateful edge firewalls. Inbound traffic is denied by default unless explicitly allowed:
          </p>
          <Table
            columns={[
              { key: 'port', header: 'Port / Protocol' },
              { key: 'source', header: 'Allowed Source' },
              { key: 'purpose', header: 'Operational Service' },
            ]}
            data={[
              { port: '22 / TCP', source: '0.0.0.0/0 (or corporate IP)', purpose: 'Secure Shell (SSH) remote terminal access' },
              { port: '80 / TCP', source: '0.0.0.0/0', purpose: 'HTTP plaintext web traffic (redirected to SSL)' },
              { port: '443 / TCP', source: '0.0.0.0/0', purpose: 'HTTPS secure encrypted web traffic' },
              { port: '5432 / TCP', source: '10.0.0.0/16 (VPC Only)', purpose: 'PostgreSQL internal database connection' },
            ]}
          />
          <FirewallSieveVisual />
        </section>

        <section id="block-storage-scaling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Attached Block Storage Volumes
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Expand storage beyond the primary OS disk by provisioning standalone NVMe block storage volumes. Volumes can be detached and attached to different instances within the same region:
          </p>
          <CodeBlock
            code={`# Format newly attached volume as ext4
sudo mkfs.ext4 /dev/disk/by-id/scsi-0AIC_VOLUME_1

# Create mount point and mount disk
sudo mkdir -p /mnt/data
sudo mount /dev/disk/by-id/scsi-0AIC_VOLUME_1 /mnt/data`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Network Configuration
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Port appears closed despite application running:</strong> Verify that your Linux service is listening on <InlineCode>0.0.0.0</InlineCode> rather than <InlineCode>127.0.0.1</InlineCode> (localhost).</li>
            <li><strong>Inter-VPC ping fails:</strong> ICMP echo requests must be explicitly permitted in your security group rules.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Start, Stop and Restart VPS', href: '/docs/user/vps/start-stop-restart', description: 'Control virtual machine power states.' },
            { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access', description: 'Set up SSH key authentication.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/start-stop-restart': {
    slug: '/docs/user/vps/start-stop-restart',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Start, Stop and Restart VPS',
    description:
      'Manage instance power cycles, perform graceful ACPI shutdowns, trigger hard power cycles, and boot into rescue recovery mode.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'power-operations', title: 'Power Lifecycle Operations', level: 2 },
      { id: 'reboot-procedures', title: 'Graceful vs Hard Reboots', level: 2 },
      { id: 'rescue-mode', title: 'Booting into Rescue Recovery Mode', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Unresponsive Servers', level: 2 },
    ],
    previous: {
      title: 'VPS Configuration',
      href: '/docs/user/vps/configuration',
    },
    next: {
      title: 'Connect Through SSH',
      href: '/docs/user/vps/ssh-access',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Type-1 KVM hypervisor isolation, 1:1 dedicated vCPU allocation, and enterprise PCIe Gen4 NVMe storage arrays."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4' },
            { label: 'Backbone', value: '10 Gbps Redundant' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Controlling virtual private server power states is performed directly from the AIC Cloud console or programmatically via the API. Understanding the distinction between graceful ACPI signals and hard hardware power cuts protects against filesystem corruption.
        </p>

        <section id="power-operations" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Power Lifecycle Operations
          </h2>
          <Table
            columns={[
              { key: 'action', header: 'Action' },
              { key: 'mechanism', header: 'Underlying Mechanism' },
              { key: 'impact', header: 'Filesystem Impact' },
            ]}
            data={[
              { action: 'Soft Stop', mechanism: 'Sends ACPI powerdown event to operating system', impact: 'Safe. Flushes disk caches and terminates processes gracefully.' },
              { action: 'Force Power Off', mechanism: 'Terminates QEMU/KVM hypervisor process immediately', impact: 'Caution. Equivalent to pulling the physical power cord; may require fsck.' },
              { action: 'Soft Restart', mechanism: 'Sends ACPI reboot signal to systemd/init', impact: 'Safe. Standard Linux warm restart.' },
              { action: 'Hard Reset', mechanism: 'Simulates motherboard hardware reset switch', impact: 'Caution. Only recommended if instance kernel has completely panicked.' },
            ]}
          />
        </section>

        <section id="reboot-procedures" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Graceful vs Hard Reboots
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Whenever possible, initiate reboots from inside your operating system via SSH:
          </p>
          <CodeBlock
            code={`# Gracefully reboot operating system
sudo systemctl reboot

# Gracefully power off operating system
sudo systemctl poweroff`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="rescue-mode" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Booting into Rescue Recovery Mode
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If your server cannot boot due to a corrupted <InlineCode>/etc/fstab</InlineCode> or broken kernel image, activate <strong>Rescue Mode</strong>:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Go to <strong>Console &gt; VPS &gt; [Instance] &gt; Power Controls</strong>.</li>
            <li>Select <strong>Boot into Rescue Mode</strong>.</li>
            <li>Your instance boots an ephemeral RAM-disk Alpine Linux image.</li>
            <li>Mount your primary disk partition to <InlineCode>/mnt</InlineCode> to repair configuration files.</li>
          </ol>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Unresponsive Servers
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Server hangs during stop operation:</strong> If an instance remains in &ldquo;Stopping&rdquo; state for over 3 minutes, click &ldquo;Force Power Off&rdquo; to release hypervisor locks.</li>
            <li><strong>Instance loops during boot:</strong> Open the Web Console to verify if GRUB is waiting for interactive input or if a non-existent drive is failing to mount.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access', description: 'Log in securely via command line.' },
            { title: 'Troubleshooting VPS', href: '/docs/user/vps/troubleshooting', description: 'Resolve common server errors.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/ssh-access': {
    slug: '/docs/user/vps/ssh-access',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Connect Through SSH',
    description:
      'Generate cryptographic Ed25519 key pairs, configure OpenSSH client configs, and access your virtual private server terminal.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'key-generation', title: 'Generate SSH Key Pair', level: 2 },
      { id: 'connecting-via-terminal', title: 'Connecting via Terminal', level: 2 },
      { id: 'ssh-config-file', title: 'Optimized SSH Config File', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting SSH Connections', level: 2 },
    ],
    previous: {
      title: 'Start, Stop and Restart VPS',
      href: '/docs/user/vps/start-stop-restart',
    },
    next: {
      title: 'Manage VPS Instances',
      href: '/docs/user/vps/manage',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Type-1 KVM hypervisor isolation, 1:1 dedicated vCPU allocation, and enterprise PCIe Gen4 NVMe storage arrays."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4' },
            { label: 'Backbone', value: '10 Gbps Redundant' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Secure Shell (SSH) is the standard cryptographic network protocol used to operate remote Linux servers. AIC Cloud disables plaintext password login on newly launched instances by default, requiring public key authentication.
        </p>

        <section id="key-generation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Generate SSH Key Pair
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            We recommend generating an <InlineCode>ed25519</InlineCode> key pair for high security and performance:
          </p>
          <CodeBlock
            code={`# Generate modern Ed25519 key pair
ssh-keygen -t ed25519 -C "developer@company.com"

# Display public key string to copy into AIC console
cat ~/.ssh/id_ed25519.pub`}
            language="bash"
            filename="Local Terminal"
          />
        </section>

        <section id="connecting-via-terminal" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Connecting via Terminal
          </h2>
          <CodeBlock
            code={`# Connect using your dedicated server IP
ssh root@YOUR_SERVER_IP -i ~/.ssh/id_ed25519`}
            language="bash"
            filename="Local Terminal"
          />
          <SshTerminalVisual />
        </section>

        <section id="ssh-config-file" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Optimized SSH Config File
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Simplify terminal access by appending an alias to your local <InlineCode>~/.ssh/config</InlineCode> file:
          </p>
          <CodeBlock
            code={`Host aic-prod
    HostName YOUR_SERVER_IP
    User root
    IdentityFile ~/.ssh/id_ed25519
    ServerAliveInterval 30
    ServerAliveCountMax 3`}
            language="bash"
            filename="~/.ssh/config"
          />
          <p className="text-[14px] text-[var(--color-foreground-secondary)]">
            With this configuration saved, you can connect instantly by typing <InlineCode>ssh aic-prod</InlineCode>.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting SSH Connections
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Permission denied (publickey)&rdquo;:</strong> Confirm that you specified the correct private key with the <InlineCode>-i</InlineCode> flag and that file permissions are set to <InlineCode>chmod 600 ~/.ssh/id_ed25519</InlineCode>.</li>
            <li><strong>&ldquo;Connection timed out&rdquo;:</strong> Verify in <strong>Console &gt; Security Groups</strong> that port 22 allows inbound traffic from your current public IP address.</li>
            <li><strong>&ldquo;WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!&rdquo;:</strong> If you re-imaged your VPS, remove the old fingerprint from your local known hosts via <InlineCode>ssh-keygen -R YOUR_SERVER_IP</InlineCode>.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Manage VPS Instances', href: '/docs/user/vps/manage', description: 'Monitor metrics and snapshots.' },
            { title: 'Troubleshooting VPS', href: '/docs/user/vps/troubleshooting', description: 'Common connection solutions.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/manage': {
    slug: '/docs/user/vps/manage',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Manage VPS Instances',
    description:
      'Monitor CPU and memory telemetry, schedule point-in-time snapshots, resize instance resources, and manage automated backups.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'telemetry-monitoring', title: 'Resource Telemetry & Metrics', level: 2 },
      { id: 'snapshots-and-backups', title: 'Snapshots & Automated Backups', level: 2 },
      { id: 'instance-resizing', title: 'Instance Plan Resizing', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Instance Management', level: 2 },
    ],
    previous: {
      title: 'Connect Through SSH',
      href: '/docs/user/vps/ssh-access',
    },
    next: {
      title: 'Troubleshooting VPS',
      href: '/docs/user/vps/troubleshooting',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Type-1 KVM hypervisor isolation, 1:1 dedicated vCPU allocation, and enterprise PCIe Gen4 NVMe storage arrays."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4' },
            { label: 'Backbone', value: '10 Gbps Redundant' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Ongoing instance management ensures your virtual private servers operate reliably under sustained production traffic. Through the AIC Cloud console, you can schedule automated weekly backups, inspect storage IOPS, and hot-scale compute resources.
        </p>

        <section id="telemetry-monitoring" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Resource Telemetry & Metrics
          </h2>
          <CloudMetricsPlotVisual />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            The <strong>Metrics</strong> tab charts real-time processor consumption, active RAM allocation, disk read/write throughput, and network interface packet drops over 1-hour, 24-hour, and 30-day timeframes.
          </p>
        </section>

        <section id="snapshots-and-backups" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Snapshots & Automated Backups
          </h2>
          <VolumeSnapshotFloppyVisual />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            AIC Cloud provides two distinct data retention mechanisms:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Manual Snapshots:</strong> Instantaneous point-in-time disk captures taken before major operating system upgrades or application refactors.</li>
            <li><strong>Automated Backups:</strong> Scheduled weekly background snapshots stored across multi-region redundant storage. The rolling 4-week retention window allows rapid one-click rollbacks.</li>
          </ul>
        </section>

        <section id="instance-resizing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Instance Plan Resizing
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            When scaling up your workload, instances can be resized to higher CPU and RAM tiers:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Power off the instance gracefully from the console or SSH.</li>
            <li>Select <strong>Resize Instance</strong> and choose your target plan.</li>
            <li>Select whether to scale CPU/RAM only (allowing future downgrades) or expand the primary disk volume (irreversible).</li>
            <li>Confirm and power the instance back online.</li>
          </ol>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Instance Management
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Snapshot creation takes longer than expected:</strong> Large disk volumes with heavy continuous write IOPS may require up to 10 minutes to synchronize blocks to backup storage.</li>
            <li><strong>Disk resize does not reflect in Linux:</strong> Run <InlineCode>sudo resize2fs /dev/vda1</InlineCode> to expand the ext4 filesystem across the new partition space.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Troubleshooting VPS', href: '/docs/user/vps/troubleshooting', description: 'Diagnose common issues.' },
            { title: 'Dedicated Servers Overview', href: '/docs/user/dedicated/introduction', description: 'Explore single-tenant hardware.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/vps/troubleshooting': {
    slug: '/docs/user/vps/troubleshooting',
    section: 'user',
    category: 'Cloud VPS',
    title: 'Troubleshooting Cloud VPS',
    description:
      'Diagnose and remediate connection timeouts, SSH key rejections, out-of-memory kernel panics, and disk space exhaustion.',
    badge: 'Troubleshooting',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'connection-timeouts', title: 'Connection Timeouts & Network Failures', level: 2 },
      { id: 'ssh-auth-errors', title: 'SSH Authentication Failures', level: 2 },
      { id: 'out-of-memory', title: 'Out of Memory (OOM) Killer Panics', level: 2 },
      { id: 'disk-exhaustion', title: 'Disk Space Exhaustion', level: 2 },
    ],
    previous: {
      title: 'Manage VPS Instances',
      href: '/docs/user/vps/manage',
    },
    next: {
      title: 'Dedicated Servers Overview',
      href: '/docs/user/dedicated/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/server-racks.jpg"
          imageAlt="Cloud VPS Server Rack Infrastructure"
          badgeText="Virtual Infrastructure"
          badgeColor="primary"
          title="Cloud VPS Architecture"
          description="Type-1 KVM hypervisor isolation, 1:1 dedicated vCPU allocation, and enterprise PCIe Gen4 NVMe storage arrays."
          stats={[
            { label: 'Virtualization', value: 'Linux KVM' },
            { label: 'Storage', value: 'NVMe Gen4' },
            { label: 'Backbone', value: '10 Gbps Redundant' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          This troubleshooting guide addresses the most frequent operational issues encountered when deploying and managing virtual private servers on AIC Cloud, providing step-by-step resolution commands.
        </p>

        <section id="connection-timeouts" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Connection Timeouts & Network Failures
          </h2>
          <InspectionLoupeVisual />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If SSH attempts hang with <InlineCode>ssh: connect to host YOUR_IP port 22: Connection timed out</InlineCode>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Verify in <strong>Console &gt; VPS &gt; Security Groups</strong> that an inbound rule permits TCP port 22 from your current IP.</li>
            <li>If you recently enabled <InlineCode>ufw</InlineCode> inside the server without allowing port 22, open <strong>Console &gt; Actions &gt; Web Console</strong> to log in via browser and execute <InlineCode>sudo ufw allow 22/tcp</InlineCode>.</li>
          </ul>
        </section>

        <section id="ssh-auth-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            SSH Authentication Failures
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Run SSH with verbose logging to identify why the server rejected your credentials:
          </p>
          <CodeBlock
            code="ssh -vvv root@YOUR_SERVER_IP -i ~/.ssh/id_ed25519"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="out-of-memory" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Out of Memory (OOM) Killer Panics
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If applications terminate unexpectedly with exit code 137, the Linux kernel OOM killer likely intervened:
          </p>
          <CodeBlock
            code={`# Inspect kernel log for recent OOM terminations
dmesg -T | grep -i oom`}
            language="bash"
            filename="Terminal"
          />
          <p className="text-[14px] text-[var(--color-foreground-secondary)]">
            To prevent crashes on smaller instances, configure a swapfile:
          </p>
          <CodeBlock
            code={`# Create and activate a 2 GB swapfile
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="disk-exhaustion" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Disk Space Exhaustion
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            When a disk reaches 100% capacity, SSH and database writes will fail. Check partition consumption using <InlineCode>df -h</InlineCode> and clean cached packages:
          </p>
          <CodeBlock
            code={`# Clean package caches and old systemd journal logs
sudo apt-get clean
sudo journalctl --vacuum-time=3d`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access', description: 'Configure SSH keys.' },
            { title: 'Start, Stop and Restart VPS', href: '/docs/user/vps/start-stop-restart', description: 'Reboot into rescue mode.' },
          ]}
        />
      </div>
    ),
  },
}
