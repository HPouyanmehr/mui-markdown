// Types
import type { CSSProperties, FC } from 'react';

// Custom Types
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from '../types/highlight';
export interface CodeBlockProps {
  hideLineNumbers?: boolean;
  Highlight: HighlightComponent;
  themes: HighlightThemes;
  children?: string;
  language?: string;
  theme?: PrismTheme;
  styles?: CSSProperties;
}

const CodeBlock: FC<CodeBlockProps> = (props) => {
  // Props
  const {
    children = '',
    language = 'tsx',
    Highlight,
    themes,
    theme,
    hideLineNumbers,
  } = props;

  return (
    <Highlight
      code={children}
      language={language}
      theme={theme ? theme : themes.vsDark}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            borderRadius: '0.5rem',
            padding: '0.5rem 0.75rem',
            overflow: 'auto',
            ...style,
            ...props.styles,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {!hideLineNumbers && <span>{i + 1} </span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
