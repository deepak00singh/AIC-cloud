import { createBrowserRouter, Navigate } from 'react-router-dom'
import { DocumentationLayout } from '@/components/layout/DocumentationLayout'
import { DocumentationPage } from '@/pages/DocumentationPage'
import { DocsHomePage } from '@/pages/DocsHomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { DesignSystemPreview } from '@/pages/DesignSystemPreview'
import { LegacyRedirectHandler } from './LegacyRedirectHandler'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DocumentationLayout />,
    children: [
      {
        index: true,
        element: <DocsHomePage />,
      },
      {
        path: 'docs/user',
        element: <Navigate to="/docs/user/introduction" replace />,
      },
      {
        path: 'docs/developers',
        element: <Navigate to="/docs/developers/introduction" replace />,
      },
      {
        path: 'docs/user/*',
        element: <DocumentationPage />,
      },
      {
        path: 'docs/developers/*',
        element: <DocumentationPage />,
      },
      {
        path: 'docs/cloud-vps/*',
        element: <LegacyRedirectHandler />,
      },
      {
        path: 'docs/dedicated-servers/*',
        element: <LegacyRedirectHandler />,
      },
      {
        path: 'docs/cloud-gpu/*',
        element: <LegacyRedirectHandler />,
      },
      {
        path: 'docs/app-hosting/*',
        element: <LegacyRedirectHandler />,
      },
      {
        path: 'docs/object-storage/*',
        element: <LegacyRedirectHandler />,
      },
      {
        path: 'design-system-preview',
        element: <DesignSystemPreview />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
