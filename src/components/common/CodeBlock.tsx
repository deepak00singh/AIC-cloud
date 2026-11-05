import React, { useState, useMemo } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-http'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/utils'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = false,
  className,
  ...props
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      setCopied(false)
    }
  }

  const highlightedHtml = useMemo(() => {
    const grammar = Prism.languages[language] || Prism.languages.javascript
    if (grammar) {
      try {
        return Prism.highlight(code, grammar, language)
      } catch {
        return code
      }
    }
    return code
  }, [code, language])

  const lines = useMemo(() => code.split('\n'), [code])

  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)] border border-[var(--color-code-border)] bg-[var(--color-code-bg)] overflow-hidden shadow-[var(--shadow-sm)] text-left',
        className,
      )}
      {...props}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--color-code-border)] bg-[var(--color-code-header)] select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EC6A5E]/90 border border-[#CE5347]/40 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]/90 border border-[#D6A243]/40 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]/90 border border-[#58A849]/40 inline-block" />
          </div>
          {filename ? (
            <span className="text-[12px] font-mono text-neutral-300 font-medium">
              {filename}
            </span>
          ) : (
            <span className="text-[11px] font-mono text-neutral-400 font-medium uppercase tracking-wider">
              {language}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied code to clipboard' : 'Copy code to clipboard'}
          className="flex items-center gap-1.5 px-2 py-1 rounded-[var(--radius-sm)] text-[12px] font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <div className="overflow-x-auto p-4 text-[13px] leading-[22px] font-mono">
        <pre className="m-0 p-0 bg-transparent flex">
          {showLineNumbers && (
            <div
              className="select-none pr-4 mr-4 border-r border-slate-800 text-slate-600 text-right shrink-0"
              aria-hidden="true"
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code
            className="text-[var(--color-code-text)] flex-1 font-mono"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>
    </div>
  )
}

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {}

export const InlineCode: React.FC<InlineCodeProps> = ({ className, children, ...props }) => {
  return (
    <code className={cn('inline-code', className)} {...props}>
      {children}
    </code>
  )
}

