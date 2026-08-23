function TextLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:text-neutral-600 ${className}`.trim()}
      {...props}
    >
      {children}
      <span className="inline-block transition-transform duration-200 ease-smooth group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export default TextLink;
