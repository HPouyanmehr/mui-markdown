import { Highlight, themes } from 'prism-react-renderer';

// Types
import type { CSSProperties, FC } from 'react';

// Custom Types
import type { PrismTheme } from '../types/prism';
export interface CodeBlockProps {
  children?: string;
  language?: string;
  theme?: PrismTheme;
  styles?: CSSProperties;
}

const CodeBlock: FC<CodeBlockProps> = (props) => {
  // Props
  const { children = '', language = 'tsx', theme = themes.vsDark } = props;

  return (
    <Highlight code={children} language={language} theme={theme}>
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
              <span>{i + 1} </span>
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
