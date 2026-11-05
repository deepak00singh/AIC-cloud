import React from 'react'
import { NavLink } from 'react-router-dom'
import type { NavItem } from '@/types/navigation'
import { cn } from '@/utils'

export interface SidebarItemProps {
  item: NavItem
  onItemClick?: () => void
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ item, onItemClick }) => {
  return (
    <NavLink
      to={item.href}
      onClick={onItemClick}
      className={({ isActive }) =>
        cn(
          'flex items-center justify-between px-3 py-2 rounded-lg text-[13px] leading-snug transition-colors select-none',
          isActive
            ? 'bg-[#eef2ff] dark:bg-neutral-800 text-[#4f46e5] dark:text-white font-semibold'
            : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-neutral-900/80 font-normal',
        )
      }
    >
      {({ isActive: _isActive }) => (
        <>
          <span className="truncate">{item.title}</span>

          {item.isComingSoon && (
            <span className="ml-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10 dark:bg-neutral-900 text-amber-600 dark:text-neutral-300 border border-amber-500/20 dark:border-neutral-800 shrink-0">
              Preview
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}
