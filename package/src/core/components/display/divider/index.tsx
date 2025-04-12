import {
  Divider as MuiDivider,
  type DividerProps as MuiDividerProps,
} from '@mui/material';

// Module Types
export interface DividerProps extends MuiDividerProps {}

export const Divider = (props: DividerProps) => <MuiDivider {...props} />;
