// Core Components
import { Typography, type TypographyProps } from '..';

export const H4 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h4', variant = 'h4', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
