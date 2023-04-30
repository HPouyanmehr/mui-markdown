import { Box as MuiBox, styled } from '@mui/material';

// Types
import type { BoxProps as MuiBoxProps } from '@mui/material';

// Custom Types
export interface BoxProps extends MuiBoxProps {}

const Box = styled(MuiBox)<BoxProps>(() => ({}));

export default Box;
