// Core Components
import { Typography, type TypographyProps } from '../../typography';

export const UnOrderedList = (props: TypographyProps) => {
  // Props
  const { children, component = 'ul', ...otherProps } = props;

  return (
    <Typography component={component} {...otherProps}>
      {children}
    </Typography>
  );
};
