import React, { useMemo } from 'react'
import type { DocTableOfContentsItem } from '@/types/docs'
import { useActiveHeading } from '@/hooks/useActiveHeading'
import { AlignLeft } from 'lucide-react'
import { cn } from '@/utils'

export interface OnThisPageProps {
  items: DocTableOfContentsItem[]
}

export const OnThisPage: React.FC<OnThisPageProps> = ({ items }) => {
  const headingIds = useMemo(() => items.map((i) => i.id), [items])
  const activeId = useActiveHeading(headingIds)

  if (items.length === 0) {
    return (
      <aside aria-label="Table of Contents" className="w-[220px] shrink-0 text-left p-4">
        <p className="text-xs text-[var(--color-foreground-muted)]">
          No headings on this page.
        </p>
      </aside>
    )
  }

  const handleHeadingClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const topOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <aside
      aria-label="Table of Contents"
      className="hidden xl:block w-[240px] 2xl:w-[260px] shrink-0 text-left sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pl-5 border-l border-[var(--color-border-subtle)] text-xs"
    >
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[var(--color-foreground)] mb-3 text-[11px]">
        <AlignLeft className="h-3.5 w-3.5 text-[var(--color-primary)]" />
        <span>On this page</span>
      </div>

      <nav className="space-y-0.5">
        {items.map((item) => {
          const isActive = activeId === item.id || (!activeId && item === items[0])

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleHeadingClick(e, item.id)}
              className={cn(
                'block py-1.5 px-2 transition-all leading-snug rounded-md text-[13px]',
                item.level === 3 ? 'pl-4 text-[12px]' : 'pl-2',
                isActive
                  ? 'text-[var(--color-primary)] font-semibold bg-[var(--color-primary-subtle)]'
                  : 'text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)]',
              )}
            >
              {item.title}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
