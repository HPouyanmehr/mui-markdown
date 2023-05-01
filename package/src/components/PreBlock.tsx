import * as React from 'react';

// Types
import type { CSSProperties, FC } from 'react';

// Custom Core Components
import Box from 'components/Box';
import CodeBlock from 'components/CodeBlock';

// Custom Types
import type { PrismTheme } from 'types/prism';
export interface PreBlockProps {
  children: React.ReactNode | any;
  theme?: PrismTheme;
  styles?: CSSProperties;
}

const PreBlock: FC<PreBlockProps> = (props) => {
  const { children, theme, styles } = props;

  if (
    children &&
    children.props &&
    children.props.className &&
    children.props.className.startsWith('lang-')
  ) {
    const code = children.props.children;
    const lang = children.props.className
      ? children.props.className.replace('lang-', '')
      : 'tsx';

    return (
      <CodeBlock language={lang} theme={theme} styles={styles}>
        {code}
      </CodeBlock>
    );
  }
  return (
    <Box component='pre' sx={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Box>
  );
};

export default PreBlock;
