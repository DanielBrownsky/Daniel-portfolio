import { useEffect, useRef } from "react"
import { experience } from "../../data/experience"

export const Experience = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const introRef = useRef(null)
  const roleRefs = useRef([])
  const summaryRefs = useRef([])
  const contributionRefs = useRef([])

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

    // Setup independent reveals for role groups, summaries, and contributions
    const allRevealTargets = [
      ...roleRefs.current,
      ...summaryRefs.current,
      ...contributionRefs.current
    ].filter(Boolean)

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, 0)
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    allRevealTargets.forEach((ref) => {
      ref.style.opacity = '0'
      ref.style.transform = 'translateY(18px)'
      ref.style.transition = 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
      revealObserver.observe(ref)
    })

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
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
            EXPERIENCE / 05
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
          Where I've put the work in.
        </h2>

        {/* Introduction */}
        <p
          ref={introRef}
          className="mb-12 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          From building products independently to collaborating with teams, these are some of the experiences that have shaped how I work as a developer.
        </p>

        {/* Experience entries */}
        <div className="space-y-10">
          {experience.employment.map((entry, entryIndex) => (
            <div
              key={entry.id}
              className="pt-6"
              style={{
                borderTop: entryIndex === 0 ? '1px solid var(--color-border-subtle)' : 'none',
                borderBottom: entryIndex < experience.employment.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left column: role, organization, period */}
                <div
                  ref={(el) => { roleRefs.current[entryIndex] = el }}
                  className="lg:col-span-5"
                >
                  <h3
                    className="mb-1 text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {entry.role}
                  </h3>
                  <p
                    className="mb-1 text-base"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {entry.organization}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {entry.period}
                  </p>
                </div>

                {/* Right column: summary and contributions */}
                <div className="lg:col-span-7">
                  <p
                    ref={(el) => { summaryRefs.current[entryIndex] = el }}
                    className="mb-4 text-base leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {entry.summary}
                  </p>
                  <ul className="space-y-2">
                    {entry.contributions.map((contribution, idx) => (
                      <li
                        key={idx}
                        ref={(el) => {
                          // Create a unique key for each contribution
                          const contributionIndex = entryIndex * 10 + idx
                          contributionRefs.current[contributionIndex] = el
                        }}
                        className="text-base leading-relaxed pl-5"
                        style={{
                          color: 'var(--color-text-secondary)',
                          position: 'relative'
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--color-accent)'
                          }}
                        >
                          —
                        </span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
