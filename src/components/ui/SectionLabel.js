import { eyebrow } from '../../lib/styles';

function SectionLabel({ children, className = '' }) {
  return <p className={`${eyebrow} ${className}`.trim()}>{children}</p>;
}

export default SectionLabel;
