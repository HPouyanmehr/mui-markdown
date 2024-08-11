import { Box as MuiBox } from '@mui/material';

// Types
import type { FC } from 'react';
import type { BoxProps as MuiBoxProps } from '@mui/material';

// Custom Types
export interface BoxProps extends MuiBoxProps {}

const Box: FC<BoxProps> = (props) => <MuiBox {...props} />;

export default Box;
