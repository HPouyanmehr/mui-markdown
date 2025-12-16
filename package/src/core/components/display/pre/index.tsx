import type { CSSProperties, JSX, ReactNode } from 'react';

// Core Components
import { Box } from '../../layout/box';
import { SimpleCodeBlock } from '../../display/pre/codeBlock';

// Feature Components
import { HighlightCodeBlock } from '../../../../features/highlight/components/display/codeBlock';

// Feature Types
import type {
  DiagramProps,
  DiagramWithMermaid,
} from '../../../../features/diagram/components/mermaid/type';
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
    Omit<DiagramWithMermaid, 'children'> {
  DiagramComponent?: (props: DiagramProps) => JSX.Element;
}

type PreBlockProps = PreBlockCore | PreBlockWithDiagram;

export const PreBlock = (props: PreBlockProps) => {
  const { children, Highlight, themes, prismTheme, styles, hideLineNumbers } =
    props;

  if (
    children &&
    children.props &&
    children.props.className &&
    (children.props.className.startsWith('language-') ||
      children.props.className.includes(' lang-'))
  ) {
    const code = children.props.children;
    const lang = children.props.className
      ? children.props.className.replace('lang-', '')
      : 'tsx';

    if ('enableMermaid' in props && props.enableMermaid && lang === 'mermaid') {
      if (
        props.enableMermaid &&
        'DiagramComponent' in props &&
        props.DiagramComponent
      ) {
        return (
          <props.DiagramComponent
            enableMermaid
            mermaidConfig={props.mermaidConfig}
          >
            {code}
          </props.DiagramComponent>
        );
      } else {
        console.error(
          "Make sure you've passed the Diagram component to the MuiMarkdown properly, you can import it from 'mui-markdown/Diagram'."
        );
      }
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
