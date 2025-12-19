import type { ComponentType, CSSProperties, ReactNode } from 'react';
import {
  Box,
  Typography,
  alpha,
  type TypographyProps,
  type SxProps,
  type Theme,
} from '@mui/material';

// Feature Types
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from '../../../types';

// Feature Components
import { CopyButton } from '../../input/CopyButton';

// Feature Utilities
import { extractCodeBlockProps } from '../../../utilities/extractCodeBlockProps';

// Module Types
export interface CopyComponentProps {
  handleCopy: () => Promise<void>;
  code: string;
}

export interface CodeBlockProps {
  Highlight: HighlightComponent;
  hideLineNumbers?: boolean;
  themes: HighlightThemes;
  language?: string;
  theme?: PrismTheme;
  styles?: CSSProperties;
  children?: string | ReactNode;
  // Enhanced features
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

// Default MUI-based Folder icon
const DefaultFileIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z' />
  </svg>
);

// Helper to get theme color value
const getThemeColor = (theme: Theme, colorPath: string): string => {
  const parts = colorPath.split('.');
  let value: any = theme.palette;

  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) return colorPath; // Return as-is if not found in theme
  }

  return typeof value === 'string' ? value : colorPath;
};

export const HighlightCodeBlock = (props: CodeBlockProps) => {
  // Props
  const {
    children = '',
    language: propLanguage,
    Highlight,
    themes,
    theme,
    hideLineNumbers: propHideLineNumbers,
    name: propName,
    copiable: propCopiable,
    CopyComponent,
    copiedLabel,
    copyLabel,
    copyIcon,
    copiedIcon,
    copyButtonSx,
    showFileIcon = true,
    fileIcon,
    FileNameComponent = Typography,
    fileNameSx,
    fileNameWrapperSx,
    useHighlightThemeBackground = false,
    highlightColor = 'info.main',
    removedColor = 'error.main',
    insertedColor = 'success.main',
  } = props;

  // Extract props from children if it's a ReactNode
  const extractedProps =
    typeof children === 'string' ? null : extractCodeBlockProps(children);

  // Merge props (extracted props from markdown take precedence)
  const code = extractedProps?.code || (children as string) || '';
  const language = extractedProps?.language || propLanguage || 'tsx';
  const highlighted = extractedProps?.highlighted || [];
  const removed = extractedProps?.removed || [];
  const inserted = extractedProps?.inserted || [];
  const name = extractedProps?.name || propName || '';
  const copiable = extractedProps?.copiable ?? propCopiable ?? false;
  const hideLineNumbers =
    extractedProps?.hideLineNumbers ?? propHideLineNumbers ?? false;

  // Helper to remove empty last line
  const removeEmptyLastLine = (rawTokens: any[][]) => {
    if (
      rawTokens.length > 0 &&
      rawTokens[rawTokens.length - 1].length > 0 &&
      rawTokens[rawTokens.length - 1][0].empty
    ) {
      return rawTokens.slice(0, -1);
    }
    return rawTokens;
  };

  // Get highlight theme background and color if needed
  const highlightThemeBg = useHighlightThemeBackground
    ? (theme || themes.vsDark)?.plain?.backgroundColor
    : undefined;
  const highlightThemeColor = useHighlightThemeBackground
    ? (theme || themes.vsDark)?.plain?.color
    : undefined;

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        border: 1,
        borderColor: 'divider',
        my: 2,
      }}
    >
      {name && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1.5,
            backgroundColor: useHighlightThemeBackground
              ? highlightThemeBg
              : (theme) => alpha(theme.palette.action.hover, 0.5),
            color: useHighlightThemeBackground
              ? highlightThemeColor
              : undefined,
            borderBottom: 1,
            borderColor: 'divider',
            ...fileNameWrapperSx,
          }}
        >
          {showFileIcon && (fileIcon || <DefaultFileIcon />)}
          <FileNameComponent variant='caption' component='span' sx={fileNameSx}>
            {name}
          </FileNameComponent>
        </Box>
      )}

      <Box sx={{ position: 'relative', overflow: 'auto' }}>
        <Highlight
          code={code}
          language={language}
          theme={theme || themes.vsDark}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => {
            const lineNumberDigitsCount = tokens.length.toString().length;

            const handleCopy = async () => {
              try {
                await navigator.clipboard.writeText(code);
              } catch (err) {
                console.error('Failed to copy code:', err);
              }
            };

            return (
              <>
                {copiable &&
                  (CopyComponent ? (
                    <CopyComponent handleCopy={handleCopy} code={code} />
                  ) : (
                    <CopyButton
                      code={code}
                      copiedLabel={copiedLabel}
                      copyLabel={copyLabel}
                      copyIcon={copyIcon}
                      copiedIcon={copiedIcon}
                      sx={copyButtonSx}
                    />
                  ))}
                <pre
                  style={{
                    borderRadius: 0,
                    padding: '0.75rem 1rem',
                    margin: 0,
                    overflow: 'auto',
                    ...style,
                    ...props.styles,
                  }}
                >
                  <code>
                    {removeEmptyLastLine(tokens).map((line, i) => {
                      const lineNumber = i + 1;
                      const isHighlighted = highlighted.includes(lineNumber);
                      const isRemoved = removed.includes(lineNumber);
                      const isInserted = inserted.includes(lineNumber);

                      return (
                        <Box
                          key={i}
                          component='div'
                          {...getLineProps({ line })}
                          sx={{
                            ...getLineProps({ line }).style,
                            backgroundColor: isHighlighted
                              ? (theme) =>
                                  alpha(
                                    getThemeColor(theme, highlightColor),
                                    0.1
                                  )
                              : isRemoved
                              ? (theme) =>
                                  alpha(getThemeColor(theme, removedColor), 0.1)
                              : isInserted
                              ? (theme) =>
                                  alpha(
                                    getThemeColor(theme, insertedColor),
                                    0.1
                                  )
                              : undefined,
                            borderLeft: isHighlighted
                              ? (theme) =>
                                  `3px solid ${alpha(
                                    getThemeColor(theme, highlightColor),
                                    0.6
                                  )}`
                              : isRemoved
                              ? (theme) =>
                                  `3px solid ${alpha(
                                    getThemeColor(theme, removedColor),
                                    0.6
                                  )}`
                              : isInserted
                              ? (theme) =>
                                  `3px solid ${alpha(
                                    getThemeColor(theme, insertedColor),
                                    0.6
                                  )}`
                              : '3px solid transparent',
                            paddingLeft: '0.5rem',
                          }}
                        >
                          <Box
                            component='span'
                            sx={{
                              marginRight: '2px',
                              color: isRemoved
                                ? removedColor
                                : isInserted
                                ? insertedColor
                                : 'transparent',
                              userSelect: 'none',
                            }}
                          >
                            {isRemoved ? '-' : isInserted ? '+' : ' '}
                          </Box>
                          {!hideLineNumbers && (
                            <span
                              style={{
                                marginRight: '1rem',
                                opacity: 0.5,
                                userSelect: 'none',
                                display: 'inline-block',
                                textAlign: 'right',
                                minWidth: `${lineNumberDigitsCount}ch`,
                              }}
                            >
                              {lineNumber}
                            </span>
                          )}
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </Box>
                      );
                    })}
                  </code>
                </pre>
              </>
            );
          }}
        </Highlight>
      </Box>
    </Box>
  );
};
