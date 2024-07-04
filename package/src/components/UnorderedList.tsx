// Types
import type { FC } from 'react';

// Custom Core Components
import Typography from './Typography';

// Custom Types
import type { TypographyProps } from './Typography';

const UnorderedList: FC<TypographyProps> = (props) => {
  // Props
  const { children, component = 'ul', ...otherProps } = props;

  return (
    <Typography component={component} {...otherProps}>
      {children}
    </Typography>
  );
};

export default UnorderedList;
