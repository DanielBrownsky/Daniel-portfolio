import { site } from "../data/site"

export const Footer = () => {
  return (
    <footer
      className="py-12 md:py-16"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        {/* Top divider */}
        <div
          className="mb-8"
          style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
        />

        <div className="flex flex-row items-start md:items-center justify-between gap-4">
          {/* Name and title */}
          <div>
            <h3
              className="text-xl font-semibold tracking-tight mb-1"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {site.name}
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {site.role}
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="text-sm font-medium transition-colors duration-200 rounded px-2 py-1 flex-shrink-0"
            style={{
              color: 'var(--color-text-secondary)',
            }}
          >
            Back to top ↑
          </a>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-6"
          style={{ borderTop: '1px solid var(--color-border-subtle)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
