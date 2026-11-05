import React from 'react'

export interface AICLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  showBadge?: boolean
  useFullWordmark?: boolean
}

export const AICLogo: React.FC<AICLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showBadge = true,
  useFullWordmark = false,
}) => {
  const sizeMap = {
    sm: { height: 'h-6', icon: 'h-6 w-auto', text: 'text-[14px]', badge: 'text-[10px]' },
    md: { height: 'h-8', icon: 'h-8 w-auto', text: 'text-[16px]', badge: 'text-[11px]' },
    lg: { height: 'h-10', icon: 'h-10 w-auto', text: 'text-[18px]', badge: 'text-[12px]' },
  }

  const { height, icon, text, badge } = sizeMap[size]

  if (useFullWordmark) {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {/* Light Mode Full Logo with dark "AIC" */}
        <img
          src="/images/aic-cloud-logo-light.png"
          alt="AIC Cloud Logo"
          className={`${height} w-auto object-contain select-none dark:hidden`}
        />
        {/* Dark Mode Full Logo with white "AIC" */}
        <img
          src="/images/aic-cloud-logo-dark.png"
          alt="AIC Cloud Logo"
          className={`${height} w-auto object-contain select-none hidden dark:block`}
        />
        {showBadge && (
          <span className={`px-1.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold border border-[var(--color-primary)]/20 ${badge}`}>
            Docs
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official 3D Faceted Crystal "A" Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/images/aic-cloud-mark.png"
          alt="AIC Cloud Emblem"
          className={`${icon} max-w-none object-contain select-none drop-shadow-xs`}
        />
      </div>

      {/* Brand Wordmark Text matching the uploaded typography */}
      {showText && (
        <div className="flex items-center gap-2">
          <span className={`font-extrabold tracking-tight text-[var(--color-foreground)] ${text} flex items-center`}>
            <span>AIC</span>
            <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#0088ff] to-[#6a00ff] dark:from-[#38bdf8] dark:to-[#818cf8]">
              Cloud
            </span>
          </span>
          {showBadge && (
            <span className={`px-1.5 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold border border-[var(--color-primary)]/20 ${badge}`}>
              Docs
            </span>
          )}
        </div>
      )}
    </div>
  )
}
