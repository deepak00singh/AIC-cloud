import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { cn } from '@/utils'

export interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const isDevDocs = location.pathname.startsWith('/docs/developers')

  // Auto-close drawer on location change
  useEffect(() => {
    onClose()
  }, [location.pathname, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-[300px] max-w-[85vw] h-full bg-[var(--color-surface)] border-r border-[var(--color-border)] shadow-[var(--shadow-lg)] flex flex-col z-10"
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/images/aic-cloud-mark.png"
                  alt="AIC Cloud Emblem"
                  className="h-6 w-auto object-contain select-none"
                />
                <span className="font-bold text-sm text-[var(--color-foreground)]">
                  Navigation
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="p-1.5 rounded-[var(--radius-sm)] text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Section Switcher Tabs inside Mobile Drawer */}
            <div className="p-3 border-b border-[var(--color-border)] flex gap-2">
              <Link
                to="/docs/user/introduction"
                className={cn(
                  'flex-1 py-1.5 text-center text-xs font-semibold rounded-[var(--radius-sm)] transition-colors',
                  !isDevDocs
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                    : 'bg-[var(--color-background-secondary)] text-[var(--color-foreground-secondary)]',
                )}
              >
                User Docs
              </Link>
              <Link
                to="/docs/developers/introduction"
                className={cn(
                  'flex-1 py-1.5 text-center text-xs font-semibold rounded-[var(--radius-sm)] transition-colors',
                  isDevDocs
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                    : 'bg-[var(--color-background-secondary)] text-[var(--color-foreground-secondary)]',
                )}
              >
                Developer Docs
              </Link>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-3">
              <Sidebar onItemClick={onClose} className="w-full py-2 pr-0 border-r-0" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

