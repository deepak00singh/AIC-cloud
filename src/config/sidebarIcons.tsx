import React from 'react'
import {
  Rocket,
  Server,
  HardDrive,
  Cpu,
  Cloud,
  Database,
  Terminal,
  Code2,
  Layers,
  Box,
  Webhook,
  BookOpen,
} from 'lucide-react'

export interface SectionMeta {
  icon: React.ReactNode
  badge: string
  color: string
}

export const sectionMetaMap: Record<string, SectionMeta> = {
  // User Docs
  'getting-started': {
    icon: <Rocket className="h-4 w-4 text-indigo-500" />,
    badge: 'Guide',
    color: 'indigo',
  },
  'cloud-vps': {
    icon: <Server className="h-4 w-4 text-blue-500" />,
    badge: 'KVM',
    color: 'blue',
  },
  'dedicated-servers': {
    icon: <HardDrive className="h-4 w-4 text-slate-400" />,
    badge: 'Bare Metal',
    color: 'slate',
  },
  'cloud-gpu': {
    icon: <Cpu className="h-4 w-4 text-purple-500" />,
    badge: 'H100',
    color: 'purple',
  },
  'app-hosting': {
    icon: <Cloud className="h-4 w-4 text-emerald-500" />,
    badge: 'PaaS',
    color: 'emerald',
  },
  'object-storage': {
    icon: <Database className="h-4 w-4 text-amber-500" />,
    badge: 'S3',
    color: 'amber',
  },

  // Developer Docs
  'developer-overview': {
    icon: <Terminal className="h-4 w-4 text-indigo-500" />,
    badge: 'Overview',
    color: 'indigo',
  },
  'api-fundamentals': {
    icon: <Code2 className="h-4 w-4 text-blue-500" />,
    badge: 'REST',
    color: 'blue',
  },
  'api-reference': {
    icon: <Layers className="h-4 w-4 text-purple-500" />,
    badge: 'Endpoints',
    color: 'purple',
  },
  'integrations': {
    icon: <Box className="h-4 w-4 text-cyan-500" />,
    badge: 'SDKs',
    color: 'cyan',
  },
  'webhooks': {
    icon: <Webhook className="h-4 w-4 text-emerald-500" />,
    badge: 'Events',
    color: 'emerald',
  },
  'resources': {
    icon: <BookOpen className="h-4 w-4 text-amber-500" />,
    badge: 'Reference',
    color: 'amber',
  },
}

