import { useEffect, useState, useRef } from "react"
import { site } from "../data/site"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const hamburgerRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px"
    })

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const navItems = [
    { id: "project", label: "Work" },
    { id: "about", label: "About" },
    { id: "resume", label: "Résumé", external: true, disabled: !site.resumeUrl },
    { id: "contact", label: "Let's Talk", external: true },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(12, 12, 12, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border-subtle)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a
            href="#home"
            className="text-lg md:text-xl font-semibold tracking-tight transition-colors duration-200 rounded"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {site.name}
          </a>

          {!menuOpen && (
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center transition-colors relative cursor-pointer z-40 md:hidden rounded"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.disabled) {
                return (
                  <span
                    key={item.id}
                    className="text-base font-medium transition-colors duration-200 px-2 py-1"
                    style={{ color: 'var(--color-text-muted)', cursor: 'not-allowed' }}
                  >
                    {item.label}
                  </span>
                )
              }

              return (
                <a
                  key={item.id}
                  href={item.external ? (item.id === 'resume' ? '#' : `#${item.id}`) : `#${item.id}`}
                  target={item.external && item.id !== 'resume' ? "_blank" : undefined}
                  rel={item.external && item.id !== 'resume' ? "noopener noreferrer" : undefined}
                  className="text-base font-medium transition-colors duration-200 rounded px-2 py-1 group"
                  style={{
                    color: activeSection === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
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
      </div>
    </nav>
  )
}
