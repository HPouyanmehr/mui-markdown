import { Divider as MuiDivider } from '@mui/material';

// Types
import type { FC } from 'react';
import type { DividerProps as MuiDividerProps } from '@mui/material';

// Custom Types
export interface DividerProps extends MuiDividerProps {}

const Divider: FC<DividerProps> = (props) => <MuiDivider {...props} />;

export default Divider;
