import { useEffect, useRef } from "react"

export const About = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const portraitRef = useRef(null)
  const paragraph1Ref = useRef(null)
  const paragraph2Ref = useRef(null)
  const paragraph3Ref = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    // Setup independent reveals for all elements
    const revealElements = [
      { ref: eyebrowRef },
      { ref: headingRef },
      { ref: portraitRef },
      { ref: paragraph1Ref },
      { ref: paragraph2Ref },
      { ref: paragraph3Ref },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, 0)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealElements.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.transform = 'translateY(18px)'
        ref.current.style.transition = 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-20 scroll-mt-24"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        {/* Mobile: portrait after heading, Intermediate: portrait after paragraphs, Desktop xl+: two-column */}
        <div className="flex flex-col md:grid md:grid-cols-12 xl:gap-16 items-start">
          {/* Content column */}
          <div className="md:col-span-7 order-1 xl:order-2 mb-8 md:mb-12 xl:mb-0">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="mb-3"
            >
              <p
                className="text-sm font-medium tracking-wide uppercase"
                style={{ color: 'var(--color-text-muted)' }}
              >
                A LITTLE ABOUT ME / 07
              </p>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="mb-6 leading-[1.08] tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw + 0.75rem, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              There's more to me than code.
            </h2>

            {/* Paragraph 1 */}
            <p
              ref={paragraph1Ref}
              className="mb-6 text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              I'm Daniel, a frontend developer who enjoys turning ideas into things people can actually use. I like understanding how things work, paying attention to the details, and figuring out how to make an experience better.
            </p>

            {/* Paragraph 2 */}
            <p
              ref={paragraph2Ref}
              className="mb-6 text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Outside development, I'm into photography, videography and editing. I enjoy the creative process of capturing moments, telling stories and noticing details that might otherwise go unnoticed.
            </p>

            {/* Paragraph 3 */}
            <p
              ref={paragraph3Ref}
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              I'm naturally more of an observer. I enjoy quiet spaces, thinking things through and learning by building. That curiosity carries into how I approach both technology and creative work.
            </p>
          </div>

          {/* Portrait column */}
          <div className="md:col-span-5 order-2 xl:order-1 flex justify-center xl:justify-start">
            <div
              ref={portraitRef}
              className="rounded-lg overflow-hidden w-full"
              style={{
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <img
                src="/Daniel.jpeg"
                alt="Portrait of Daniel Ayeku wearing a patterned blazer and sunglasses outdoors."
                className="w-full h-auto"
                style={{ aspectRatio: '3/4' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
