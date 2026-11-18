import { useEffect, useRef, useState } from "react"

export const ImageLightbox = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)

  const currentImage = images[currentIndex]

  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden'

    // Focus close button when modal opens
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 100)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        handlePrevious()
        break
      case 'ArrowRight':
        handleNext()
        break
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: 'rgba(12, 12, 12, 0.95)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-subtle)',
          color: 'var(--color-text-primary)',
        }}
        aria-label="Close preview"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Main image container */}
      <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
        {/* Previous button */}
        {images.length > 1 && (
          <button
            ref={prevButtonRef}
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)',
            }}
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Image */}
        <div
          className="rounded-lg overflow-hidden w-full h-full flex items-center justify-center"
          style={{
            border: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-bg)',
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>

        {/* Next button */}
        {images.length > 1 && (
          <button
            ref={nextButtonRef}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)',
            }}
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Image label */}
        <p
          className="mt-4 text-center text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {currentImage.label}
        </p>

        {/* Navigation indicator */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-2 h-2 rounded-full transition-colors"
                style={{
                  backgroundColor: index === currentIndex ? 'var(--color-accent)' : 'var(--color-border-strong)',
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
