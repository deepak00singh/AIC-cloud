import React, { useState } from 'react'
import { cn } from '@/utils'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

export interface TabsProps {
  items: TabItem[]
  defaultTabId?: string
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultTabId, className }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || items[0]?.id)

  const activeItem = items.find((item) => item.id === activeTabId) || items[0]

  return (
    <div className={cn('w-full my-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)] shadow-[var(--shadow-sm)]', className)}>
      <div
        role="tablist"
        aria-label="Code language tabs"
        className="flex items-center gap-1 px-3 pt-2 bg-[var(--color-background-secondary)] border-b border-[var(--color-border)] overflow-x-auto"
      >
        {items.map((tab) => {
          const isActive = tab.id === activeTabId

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                'px-3.5 py-2 text-[13px] font-medium transition-all cursor-pointer border-b-2 -mb-px rounded-t-[var(--radius-sm)] select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]',
                isActive
                  ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-surface)] font-semibold'
                  : 'border-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-tertiary)]',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        id={`panel-${activeItem?.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeItem?.id}`}
        tabIndex={0}
        className="p-4 text-left focus-visible:outline-none"
      >
        {activeItem?.content}
      </div>
    </div>
  )
}
