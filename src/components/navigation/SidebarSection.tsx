import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { SidebarSection as SidebarSectionType } from '@/types/navigation'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/utils'

export interface SidebarSectionProps {
  section: SidebarSectionType
  onItemClick?: () => void
  filterQuery?: string
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  section,
  onItemClick,
  filterQuery = '',
}) => {
  const location = useLocation()
  const hasActiveChild = section.items.some((item) => item.href === location.pathname)

  // Track user manual expansion/collapse
  const [isManuallyToggled, setIsManuallyToggled] = useState<boolean | null>(null)

  // Filter items if user is searching in the sidebar
  const filteredItems = filterQuery.trim()
    ? section.items.filter((item) =>
        item.title.toLowerCase().includes(filterQuery.toLowerCase()),
      )
    : section.items

  if (filterQuery.trim() && filteredItems.length === 0) {
    return null
  }

  // Derived state: open if searching, or if toggled open, or hasActiveChild, or defaultOpen
  const isOpen =
    Boolean(filterQuery.trim()) ||
    (isManuallyToggled !== null
      ? isManuallyToggled
      : hasActiveChild || (section.defaultOpen ?? true))

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setIsManuallyToggled(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`section-${section.id}`}
        className="w-full flex items-center justify-between px-3 py-2 text-[12px] font-bold tracking-wider select-none cursor-pointer rounded-lg hover:bg-[var(--color-background-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] text-left group"
      >
        <span className="truncate uppercase font-bold text-[11px] tracking-wider text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
          {section.title}
        </span>

        <ChevronRight
          className={cn(
            'h-3.5 w-3.5 text-[var(--color-foreground-muted)] transition-transform duration-200 shrink-0 ml-1.5',
            isOpen ? 'rotate-90 text-[var(--color-foreground)]' : 'rotate-0',
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`section-${section.id}`}
            role="region"
            aria-label={section.title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="overflow-hidden space-y-0.5 mt-0.5 pl-1"
          >
            {filteredItems.map((item) => (
              <SidebarItem key={item.href} item={item} onItemClick={onItemClick} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
