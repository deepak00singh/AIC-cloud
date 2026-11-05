import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="p-2 rounded-[var(--radius-md)] text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}

