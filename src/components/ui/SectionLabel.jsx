export const SectionLabel = ({ label, index }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {index && (
        <span className="text-sm font-medium tracking-wider" style={{ color: 'var(--color-accent)' }}>
          {index}
        </span>
      )}
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
        {label}
      </span>
    </div>
  );
};
