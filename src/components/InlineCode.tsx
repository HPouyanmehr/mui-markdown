import * as React from 'react';
import { Paper } from '@mui/material';

export interface InlineCodeProps {
  backgroundColor?: string;
  color?: string;
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = (props) => {
  const {
    backgroundColor = `rgba(127, 127, 127, 0.2)`,
    color = 'currentcolor',
    children,
  } = props;

  console.log('i am');

  return (
    <Paper
      component='code'
      sx={{
        backgroundColor,
        boxShadow: 'none',
        color: color,
        margin: '0 0.2rem',
        padding: '0.5rem 0.5rem',
      }}
    >
      {children}
    </Paper>
  );
};

export default InlineCode;
