import { useEffect, useState, useRef } from "react"
import { site } from "../../data/site"
import { AvailabilityStatus } from "../ui/AvailabilityStatus"

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 md:pt-24"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        {/* LEVEL 1: Identity */}
        <div
          className="mb-8 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p
            className="text-sm md:text-base font-medium tracking-wide uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {site.name} • {site.role}
          </p>
        </div>

        {/* LEVEL 2: Dominant Headline */}
        <h1
          className="mb-12 leading-[1.08] tracking-tight transition-all duration-700 ease-out"
          style={{
            fontSize: 'clamp(2.5rem, 8vw + 1rem, 6rem)',
            color: 'var(--color-text-primary)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '100ms',
          }}
        >
          {site.tagline}
        </h1>

        {/* LEVEL 3: Supporting Information */}
        <div
          className="border-t transition-all duration-700 ease-out"
          style={{
            borderColor: 'var(--color-border-subtle)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '200ms',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
            {/* Left: Paragraph and CTAs */}
            <div className="lg:col-span-8">
              <p
                className="mb-8 leading-relaxed max-w-3xl"
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw + 0.75rem, 1.375rem)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {site.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href="#project"
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors duration-150 group"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  View my work
                  <span className="transform transition-transform duration-150 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors duration-150 group"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Let's talk
                  <span className="transform transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Availability/Location */}
            <div className="lg:col-span-4 lg:pt-2">
              <AvailabilityStatus
                status={`Based in ${site.location} • Open to remote opportunities`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
