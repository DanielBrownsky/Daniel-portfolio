import { useEffect, useRef, useState } from "react"
import { projects } from "../../data/projects"
import { TextLink } from "../ui/TextLink"
import { ImageLightbox } from "../ui/ImageLightbox"

export const OtherWork = () => {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const supportingRef = useRef(null)
  const projectsRef = useRef(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState([])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    const elements = [
      { ref: eyebrowRef, delay: 0 },
      { ref: titleRef, delay: 70 },
      { ref: supportingRef, delay: 140 },
      { ref: projectsRef, delay: 210 },
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

  const otherProjects = projects.filter(p => p.id === "siwes-tracker" || p.id === "nasa-apod")

  const openLightbox = (index) => {
    const images = otherProjects.map(p => ({
      src: p.showcase?.screenshot,
      alt: `${p.title} screenshot`,
      label: p.title
    }))
    setLightboxImages(images)
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
            MORE PROJECTS / 03
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
          Smaller projects. Real lessons.
        </h2>

        {/* Supporting line */}
        <p
          ref={supportingRef}
          className="mb-12 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          A few other things I've built along the way.
        </p>

        {/* Project rows */}
        <div
          ref={projectsRef}
          className="space-y-10"
        >
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="pt-6"
              style={{
                borderTop: index === 0 ? '1px solid var(--color-border-subtle)' : 'none',
                borderBottom: index < otherProjects.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Screenshot */}
                <div className="lg:col-span-5">
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-lg overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer w-full"
                    style={{
                      border: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                    }}
                    aria-label={`View larger screenshot of ${project.title}`}
                  >
                    <img
                      src={project.showcase?.screenshot}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto object-cover"
                      style={{
                        aspectRatio: '16/10',
                        objectPosition: project.id === 'siwes-tracker' ? 'center top' : 'center'
                      }}
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
                        className="w-10 h-10"
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
                </div>

                {/* Project content */}
                <div className="lg:col-span-7 flex flex-col">
                  <h3
                    className="mb-4 text-xl font-semibold tracking-tight"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-5 text-base leading-relaxed max-w-xl"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {project.showcase?.description || project.description}
                  </p>
                  <div className="mb-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {project.showcase?.tech?.join(" • ") || project.tech.join(" • ")}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-6">
                    <TextLink
                      href={project.liveUrl}
                      external
                      className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
                      showArrow={false}
                    >
                      Live Demo ↗
                    </TextLink>
                    {project.githubUrl && (
                      <TextLink
                        href={project.githubUrl}
                        external
                        className="text-base hover:underline hover:underline-offset-4 hover:decoration-[var(--color-accent)]"
                        showArrow={false}
                      >
                        Source Code ↗
                      </TextLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
