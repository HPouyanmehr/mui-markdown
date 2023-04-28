// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';

const Span: FC<TypographyProps> = (props) => {
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

export default Span;
