import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react'
import { useDocumentationSearch } from '@/hooks/useDocumentationSearch'

export interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

const SearchDialogContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const { query, setQuery, results, groupedResults } = useDocumentationSearch()
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Handle keyboard events inside dialog
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (results.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const selected = results[selectedIndex]
      if (selected) {
        handleSelect(selected.href)
      }
    }
  }

  const handleSelect = (href: string) => {
    onClose()
    navigate(href)
  }

  // Highlight matching characters in text
  const highlightMatch = (text: string, search: string) => {
    if (!search.trim()) return text

    const parts = text.split(new RegExp(`(${search})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <mark
          key={i}
          className="bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold rounded-xs px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -8 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="relative w-full max-w-2xl rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)] overflow-hidden z-10 flex flex-col max-h-[80vh]"
    >
      {/* Search Input Bar */}
      <div className="flex items-center px-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Search className="h-5 w-5 text-[var(--color-foreground-muted)] shrink-0 mr-3" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setSelectedIndex(0)
          }}
          onKeyDown={handleKeyNavigation}
          placeholder="Search documentation, guides, APIs, webhooks..."
          className="w-full h-14 bg-transparent text-[16px] sm:text-[15px] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground-muted)] focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="p-1 rounded-full text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)]"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results Area */}
      <div className="overflow-y-auto p-3 text-left space-y-4">
        {!query.trim() ? (
          // Initial State
          <div className="py-6 px-4 text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[var(--color-foreground)]">
                Search AIC Cloud Documentation
              </p>
              <p className="text-[12px] text-[var(--color-foreground-muted)] max-w-sm mx-auto mt-1">
                Quickly locate tutorials, deployment guides, SDK references, and platform error codes.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-1.5 text-xs">
              <span className="text-[var(--color-foreground-muted)] py-1">Quick jumps:</span>
              {[
                { label: 'Create a VPS', href: '/docs/user/vps/create-vps' },
                { label: 'API Authentication', href: '/docs/developers/api/authentication' },
                { label: 'Node.js SDK', href: '/docs/developers/integrations/nodejs' },
                { label: 'Error Handling', href: '/docs/developers/api/error-handling' },
              ].map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          // Empty State
          <div className="py-12 px-4 text-center space-y-2">
            <p className="text-[15px] font-semibold text-[var(--color-foreground)]">
              No documentation found for &ldquo;{query}&rdquo;
            </p>
            <p className="text-[13px] text-[var(--color-foreground-muted)] max-w-sm mx-auto">
              Try searching for broader keywords like <span className="font-mono text-xs">vps</span>, <span className="font-mono text-xs">auth</span>, <span className="font-mono text-xs">gpu</span>, or <span className="font-mono text-xs">webhook</span>.
            </p>
          </div>
        ) : (
          // Grouped Results
          <div className="space-y-4">
            {/* User Docs Group */}
            {groupedResults.userDocs.length > 0 && (
              <div className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-foreground-muted)]">
                  User Documentation ({groupedResults.userDocs.length})
                </div>
                {groupedResults.userDocs.map((item) => {
                  const globalIndex = results.findIndex((r) => r.id === item.id)
                  const isSelected = globalIndex === selectedIndex

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                      className={`p-3 rounded-[var(--radius-md)] flex items-start gap-3 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/30'
                          : 'hover:bg-[var(--color-background-secondary)] border border-transparent'
                      }`}
                    >
                      <FileText
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          isSelected ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground-muted)]'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[14px] font-semibold truncate ${
                              isSelected ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)]'
                            }`}
                          >
                            {highlightMatch(item.title, query)}
                          </span>
                          <span className="text-[11px] text-[var(--color-foreground-muted)] shrink-0 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[12px] text-[var(--color-foreground-secondary)] line-clamp-1 mt-0.5">
                          {highlightMatch(item.description, query)}
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 self-center transition-transform ${
                          isSelected ? 'text-[var(--color-primary)] translate-x-0.5' : 'opacity-0'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            {/* Developer Docs Group */}
            {groupedResults.developerDocs.length > 0 && (
              <div className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-foreground-muted)]">
                  Developer Documentation ({groupedResults.developerDocs.length})
                </div>
                {groupedResults.developerDocs.map((item) => {
                  const globalIndex = results.findIndex((r) => r.id === item.id)
                  const isSelected = globalIndex === selectedIndex

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                      className={`p-3 rounded-[var(--radius-md)] flex items-start gap-3 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[var(--color-primary-subtle)] border border-[var(--color-primary)]/30'
                          : 'hover:bg-[var(--color-background-secondary)] border border-transparent'
                      }`}
                    >
                      <FileText
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          isSelected ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground-muted)]'
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[14px] font-semibold truncate ${
                              isSelected ? 'text-[var(--color-primary)]' : 'text-[var(--color-foreground)]'
                            }`}
                          >
                            {highlightMatch(item.title, query)}
                          </span>
                          <span className="text-[11px] text-[var(--color-foreground-muted)] shrink-0 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[12px] text-[var(--color-foreground-secondary)] line-clamp-1 mt-0.5">
                          {highlightMatch(item.description, query)}
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 self-center transition-transform ${
                          isSelected ? 'text-[var(--color-primary)] translate-x-0.5' : 'opacity-0'
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer / Shortcuts */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[11px] text-[var(--color-foreground-muted)] select-none">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-surface)] font-mono">
              ↑
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-surface)] font-mono">
              ↓
            </kbd>{' '}
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-surface)] font-mono flex items-center">
              <CornerDownLeft className="h-3 w-3" />
            </kbd>{' '}
            Select
          </span>
        </div>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-surface)] font-mono">
            ESC
          </kbd>{' '}
          Close
        </span>
      </div>
    </motion.div>
  )
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search documentation"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          <SearchDialogContent key="search-dialog-content" onClose={onClose} />
        </div>
      )}
    </AnimatePresence>
  )
}
