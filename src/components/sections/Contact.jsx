import { useEffect, useRef } from "react"
import { site } from "../../data/site"
import { TextLink } from "../ui/TextLink"

export const Contact = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const ctaGroupRef = useRef(null)
  const socialLinksRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    // Setup independent reveals for all elements
    const revealElements = [
      { ref: eyebrowRef },
      { ref: headingRef },
      { ref: paragraphRef },
      { ref: ctaGroupRef },
      { ref: socialLinksRef },
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
      id="contact"
      className="py-16 md:py-20 scroll-mt-24"
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
            LET'S CONNECT / 08
          </p>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-6 leading-[1.08] tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 5.5vw + 1rem, 3.75rem)',
            color: 'var(--color-text-primary)',
          }}
        >
          Have something in mind? Let's talk.
        </h2>

        {/* Supporting paragraph */}
        <p
          ref={paragraphRef}
          className="mb-12 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          I'm actively looking for frontend developer opportunities and open to remote roles, freelance projects, and collaborations. If you're building something interesting or think I'd be a good fit for your team, I'd love to hear from you.
        </p>

        {/* Divider */}
        <div
          ref={ctaGroupRef}
          className="mb-8"
          style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
        />

        {/* Email CTA */}
        <div className="mb-8">
          <TextLink
            href={`mailto:${site.email}`}
            className="text-lg hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            Send me an email ↗
          </TextLink>
        </div>

        {/* Social links */}
        <div
          ref={socialLinksRef}
          className="flex flex-wrap items-center gap-6 md:gap-8"
        >
          <TextLink
            href="https://github.com/DanielBrownsky"
            external
            className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            GitHub ↗
          </TextLink>
          <TextLink
            href="https://www.linkedin.com/in/daniel-ayeku-b5a65840a/"
            external
            className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            LinkedIn ↗
          </TextLink>
          <TextLink
            href="https://x.com/AyekuDaniel"
            external
            className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            X (Twitter) ↗
          </TextLink>
        </div>
      </div>
    </section>
  )
}
