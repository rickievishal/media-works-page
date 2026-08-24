import { motion } from 'framer-motion';

const baseClassName =
  'inline-flex min-h-10 min-w-[132px] items-center justify-center border border-blue-swiss bg-acid px-6 text-[0.82rem] font-black  leading-none text-blue-deep shadow-[0_8px_18px_rgba(6,28,104,0)] transition-[box-shadow,border-color] duration-200 ease-swiss hover:cursor-pointer';

function Button({ href, children, className = '', ...props }) {
  return (
    <motion.a
      href={href}
      className={`${baseClassName} ${className}`.trim()}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default Button;
