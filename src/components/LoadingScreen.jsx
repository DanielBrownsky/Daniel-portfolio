import { useEffect, useState } from "react"
import { site } from "../data/site"

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      // Skip animation for reduced motion users
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 100)
      return
    }

    // Normal animation
    const duration = 1000 // 1 second total
    const interval = 16 // ~60fps
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            onComplete()
          }, 100)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-300"
      style={{
        backgroundColor: 'var(--color-bg)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <h1
        className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {site.name}
      </h1>

      <div className="w-48 md:w-64 flex items-center gap-4">
        <div
          className="h-0.5 flex-1 transition-all duration-75 ease-out"
          style={{
            backgroundColor: 'var(--color-border-strong)',
          }}
        >
          <div
            className="h-full transition-all duration-75 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </div>
        <span
          className="text-sm font-mono tabular-nums"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  )
}
