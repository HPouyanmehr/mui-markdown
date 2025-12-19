import type { ComponentType, CSSProperties, JSX, ReactNode } from 'react';
import type { TypographyProps, SxProps, Theme } from '@mui/material';

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

// Feature Types
import type { CopyComponentProps } from '../../../../features/highlight/components/display/codeBlock';

// Module Types
interface PreBlockCore {
  Highlight?: HighlightComponent;
  hideLineNumbers?: boolean;
  themes?: HighlightThemes;
  prismTheme?: PrismTheme;
  styles?: CSSProperties;
  children: ReactNode | any;
  // Enhanced code block features
  name?: string;
  copiable?: boolean;
  // Copy button customization
  CopyComponent?: ComponentType<CopyComponentProps>;
  copiedLabel?: string;
  copyLabel?: string;
  copyIcon?: ReactNode;
  copiedIcon?: ReactNode;
  copyButtonSx?: SxProps<Theme>;
  // File name customization
  showFileIcon?: boolean;
  fileIcon?: ReactNode;
  FileNameComponent?: ComponentType<TypographyProps>;
  fileNameSx?: SxProps<Theme>;
  fileNameWrapperSx?: SxProps<Theme>;
  useHighlightThemeBackground?: boolean;
  // Color customization from theme
  highlightColor?: string;
  removedColor?: string;
  insertedColor?: string;
}

export interface PreBlockWithDiagram
  extends PreBlockCore,
    Omit<DiagramWithMermaid, 'children'> {
  DiagramComponent?: (props: DiagramProps) => JSX.Element;
}

type PreBlockProps = PreBlockCore | PreBlockWithDiagram;

export const PreBlock = (props: PreBlockProps) => {
  const {
    children,
    Highlight,
    themes,
    prismTheme,
    styles,
    hideLineNumbers,
    name,
    copiable,
    CopyComponent,
    copiedLabel,
    copyLabel,
    copyIcon,
    copiedIcon,
    copyButtonSx,
    showFileIcon,
    fileIcon,
    FileNameComponent,
    fileNameSx,
    fileNameWrapperSx,
    useHighlightThemeBackground,
    highlightColor,
    removedColor,
    insertedColor,
  } = props;

  if (
    children &&
    children.props &&
    children.props.className &&
    (children.props.className.startsWith('language-') ||
      children.props.className.includes(' lang-'))
  ) {
    const code = children.props.children;
    const lang =
      children.props.className?.match(/(?:language-|lang-)(\w+)/)?.[1] || 'tsx';

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
          name={name}
          copiable={copiable}
          CopyComponent={CopyComponent}
          copiedLabel={copiedLabel}
          copyLabel={copyLabel}
          copyIcon={copyIcon}
          copiedIcon={copiedIcon}
          copyButtonSx={copyButtonSx}
          showFileIcon={showFileIcon}
          fileIcon={fileIcon}
          FileNameComponent={FileNameComponent}
          fileNameSx={fileNameSx}
          fileNameWrapperSx={fileNameWrapperSx}
          useHighlightThemeBackground={useHighlightThemeBackground}
          highlightColor={highlightColor}
          removedColor={removedColor}
          insertedColor={insertedColor}
        >
          {children}
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
