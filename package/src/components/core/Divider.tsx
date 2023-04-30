import { Divider as MuiDivider, styled } from '@mui/material';

// Types
import type { DividerProps as MuiDividerProps } from '@mui/material';

// Custom Types
export interface DividerProps extends MuiDividerProps {}

const Divider = styled(MuiDivider)<DividerProps>(() => ({}));

export default Divider;
