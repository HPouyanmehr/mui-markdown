// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from 'components/Typography';

// Custom Types
import type { TypographyProps } from 'components/Typography';

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
