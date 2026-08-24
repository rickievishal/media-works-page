function TextLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`link-underline text-[0.82rem] font-black uppercase text-blue-swiss ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}

export default TextLink;
