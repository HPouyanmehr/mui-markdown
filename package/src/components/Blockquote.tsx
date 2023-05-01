// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import Box from './Box';

// Custom Types
export interface BlockquoteProps {
  children?: ReactNode;
}

const Blockquote: FC<BlockquoteProps> = (props) => {
  // Props
  const { children } = props;

  return (
    <Box
      component='blockquote'
      dir='auto'
      sx={{
        borderInlineStart: '3px solid',
        paddingInlineStart: '1.5rem',
        borderColor: 'text.secondary',
        m: '0.25rem 0',
      }}
    >
      {children}
    </Box>
  );
};

export default Blockquote;
