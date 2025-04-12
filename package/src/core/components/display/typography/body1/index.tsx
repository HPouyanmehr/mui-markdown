// Core Components
import { Typography, type TypographyProps } from '..';

export const Body1 = (props: TypographyProps) => {
  // Props
  const { children, component = 'p', variant = 'body1', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
