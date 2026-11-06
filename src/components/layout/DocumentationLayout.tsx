import React, { useState, useEffect, useCallback } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TopNavbar } from './TopNavbar'
import { Sidebar } from './Sidebar'
import { MobileSidebar } from './MobileSidebar'
import { DocsFooter } from './DocsFooter'
import { SearchDialog } from '@/components/search/SearchDialog'

export const DocumentationLayout: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const handleOpenSearch = useCallback(() => setIsSearchOpen(true), [])
  const handleCloseSearch = useCallback(() => setIsSearchOpen(false), [])
  const handleOpenMobileSidebar = useCallback(() => setIsMobileSidebarOpen(true), [])
  const handleCloseMobileSidebar = useCallback(() => setIsMobileSidebarOpen(false), [])

  // Global keyboard shortcut for search dialog (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors flex flex-col">
      {/* Top Fixed/Sticky Navbar */}
      <TopNavbar
        onOpenSearch={handleOpenSearch}
        onToggleMobileSidebar={handleOpenMobileSidebar}
      />

      {/* Main Content Area */}
      {isHomePage ? (
        <main className="flex-1 w-full flex flex-col">
          <Outlet context={{ onOpenSearch: handleOpenSearch }} />
        </main>
      ) : (
        <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex">
          {/* Desktop Left Sidebar (hidden on mobile/tablet) */}
          <div className="hidden lg:block shrink-0">
            <Sidebar />
          </div>

          {/* Dynamic Nested Content Route */}
          <div className="flex-1 min-w-0">
            <Outlet context={{ onOpenSearch: handleOpenSearch }} />
          </div>
        </div>
      )}

      {/* Global Documentation Footer */}
      <DocsFooter />

      {/* Mobile Drawer Navigation */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={handleCloseMobileSidebar}
      />

      {/* Global Search Dialog Modal */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={handleCloseSearch}
      />
    </div>
  )
}
