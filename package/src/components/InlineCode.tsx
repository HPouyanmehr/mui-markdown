// Types
import type { FC, ReactNode } from 'react';

// Custom Types
export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  // Props
  const { children } = props;

  return (
    <code
      style={{
        backgroundColor: 'rgba(126, 125, 124, 0.1)',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
