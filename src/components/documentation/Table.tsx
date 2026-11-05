import React from 'react'
import { cn } from '@/utils'

export interface Column<T = any> {
  key: string
  header: string
  render?: (row: T) => React.ReactNode
  className?: string
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
  // Pattern 1: columns & data
  columns?: Column<T>[]
  data?: T[]
  // Pattern 2: headers & rows
  headers?: React.ReactNode[]
  rows?: React.ReactNode[][]
  className?: string
}

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  data,
  headers,
  rows,
  className,
}: TableProps<T>) {
  // If headers & rows are provided
  if (headers && rows) {
    return (
      <div className={cn('w-full my-6 overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]', className)}>
        <table className="w-full text-left border-collapse text-[13px]">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[var(--color-foreground-secondary)] font-semibold">
              {headers.map((h, i) => (
                <th key={i} className="py-3 px-4 font-semibold text-[13px]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] bg-[var(--color-surface)]">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-[var(--color-background-secondary)]/50 transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-3 px-4 text-[var(--color-foreground)] align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  // Fallback to columns & data
  const safeCols = columns || []
  const safeData = data || []

  return (
    <div className={cn('w-full my-6 overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]', className)}>
      <table className="w-full text-left border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-background-secondary)] text-[var(--color-foreground-secondary)] font-semibold">
            {safeCols.map((col) => (
              <th key={col.key} className={cn('py-3 px-4', col.className)}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border-subtle)] bg-[var(--color-surface)]">
          {safeData.map((row, index) => (
            <tr key={index} className="hover:bg-[var(--color-background-secondary)]/50 transition-colors">
              {safeCols.map((col) => (
                <td key={col.key} className={cn('py-3 px-4 text-[var(--color-foreground)] align-top', col.className)}>
                  {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
