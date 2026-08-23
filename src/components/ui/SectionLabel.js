function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`m-0 text-sm font-semibold uppercase tracking-wider text-neutral-900 ${className}`.trim()}
    >
      <span className="mr-2 inline-block h-px w-5 bg-neutral-900 align-middle" />
      {children}
    </p>
  );
}

export default SectionLabel;
