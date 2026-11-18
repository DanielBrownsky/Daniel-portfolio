export const TextLink = ({ href, children, external = false, className = "", showArrow = true }) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:text-[var(--color-accent)] group ${className}`}
      style={{ color: 'var(--color-text-primary)' }}
    >
      {children}
      {showArrow && (
        <span className="transform transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      )}
    </a>
  );
};
