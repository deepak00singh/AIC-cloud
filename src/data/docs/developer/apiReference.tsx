import type { DocPageData } from '@/types/docs'
import {
  CodeBlock,
  InlineCode,
  Callout,
} from '@/components/common'
import { Table } from '@/components/documentation/Table'
import { IllustrativeApiNotice, ForthcomingStorageNotice, RelatedLinks } from '../common'

export const developerApiReferencePages: Record<string, DocPageData> = {
  '/docs/developers/api-reference/vps': {
    slug: '/docs/developers/api-reference/vps',
    section: 'developers',
    category: 'API Reference',
    title: 'VPS API Reference',
    description:
      'Programmatic management of Cloud VPS instances: provisioning, power actions, network IP discovery, and lifecycle control.',
    badge: 'API Spec',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'endpoints-summary', title: 'Endpoint Matrix', level: 2 },
      { id: 'list-instances', title: 'List VPS Instances', level: 2 },
      { id: 'create-instance', title: 'Create VPS Instance', level: 2 },
      { id: 'power-actions', title: 'Execute Power Action', level: 2 },
      { id: 'delete-instance', title: 'Terminate VPS Instance', level: 2 },
    ],
    prev: {
      title: 'Rate Limiting',
      href: '/docs/developers/api/rate-limiting',
    },
    next: {
      title: 'GPU API Overview',
      href: '/docs/developers/api-reference/gpu',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/vps" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The VPS API provides fine-grained control over KVM-virtualized cloud compute instances. You can programmatically deploy machines, attach block storage volumes, manage security firewalls, and execute power lifecycles.
        </p>

        <section id="endpoints-summary" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Endpoint Matrix
          </h2>
          <Table
            headers={['Method', 'Endpoint', 'Scope Required', 'Description']}
            rows={[
              [<span key="get" className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">GET</span>, <InlineCode key="ep1">/api/v1/vps</InlineCode>, 'vps:read', 'List all active and provisioned VPS instances'],
              [<span key="post" className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">POST</span>, <InlineCode key="ep2">/api/v1/vps</InlineCode>, 'vps:write', 'Provision a new virtual server instance'],
              [<span key="get2" className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">GET</span>, <InlineCode key="ep3">/api/v1/vps/{'{id}'}/stats</InlineCode>, 'vps:read', 'Retrieve telemetry, CPU/RAM stats, and details'],
              [<span key="post2" className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">POST</span>, <InlineCode key="ep4">/api/v1/vps/{'{id}'}/restart</InlineCode>, 'vps:write', 'Trigger power actions (restart, start, stop)'],
              [<span key="del" className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">DELETE</span>, <InlineCode key="ep5">/api/v1/vps/{'{id}'}</InlineCode>, 'vps:delete', 'Decommission and release instance resources'],
            ]}
          />
        </section>

        <section id="list-instances" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            List VPS Instances
          </h2>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X GET "https://api.aiccloud.in/api/v1/vps?limit=10" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Accept: application/json"`}
          />
          <CodeBlock
            language="json"
            filename="Response (200 OK)"
            code={`{
  "object": "list",
  "data": [
    {
      "id": "vps_01hq7b3k8j9m1n2p3q4r5s6t7u",
      "name": "api-gateway-01",
      "status": "running",
      "plan": "vps-4g",
      "region": "mumbai-in",
      "ipv4": "103.180.12.42",
      "vcpus": 2,
      "memory_mb": 4096,
      "disk_gb": 40,
      "created_at": "2026-11-05T12:00:00Z"
    }
  ],
  "pagination": {
    "has_more": false,
    "total_count": 1
  }
}`}
          />
        </section>

        <section id="create-instance" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Create VPS Instance
          </h2>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X POST "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "worker-prod-01",
    "plan": "vps-4g",
    "region": "mumbai-in",
    "image": "ubuntu-24.04-lts",
    "ssh_key_ids": ["ssh_key_9f8e7d6c5b4a"]
  }'`}
          />
          <CodeBlock
            language="json"
            filename="Response (201 Created)"
            code={`{
  "object": "vps_instance",
  "data": {
    "id": "vps_01hq8a9b1c2d3e4f5g6h7i8j9k",
    "name": "worker-prod-01",
    "status": "provisioning",
    "plan": "vps-4g",
    "region": "mumbai-in",
    "created_at": "2026-11-05T20:15:00Z"
  }
}`}
          />
        </section>

        <section id="power-actions" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Execute Power Action
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Send asynchronous power state changes to the hypervisor control plane:
          </p>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X POST "https://api.aiccloud.in/api/v1/vps/vps_01hq8a9b1c2d3e4f5g6h7i8j9k/restart" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"action": "restart"}'`}
          />
          <Table
            headers={['Action Endpoint', 'Method', 'Description']}
            rows={[
              [<InlineCode key="reboot">/api/v1/vps/:id/restart</InlineCode>, 'POST', 'Issues graceful restart or hard hardware reset'],
              [<InlineCode key="stop">/api/v1/vps/:id/stop</InlineCode>, 'POST', 'Initiates graceful ACPI shutdown'],
              [<InlineCode key="start">/api/v1/vps/:id/start</InlineCode>, 'POST', 'Powers on a stopped KVM instance'],
              [<InlineCode key="reinstall">/api/v1/vps/:id/reinstall</InlineCode>, 'POST', 'Formats root volume and reinstalls target OS image'],
            ]}
          />
        </section>

        <section id="delete-instance" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Terminate VPS Instance
          </h2>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X DELETE "https://api.aiccloud.in/api/v1/vps/vps_01hq8a9b1c2d3e4f5g6h7i8j9k" \\
  -H "Authorization: Bearer $AIC_API_KEY"`}
          />
          <Callout variant="warning" title="Permanent Data Deletion">
            Terminating an instance permanently disassociates ephemeral IP addresses and purges NVMe root drives. Attached persistent block volumes remain intact unless explicitly flagged for cascade deletion.
          </Callout>
        </section>

        <RelatedLinks
          links={[
            { title: 'GPU API Overview', href: '/docs/developers/api-reference/gpu', description: 'AI accelerator provisioning' },
            { title: 'Instance Management Examples', href: '/docs/developers/api-reference/instance-management', description: 'End-to-end automation scripts' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api-reference/gpu': {
    slug: '/docs/developers/api-reference/gpu',
    section: 'developers',
    category: 'API Reference',
    title: 'GPU API Reference',
    description:
      'Programmatic provisioning of dedicated NVIDIA accelerators, cluster topology queries, and distributed training node configuration.',
    badge: 'Accelerators',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'gpu-endpoints', title: 'GPU Endpoints', level: 2 },
      { id: 'accelerator-models', title: 'Querying Available GPU Stock', level: 2 },
      { id: 'provision-gpu', title: 'Provisioning GPU Accelerated Instance', level: 2 },
      { id: 'nvlink-topology', title: 'Interconnect Topology Metadata', level: 2 },
    ],
    prev: {
      title: 'VPS API Overview',
      href: '/docs/developers/api-reference/vps',
    },
    next: {
      title: 'Storage API Overview',
      href: '/docs/developers/api-reference/storage',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in/api/v1/cloud-gpu" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          The AIC Cloud GPU API enables programmatic deployment of specialized compute instances equipped with NVIDIA H100 SXM5, A100 SXM4, L40S, and RTX 4090 accelerators. Billed per minute directly from prepaid wallet balances starting at ₹27.74/hr. Nodes are provisioned with pre-configured NVIDIA drivers, CUDA 12.4, PyTorch, and vLLM containers.
        </p>

        <section id="gpu-endpoints" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            GPU Endpoints
          </h2>
          <Table
            headers={['Method', 'Endpoint', 'Scope', 'Description']}
            rows={[
              [<span key="get" className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">GET</span>, <InlineCode key="ep1">/api/v1/cloud-gpu/models</InlineCode>, 'gpu:read', 'List real-time accelerator models and regional availability'],
              [<span key="get2" className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">GET</span>, <InlineCode key="ep2">/api/v1/cloud-gpu/instances</InlineCode>, 'gpu:read', 'List all deployed GPU nodes'],
              [<span key="post" className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">POST</span>, <InlineCode key="ep3">/api/v1/cloud-gpu/instances</InlineCode>, 'gpu:write', 'Deploy a dedicated GPU instance or multi-GPU cluster'],
              [<span key="get3" className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">GET</span>, <InlineCode key="ep4">/api/v1/cloud-gpu/instances/{'{id}'}/telemetry</InlineCode>, 'gpu:read', 'Stream live power, thermal, and VRAM utilization metrics'],
            ]}
          />
        </section>

        <section id="accelerator-models" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Querying Available GPU Stock
          </h2>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X GET "https://api.aiccloud.in/api/v1/cloud-gpu/models" \\
  -H "Authorization: Bearer $AIC_API_KEY"`}
          />
          <CodeBlock
            language="json"
            filename="Response (200 OK)"
            code={`{
  "object": "list",
  "data": [
    {
      "model": "nvidia-rtx-4090-24gb",
      "vram_gb": 24,
      "hourly_rate_inr": 27.74,
      "available_instances": 8,
      "region": "mumbai-in"
    },
    {
      "model": "nvidia-h100-sxm5-80gb",
      "vram_gb": 80,
      "interconnect": "NVLink 4.0 (900 GB/s)",
      "fp8_tflops": 1979,
      "available_instances": 12,
      "region": "mumbai-in"
    }
  ]
}`}
          />
        </section>

        <section id="provision-gpu" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Provisioning GPU Accelerated Instance
          </h2>
          <CodeBlock
            language="bash"
            filename="cURL Request"
            code={`curl -X POST "https://api.aiccloud.in/api/v1/cloud-gpu/instances" \\
  -H "Authorization: Bearer $AIC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "llm-train-node-01",
    "gpu_model": "nvidia-rtx-4090-24gb",
    "gpu_count": 1,
    "system_memory_gb": 64,
    "nvme_storage_gb": 500,
    "image": "cuda-12.4-pytorch-2.3",
    "region": "mumbai-in",
    "ssh_key_ids": ["ssh_key_9f8e7d6c5b4a"]
  }'`}
          />
        </section>

        <section id="nvlink-topology" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Interconnect Topology Metadata
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Multi-GPU nodes feature full NVLink mesh topology with NVSwitch switches, delivering 900 GB/s bidirectional bandwidth per GPU. Check the <InlineCode>interconnect_topology</InlineCode> field in instance metadata to configure optimal PyTorch DDP rank affinities.
          </p>
        </section>

        <RelatedLinks
          links={[
            { title: 'Cloud GPU User Guide', href: '/docs/user/gpu/introduction', description: 'Interactive GPU console docs' },
            { title: 'Python Integration', href: '/docs/developers/integrations/python', description: 'Automating training with the Python SDK' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api-reference/storage': {
    slug: '/docs/developers/api-reference/storage',
    section: 'developers',
    category: 'API Reference',
    title: 'Storage API Overview',
    description:
      'Planned architectural specifications for S3-compatible object storage, bucket primitives, and IAM policy enforcement.',
    badge: 'Coming Soon',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'forthcoming-notice', title: 'Availability Status Notice', level: 2 },
      { id: 's3-compatibility', title: 'S3 API Protocol Compatibility', level: 2 },
      { id: 'planned-endpoints', title: 'Planned Core Endpoints', level: 2 },
      { id: 'sdk-integration', title: 'Target AWS SDK Integration', level: 2 },
    ],
    prev: {
      title: 'GPU API Overview',
      href: '/docs/developers/api-reference/gpu',
    },
    next: {
      title: 'Instance Management Examples',
      href: '/docs/developers/api-reference/instance-management',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="forthcoming-notice">
          <ForthcomingStorageNotice />
        </section>

        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://storage.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          AIC Cloud Object Storage provides 100% S3-compatible cloud storage starting from ₹199/month (50 GB Starter, 250 GB Growth, 1 TB Scale). Ideal for AI dataset ingestion, model checkpoints, static media hosting, and automated backup retention.
        </p>

        <section id="s3-compatibility" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            S3 API Protocol Compatibility
          </h2>
          <p className="text-[14px] leading-[24px] text-[var(--color-foreground)]">
            Developers can utilize standard S3 client libraries (Boto3, @aws-sdk/client-s3, AWS CLI, rclone, MinIO Client) simply by altering the <InlineCode>endpoint_url</InlineCode> parameter to point to <InlineCode>https://storage.aiccloud.in</InlineCode>.
          </p>
        </section>

        <section id="planned-endpoints" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Core REST &amp; S3 Endpoints
          </h2>
          <Table
            headers={['Method', 'Operation', 'S3 Action', 'REST API Equivalent']}
            rows={[
              ['GET', 'List Buckets', 's3:ListBuckets', '/api/v1/storage'],
              ['POST', 'Create Bucket', 's3:CreateBucket', '/api/v1/storage'],
              ['GET', 'Fetch S3 Keys', 'iam:GetCredentials', '/api/v1/storage/:bucketId/keys'],
              ['DELETE', 'Delete Bucket', 's3:DeleteBucket', '/api/v1/storage/:bucketId'],
              ['PUT', 'Upload Object', 's3:PutObject', 'Standard S3 API PUT'],
              ['GET', 'Download Object', 's3:GetObject', 'Standard S3 API GET'],
            ]}
          />
        </section>

        <section id="sdk-integration" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Target AWS SDK Integration (Python Boto3)
          </h2>
          <CodeBlock
            language="python"
            filename="boto3_storage.py"
            code={`import boto3

s3_client = boto3.client(
    "s3",
    endpoint_url="https://storage.aiccloud.in",
    aws_access_key_id="YOUR_AIC_ACCESS_KEY",
    aws_secret_access_key="YOUR_AIC_SECRET_KEY",
    region_name="mumbai-in"
)

# Upload model weights to AIC Object Storage
s3_client.upload_file(
    Filename="llama3-checkpoint.pt",
    Bucket="ai-model-weights",
    Key="checkpoints/v1/model.pt"
)`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Object Storage User Guide', href: '/docs/user/storage/introduction', description: 'Preview guide & bucket overview' },
            { title: 'Instance Management Examples', href: '/docs/developers/api-reference/instance-management', description: 'End-to-end automation scripts' },
          ]}
        />
      </div>
    ),
  },

  '/docs/developers/api-reference/instance-management': {
    slug: '/docs/developers/api-reference/instance-management',
    section: 'developers',
    category: 'API Reference',
    title: 'Instance Management Examples',
    description:
      'Complete end-to-end code recipes in cURL, TypeScript, and Python demonstrating instance lifecycle automation, status polling, and teardown.',
    badge: 'Code Recipes',
    lastUpdated: 'November 2026',
    toc: [
      { id: 'illustrative-contract', title: 'Illustrative Specification Notice', level: 2 },
      { id: 'curl-workflow', title: 'Complete cURL Bash Lifecycle Script', level: 2 },
      { id: 'nodejs-workflow', title: 'Node.js / TypeScript Automation', level: 2 },
      { id: 'python-workflow', title: 'Python Infrastructure Automation', level: 2 },
    ],
    prev: {
      title: 'Storage API Overview',
      href: '/docs/developers/api-reference/storage',
    },
    next: {
      title: 'Node.js Integration',
      href: '/docs/developers/integrations/nodejs',
    },
    content: (
      <div className="space-y-8 text-left">
        <section id="illustrative-contract">
          <IllustrativeApiNotice endpoint="https://api.aiccloud.in" />
        </section>

        <p className="text-[15px] leading-[26px] text-[var(--color-foreground)]">
          Real-world cloud management scripts require deploying an instance, waiting for hypervisor provisioning to complete, retrieving its public IPv4 address, and destroying the resource after task execution. Below are verified multi-language recipes implementing this workflow against <InlineCode>https://api.aiccloud.in</InlineCode>.
        </p>

        <section id="curl-workflow" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Complete cURL Bash Lifecycle Script
          </h2>
          <CodeBlock
            language="bash"
            filename="manage_instance.sh"
            code={`#!/usr/bin/env bash
set -euo pipefail

API_BASE="https://api.aiccloud.in/api/v1"
API_KEY="\${AIC_API_KEY:?Error: Set AIC_API_KEY environment variable}"

echo "==> 1. Launching new Cloud VPS..."
CREATE_RES=$(curl -s -X POST "$API_BASE/vps" \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "ci-runner-ephemeral",
    "plan": "vps-4g",
    "region": "mumbai-in",
    "image": "ubuntu-24.04-lts"
  }')

INSTANCE_ID=$(echo "$CREATE_RES" | grep -o '"id": *"[^"]*"' | head -n 1 | cut -d '"' -f 4)
echo "Created Instance ID: $INSTANCE_ID"

echo "==> 2. Polling status until 'running'..."
while true; do
  STATUS_RES=$(curl -s -X GET "$API_BASE/vps/$INSTANCE_ID/stats" \\
    -H "Authorization: Bearer $API_KEY")
  
  CURRENT_STATUS=$(echo "$STATUS_RES" | grep -o '"status": *"[^"]*"' | head -n 1 | cut -d '"' -f 4)
  echo "Current status: $CURRENT_STATUS"
  
  if [ "$CURRENT_STATUS" = "running" ]; then
    PUBLIC_IP=$(echo "$STATUS_RES" | grep -o '"ipv4": *"[^"]*"' | head -n 1 | cut -d '"' -f 4)
    echo "Instance is active! IPv4 Address: $PUBLIC_IP"
    break
  fi
  sleep 5
done

echo "==> 3. Tearing down instance after workload..."
curl -s -X DELETE "$API_BASE/vps/$INSTANCE_ID" \\
  -H "Authorization: Bearer $API_KEY"
echo "Instance $INSTANCE_ID deleted."`}
          />
        </section>

        <section id="nodejs-workflow" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Node.js / TypeScript Automation
          </h2>
          <CodeBlock
            language="typescript"
            filename="lifecycle.ts"
            code={`import { AICCloudClient } from '@aic-cloud/sdk';

const aic = new AICCloudClient({
  apiKey: process.env.AIC_API_KEY!,
  baseUrl: 'https://api.aiccloud.in',
});

async function runEphemeralJob() {
  console.log('1. Provisioning VPS instance...');
  const instance = await aic.vps.create({
    name: 'node-automation-worker',
    plan: 'vps-4g',
    region: 'mumbai-in',
    image: 'ubuntu-24.04-lts',
  });

  console.log(\`Provisioning instance: \${instance.id}\`);

  // Wait for status = 'running'
  const activeInstance = await aic.vps.waitForStatus(instance.id, 'running', {
    timeoutMs: 180000,
    pollIntervalMs: 5000,
  });

  console.log(\`Instance ready at IPv4: \${activeInstance.ipv4}\`);

  // Execute workload...
  console.log('Executing automated test suite...');

  // Teardown
  console.log('Tearing down instance...');
  await aic.vps.delete(instance.id);
  console.log('Teardown complete.');
}

runEphemeralJob().catch(console.error);`}
          />
        </section>

        <section id="python-workflow" className="space-y-4">
          <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-2">
            Python Infrastructure Automation
          </h2>
          <CodeBlock
            language="python"
            filename="lifecycle.py"
            code={`import os
import time
from aic_cloud import AICClient

client = AICClient(
    api_key=os.environ["AIC_API_KEY"],
    base_url="https://api.aiccloud.in"
)

def run_workload():
    print("1. Creating GPU node for batch inference...")
    node = client.gpu.create(
        name="batch-inference-worker",
        gpu_model="nvidia-rtx-4090-24gb",
        gpu_count=1,
        region="mumbai-in",
        image="cuda-12.4-pytorch-2.3"
    )
    print(f"Created node: {node.id}")
    
    # Wait until provisioned
    while True:
        status = client.gpu.get(node.id).status
        print(f"Status: {status}")
        if status == "running":
            break
        time.sleep(5)
        
    print(f"Node ready at IP: {client.gpu.get(node.id).ipv4}")
    
    # Run task and cleanup
    try:
        print("Processing batch inference task...")
    finally:
        print("Cleaning up node...")
        client.gpu.delete(node.id)
        print("Cleanup done.")

if __name__ == "__main__":
    run_workload()`}
          />
        </section>

        <RelatedLinks
          links={[
            { title: 'Node.js Integration', href: '/docs/developers/integrations/nodejs', description: 'SDK client details' },
            { title: 'Python Integration', href: '/docs/developers/integrations/python', description: 'Python client documentation' },
          ]}
        />
      </div>
    ),
  },
}
