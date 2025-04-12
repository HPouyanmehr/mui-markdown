// Core Components
import { Typography, type TypographyProps } from '..';

export const H2 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h2', variant = 'h2', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
