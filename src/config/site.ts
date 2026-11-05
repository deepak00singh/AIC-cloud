export interface SiteConfig {
  name: string
  title: string
  description: string
  sections: {
    userDocs: {
      name: string
      path: string
      description: string
    }
    developerDocs: {
      name: string
      path: string
      description: string
    }
  }
}

export const siteConfig: SiteConfig = {
  name: 'AIC Cloud',
  title: 'AIC Cloud Documentation Portal',
  description: 'Comprehensive user guides and developer documentation for AIC Cloud platform and APIs.',
  sections: {
    userDocs: {
      name: 'User Guides',
      path: '/user-docs',
      description: 'Platform overview, onboarding, and customer feature guides.',
    },
    developerDocs: {
      name: 'Developer Reference',
      path: '/developer-docs',
      description: 'API reference, SDKs, webhooks, and architecture guides.',
    },
  },
}

