// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from './Typography';

// Custom Types
import type { TypographyProps } from './Typography';

const OrderedList: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'ol', ...otherProps } = props;

  return (
    <Typography component={component} {...otherProps}>
      {children}
    </Typography>
  );
};

export default OrderedList;
