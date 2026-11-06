import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, ExternalLink, ChevronDown, Sparkles } from 'lucide-react'
import { ThemeToggle } from '@/components/common'
import { AICLogo } from '@/components/common/AICLogo'
import { DocsMegaMenu, type MegaMenuType } from '@/components/navigation/DocsMegaMenu'
import { cn } from '@/utils'

export interface TopNavbarProps {
  onOpenSearch: () => void
  onToggleMobileSidebar: () => void
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onOpenSearch,
  onToggleMobileSidebar,
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuType>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isDevDocs = location.pathname.startsWith('/docs/developers')
  const isUserDocs = location.pathname.startsWith('/docs/user')

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Hover triggers for smooth, responsive dropdown opening
  const handleMouseEnterButton = (menu: 'compute' | 'developers' | 'architecture') => {
    clearCloseTimeout()
    setActiveMegaMenu(menu)
  }

  const handleMouseLeaveButton = () => {
    clearCloseTimeout()
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 200)
  }

  const handleMouseEnterMenu = () => {
    clearCloseTimeout()
  }

  const handleMouseLeaveMenu = () => {
    clearCloseTimeout()
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 200)
  }

  const toggleMegaMenu = (menu: 'compute' | 'developers' | 'architecture') => {
    clearCloseTimeout()
    setActiveMegaMenu((prev) => (prev === menu ? null : menu))
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearCloseTimeout()
    }
  }, [])

  return (
    <header className="sticky top-0 z-30 w-full h-16 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md transition-colors">
      <div className="w-full max-w-[1920px] mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Left Side: Brand & Product Info */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile Menu Trigger (for docs navigation) */}
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            aria-label="Open documentation navigation"
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background-secondary)]/80 text-[var(--color-foreground)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] active:scale-95 transition-all cursor-pointer shadow-2xs"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            onClick={() => setActiveMegaMenu(null)}
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-[var(--radius-sm)]"
            title="AIC Cloud Documentation Home"
          >
            <AICLogo size="md" />
          </Link>
        </div>

        {/* Center: Android Developers-Style Navigation with Mega-Menu Triggers */}
        <nav
          aria-label="Documentation Sections"
          className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-[var(--color-background-secondary)]/80 border border-[var(--color-border)]/70 shadow-2xs"
        >
          <Link
            to="/"
            onMouseEnter={() => {
              clearCloseTimeout()
              setActiveMegaMenu(null)
            }}
            onClick={() => setActiveMegaMenu(null)}
            className={cn(
              'px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-[color,background-color] duration-75 select-none border',
              isHomePage && !activeMegaMenu
                ? 'bg-[var(--color-surface)] text-[var(--color-foreground)] font-semibold shadow-xs border-[var(--color-border)]'
                : 'border-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]/70 hover:border-[var(--color-border)]/50',
            )}
          >
            Overview
          </Link>

          {/* Compute & Infrastructure MegaMenu Button */}
          <button
            type="button"
            onMouseEnter={() => handleMouseEnterButton('compute')}
            onMouseLeave={handleMouseLeaveButton}
            onClick={() => toggleMegaMenu('compute')}
            className={cn(
              'group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-[color,background-color] duration-75 select-none cursor-pointer border',
              activeMegaMenu === 'compute'
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold shadow-xs border-[var(--color-border)]'
                : isUserDocs && !activeMegaMenu
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold border-[var(--color-border)]/70'
                : 'border-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]/70 hover:border-[var(--color-border)]/50',
            )}
          >
            <span>Compute &amp; Infrastructure</span>
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-150',
                activeMegaMenu === 'compute' ? 'rotate-180 text-[var(--color-primary)]' : 'text-slate-400 group-hover:text-[var(--color-foreground)]',
              )}
            />
          </button>

          {/* Developer Platform MegaMenu Button */}
          <button
            type="button"
            onMouseEnter={() => handleMouseEnterButton('developers')}
            onMouseLeave={handleMouseLeaveButton}
            onClick={() => toggleMegaMenu('developers')}
            className={cn(
              'group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-[color,background-color] duration-75 select-none cursor-pointer border',
              activeMegaMenu === 'developers'
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold shadow-xs border-[var(--color-border)]'
                : isDevDocs && !activeMegaMenu
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold border-[var(--color-border)]/70'
                : 'border-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]/70 hover:border-[var(--color-border)]/50',
            )}
          >
            <span>Developer Platform</span>
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-150',
                activeMegaMenu === 'developers' ? 'rotate-180 text-[var(--color-primary)]' : 'text-slate-400 group-hover:text-[var(--color-foreground)]',
              )}
            />
          </button>

          {/* Architecture & 3D Simulations MegaMenu Button */}
          <button
            type="button"
            onMouseEnter={() => handleMouseEnterButton('architecture')}
            onMouseLeave={handleMouseLeaveButton}
            onClick={() => toggleMegaMenu('architecture')}
            className={cn(
              'group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-[color,background-color] duration-75 select-none cursor-pointer border',
              activeMegaMenu === 'architecture'
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold shadow-xs border-[var(--color-border)]'
                : 'border-transparent text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]/70 hover:border-[var(--color-border)]/50',
            )}
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-500 dark:text-neutral-300" />
            <span>Architecture &amp; 3D</span>
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-150',
                activeMegaMenu === 'architecture' ? 'rotate-180 text-[var(--color-primary)]' : 'text-slate-400 dark:text-neutral-500 group-hover:text-[var(--color-foreground)]',
              )}
            />
          </button>
        </nav>

        {/* Right Side: Search, Theme Toggle, Dashboard */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search Trigger Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 h-9 px-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[var(--color-foreground-muted)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-foreground)] transition-all cursor-pointer text-xs w-36 sm:w-56 justify-between shadow-xs"
          >
            <div className="flex items-center gap-2 truncate">
              <Search className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Search docs...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-surface)] text-[10px] font-mono font-medium text-[var(--color-foreground-muted)] shrink-0">
              Ctrl K
            </kbd>
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <ThemeToggle />

          {/* Console CTA Link */}
          <a
            href="https://aiccloud.in/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-semibold hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer shadow-xs"
          >
            <span>Cloud Console</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Flyout Mega-Menu Dropdown */}
      <DocsMegaMenu
        activeMenu={activeMegaMenu}
        onClose={() => setActiveMegaMenu(null)}
        onMouseEnter={handleMouseEnterMenu}
        onMouseLeave={handleMouseLeaveMenu}
      />
    </header>
  )
}
