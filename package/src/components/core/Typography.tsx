import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material';

// Types
import type { ElementType } from 'react';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

// Custom Types
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

const Typography = styled(MuiTypography)<TypographyProps>();

export default Typography;
