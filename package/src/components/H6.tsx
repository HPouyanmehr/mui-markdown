// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from './Typography';

// Custom Types
import type { TypographyProps } from './Typography';

const H6: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'h6', level = 'body-sm', variant = 'plain', ...otherProps } = props;

  return (
    <Typography component={component} level={level} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};

export default H6;
