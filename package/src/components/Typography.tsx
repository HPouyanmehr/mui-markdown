import { Typography as MuiTypography, styled } from '@mui/material';

// Types
import type { ElementType } from 'react';
import type { TypographyProps as MuiTypographyProps } from '@mui/material';

// Custom Types
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

const Typography = styled(MuiTypography)<TypographyProps>(() => ({}));

export default Typography;
