// Core Components
import { Typography, type TypographyProps } from '../../display/typography';

export const Span = (props: TypographyProps) => {
  // Props
  const {
    children,
    component = 'span',
    variant = 'body1',
    ...otherProps
  } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};
