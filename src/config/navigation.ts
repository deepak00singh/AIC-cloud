import type { SidebarSection } from '@/types/navigation'

export const userDocsNavigation: SidebarSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    defaultOpen: true,
    items: [
      { title: 'Introduction', href: '/docs/user/introduction' },
      { title: 'Create an Account', href: '/docs/user/getting-started/create-account' },
      { title: 'Dashboard Overview', href: '/docs/user/getting-started/dashboard-overview' },
      { title: 'Account Management', href: '/docs/user/getting-started/account-management' },
    ],
  },
  {
    id: 'cloud-vps',
    title: 'Cloud VPS',
    defaultOpen: true,
    items: [
      { title: 'Introduction', href: '/docs/user/vps/introduction' },
      { title: 'Create a VPS Instance', href: '/docs/user/vps/create-vps' },
      { title: 'VPS Configuration', href: '/docs/user/vps/configuration' },
      { title: 'Start, Stop and Restart VPS', href: '/docs/user/vps/start-stop-restart' },
      { title: 'Connect Through SSH', href: '/docs/user/vps/ssh-access' },
      { title: 'Manage VPS Instances', href: '/docs/user/vps/manage' },
      { title: 'Troubleshooting', href: '/docs/user/vps/troubleshooting' },
    ],
  },
  {
    id: 'dedicated-servers',
    title: 'Dedicated Servers',
    defaultOpen: false,
    items: [
      { title: 'Introduction', href: '/docs/user/dedicated/introduction' },
      { title: 'Server Overview', href: '/docs/user/dedicated/overview' },
      { title: 'Server Provisioning', href: '/docs/user/dedicated/provisioning' },
      { title: 'Server Management', href: '/docs/user/dedicated/management' },
      { title: 'Troubleshooting', href: '/docs/user/dedicated/troubleshooting' },
    ],
  },
  {
    id: 'cloud-gpu',
    title: 'Cloud GPU',
    defaultOpen: false,
    items: [
      { title: 'Introduction', href: '/docs/user/gpu/introduction' },
      { title: 'GPU Instance Overview', href: '/docs/user/gpu/overview' },
      { title: 'Create a GPU Instance', href: '/docs/user/gpu/create-instance' },
      { title: 'GPU Configuration', href: '/docs/user/gpu/configuration' },
      { title: 'Connect to GPU Instance', href: '/docs/user/gpu/connect' },
      { title: 'GPU Workload Setup', href: '/docs/user/gpu/workload-setup' },
      { title: 'Troubleshooting', href: '/docs/user/gpu/troubleshooting' },
    ],
  },
  {
    id: 'app-hosting',
    title: 'App Hosting',
    defaultOpen: false,
    items: [
      { title: 'Introduction', href: '/docs/user/app-hosting/introduction' },
      { title: 'Create an Application', href: '/docs/user/app-hosting/create-app' },
      { title: 'Connect GitHub Repository', href: '/docs/user/app-hosting/connect-github' },
      { title: 'Configure Build Settings', href: '/docs/user/app-hosting/build-settings' },
      { title: 'Environment Variables', href: '/docs/user/app-hosting/env-vars' },
      { title: 'Deploy an Application', href: '/docs/user/app-hosting/deploy' },
      { title: 'Manage Deployments', href: '/docs/user/app-hosting/manage-deployments' },
      { title: 'Custom Domains', href: '/docs/user/app-hosting/custom-domains' },
      { title: 'Troubleshooting', href: '/docs/user/app-hosting/troubleshooting' },
    ],
  },
  {
    id: 'object-storage',
    title: 'Object Storage',
    defaultOpen: false,
    items: [
      {
        title: 'Introduction',
        href: '/docs/user/storage/introduction',
        badge: 'Coming Soon',
        isComingSoon: true,
      },
      {
        title: 'Create a Storage Bucket',
        href: '/docs/user/storage/create-bucket',
        badge: 'Coming Soon',
        isComingSoon: true,
      },
      {
        title: 'Upload Files',
        href: '/docs/user/storage/upload-files',
        badge: 'Coming Soon',
        isComingSoon: true,
      },
      {
        title: 'Manage Objects',
        href: '/docs/user/storage/manage-objects',
        badge: 'Coming Soon',
        isComingSoon: true,
      },
    ],
  },
]

export const developerDocsNavigation: SidebarSection[] = [
  {
    id: 'developer-overview',
    title: 'Developer Overview',
    defaultOpen: true,
    items: [
      { title: 'Introduction', href: '/docs/developers/introduction' },
      { title: 'Developer Quickstart', href: '/docs/developers/quickstart' },
      { title: 'API Concepts', href: '/docs/developers/concepts' },
    ],
  },
  {
    id: 'api-fundamentals',
    title: 'API Fundamentals',
    defaultOpen: true,
    items: [
      { title: 'API Overview', href: '/docs/developers/api/overview' },
      { title: 'Base URL', href: '/docs/developers/api/base-url' },
      { title: 'Authentication', href: '/docs/developers/api/authentication' },
      { title: 'API Keys', href: '/docs/developers/api/api-keys' },
      { title: 'Request Format', href: '/docs/developers/api/request-format' },
      { title: 'Response Format', href: '/docs/developers/api/response-format' },
      { title: 'HTTP Status Codes', href: '/docs/developers/api/status-codes' },
      { title: 'Error Handling', href: '/docs/developers/api/error-handling' },
      { title: 'Rate Limiting', href: '/docs/developers/api/rate-limiting' },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    defaultOpen: false,
    items: [
      { title: 'VPS API Overview', href: '/docs/developers/api-reference/vps' },
      { title: 'GPU API Overview', href: '/docs/developers/api-reference/gpu' },
      {
        title: 'Storage API Overview',
        href: '/docs/developers/api-reference/storage',
        badge: 'Coming Soon',
        isComingSoon: true,
      },
      { title: 'Instance Management Examples', href: '/docs/developers/api-reference/instance-management' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    defaultOpen: false,
    items: [
      { title: 'Node.js Integration', href: '/docs/developers/integrations/nodejs' },
      { title: 'Python Integration', href: '/docs/developers/integrations/python' },
      { title: 'REST API Integration', href: '/docs/developers/integrations/rest-api' },
    ],
  },
  {
    id: 'webhooks',
    title: 'Webhooks',
    defaultOpen: false,
    items: [
      { title: 'Webhook Overview', href: '/docs/developers/webhooks/overview' },
      { title: 'Webhook Configuration', href: '/docs/developers/webhooks/configuration' },
      { title: 'Event Structure', href: '/docs/developers/webhooks/event-structure' },
      { title: 'Signature Verification', href: '/docs/developers/webhooks/signature-verification' },
      { title: 'Retry Handling', href: '/docs/developers/webhooks/retry-handling' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    defaultOpen: false,
    items: [
      { title: 'Glossary', href: '/docs/developers/resources/glossary' },
      { title: 'Troubleshooting', href: '/docs/developers/resources/troubleshooting' },
      { title: 'FAQ', href: '/docs/developers/resources/faq' },
      { title: 'Best Practices', href: '/docs/developers/resources/best-practices' },
    ],
  },
]
