// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';

const H6: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'h6', variant = 'h6', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};

export default H6;
