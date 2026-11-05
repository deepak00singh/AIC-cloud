import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Shield, Zap } from 'lucide-react'

export const DeveloperApiHeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeLang, setActiveLang] = useState<'curl' | 'typescript' | 'python'>('curl')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    curl: `# Create a VPS instance via cURL
curl -X POST "https://api.aiccloud.in/api/v1/vps" \\
  -H "Authorization: Bearer aic_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-server-01",
    "plan": "vps-4g",
    "region": "mumbai-in",
    "image": "ubuntu-24.04-lts"
  }'`,
    typescript: `// Create a VPS instance in Node.js
import { AICCloudClient } from '@aic-cloud/sdk';

const aic = new AICCloudClient({
  apiKey: process.env.AIC_API_KEY!,
  baseUrl: 'https://api.aiccloud.in',
});

const server = await aic.vps.create({
  name: 'my-server-01',
  plan: 'vps-4g',
  region: 'mumbai-in',
  image: 'ubuntu-24.04-lts',
});

console.log(\`Server running at: \${server.ipv4}\`);`,
    python: `# Create a VPS instance in Python
from aic_cloud import AICClient
import os

client = AICClient(
    api_key=os.environ["AIC_API_KEY"],
    base_url="https://api.aiccloud.in"
)

server = client.vps.create(
    name="my-server-01",
    plan="vps-4g",
    region="mumbai-in",
    image="ubuntu-24.04-lts"
)

print(f"Server running at: {server.ipv4}")`,
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippets[activeLang])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`relative w-full max-w-xl mx-auto ${className}`}
      style={
        {
          '--hairline-plate': '#0b0f19',
          '--hairline-hi': '#6366f1',
          '--hairline-edge': '#cbd5e1',
          '--hairline-mid': '#475569',
          '--hairline-lo': '#1e293b',
          '--hairline-stroke': '1',
        } as React.CSSProperties
      }
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-transparent rounded-2xl blur-xl -z-10" />

      {/* Code Editor Window Frame */}
      <div className="rounded-2xl border border-[var(--color-code-border)] bg-[var(--color-code-bg)] shadow-[var(--shadow-lg)] overflow-hidden text-left font-mono">
        {/* Editor Top Bar with Window Controls & Language Tabs */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-code-border)] bg-[var(--color-code-header)] select-none">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-neutral-400 font-sans font-medium ml-2 hidden sm:inline">
              AIC Cloud REST API v1
            </span>
          </div>

          <div className="flex items-center gap-1 bg-neutral-900/80 p-0.5 rounded-lg border border-neutral-800">
            {(['curl', 'typescript', 'python'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setActiveLang(lang)}
                className={`px-2.5 py-1 text-xs rounded-md font-sans font-medium transition-all cursor-pointer ${
                  activeLang === lang
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {lang === 'curl'
                  ? 'cURL'
                  : lang === 'typescript'
                  ? 'Node.js'
                  : 'Python'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Copied code' : 'Copy code snippet'}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 text-[13px] leading-[22px] text-neutral-200 overflow-x-auto min-h-[170px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.pre
              key={activeLang}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="m-0 bg-transparent w-full text-left font-mono"
            >
              <code>{codeSnippets[activeLang]}</code>
            </motion.pre>
          </AnimatePresence>
        </div>

        {/* Simulated Response Preview Bar */}
        <div className="border-t border-[var(--color-code-border)] bg-black/60 p-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              201 CREATED
            </span>
            <span className="text-neutral-400 text-[11px] hidden sm:inline">
              Latency: <span className="text-neutral-200">14ms</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-neutral-400" />
              <span>TLS 1.3</span>
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>idempotent</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
