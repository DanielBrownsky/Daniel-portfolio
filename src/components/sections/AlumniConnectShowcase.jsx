import { useEffect, useRef, useState } from "react"
import { projects } from "../../data/projects"
import { TextLink } from "../ui/TextLink"
import { ImageLightbox } from "../ui/ImageLightbox"

export const AlumniConnectShowcase = () => {
  const project = projects.find(p => p.id === "alumni-connect")
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const metadataRef = useRef(null)
  const supportingRef = useRef(null)
  const screenshotsRef = useRef(null)
  const linksRef = useRef(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    const elements = [
      { ref: eyebrowRef, delay: 0 },
      { ref: titleRef, delay: 70 },
      { ref: descriptionRef, delay: 140 },
      { ref: metadataRef, delay: 210 },
      { ref: supportingRef, delay: 280 },
      { ref: screenshotsRef, delay: 350 },
      { ref: linksRef, delay: 420 },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementData = elements.find(e => e.ref.current === entry.target)
            if (elementData) {
              setTimeout(() => {
                entry.target.style.opacity = '1'
                entry.target.style.transform = 'translateY(0)'
              }, elementData.delay)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.style.opacity = '0'
        ref.current.style.transform = 'translateY(20px)'
        ref.current.style.transition = 'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), transform 650ms cubic-bezier(0.4, 0, 0.2, 1)'
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (!project?.showcase) return null

  const { showcase } = project

  const screenshots = [
    {
      src: showcase.screenshots.dashboard,
      alt: "Alumni Connect Student Dashboard showing profile overview and activity feed",
      label: "Student Dashboard"
    },
    {
      src: showcase.screenshots.mentorship,
      alt: "Alumni Connect Mentorship Applications page showing mentor requests and management",
      label: "Mentorship Applications"
    }
  ]

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <section
      ref={sectionRef}
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
            {showcase.eyebrow}
          </p>
        </div>

        {/* Title */}
        <h2
          ref={titleRef}
          className="mb-4 leading-[1.08] tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 5.5vw + 1rem, 3.75rem)',
            color: 'var(--color-text-primary)',
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="mb-8 leading-relaxed max-w-3xl"
          style={{
            fontSize: 'clamp(1.125rem, 1.5vw + 0.75rem, 1.25rem)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {showcase.fullDescription}
        </p>

        {/* Metadata */}
        <div
          ref={metadataRef}
          className="mb-8 pb-6"
          style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p
                className="text-xs font-medium uppercase tracking-wide mb-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Role
              </p>
              <p style={{ color: 'var(--color-text-primary)' }}>
                {showcase.showcaseRole}
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium uppercase tracking-wide mb-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Period
              </p>
              <p style={{ color: 'var(--color-text-primary)' }}>
                {showcase.period}
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium uppercase tracking-wide mb-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Technology
              </p>
              <p style={{ color: 'var(--color-text-primary)' }}>
                {showcase.showcaseTech.join(" • ")}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting contribution */}
        <p
          ref={supportingRef}
          className="mb-8 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {showcase.supportingCopy}
        </p>

        {/* Two screenshots */}
        <div
          ref={screenshotsRef}
          className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Student Dashboard - primary */}
          <div className="lg:col-span-7">
            <button
              onClick={() => openLightbox(0)}
              className="group relative rounded-lg overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer"
              style={{
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface)',
              }}
              aria-label="View larger preview of Student Dashboard screenshot"
            >
              <img
                src={showcase.screenshots.dashboard}
                alt="Alumni Connect Student Dashboard showing profile overview and activity feed"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Zoom icon overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.6)',
                }}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 11V9a2 2 0 00-2-2v0a2 2 0 00-2 2v0a2 2 0 00-2 2v6"
                  />
                </svg>
              </div>
            </button>
            <p
              className="mt-3 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Student Dashboard
            </p>
          </div>

          {/* Mentorship Applications - secondary */}
          <div className="lg:col-span-5">
            <button
              onClick={() => openLightbox(1)}
              className="group relative rounded-lg overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer"
              style={{
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface)',
              }}
              aria-label="View larger preview of Mentorship Applications screenshot"
            >
              <img
                src={showcase.screenshots.mentorship}
                alt="Alumni Connect Mentorship Applications page showing mentor requests and management"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Zoom icon overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.6)',
                }}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 11V9a2 2 0 00-2-2v0a2 2 0 00-2 2v0a2 2 0 00-2 2v6"
                  />
                </svg>
              </div>
            </button>
            <p
              className="mt-3 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Mentorship Applications
            </p>
          </div>
        </div>

        {/* Project links */}
        <div
          ref={linksRef}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <TextLink
            href={project.liveUrl}
            external
            className="text-lg hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            Explore Alumni Connect ↗
          </TextLink>
          <TextLink
            href={project.githubUrl}
            external
            className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
            showArrow={false}
          >
            View source code ↗
          </TextLink>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={screenshots}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
