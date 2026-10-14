import { useEffect, useRef } from "react"
import { site } from "../data/site"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null)
  const firstLinkRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        firstLinkRef.current?.focus()
      }, 100)
    }
  }, [menuOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [menuOpen, setMenuOpen])

  const navItems = [
    { id: "project", label: "Work" },
    { id: "about", label: "About" },
    { id: "resume", label: "Résumé", external: true, disabled: !site.resumeUrl },
    { id: "contact", label: "Let's Talk", external: true },
  ]

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: 'rgba(12, 12, 12, 0.98)',
        backdropFilter: 'blur(12px)',
        height: menuOpen ? '100vh' : '0',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none'
      }}
    >
      <button
        ref={closeButtonRef}
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-colors rounded"
        style={{ color: 'var(--color-text-primary)' }}
        aria-label="Close menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item, index) => {
          if (item.disabled) {
            return (
              <span
                key={item.id}
                className="text-2xl font-medium transition-all duration-300 rounded px-4 py-2"
                style={{
                  color: 'var(--color-text-muted)',
                  cursor: 'not-allowed',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms"
                }}
              >
                {item.label}
              </span>
            )
          }

          return (
            <a
              key={item.id}
              ref={index === 0 ? firstLinkRef : null}
              href={item.external ? (item.id === 'resume' ? '#' : `#${item.id}`) : `#${item.id}`}
              target={item.external && item.id !== 'resume' ? "_blank" : undefined}
              rel={item.external && item.id !== 'resume' ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium transition-all duration-300 rounded px-4 py-2 group"
              style={{
                color: 'var(--color-text-primary)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms"
              }}
            >
              {item.label}
              {item.external && (
                <span className="inline-block ml-1 transform transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
