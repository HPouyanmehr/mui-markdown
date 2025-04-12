// Core Components
import { Typography, type TypographyProps } from '../../typography';

export const OrderedList = (props: TypographyProps) => {
  // Props
  const { children, component = 'ol', ...otherProps } = props;

  return (
    <Typography component={component} {...otherProps}>
      {children}
    </Typography>
  );
};
