import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { userDocsNavigation, developerDocsNavigation } from '@/config/navigation'
import { SidebarSection } from '@/components/navigation/SidebarSection'
import { Search, X, BookOpen, Code2, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react'
import { cn } from '@/utils'

export interface SidebarProps {
  onItemClick?: () => void
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ onItemClick, className }) => {
  const [filterQuery, setFilterQuery] = useState('')
  const location = useLocation()
  const isDevDocs = location.pathname.startsWith('/docs/developers')
  const navigation = isDevDocs ? developerDocsNavigation : userDocsNavigation

  return (
    <aside
      aria-label="Documentation Sidebar"
      className={cn(
        'w-[290px] shrink-0 text-left flex flex-col justify-between',
        className ||
          'sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-5 pr-4 border-r border-[var(--color-border-subtle)] scrollbar-thin',
      )}
    >
      <div className="space-y-4">
        {/* Scope Switcher: User Docs vs Developer Docs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--color-background-secondary)]/80 border border-[var(--color-border)]/70 select-none">
          <Link
            to="/docs/user/introduction"
            onClick={onItemClick}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all',
              !isDevDocs
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border-subtle)]'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            <BookOpen className="h-3.5 w-3.5 shrink-0" />
            <span>User Docs</span>
            <span className="text-[10px] opacity-70 font-mono">33</span>
          </Link>
          <Link
            to="/docs/developers/introduction"
            onClick={onItemClick}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all',
              isDevDocs
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-xs border border-[var(--color-border-subtle)]'
                : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)]',
            )}
          >
            <Code2 className="h-3.5 w-3.5 shrink-0" />
            <span>Dev Docs</span>
            <span className="text-[10px] opacity-70 font-mono">31</span>
          </Link>
        </div>

        {/* In-Sidebar Quick Filter */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-[var(--color-foreground-muted)] pointer-events-none" />
          <input
            type="text"
            placeholder="Filter guides & topics..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-7 text-xs rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground-muted)] focus:outline-none focus:border-[var(--color-primary)]/60 focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all"
          />
          {filterQuery && (
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              aria-label="Clear filter"
              className="absolute right-2 top-2 p-0.5 rounded text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>

        {/* Structured Sections */}
        <div className="space-y-2">
          {navigation.map((section) => (
            <SidebarSection
              key={section.id}
              section={section}
              onItemClick={onItemClick}
              filterQuery={filterQuery}
            />
          ))}
        </div>
      </div>

      {/* Production Help & Console Dock */}
      <div className="pt-6 pb-2">
        <div className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/70 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[11px] text-[var(--color-foreground)] flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              AIC Cloud Status
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              99.99% SLA
            </span>
          </div>

          <p className="text-[11px] text-[var(--color-foreground-muted)] leading-tight">
            24/7 Human support available in English &amp; Hindi.
          </p>

          <div className="pt-1 flex flex-col gap-1.5">
            <a
              href="https://wa.me/917022152606"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[11px] font-semibold text-[var(--color-foreground)] hover:text-emerald-600 hover:border-emerald-500/30 transition-all"
            >
              <span className="flex items-center gap-1.5">
                <MessageSquare className="h-3 w-3 text-emerald-500" />
                WhatsApp Help
              </span>
              <span className="font-mono text-[10px] opacity-70">+91 7022152606</span>
            </a>

            <a
              href="https://aiccloud.in/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-[11px] font-semibold hover:bg-[var(--color-primary-hover)] transition-all shadow-2xs"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3" />
                Open Console
              </span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
