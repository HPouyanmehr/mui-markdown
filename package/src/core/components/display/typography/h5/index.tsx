// Core Components
import { Typography, type TypographyProps } from '..';

export const H5 = (props: TypographyProps) => {
  // Props
  const { children, component = 'h5', variant = 'h5', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
