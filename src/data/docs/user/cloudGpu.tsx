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
import { Cpu, Zap, Activity } from 'lucide-react'
import { GpuArchitectureDiagram } from '@/components/illustrations/GpuArchitectureDiagram'
import { DocHeroBanner } from '@/components/documentation/DocHeroBanner'
import { GpuTensorMatrixVisual } from '@/components/hairline/GpuTensorMatrixVisual'

export const cloudGpuPages: Record<string, DocPageData> = {
  '/docs/user/gpu/introduction': {
    slug: '/docs/user/gpu/introduction',
    section: 'user',
    category: 'Cloud GPU',
    title: 'Cloud GPU Overview',
    description:
      'High-throughput GPU accelerator instances built for generative AI, large language model training, computer vision, and real-time inference.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'accelerator-silicon', title: 'High-Performance Accelerator Silicon', level: 2 },
      { id: 'nvlink-interconnect', title: 'NVLink Interconnect Architecture', level: 2 },
      { id: 'supported-frameworks', title: 'Pre-Configured Frameworks', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting & Support', level: 2 },
    ],
    previous: {
      title: 'Troubleshooting Dedicated',
      href: '/docs/user/dedicated/troubleshooting',
    },
    next: {
      title: 'GPU Instance Overview',
      href: '/docs/user/gpu/overview',
    },
    content: (
      <div className="space-y-8 text-left">
        <DocHeroBanner
          imageSrc="/images/gpu-3d.jpg"
          imageAlt="AI Supercomputer Accelerator Cluster"
          badgeText="AI Supercomputing"
          badgeColor="purple"
          title="Cloud GPU Clusters Overview"
          description="High-performance NVIDIA GPUs for AI model training and inference, billed by the minute from ₹27.74/hr."
          stats={[
            { label: 'GPU Models', value: 'RTX 4090, A100, H100' },
            { label: 'Billing', value: 'Per-Minute from Wallet' },
            { label: 'Software Stack', value: 'PyTorch, CUDA, vLLM' },
          ]}
        />

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud GPU instances provide dedicated NVIDIA graphics cards for AI engineers, machine learning teams, and developers. Billed strictly by the minute from your prepaid cloud wallet, you can start, pause, and destroy GPU nodes whenever you need without monthly lock-in.
        </p>

        <section id="accelerator-silicon" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Available NVIDIA GPU Models
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[var(--color-primary)]" />
                  NVIDIA H100 SXM5
                </CardTitle>
                <CardDescription>
                  80 GB HBM3 memory with 3.35 TB/s bandwidth, designed for distributed LLM pre-training and massive model fine-tuning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[var(--color-primary)]" />
                  NVIDIA A100 Tensor Core
                </CardTitle>
                <CardDescription>
                  80 GB VRAM workhorse ideal for multi-modal model training, embedding generation, and high-concurrency batch jobs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="subtle">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[var(--color-primary)]" />
                  NVIDIA L40S Ada
                </CardTitle>
                <CardDescription>
                  48 GB GDDR6 memory optimized for FP8 generative AI inference, Stable Diffusion, and neural rendering.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="nvlink-interconnect" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            NVLink Interconnect Architecture
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Multi-GPU nodes utilize 4th-generation NVIDIA NVLink interconnects delivering up to 900 GB/s bidirectional bandwidth between adjacent accelerators. This enables seamless PyTorch Fully Sharded Data Parallel (FSDP) and DeepSpeed ZeRO-3 model parallelism without PCIe bottlenecking:
          </p>

          <GpuArchitectureDiagram />
        </section>

        <section id="gpu-pricing-billing" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Per-Minute Billing &amp; Accelerator Pricing (From ₹27.74/hr)
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground-secondary)]">
            AIC Cloud GPU compute is billed strictly by the minute directly from your prepaid cloud wallet. Stop your instance at any moment to immediately pause compute charges; storage is billed separately per GB/month and preserved while stopped.
          </p>
          <Table
            columns={[
              { key: 'model', header: 'GPU Accelerator' },
              { key: 'vram', header: 'VRAM & Architecture' },
              { key: 'interconnect', header: 'Interconnect' },
              { key: 'rate', header: 'Hourly Rate (INR)' },
              { key: 'usecase', header: 'Primary Use Case' },
            ]}
            data={[
              { model: 'NVIDIA RTX 3090', vram: '24 GB GDDR6X', interconnect: 'PCIe Gen4', rate: '₹27.74/hr', usecase: 'Cost-effective inference, fine-tuning, SDXL' },
              { model: 'NVIDIA RTX 4090', vram: '24 GB GDDR6X', interconnect: 'PCIe Gen4', rate: '₹38.50/hr', usecase: 'ComfyUI, Flux, Llama 3 8B fine-tuning' },
              { model: 'NVIDIA L4', vram: '24 GB GDDR6', interconnect: 'PCIe Gen4', rate: '₹45.00/hr', usecase: 'Low-power 72W video transcoding & inference' },
              { model: 'NVIDIA L40S', vram: '48 GB GDDR6', interconnect: 'PCIe Gen4', rate: '₹95.00/hr', usecase: 'FP8 generative models, multi-modal synthesis' },
              { model: 'NVIDIA A100 SXM4', vram: '80 GB HBM2e', interconnect: 'NVLink 3.0 (600 GB/s)', rate: '₹185.00/hr', usecase: 'Multi-GPU distributed training & deep learning' },
              { model: 'NVIDIA H100 SXM5', vram: '80 GB HBM3', interconnect: 'NVLink 4.0 (900 GB/s)', rate: '₹295.00/hr', usecase: 'Transformer engine pre-training & 70B+ LLMs' },
            ]}
          />
        </section>

        <section id="supported-frameworks" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Pre-Configured Frameworks
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every GPU instance includes pre-installed enterprise machine learning stacks:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>NVIDIA CUDA Toolkit 12.4 and cuDNN 9</li>
            <li>PyTorch 2.3+ compiled with FlashAttention-2 support</li>
            <li>vLLM, TensorRT-LLM, and Hugging Face Transformers pre-configured</li>
            <li>JupyterLab with automatic token authentication and TLS encryption</li>
          </ul>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting & Support
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            To verify GPU driver health upon launching a new instance, execute <InlineCode>nvidia-smi</InlineCode> in your terminal to inspect accelerator names, bus IDs, and driver versions.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU Instance Overview', href: '/docs/user/gpu/overview', description: 'Review tier configurations.' },
            { title: 'Create a GPU Instance', href: '/docs/user/gpu/create-instance', description: 'Launch accelerator nodes.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/overview': {
    slug: '/docs/user/gpu/overview',
    section: 'user',
    category: 'Cloud GPU',
    title: 'GPU Instance Overview & Specs',
    description:
      'Explore available GPU configurations, compute floating-point performance, VRAM capacities, and high-speed local NVMe cache disks.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'tier-specifications', title: 'Instance Sizing & Performance Matrix', level: 2 },
      { id: 'local-nvme-scratch', title: 'Local NVMe Scratch Disks', level: 2 },
      { id: 'scaling-considerations', title: 'Scaling Considerations', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Capacity Alerts', level: 2 },
    ],
    previous: {
      title: 'Cloud GPU Overview',
      href: '/docs/user/gpu/introduction',
    },
    next: {
      title: 'Create a GPU Instance',
      href: '/docs/user/gpu/create-instance',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="tier-specifications" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Instance Sizing & Performance Matrix
          </h2>
          <Table
            columns={[
              { key: 'plan', header: 'GPU Instance Tier' },
              { key: 'gpus', header: 'Accelerators' },
              { key: 'vram', header: 'Total VRAM' },
              { key: 'systemRam', header: 'Host Memory' },
              { key: 'interconnect', header: 'Interconnect' },
            ]}
            data={[
              { plan: 'gpu.l40s.1x', gpus: '1x NVIDIA L40S', vram: '48 GB GDDR6', systemRam: '64 GB DDR5', interconnect: 'PCIe Gen4 x16' },
              { plan: 'gpu.a100.1x', gpus: '1x NVIDIA A100', vram: '80 GB HBM2e', systemRam: '128 GB DDR5', interconnect: 'PCIe Gen4 x16' },
              { plan: 'gpu.h100.1x', gpus: '1x NVIDIA H100', vram: '80 GB HBM3', systemRam: '128 GB DDR5', interconnect: 'PCIe Gen5 x16' },
              { plan: 'gpu.h100.4x', gpus: '4x NVIDIA H100', vram: '320 GB HBM3', systemRam: '512 GB DDR5', interconnect: 'NVLink (900 GB/s)' },
              { plan: 'gpu.h100.8x', gpus: '8x NVIDIA H100', vram: '640 GB HBM3', systemRam: '1024 GB DDR5', interconnect: 'NVSwitch Mesh' },
            ]}
          />
        </section>

        <section id="local-nvme-scratch" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Local NVMe Scratch Disks
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Every multi-GPU instance includes a dedicated local PCIe Gen4 scratch volume mounted at <InlineCode>/scratch</InlineCode>. This ultra-fast storage is engineered to cache Hugging Face model weights and tokenized dataset shards without network I/O latency.
          </p>
        </section>

        <section id="scaling-considerations" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Scaling Considerations
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            For models exceeding 70 billion parameters, select the <InlineCode>gpu.h100.4x</InlineCode> or <InlineCode>gpu.h100.8x</InlineCode> tier. Tensor parallelism requires high NVLink cross-sectional bandwidth to maintain interactive generation speeds.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Capacity Alerts
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Selected GPU tier temporarily sold out&rdquo;:</strong> Accelerator nodes experience high demand. Try launching in an alternate geographical region or reserve instances in advance through support.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Create a GPU Instance', href: '/docs/user/gpu/create-instance', description: 'Launch an accelerator server.' },
            { title: 'Connect to GPU Instance', href: '/docs/user/gpu/connect', description: 'Connect via JupyterLab and SSH.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/create-instance': {
    slug: '/docs/user/gpu/create-instance',
    section: 'user',
    category: 'Cloud GPU',
    title: 'Create a GPU Instance',
    description:
      'Step-by-step instructions to select machine learning images, configure GPU slices, and deploy an accelerator instance.',
    badge: 'Tutorial',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'prerequisites', title: 'Prerequisites', level: 2 },
      { id: 'provisioning-steps', title: 'Provisioning Steps', level: 2 },
      { id: 'driver-verification', title: 'NVIDIA Driver Verification', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Boot Diagnostics', level: 2 },
    ],
    previous: {
      title: 'GPU Instance Overview',
      href: '/docs/user/gpu/overview',
    },
    next: {
      title: 'GPU Configuration',
      href: '/docs/user/gpu/configuration',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="prerequisites" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Prerequisites
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li>An AIC Cloud account verified for GPU accelerator allocation.</li>
            <li>An SSH public key added to your profile.</li>
          </ul>
        </section>

        <section id="provisioning-steps" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Provisioning Steps
          </h2>
          <Steps
            steps={[
              {
                title: 'Open GPU Deployment Drawer',
                content: <p>Go to <strong>Console &gt; Accelerators &gt; GPU Instances</strong> and click <strong>Deploy GPU Node</strong>.</p>,
              },
              {
                title: 'Select Accelerator Tier',
                content: <p>Choose between single-card L40S, single-card A100, or multi-card H100 configurations based on your VRAM demands.</p>,
              },
              {
                title: 'Select Pre-Configured AI Image',
                content: <p>Choose the <strong>AIC PyTorch 2.3 + CUDA 12.4</strong> standardized image for instant zero-setup development.</p>,
              },
              {
                title: 'Attach Persistent Storage',
                content: <p>Attach an existing persistent block storage volume to retain model weights between instance tear-downs.</p>,
              },
              {
                title: 'Launch Node',
                content: <p>Click <strong>Deploy Instance</strong>. The host machine boots and initializes GPU PCIe passthrough in under 90 seconds.</p>,
              },
            ]}
          />
        </section>

        <section id="driver-verification" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            NVIDIA Driver Verification
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Once connected via SSH, verify accelerator health:
          </p>
          <CodeBlock
            code={`nvidia-smi

# Expected output shows Driver Version 550.x, CUDA 12.4, and GPU Model`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Boot Diagnostics
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Node stuck in &ldquo;Initializing PCIe&rdquo;:</strong> Host hardware performs IOMMU group re-enumeration. Allow up to 3 minutes before contacting support.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU Configuration', href: '/docs/user/gpu/configuration', description: 'Configure CUDA environments.' },
            { title: 'Connect to GPU Instance', href: '/docs/user/gpu/connect', description: 'Access JupyterLab and VS Code.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/configuration': {
    slug: '/docs/user/gpu/configuration',
    section: 'user',
    category: 'Cloud GPU',
    title: 'GPU Configuration & CUDA Setup',
    description:
      'Configure NVIDIA container toolkits, manage CUDA library paths, configure PyTorch memory allocators, and set persistent volumes.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'cuda-environment-variables', title: 'CUDA Environment Variables', level: 2 },
      { id: 'pytorch-allocator-tuning', title: 'PyTorch Memory Allocator Tuning', level: 2 },
      { id: 'docker-gpu-passthrough', title: 'Docker GPU Passthrough', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting CUDA Version Mismatches', level: 2 },
    ],
    previous: {
      title: 'Create a GPU Instance',
      href: '/docs/user/gpu/create-instance',
    },
    next: {
      title: 'Connect to GPU Instance',
      href: '/docs/user/gpu/connect',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="cuda-environment-variables" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            CUDA Environment Variables
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Ensure your shell environment exports required CUDA compiler and library paths:
          </p>
          <CodeBlock
            code={`export PATH=/usr/local/cuda-12.4/bin:$PATH
export LD_LIBRARY_PATH=/usr/local/cuda-12.4/lib64:$LD_LIBRARY_PATH
export CUDA_HOME=/usr/local/cuda-12.4`}
            language="bash"
            filename="~/.bashrc"
          />
        </section>

        <section id="pytorch-allocator-tuning" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            PyTorch Memory Allocator Tuning
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Mitigate VRAM fragmentation during large batch runs by configuring PyTorch allocators:
          </p>
          <CodeBlock
            code="export PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="docker-gpu-passthrough" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Docker GPU Passthrough
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Run containerized workloads with NVIDIA Container Toolkit:
          </p>
          <CodeBlock
            code={`docker run --gpus all --rm nvidia/cuda:12.4.0-base-ubuntu22.04 nvidia-smi`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting CUDA Version Mismatches
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Torch was not compiled with CUDA enabled&rdquo;:</strong> Verify your Python environment installed the CUDA wheel rather than the CPU-only PyTorch package. Reinstall via <InlineCode>pip install torch --index-url https://download.pytorch.org/whl/cu124</InlineCode>.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Connect to GPU Instance', href: '/docs/user/gpu/connect', description: 'Access JupyterLab and VS Code.' },
            { title: 'GPU Workload Setup', href: '/docs/user/gpu/workload-setup', description: 'Run LLM inference.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/connect': {
    slug: '/docs/user/gpu/connect',
    section: 'user',
    category: 'Cloud GPU',
    title: 'Connect to GPU Instance',
    description:
      'Access GPU nodes via secure SSH terminal, remote VS Code server, encrypted JupyterLab interfaces, and port-forwarded web UIs.',
    badge: 'Guide',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'terminal-ssh-access', title: 'Terminal SSH Access', level: 2 },
      { id: 'jupyterlab-interface', title: 'JupyterLab Web Access', level: 2 },
      { id: 'vscode-remote-development', title: 'VS Code Remote Development', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Connection Timeouts', level: 2 },
    ],
    previous: {
      title: 'GPU Configuration',
      href: '/docs/user/gpu/configuration',
    },
    next: {
      title: 'GPU Workload Setup',
      href: '/docs/user/gpu/workload-setup',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="terminal-ssh-access" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Terminal SSH Access
          </h2>
          <CodeBlock
            code="ssh -i ~/.ssh/id_ed25519 root@YOUR_GPU_IP"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="jupyterlab-interface" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            JupyterLab Web Access
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            JupyterLab runs on port 8888. Tunnel port 8888 securely to your local machine:
          </p>
          <CodeBlock
            code="ssh -N -L 8888:localhost:8888 root@YOUR_GPU_IP"
            language="bash"
            filename="Local Machine"
          />
          <p className="text-[14px] text-[var(--color-foreground-secondary)]">
            Open <InlineCode>http://localhost:8888</InlineCode> in your browser to interact with notebooks.
          </p>
        </section>

        <section id="vscode-remote-development" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            VS Code Remote Development
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Install the <strong>Remote - SSH</strong> extension in Visual Studio Code. Press <InlineCode>Ctrl+Shift+P</InlineCode>, select <strong>Remote-SSH: Connect to Host</strong>, and enter <InlineCode>root@YOUR_GPU_IP</InlineCode> to edit remote files with full IntelliSense.
          </p>
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Connection Timeouts
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Jupyter token prompt appears:</strong> Retrieve the auto-generated authentication token on the server by running <InlineCode>jupyter server list</InlineCode>.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU Workload Setup', href: '/docs/user/gpu/workload-setup', description: 'Run high-throughput inference.' },
            { title: 'Troubleshooting Cloud GPU', href: '/docs/user/gpu/troubleshooting', description: 'Mitigate OOM errors.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/workload-setup': {
    slug: '/docs/user/gpu/workload-setup',
    section: 'user',
    category: 'Cloud GPU',
    title: 'GPU Workload Setup & Serving',
    description:
      'Deploy high-throughput LLM inference engines using vLLM, cache weights from Hugging Face, and monitor tensor utilization.',
    badge: 'Tutorial',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'vllm-model-serving', title: 'High-Throughput vLLM Serving', level: 2 },
      { id: 'huggingface-caching', title: 'Hugging Face Weight Caching', level: 2 },
      { id: 'distributed-ddp', title: 'Distributed Multi-GPU Execution', level: 2 },
      { id: 'troubleshooting', title: 'Troubleshooting Model Loading', level: 2 },
    ],
    previous: {
      title: 'Connect to GPU Instance',
      href: '/docs/user/gpu/connect',
    },
    next: {
      title: 'Troubleshooting Cloud GPU',
      href: '/docs/user/gpu/troubleshooting',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="vllm-model-serving" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            High-Throughput vLLM Serving
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Serve open-source models with OpenAI-compatible REST endpoints using vLLM PagedAttention:
          </p>
          <CodeBlock
            code={`# Serve model on port 8000
python3 -m vllm.entrypoints.openai.api_server \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --port 8000 \\
  --gpu-memory-utilization 0.90`}
            language="bash"
            filename="Terminal"
          />
          <GpuTensorMatrixVisual />
        </section>

        <section id="huggingface-caching" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Hugging Face Weight Caching
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Redirect Hugging Face downloads to the high-speed local scratch volume to prevent root disk saturation:
          </p>
          <CodeBlock
            code="export HF_HOME=/scratch/huggingface"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="distributed-ddp" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Distributed Multi-GPU Execution
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Launch PyTorch distributed workloads across all available accelerators using torchrun:
          </p>
          <CodeBlock
            code="torchrun --nproc_per_node=4 train.py --batch_size=32"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="troubleshooting" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Troubleshooting Model Loading
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>&ldquo;Gated repo error&rdquo;:</strong> Gated weights (such as Llama 3) require authorization. Execute <InlineCode>huggingface-cli login</InlineCode> with your user read token.</li>
          </ul>
        </section>

        <RelatedLinks
          links={[
            { title: 'Troubleshooting Cloud GPU', href: '/docs/user/gpu/troubleshooting', description: 'Resolve OOM crashes.' },
            { title: 'App Hosting Overview', href: '/docs/user/app-hosting/introduction', description: 'Deploy serverless web apps.' },
          ]}
        />
      </div>
    ),
  },

  '/docs/user/gpu/troubleshooting': {
    slug: '/docs/user/gpu/troubleshooting',
    section: 'user',
    category: 'Cloud GPU',
    title: 'Troubleshooting Cloud GPU',
    description:
      'Remediate CUDA out-of-memory errors, resolve kernel driver communication faults, and inspect accelerator thermal throttling.',
    badge: 'Troubleshooting',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'cuda-oom-errors', title: 'CUDA Out of Memory (OOM) Errors', level: 2 },
      { id: 'driver-communication-failures', title: 'NVIDIA Driver Communication Faults', level: 2 },
      { id: 'thermal-throttling', title: 'Thermal & Power Throttling Diagnostics', level: 2 },
      { id: 'gpu-reset-procedure', title: 'Manual GPU Reset Procedure', level: 2 },
    ],
    previous: {
      title: 'GPU Workload Setup',
      href: '/docs/user/gpu/workload-setup',
    },
    next: {
      title: 'App Hosting Overview',
      href: '/docs/user/app-hosting/introduction',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="cuda-oom-errors" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            CUDA Out of Memory (OOM) Errors
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            When PyTorch raises <InlineCode>RuntimeError: CUDA out of memory</InlineCode>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[14px] text-[var(--color-foreground-secondary)]">
            <li><strong>Reduce Batch Size:</strong> Halve your training or inference batch size and enable gradient accumulation steps.</li>
            <li><strong>Enable 8-bit/4-bit Quantization:</strong> Load models with bitsandbytes (<InlineCode>load_in_4bit=True</InlineCode>) to reduce VRAM requirements by up to 65%.</li>
            <li><strong>Kill Orphaned Processes:</strong> Zombie Python processes may still occupy VRAM:</li>
          </ul>
          <CodeBlock
            code={`# Find and terminate processes holding GPU memory
sudo fuser -v /dev/nvidia*
sudo kill -9 PID`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="driver-communication-failures" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            NVIDIA Driver Communication Faults
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If <InlineCode>nvidia-smi</InlineCode> reports that it cannot communicate with the driver, reload kernel modules:
          </p>
          <CodeBlock
            code={`sudo modprobe -r nvidia_uvm nvidia_drm nvidia_modeset nvidia
sudo modprobe nvidia`}
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="thermal-throttling" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Thermal & Power Throttling Diagnostics
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            Inspect live thermal readings and clock performance caps:
          </p>
          <CodeBlock
            code="nvidia-smi -q -d TEMPERATURE,POWER,PERFORMANCE"
            language="bash"
            filename="Terminal"
          />
        </section>

        <section id="gpu-reset-procedure" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Manual GPU Reset Procedure
          </h2>
          <p className="text-[15px] leading-[26px] text-[var(--color-foreground-secondary)]">
            If a GPU hardware thread hangs inside a CUDA kernel call:
          </p>
          <CodeBlock
            code="sudo nvidia-smi --gpu-reset -i 0"
            language="bash"
            filename="Terminal"
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU Workload Setup', href: '/docs/user/gpu/workload-setup', description: 'Review PyTorch configs.' },
            { title: 'App Hosting Overview', href: '/docs/user/app-hosting/introduction', description: 'Explore containerized web apps.' },
          ]}
        />
      </div>
    ),
  },
}
