import React from 'react'

export type DocSection = 'user' | 'developers'

export interface DocTableOfContentsItem {
  id: string
  title: string
  level: 2 | 3
}

export interface DocMetadata {
  id: string
  title: string
  description: string
  section: DocSection
  category: string
  slug: string
  badge?: string
  isComingSoon?: boolean
  lastUpdated?: string
  tags?: string[]
}

export interface DocPageData {
  slug: string
  section: DocSection
  category: string
  title: string
  description: string
  badge?: string
  isComingSoon?: boolean
  lastUpdated?: string
  toc: DocTableOfContentsItem[]
  previous?: { title: string; href: string }
  prev?: { title: string; href: string }
  next?: { title: string; href: string }
  content: React.ReactNode
}
