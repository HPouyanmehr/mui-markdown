import { Typography as MuiTypography } from '@mui/material';

// Types
import type { FC, ElementType } from 'react';
import type { TypographyProps as MuiTypographyProps } from '@mui/material';

// Custom Types
export interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

const Typography: FC<TypographyProps> = (props) => <MuiTypography {...props} />;

export default Typography;
