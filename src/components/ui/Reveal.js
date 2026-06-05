import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../lib/motion';

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  distance = 24,
  variants,
  viewport = viewportOnce,
  ...props
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants || fadeInUp(delay, distance)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
