import { Typography as JoyuiTypography, styled } from '@mui/joy';

// Types
import type { ElementType } from 'react';
import type { TypographyProps as JoyuiTypographyProps } from '@mui/joy';

// Custom Types
export interface TypographyProps extends JoyuiTypographyProps {
  component?: ElementType;
}

const Typography = styled(JoyuiTypography)<TypographyProps>(() => ({}));

export default Typography;
