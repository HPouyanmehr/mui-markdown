// Core Components
import { Typography, type TypographyProps } from '..';

export const H6 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h6', variant = 'h6', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
