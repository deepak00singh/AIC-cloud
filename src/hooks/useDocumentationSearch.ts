import { useState, useMemo } from 'react'
import { searchIndex } from '@/config/searchIndex'
import type { SearchItem } from '@/config/searchIndex'

export interface GroupedSearchResults {
  userDocs: SearchItem[]
  developerDocs: SearchItem[]
}

export function useDocumentationSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) {
      return []
    }

    return searchIndex.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(trimmed)
      const matchCategory = item.category.toLowerCase().includes(trimmed)
      const matchDescription = item.description.toLowerCase().includes(trimmed)
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(trimmed))

      return matchTitle || matchCategory || matchDescription || matchKeywords
    })
  }, [query])

  const groupedResults = useMemo<GroupedSearchResults>(() => {
    return {
      userDocs: results.filter((r) => r.section === 'User Docs'),
      developerDocs: results.filter((r) => r.section === 'Developer Docs'),
    }
  }, [results])

  return {
    query,
    setQuery,
    results,
    groupedResults,
    hasResults: results.length > 0,
  }
}
