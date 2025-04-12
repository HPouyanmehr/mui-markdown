import type { ElementType } from 'react';
import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from '@mui/material';

// Module Types
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

export const Typography = (props: TypographyProps) => (
  <MuiTypography {...props} />
);
