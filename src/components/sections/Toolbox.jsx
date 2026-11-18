import { useEffect, useRef } from "react"
import { skills } from "../../data/skills"

export const Toolbox = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const introRef = useRef(null)
  const categoryRefs = useRef([])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    // Setup eyebrow, heading, and intro reveals
    const sectionElements = [
      { ref: eyebrowRef, delay: 0 },
      { ref: headingRef, delay: 70 },
      { ref: introRef, delay: 140 },
    ]

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementData = sectionElements.find(e => e.ref.current === entry.target)
            if (elementData) {
              setTimeout(() => {
                entry.target.style.opacity = '1'
                entry.target.style.transform = 'translateY(0)'
              }, elementData.delay)
              sectionObserver.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionElements.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.transform = 'translateY(20px)'
        ref.current.style.transition = 'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), transform 650ms cubic-bezier(0.4, 0, 0.2, 1)'
        sectionObserver.observe(ref.current)
      }
    })

    // Setup independent category reveals
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, 0)
            categoryObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0'
        ref.style.transform = 'translateY(18px)'
        ref.style.transition = 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
        categoryObserver.observe(ref)
      }
    })

    return () => {
      sectionObserver.disconnect()
      categoryObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="toolbox"
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="mb-3"
        >
          <p
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: 'var(--color-text-muted)' }}
          >
            THE TOOLBOX / 06
          </p>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-4 leading-[1.08] tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 5.5vw + 1rem, 3.75rem)',
            color: 'var(--color-text-primary)',
          }}
        >
          The tools behind the work.
        </h2>

        {/* Introduction */}
        <p
          ref={introRef}
          className="mb-12 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          These are the technologies I work with to turn ideas into functional products, from building responsive interfaces to connecting the systems behind them.
        </p>

        {/* Skill categories */}
        <div className="space-y-10">
          {skills.categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => { categoryRefs.current[index] = el }}
              className="pt-6"
              style={{
                borderTop: index === 0 ? '1px solid var(--color-border-subtle)' : 'none',
                borderBottom: index < skills.categories.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left column: category number and title */}
                <div className="lg:col-span-4">
                  <div className="flex gap-4">
                    <span
                      className="text-sm font-medium tracking-wide"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {category.number}
                    </span>
                    <h3
                      className="text-lg font-semibold tracking-tight"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Right column: technology labels */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5"
                        style={{
                          color: 'var(--color-text-secondary)',
                          border: '1px solid var(--color-border-subtle)',
                          backgroundColor: 'var(--color-surface)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
