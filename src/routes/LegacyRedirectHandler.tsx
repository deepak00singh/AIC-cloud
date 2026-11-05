import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const legacyRedirectMap: Record<string, string> = {
  '/docs/cloud-vps': '/docs/user/vps/introduction',
  '/docs/cloud-vps/introduction': '/docs/user/vps/introduction',
  '/docs/cloud-vps/create-instance': '/docs/user/vps/create-vps',
  '/docs/cloud-vps/configuration': '/docs/user/vps/configuration',
  '/docs/cloud-vps/start-stop-restart': '/docs/user/vps/start-stop-restart',
  '/docs/cloud-vps/connect-ssh': '/docs/user/vps/ssh-access',
  '/docs/cloud-vps/manage-instances': '/docs/user/vps/manage',
  '/docs/cloud-vps/troubleshooting': '/docs/user/vps/troubleshooting',

  '/docs/dedicated-servers': '/docs/user/dedicated/introduction',
  '/docs/dedicated-servers/introduction': '/docs/user/dedicated/introduction',
  '/docs/dedicated-servers/server-overview': '/docs/user/dedicated/overview',
  '/docs/dedicated-servers/server-provisioning': '/docs/user/dedicated/provisioning',
  '/docs/dedicated-servers/server-management': '/docs/user/dedicated/management',
  '/docs/dedicated-servers/troubleshooting': '/docs/user/dedicated/troubleshooting',

  '/docs/cloud-gpu': '/docs/user/gpu/introduction',
  '/docs/cloud-gpu/introduction': '/docs/user/gpu/introduction',
  '/docs/cloud-gpu/gpu-overview': '/docs/user/gpu/overview',
  '/docs/cloud-gpu/create-gpu-instance': '/docs/user/gpu/create-instance',
  '/docs/cloud-gpu/gpu-configuration': '/docs/user/gpu/configuration',
  '/docs/cloud-gpu/connect-to-gpu': '/docs/user/gpu/connect',
  '/docs/cloud-gpu/gpu-workload-setup': '/docs/user/gpu/workload-setup',
  '/docs/cloud-gpu/troubleshooting': '/docs/user/gpu/troubleshooting',

  '/docs/app-hosting': '/docs/user/app-hosting/introduction',
  '/docs/app-hosting/introduction': '/docs/user/app-hosting/introduction',
  '/docs/app-hosting/create-application': '/docs/user/app-hosting/create-app',
  '/docs/app-hosting/connect-github': '/docs/user/app-hosting/connect-github',
  '/docs/app-hosting/configure-build': '/docs/user/app-hosting/build-settings',
  '/docs/app-hosting/environment-variables': '/docs/user/app-hosting/env-vars',
  '/docs/app-hosting/deploy-application': '/docs/user/app-hosting/deploy',
  '/docs/app-hosting/manage-deployments': '/docs/user/app-hosting/manage-deployments',
  '/docs/app-hosting/custom-domains': '/docs/user/app-hosting/custom-domains',
  '/docs/app-hosting/troubleshooting': '/docs/user/app-hosting/troubleshooting',

  '/docs/object-storage': '/docs/user/storage/introduction',
  '/docs/object-storage/introduction': '/docs/user/storage/introduction',
  '/docs/object-storage/create-bucket': '/docs/user/storage/create-bucket',
  '/docs/object-storage/upload-files': '/docs/user/storage/upload-files',
  '/docs/object-storage/manage-objects': '/docs/user/storage/manage-objects',
}

export const LegacyRedirectHandler: React.FC = () => {
  const location = useLocation()
  const target = legacyRedirectMap[location.pathname] || '/docs/user/introduction'
  return <Navigate to={target} replace />
}

