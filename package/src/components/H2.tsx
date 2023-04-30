// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from 'components/Typography';

// Custom Types
import type { TypographyProps } from 'components/Typography';

const H2: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'h2', variant = 'h2', ...otherProps } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};

export default H2;
