// Core Components
import { Typography, type TypographyProps } from '..';

export const H1 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h1', variant = 'h1', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
