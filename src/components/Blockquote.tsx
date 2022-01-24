import * as React from 'react';
import { Paper, useTheme } from '@mui/material';

import hexToRgb from '../utils/hexToRgb';

export interface BlockquoteProps {
  borderColor?: string;
}

const Blockquote: React.FunctionComponent<BlockquoteProps> = (props) => {
  const { children, borderColor } = props;
  const {
    palette: { background, info },
  } = useTheme();

  const bgColor = hexToRgb(background.paper);
  const backgroundColor = bgColor
    ? `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, 0.5)`
    : background.paper;

  return (
    <Paper
      sx={{
        padding: '1rem',
        backgroundColor,
        borderLeft: `4px solid ${borderColor ? borderColor : info.main}`,
      }}
    >
      {children}
    </Paper>
  );
};

export default Blockquote;
