import type { CSSProperties, ReactNode } from 'react';

// Core Components
import { Box } from '../../layout/box';
import { SimpleCodeBlock } from '../../display/pre/codeBlock';

// Feature Components
import { HighlightCodeBlock } from '../../../../features/highlight/components/display/codeBlock';
import {
  Diagram,
  type DiagramWithMermaid,
} from '../../../../features/diagram/components/mermaid';

// Feature Types
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from '../../../../features/highlight/types';

// Module Types
interface PreBlockCore {
  Highlight?: HighlightComponent;
  hideLineNumbers?: boolean;
  themes?: HighlightThemes;
  prismTheme?: PrismTheme;
  styles?: CSSProperties;
  children: ReactNode | any;
}

export interface PreBlockWithDiagram
  extends PreBlockCore,
    Omit<DiagramWithMermaid, 'children'> {}

type PreBlockProps = PreBlockCore | PreBlockWithDiagram;

export const PreBlock = (props: PreBlockProps) => {
  const { children, Highlight, themes, prismTheme, styles, hideLineNumbers } =
    props;

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

    if ('enableMermaid' in props && props.enableMermaid && lang === 'mermaid') {
      return (
        <Diagram enableMermaid mermaidConfig={props.mermaidConfig}>
          {code}
        </Diagram>
      );
    }

    if (Highlight && themes) {
      return (
        <HighlightCodeBlock
          Highlight={Highlight}
          themes={themes}
          language={lang}
          theme={prismTheme}
          styles={styles}
          hideLineNumbers={hideLineNumbers}
        >
          {code}
        </HighlightCodeBlock>
      );
    }

    return <SimpleCodeBlock style={styles}>{code}</SimpleCodeBlock>;
  }
  return (
    <Box component='pre' sx={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Box>
  );
};
