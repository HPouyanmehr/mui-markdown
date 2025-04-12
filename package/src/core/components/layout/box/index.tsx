import { Box as MuiBox, type BoxProps as MuiBoxProps } from '@mui/material';

// Module Types
export interface BoxProps extends MuiBoxProps {}

export const Box = (props: BoxProps) => <MuiBox {...props} />;
