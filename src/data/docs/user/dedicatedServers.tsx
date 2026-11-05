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
import { RelatedLinks, RequiresOfficialConfirmationNotice } from '../common'
import { Cpu, Shield, HardDrive } from 'lucide-react'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { BareMetalChassisVisual } from '@/components/hairline/BareMetalChassisVisual'

export const dedicatedServersPages: Record<string, DocPageData> = {
  '/docs/user/dedicated/introduction': {
    slug: '/docs/user/dedicated/introduction',
    section: 'user',
    category: 'Dedicated Servers',
    title: 'Dedicated Servers Overview',
    description:
      'Single-tenant bare-metal infrastructure providing raw physical compute, hardware RAID controllers, and dedicated high-speed networking.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'bare-metal-architecture', title: 'Bare-Metal Architecture', level: 2 },
      { id: 'when-to-choose-dedicated', title: 'When to Choose Dedicated Hardware', level: 2 },
      { id: 'hardware-specifications', title: 'Server Hardware Configurations', level: 2 },
      { id: 'troubleshooting', title: 'Support & Assistance', level: 2 },
    ],
    previous: {
      title: 'Troubleshooting VPS',
      href: '/docs/user/vps/troubleshooting',
    },
    next: {
      title: 'Server Overview',
      href: '/docs/user/dedicated/overview',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/dedicated-server.jpg"
          imageAlt="Bare Metal Dedicated Hardware"
          badgeText="Single-Tenant Silicon"
          badgeColor="primary"
          title="Dedicated Bare Metal Architecture"
          description="Single-tenant dedicated physical servers with Intel Core i7, AMD EPYC, and Intel Xeon processors, starting from ₹1,840/mo."
          stats={[
            { label: 'Virtualization Overhead', value: '0% (Raw Metal)' },
            { label: 'Remote Access', value: 'Dedicated IPMI 2.0' },
            { label: 'Network', value: '1 Gbps Unmetered' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud Dedicated Servers give you 100% private physical hardware with zero virtualization overhead. The entire server chassis, CPU cores, memory, and NVMe drives belong completely to you, delivering maximum performance and predictable response times.
        </p>

        <section id="bare-metal-architecture" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Bare-Metal Architecture &amp; Features
          </h2>
          <BareMetalChassisVisual />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[var(--color-primary)]" />
                  100% Private Hardware
                </CardTitle>
                <CardDescription>
                  Direct access to Intel Core i7, AMD EPYC, and Intel Xeon processors without any virtualization slowdown.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-[var(--color-primary)]" />
                  Hardware RAID
                </CardTitle>
                <CardDescription>
                  Hardware-backed MegaRAID controllers with battery cache protection for sustained high IOPS.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[var(--color-primary)]" />
                  Out-of-Band IPMI
                </CardTitle>
                <CardDescription>
                  Independent lights-out management network for remote KVM, power cycling, and ISO installation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="when-to-choose-dedicated" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            When to Choose Dedicated Hardware
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Private Hypervisors:</strong> Deploy your own virtualization cluster using VMware ESXi, Proxmox VE, or OpenNebula.</li>
            <li><strong>Strict Regulatory Compliance:</strong> Satisfy HIPAA, PCI-DSS, or financial data requirements demanding single-tenant isolation.</li>
            <li><strong>High-Frequency Trading & FinTech:</strong> Eliminate CPU core scheduling jitter for consistent sub-millisecond execution.</li>
            <li><strong>Massive Relational Databases:</strong> Support high-throughput transaction engines that require direct PCIe NVMe bus control.</li>
          </ul>
        </section>

        <section id="hardware-specifications" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Bare-Metal Hardware Configurations (From ₹1,840/mo)
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground-secondary)]">
            Choose between high single-core frequency configurations (Intel Core i7-7700K 4.5 GHz boost for gaming and low-latency algorithmic trading) and high-density multi-threaded enterprise nodes (AMD EPYC &amp; Intel Xeon). All include dedicated IPMI 2.0 / KVM-over-IP out-of-band management:
          </p>
          <Table
            columns={[
              { key: 'build', header: 'Server Configuration' },
              { key: 'cores', header: 'Physical Processor & Cores' },
              { key: 'memory', header: 'RAM' },
              { key: 'drives', header: 'Storage Configuration' },
              { key: 'starting', header: 'Starting Monthly Rate' },
            ]}
            data={[
              { build: 'Gaming & High-Freq Trading', cores: 'Intel Core i7-7700K (4C/8T, 4.5 GHz Boost)', memory: '16 GB to 64 GB DDR4', drives: '2x 480 GB NVMe SSD (RAID 1)', starting: '₹1,840/mo' },
              { build: 'EPYC Enterprise 9004', cores: 'AMD EPYC 9354 (32C/64T, 3.8 GHz Boost)', memory: '64 GB to 256 GB DDR5 ECC', drives: '2x 1.92 TB NVMe SSD (RAID 1)', starting: '₹6,499/mo' },
              { build: 'Dual Xeon High-Density', cores: 'Dual Intel Xeon Scalable (48C/96T)', memory: '128 GB to 512 GB DDR4 ECC', drives: '4x 3.84 TB NVMe (Hardware RAID 10)', starting: '₹9,890/mo' },
            ]}
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Support & Assistance
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every dedicated server includes 24/7 datacenter on-site hardware technician support with guaranteed 2-hour failed drive and memory component replacement.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Server Overview', href: '/docs/user/dedicated/overview', description: 'Explore hardware architecture.' },
            { title: 'Server Provisioning', href: '/docs/user/dedicated/provisioning', description: 'Order and configure bare metal.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/dedicated/overview': {
    slug: '/docs/user/dedicated/overview',
    section: 'user',
    category: 'Dedicated Servers',
    title: 'Server Overview & Architecture',
    description:
      'Detailed breakdown of hardware topologies, IPMI lights-out management, network uplinks, and bare-metal vs virtualized compute tradeoffs.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'bare-metal-vs-vps', title: 'Bare Metal vs Virtual Private Servers', level: 2 },
      { id: 'network-uplinks', title: 'Dedicated Network Uplinks & BGP Routing', level: 2 },
      { id: 'storage-topologies', title: 'Storage Controller Topologies', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Uplink Discrepancies', level: 2 },
    ],
    previous: {
      title: 'Dedicated Servers Overview',
      href: '/docs/user/dedicated/introduction',
    },
    next: {
      title: 'Server Provisioning',
      href: '/docs/user/dedicated/provisioning',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/dedicated-server.jpg"
          imageAlt="Bare Metal Dedicated Hardware"
          badgeText="Single-Tenant Silicon"
          badgeColor="primary"
          title="Dedicated Bare Metal Architecture"
          description="Unshared single-tenant physical compute, AMD EPYC 9004 and Intel Xeon Scalable processors, and hardware RAID arrays."
          stats={[
            { label: 'Hypervisor Overhead', value: '0% (Raw Metal)' },
            { label: 'Out-of-band Access', value: 'Dedicated IPMI' },
            { label: 'Network', value: 'Dual LACP Bonding' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Understanding the hardware architecture of AIC Cloud dedicated servers enables system architects to squeeze maximum performance out of underlying silicon, memory channels, and PCIe lanes.
        </p>

        <section id="bare-metal-vs-vps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Bare Metal vs Virtual Private Servers
          </h2>
          <BareMetalChassisVisual />
          <Table
            columns={[
              { key: 'attribute', header: 'Architecture Attribute' },
              { key: 'bareMetal', header: 'Dedicated Bare Metal' },
              { key: 'vps', header: 'Cloud VPS' },
            ]}
            data={[
              { attribute: 'Tenant Model', bareMetal: 'Strict Single-Tenant Physical Machine', vps: 'Multi-Tenant with KVM Isolation' },
              { attribute: 'CPU Access', bareMetal: 'Direct instruction access to hardware registers', vps: 'Virtual CPU thread scheduling' },
              { attribute: 'Storage Controller', bareMetal: 'Direct PCIe NVMe controller or hardware MegaRAID', vps: 'VirtIO virtualized block devices' },
              { attribute: 'Provisioning Speed', bareMetal: '15 to 30 minutes automated rollout', vps: 'Under 45 seconds instant spin-up' },
            ]}
          />
        </section>

        <section id="network-uplinks" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Dedicated Network Uplinks & BGP Routing
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Each dedicated server chassis is cross-connected to two independent top-of-rack leaf switches configured with LACP bonding. This guarantees that a single switch failure or fiber transceiver degradation results in zero network packet loss.
          </p>
        </section>

        <section id="storage-topologies" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Storage Controller Topologies
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Our bare-metal nodes support both software-defined storage (ZFS, Ceph) using direct JBOD pass-through and hardware MegaRAID arrays with integrated cache vaults:
          </p>
          <CodeBlock
            code={`# Inspect physical NVMe disk controllers in Linux
lspci | grep -i non-volatile
sudo nvme list`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Uplink Discrepancies
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Bonded interface throughput capped at 1 Gbps:</strong> Ensure your OS network interface config utilizes <InlineCode>mode=4</InlineCode> (802.3ad dynamic link aggregation) matching our switch configuration.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Server Provisioning', href: '/docs/user/dedicated/provisioning', description: 'Order bare-metal servers.' },
            { title: 'Server Management', href: '/docs/user/dedicated/management', description: 'Operate via IPMI.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/dedicated/provisioning': {
    slug: '/docs/user/dedicated/provisioning',
    section: 'user',
    category: 'Dedicated Servers',
    title: 'Server Provisioning & OS Installation',
    description:
      'Order bare-metal servers, select automated Linux or Windows imaging, configure hardware RAID arrays, and boot custom ISO distributions.',
    badge: 'Tutorial',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'ordering-process', title: 'Server Ordering Process', level: 2 },
      { id: 'raid-configuration', title: 'Hardware RAID Configuration', level: 2 },
      { id: 'operating-system-imaging', title: 'Automated OS Imaging', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Installation Timeouts', level: 2 },
    ],
    previous: {
      title: 'Server Overview',
      href: '/docs/user/dedicated/overview',
    },
    next: {
      title: 'Server Management',
      href: '/docs/user/dedicated/management',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="ordering-process" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Server Ordering Process
          </h2>
          <Steps
            steps={[
              {
                title: 'Select Chassis & Processor Family',
                content: <p>Choose between single-socket AMD EPYC 9004 series or dual-socket Intel Xeon Scalable server lines.</p>,
              },
              {
                title: 'Choose Memory & Disk Layout',
                content: <p>Select RAM allocation (up to 1 TB DDR5) and specify your NVMe drive counts and RAID geometry.</p>,
              },
              {
                title: 'Pick Operating System or Custom ISO',
                content: <p>Select automated installation of Ubuntu Server 24.04, Debian 12, Rocky Linux 9, Windows Server 2022, or Proxmox VE.</p>,
              },
              {
                title: 'Automated Provisioning Execution',
                content: <p>Our automated PXE provisioning network boots the node, configures the hardware RAID controller, flashes the disk image, and injects your SSH keys in 15 to 30 minutes.</p>,
              },
            ]}
          />
        </section>

        <section id="raid-configuration" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hardware RAID Configuration
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Specify your RAID topology during deployment:
          </p>
          <Table
            columns={[
              { key: 'raid', header: 'RAID Level' },
              { key: 'minDrives', header: 'Minimum Drives' },
              { key: 'faultTolerance', header: 'Fault Tolerance' },
              { key: 'usableSpace', header: 'Usable Space' },
            ]}
            data={[
              { raid: 'RAID 1 (Mirroring)', minDrives: '2 Disks', faultTolerance: '1 Drive Failure', usableSpace: '50% of Total Drive Capacity' },
              { raid: 'RAID 5 (Distributed Parity)', minDrives: '3 Disks', faultTolerance: '1 Drive Failure', usableSpace: 'Total Capacity minus 1 Disk' },
              { raid: 'RAID 10 (Striped Mirrors)', minDrives: '4 Disks', faultTolerance: '1 to 2 Drive Failures', usableSpace: '50% of Total Drive Capacity (Fastest Read/Write)' },
              { raid: 'JBOD / Raw Passthrough', minDrives: '1 Disk', faultTolerance: 'None (ZFS / Ceph managed)', usableSpace: '100% Raw Capacity' },
            ]}
          />
        </section>

        <section id="operating-system-imaging" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Automated OS Imaging
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            All standardized server distributions include vendor hardware drivers, Mellanox network firmware, and temperature monitoring daemons pre-configured.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Installation Timeouts
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Provisioning exceeds 45 minutes:</strong> If PXE imaging stalls, our automated watchdog dispatches a notification to on-site technicians to inspect physical post-diagnostic error codes.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Server Management', href: '/docs/user/dedicated/management', description: 'Monitor bare-metal servers.' },
            { title: 'Troubleshooting Dedicated', href: '/docs/user/dedicated/troubleshooting', description: 'Solve hardware errors.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/dedicated/management': {
    slug: '/docs/user/dedicated/management',
    section: 'user',
    category: 'Dedicated Servers',
    title: 'Dedicated Server Management & IPMI',
    description:
      'Manage physical servers out-of-band via IPMI, launch remote KVM consoles, inspect ECC memory counters, and trigger hardware reboots.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'ipmi-access', title: 'Out-of-Band IPMI Access', level: 2 },
      { id: 'hardware-health', title: 'Hardware Health & Sensors', level: 2 },
      { id: 'remote-media-mounting', title: 'Virtual Media ISO Mounting', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting IPMI Access', level: 2 },
    ],
    previous: {
      title: 'Server Provisioning',
      href: '/docs/user/dedicated/provisioning',
    },
    next: {
      title: 'Troubleshooting Dedicated',
      href: '/docs/user/dedicated/troubleshooting',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/dedicated-server.jpg"
          imageAlt="Bare Metal Dedicated Hardware"
          badgeText="Single-Tenant Silicon"
          badgeColor="primary"
          title="Dedicated Bare Metal Architecture"
          description="Unshared single-tenant physical compute, AMD EPYC 9004 and Intel Xeon Scalable processors, and hardware RAID arrays."
          stats={[
            { label: 'Hypervisor Overhead', value: '0% (Raw Metal)' },
            { label: 'Out-of-band Access', value: 'Dedicated IPMI' },
            { label: 'Network', value: 'Dual LACP Bonding' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Every dedicated server is connected to a dedicated out-of-band management network via its Intelligent Platform Management Interface (IPMI). IPMI operates independently of the host operating system, allowing you to access remote BIOS setups, inspect physical fan speeds, and recover from kernel crashes.
        </p>

        <section id="ipmi-access" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Out-of-Band IPMI Access
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Access IPMI through our encrypted web gateway:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Go to <strong>Console &gt; Dedicated Servers &gt; [Server] &gt; IPMI Access</strong>.</li>
            <li>Click <strong>Generate Temporary IPMI Credentials</strong>.</li>
            <li>Launch the HTML5 remote KVM viewer in your browser to interact with the server keyboard, video, and mouse.</li>
          </ol>
        </section>

        <section id="hardware-health" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hardware Health & Sensors
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            IPMI telemetry daemons continuously monitor physical operating thresholds:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>CPU & VRM Temperatures:</strong> Immediate throttling alerts if thermals exceed 85°C.</li>
            <li><strong>ECC Memory Counters:</strong> Automated hardware tickets are logged if single-bit memory correction rates spike, indicating impending module failure.</li>
            <li><strong>Redundant Power Supplies:</strong> Automatic failover notifications if a chassis PSU loses AC input.</li>
          </ul>
        </section>

        <section id="remote-media-mounting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Virtual Media ISO Mounting
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Install specialized hypervisors or custom operating system distributions by mounting external ISO URLs directly into the IPMI virtual optical drive.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting IPMI Access
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>HTML5 KVM viewer displays black screen:</strong> Verify the host is powered on. If the server is in deep ACPI sleep, click &ldquo;Power On Chassis&rdquo; in the IPMI toolbar.</li>
            <li><strong>IPMI connection drops during high network traffic:</strong> The IPMI interface has its own dedicated NIC port and physical cabling; internal server traffic does not impact IPMI bandwidth.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Troubleshooting Dedicated', href: '/docs/user/dedicated/troubleshooting', description: 'Solve hardware errors.' },
            { title: 'Cloud GPU Overview', href: '/docs/user/gpu/introduction', description: 'Explore AI acceleration.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/dedicated/troubleshooting': {
    slug: '/docs/user/dedicated/troubleshooting',
    section: 'user',
    category: 'Dedicated Servers',
    title: 'Troubleshooting Dedicated Servers',
    description:
      'Diagnose hardware RAID degradation alerts, resolve ECC memory parity errors, and recover from kernel boot failures via IPMI.',
    badge: 'Troubleshooting',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'raid-degradation', title: 'Hardware RAID Degradation & Drive Replacement', level: 2 },
      { id: 'memory-parity-errors', title: 'ECC Memory Parity Alerts', level: 2 },
      { id: 'boot-failures', title: 'Kernel Boot Failures & BIOS Diagnostics', level: 2 },
      { id: 'hardware-replacement', title: 'Hardware Replacement SLAs', level: 2 },
    ],
    previous: {
      title: 'Server Management',
      href: '/docs/user/dedicated/management',
    },
    next: {
      title: 'Cloud GPU Overview',
      href: '/docs/user/gpu/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/dedicated-server.jpg"
          imageAlt="Bare Metal Dedicated Hardware"
          badgeText="Single-Tenant Silicon"
          badgeColor="primary"
          title="Dedicated Bare Metal Architecture"
          description="Unshared single-tenant physical compute, AMD EPYC 9004 and Intel Xeon Scalable processors, and hardware RAID arrays."
          stats={[
            { label: 'Hypervisor Overhead', value: '0% (Raw Metal)' },
            { label: 'Out-of-band Access', value: 'Dedicated IPMI' },
            { label: 'Network', value: 'Dual LACP Bonding' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Dedicated servers operate directly on physical hardware components. This troubleshooting guide assists system administrators in diagnosing drive failures, ECC parity warnings, and bootloader halts.
        </p>

        <section id="raid-degradation" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hardware RAID Degradation & Drive Replacement
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If a physical NVMe disk fails, your RAID controller triggers a degraded status. Inspect array state via CLI:
          </p>
          <CodeBlock
            code={`# Check hardware RAID status (MegaCLI / storcli)
sudo storcli /c0 show

# Check software mdadm RAID status
cat /proc/mdstat`}
            language="bash"
            filename="Terminal"
          />
          <Callout variant="warning" title="Hot-Swap Drive Replacement">
            Do not power off the chassis. Submit a hardware maintenance ticket through the console indicating the drive slot. Our on-site technicians hot-swap the drive while the server remains online.
          </Callout>
        </section>

        <section id="memory-parity-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            ECC Memory Parity Alerts
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            ECC memory silently corrects single-bit errors. However, multi-bit errors trigger Machine Check Exceptions (MCE):
          </p>
          <CodeBlock
            code="sudo mcelog --client"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="boot-failures" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Kernel Boot Failures & BIOS Diagnostics
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If an operating system upgrade leaves the kernel unbootable:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>Connect to the HTML5 IPMI KVM console.</li>
            <li>Reboot the chassis from the IPMI power toolbar.</li>
            <li>Press <InlineCode>F11</InlineCode> or <InlineCode>F12</InlineCode> during POST to select the previous fallback kernel entry in GRUB.</li>
          </ol>
        </section>

        <section id="hardware-replacement" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hardware Replacement SLAs
          </h2>
          <RequiresOfficialConfirmationNotice
            topic="Hardware Replacement SLAs"
            details="Defective drive swaps, DIMM replacements, power supply units, and network adapter servicing timelines depend on regional enterprise support tier contracts. Always verify your organization's agreed SLA terms in your AIC Cloud service contract."
          />
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Upon hardware diagnosis confirmation via out-of-band IPMI sensor logs, datacenter field technicians are dispatched according to your contract support agreement.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Server Management', href: '/docs/user/dedicated/management', description: 'Monitor IPMI sensors.' },
            { title: 'Cloud GPU Overview', href: '/docs/user/gpu/introduction', description: 'Explore AI acceleration.' },
          ]}
        />
      </div>
    ),
  },
}
