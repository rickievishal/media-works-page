import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800',
  outline:
    'bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50',
};

function Button({ href, children, variant = 'primary', className = '', onClick, type, ...props }) {
  const baseClassName =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold leading-none transition-all duration-200 ease-smooth cursor-pointer';

  const combinedClassName = `${baseClassName} ${variants[variant]} ${className}`.trim();

  // Render as button element when type is specified (for forms)
  if (type) {
    return (
      <motion.button
        type={type}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default Button;
