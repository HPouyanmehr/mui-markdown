// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from './Typography';

// Custom Types
import type { TypographyProps } from './Typography';

const H3: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'h3', variant = 'h3', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};

export default H3;
