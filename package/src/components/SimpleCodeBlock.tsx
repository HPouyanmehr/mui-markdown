// Types
import type { CSSProperties, FC } from 'react';

// Custom Types
export interface SimpleCodeBlockProps {
  children?: string;
  styles?: CSSProperties;
}

const SimpleCodeBlock: FC<SimpleCodeBlockProps> = (props) => {
  // Props
  const { children = '', styles } = props;

  return (
    <pre
      style={{
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        overflow: 'auto',
        ...styles,
      }}
    >
      {children}
    </pre>
  );
};

export default SimpleCodeBlock;
