// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from './Typography';

// Custom Types
import type { TypographyProps } from './Typography';

const Span: FC<TypographyProps> = (props) => {
  // Props
  const {
    children,
    component = 'span',
    variant = 'plain',
    ...otherProps
  } = props;

  return (
    <Typography component={component} variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
};

export default Span;
