import type { ComponentProps } from 'react';

export const InlineCode = (props: ComponentProps<'code'>) => {
  // Props
  const { children, style, ...otherProps } = props;

  return (
    <code
      style={{
        backgroundColor: 'rgba(126, 125, 124, 0.1)',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </code>
  );
};
