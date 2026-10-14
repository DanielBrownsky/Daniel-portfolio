export const AvailabilityStatus = ({ status = "Available for opportunities" }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <span className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--color-text-muted)' }}>
        {status}
      </span>
    </div>
  );
};
