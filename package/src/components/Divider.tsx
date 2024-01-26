import { Divider as JoyuiDivider, styled } from '@mui/joy';

// Types
import type { DividerProps as JoyuiDividerProps } from '@mui/joy';

// Custom Types
export interface DividerProps extends JoyuiDividerProps {}

const Divider = styled(JoyuiDivider)<DividerProps>(() => ({}));

export default Divider;
