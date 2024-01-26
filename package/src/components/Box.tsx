import { Box as JoyuiBox, styled } from '@mui/joy';

// Types
import type { BoxProps as JoyuiBoxProps } from '@mui/joy';

// Custom Types
export interface BoxProps extends JoyuiBoxProps {}

const Box = styled(JoyuiBox)<BoxProps>(() => ({}));

export default Box;
