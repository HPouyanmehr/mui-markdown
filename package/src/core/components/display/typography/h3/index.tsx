// Core Components
import { Typography, type TypographyProps } from '..';

export const H3 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h3', variant = 'h3', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
