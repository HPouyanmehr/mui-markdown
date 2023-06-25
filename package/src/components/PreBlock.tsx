import * as React from 'react';

// Types
import type { CSSProperties, FC } from 'react';

// Custom Core Components
import Box from './Box';
import CodeBlock from './CodeBlock';
import SimpleCodeBlock from './SimpleCodeBlock';

// Custom Types
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from '../types/highlight';
export interface PreBlockProps {
  hideLineNumbers?: boolean;
  children: React.ReactNode | any;
  Highlight?: HighlightComponent;
  themes?: HighlightThemes;
  theme?: PrismTheme;
  styles?: CSSProperties;
}

const PreBlock: FC<PreBlockProps> = (props) => {
  const { children, Highlight, themes, theme, styles, hideLineNumbers } = props;

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

    if (Highlight && themes) {
      return (
        <CodeBlock
          Highlight={Highlight}
          themes={themes}
          language={lang}
          theme={theme}
          styles={styles}
          hideLineNumbers={hideLineNumbers}
        >
          {code}
        </CodeBlock>
      );
    }

    return <SimpleCodeBlock styles={styles}>{code}</SimpleCodeBlock>;
  }
  return (
    <Box component='pre' sx={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Box>
  );
};

export default PreBlock;
