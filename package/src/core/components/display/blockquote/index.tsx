import type { ReactNode } from 'react';

// Core Components
import { Box } from '../../layout/box';

// Module Types
export interface BlockquoteProps {
  children?: ReactNode;
}

export const Blockquote = (props: BlockquoteProps) => {
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
