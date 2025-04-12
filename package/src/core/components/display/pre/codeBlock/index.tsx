import type { ComponentProps } from 'react';

export const SimpleCodeBlock = (props: ComponentProps<'pre'>) => {
  // Props
  const { children = '', style, ...otherProps } = props;

  return (
    <pre
      style={{
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        overflow: 'auto',
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </pre>
  );
};
