import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDocumentationPage } from '@/data/documentationPages'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { PageHeader } from '@/components/documentation/PageHeader'
import { PreviousNext } from '@/components/navigation/PreviousNext'
import { FeedbackWidget } from '@/components/documentation/FeedbackWidget'
import { OnThisPage } from '@/components/documentation/OnThisPage'
import { NotFoundPage } from './NotFoundPage'

export const DocumentationPage: React.FC = () => {
  const location = useLocation()
  const page = getDocumentationPage(location.pathname)

  // Scroll to top or anchor on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  if (!page) {
    return <NotFoundPage />
  }

  const breadcrumbs = [
    {
      title: page.section === 'developers' ? 'Developer Docs' : 'User Docs',
      href: page.section === 'developers' ? '/docs/developers/introduction' : '/docs/user/introduction',
    },
    {
      title: page.category,
    },
    {
      title: page.title,
    },
  ]

  return (
    <div className="flex-1 flex justify-start lg:justify-between py-8 lg:py-10 px-2 sm:px-4 lg:px-8 xl:px-10 min-w-0">
      {/* Center Reading Container - Expansive Full-Screen Canvas */}
      <article className="flex-1 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl min-w-0 pr-0 xl:pr-12">
        <Breadcrumbs items={breadcrumbs} />

        <PageHeader
          category={page.category}
          title={page.title}
          description={page.description}
          badge={page.badge}
          isComingSoon={page.isComingSoon}
          lastUpdated={page.lastUpdated}
        />

        {/* Article Body Content */}
        <div className="prose-content">
          {page.content}
        </div>

        {/* Feedback Section */}
        <FeedbackWidget key={location.pathname} />

        {/* Previous and Next Page Navigation */}
        <PreviousNext previous={page.previous || page.prev} next={page.next} />
      </article>

      {/* Right Sticky Table of Contents (hidden on screens < xl) */}
      <OnThisPage items={page.toc} />
    </div>
  )
}

