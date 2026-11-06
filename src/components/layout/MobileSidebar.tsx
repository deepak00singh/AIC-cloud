import React, { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Code2,
  ExternalLink,
  Home,
} from 'lucide-react'
import { userDocsNavigation, developerDocsNavigation } from '@/config/navigation'
import { sectionMetaMap } from '@/config/sidebarIcons'
import type { SidebarSection } from '@/types/navigation'
import { cn } from '@/utils'

export interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface MobileSidebarDrawerProps {
  onClose: () => void
}

const MobileSidebarDrawer: React.FC<MobileSidebarDrawerProps> = ({ onClose }) => {
  const location = useLocation()
  const isDevDocsCurrent = location.pathname.startsWith('/docs/developers')

  // Initial state on mount: start with active documentation scope and no drill-down section selected
  const [activeScope, setActiveScope] = useState<'user' | 'dev'>(
    isDevDocsCurrent ? 'dev' : 'user',
  )
  const [selectedSection, setSelectedSection] = useState<SidebarSection | null>(null)

  // Auto-close drawer ONLY when location pathname actually changes (user navigated to a link)
  const prevPathRef = useRef(location.pathname)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname
      onClose()
    }
  }, [location.pathname, onClose])

  const currentNavigation = activeScope === 'dev' ? developerDocsNavigation : userDocsNavigation

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop with smooth blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Drawer Main Container */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-[320px] max-w-[88vw] h-full bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-2xl flex flex-col z-10 overflow-hidden"
      >
        {/* ---------------- LEVEL 1: MAIN TOPICS VIEW ---------------- */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between shrink-0 bg-[var(--color-surface)]">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/aic-cloud-mark.png"
                alt="AIC Cloud Logo"
                className="h-6 w-auto object-contain select-none"
              />
              <div>
                <span className="font-bold text-sm text-[var(--color-foreground)] leading-none block">
                  AIC Cloud Docs
                </span>
                <span className="text-[10px] text-[var(--color-foreground-muted)] block mt-0.5">
                  Main Topics
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="p-1.5 rounded-lg text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Fast Jump: Overview Page */}
          <div className="px-3 pt-3 shrink-0">
            <Link
              to="/"
              onClick={onClose}
              className={cn(
                'flex items-center justify-between p-2.5 rounded-xl border transition-all text-xs font-semibold',
                location.pathname === '/'
                  ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/30'
                  : 'bg-[var(--color-background-secondary)]/70 text-[var(--color-foreground)] border-[var(--color-border)]/60 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-background-secondary)]',
              )}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]/60 text-indigo-500">
                  <Home className="h-3.5 w-3.5" />
                </div>
                <span>Documentation Overview</span>
              </div>
              <ChevronRight className="h-4 w-4 text-[var(--color-foreground-muted)]" />
            </Link>
          </div>

          {/* Scope Switcher: User Docs vs Developer Docs */}
          <div className="p-3 shrink-0">
            <div className="p-1 rounded-xl bg-[var(--color-background-secondary)] border border-[var(--color-border)]/80 flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setActiveScope('user')
                  setSelectedSection(null)
                }}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer',
                  activeScope === 'user'
                    ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border-subtle)]'
                    : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
                )}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>User Docs</span>
                <span className="text-[10px] opacity-70 font-mono">6</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveScope('dev')
                  setSelectedSection(null)
                }}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer',
                  activeScope === 'dev'
                    ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border-subtle)]'
                    : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
                )}
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Dev Docs</span>
                <span className="text-[10px] opacity-70 font-mono">6</span>
              </button>
            </div>
          </div>

          {/* Main Topics Header Label */}
          <div className="px-4 py-1.5 flex items-center justify-between text-[11px] font-semibold text-[var(--color-foreground-muted)] uppercase tracking-wider shrink-0">
            <span>Select a topic to explore</span>
            <span className="text-[10px] normal-case font-mono">
              {currentNavigation.length} topics
            </span>
          </div>

          {/* Scrollable Main Topics List */}
          <div className="flex-1 overflow-y-auto px-3 py-1 space-y-2 scrollbar-thin">
            {currentNavigation.map((section) => {
              const meta = sectionMetaMap[section.id]
              const hasActiveChild = section.items.some(
                (item) => item.href === location.pathname,
              )

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setSelectedSection(section)}
                  className={cn(
                    'w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group',
                    hasActiveChild
                      ? 'bg-[var(--color-primary)]/5 border-[var(--color-primary)]/40 shadow-xs'
                      : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-background-secondary)]/50',
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={cn(
                        'p-2 rounded-xl border shrink-0 transition-colors',
                        hasActiveChild
                          ? 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30'
                          : 'bg-[var(--color-background-secondary)] border-[var(--color-border)] group-hover:border-[var(--color-primary)]/30',
                      )}
                    >
                      {meta?.icon || <BookOpen className="h-4 w-4 text-[var(--color-primary)]" />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'font-bold text-xs truncate',
                            hasActiveChild
                              ? 'text-[var(--color-primary)]'
                              : 'text-[var(--color-foreground)] group-hover:text-[var(--color-primary)]',
                          )}
                        >
                          {section.title}
                        </span>
                        {hasActiveChild && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-[var(--color-foreground-muted)] mt-0.5">
                        <span>{section.items.length} subtopics</span>
                        {meta?.badge && (
                              <>
                            <span>•</span>
                            <span className="font-mono text-[10px] text-[var(--color-foreground-secondary)]">
                              {meta.badge}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 text-[var(--color-foreground-muted)] group-hover:text-[var(--color-primary)] transition-colors">
                    <span className="text-[11px] font-semibold hidden sm:inline">Open</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Bottom Quick Help Dock */}
          <div className="p-3 border-t border-[var(--color-border)] shrink-0 bg-[var(--color-background-secondary)]/50 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-[var(--color-foreground)] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                AIC Cloud 24/7 SLA
              </span>
              <a
                href="https://aiccloud.in/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline"
              >
                Console <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- LEVEL 2: SUBTOPICS DRILL-DOWN SIDEBAR (ON TOP) ---------------- */}
        <AnimatePresence>
          {selectedSection && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="absolute inset-0 bg-[var(--color-surface)] z-20 flex flex-col h-full shadow-2xl"
            >
              {/* Subtopics Top Bar */}
              <div className="p-3.5 border-b border-[var(--color-border)] flex items-center justify-between shrink-0 bg-[var(--color-background-secondary)]/70">
                <button
                  type="button"
                  onClick={() => setSelectedSection(null)}
                  className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-xs font-bold text-[var(--color-primary)] bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-all shadow-2xs"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Topics</span>
                </button>

                <span className="text-xs font-semibold text-[var(--color-foreground-muted)] uppercase tracking-wider">
                  Subtopics
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation"
                  className="p-1.5 rounded-lg text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] cursor-pointer transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Active Main Topic Title Card */}
              <div className="p-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)] flex items-center gap-3 shrink-0">
                <div className="p-2.5 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)] shrink-0">
                  {sectionMetaMap[selectedSection.id]?.icon || (
                    <BookOpen className="h-5 w-5" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[var(--color-foreground)] leading-tight truncate">
                      {selectedSection.title}
                    </h3>
                    {sectionMetaMap[selectedSection.id]?.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[var(--color-background-secondary)] border border-[var(--color-border)] text-[var(--color-foreground-secondary)]">
                        {sectionMetaMap[selectedSection.id]?.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--color-foreground-muted)] mt-0.5">
                    {selectedSection.items.length} subtopic{selectedSection.items.length > 1 ? 's' : ''} available
                  </p>
                </div>
              </div>

              {/* Subtopics Nav List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
                {selectedSection.items.map((item, idx) => {
                  const isActive = location.pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className={cn(
                        'group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all border',
                        isActive
                          ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border-[var(--color-primary)]/30 shadow-2xs'
                          : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] border-transparent',
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <span
                          className={cn(
                            'h-5 w-5 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold shrink-0 transition-colors',
                            isActive
                              ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                              : 'bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] group-hover:bg-[var(--color-surface)] group-hover:text-[var(--color-foreground)]',
                          )}
                        >
                          {idx + 1}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </div>

                      {item.badge ? (
                        <span
                          className={cn(
                            'px-2 py-0.5 text-[10px] rounded-md font-medium shrink-0',
                            item.isComingSoon
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                              : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight
                          className={cn(
                            'h-3.5 w-3.5 shrink-0 transition-transform',
                            isActive
                              ? 'text-[var(--color-primary)]'
                              : 'text-[var(--color-foreground-muted)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5',
                          )}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Back Action Footer */}
              <div className="p-3 border-t border-[var(--color-border)] shrink-0 bg-[var(--color-background-secondary)]/40 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedSection(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary)] cursor-pointer py-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Main Topics</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && <MobileSidebarDrawer onClose={onClose} />}
    </AnimatePresence>
  )
}
