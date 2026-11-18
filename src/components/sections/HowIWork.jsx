import { useEffect, useRef } from "react"

export const HowIWork = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const introRef = useRef(null)
  const principleRefs = useRef([])

  const principles = [
    {
      number: "01",
      heading: "Understand the problem first.",
      text: "Before writing code, I want to know what we're solving, who it's for, and what a good solution should actually do."
    },
    {
      number: "02",
      heading: "Build for the person using it.",
      text: "A good interface should feel straightforward. I pay attention to responsiveness, accessibility, feedback and the little details that make things easier to use."
    },
    {
      number: "03",
      heading: "Think beyond the happy path.",
      text: "Loading states, failed requests, permissions and edge cases matter just as much as the screen people see when everything works."
    },
    {
      number: "04",
      heading: "Ship. Learn. Improve.",
      text: "I like getting things into people's hands, learning from how they use them, and making the product better with every iteration."
    }
  ]

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

    // Setup individual principle reveals
    const principleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, 0)
            principleObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    principleRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0'
        ref.style.transform = 'translateY(20px)'
        ref.style.transition = 'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), transform 650ms cubic-bezier(0.4, 0, 0.2, 1)'
        principleObserver.observe(ref)
      }
    })

    return () => {
      sectionObserver.disconnect()
      principleObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-i-work"
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: eyebrow, heading and introduction */}
          <div className="lg:col-span-5">
            <div
              ref={eyebrowRef}
              className="mb-3"
            >
              <p
                className="text-sm font-medium tracking-wide uppercase"
                style={{ color: 'var(--color-text-muted)' }}
              >
                MY APPROACH / 04
              </p>
            </div>

            <h2
              ref={headingRef}
              className="mb-6 leading-[1.08] tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw + 0.75rem, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              The interface matters. So does everything behind it.
            </h2>

            <p
              ref={introRef}
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              I care about more than getting a design to look right. I want to understand the problem, build something people can actually use, and make sure the experience works beyond the happy path.
            </p>
          </div>

          {/* Right column: four working principles */}
          <div className="lg:col-span-7">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                ref={(el) => { principleRefs.current[index] = el }}
                className="pt-6"
                style={{
                  borderTop: index === 0 ? '1px solid var(--color-border-subtle)' : 'none',
                  borderBottom: index < principles.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                }}
              >
                <div className="flex gap-4">
                  <span
                    className="text-sm font-medium tracking-wide"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {principle.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="mb-2 text-lg font-semibold tracking-tight"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {principle.heading}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {principle.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
