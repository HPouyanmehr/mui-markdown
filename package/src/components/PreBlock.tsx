import * as React from 'react';

// Custom Core Components
import Box from 'components/Box';
import CodeBlock from 'components/CodeBlock';

// Custom Types
import type { PrismTheme } from 'types/prism';
export interface PreBlockProps {
  children: React.ReactNode | any;
  theme?: PrismTheme;
}

const PreBlock: React.FunctionComponent<PreBlockProps> = (props) => {
  const { children, theme } = props;

  if (children && children.type && children.type === 'code') {
    const lang = children.props.className
      ? children.props.className.replace('lang-', '')
      : 'tsx';

    return (
      <CodeBlock language={lang} theme={theme}>
        {children.props.children}
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
