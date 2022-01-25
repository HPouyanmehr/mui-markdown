import * as React from 'react';
import { Box } from '@mui/material';
import { PrismTheme } from 'prism-react-renderer';

import HighlightSyntax from './HighlightSyntax';

interface IPreBlockProps {
  children: React.ReactNode | any;
  theme?: PrismTheme;
}

const PreBlock: React.FunctionComponent<IPreBlockProps> = (props) => {
  const { children, theme } = props;
  if (children && children.props && children.props.component === 'code') {
    const lang = children.props.className
      ? children.props.className.replace('lang-', '')
      : 'tsx';

    return (
      <HighlightSyntax
        code={children.props.children}
        language={lang}
        theme={theme && theme}
      />
    );
  }
  return (
    <Box component='pre' sx={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Box>
  );
};

export default PreBlock;
