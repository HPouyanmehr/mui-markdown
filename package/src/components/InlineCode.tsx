import { useTheme } from '@mui/joy';

// Types
import type { FC, ReactNode } from 'react';

// Custom Types
export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  // Props
  const { children } = props;

  // Hooks
  const { palette } = useTheme();

  return (
    <code
      style={{
        backgroundColor: 'background.body',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
