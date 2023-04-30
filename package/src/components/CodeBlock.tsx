import { Highlight } from 'prism-react-renderer';

// Types
import type { FC } from 'react';

// Custom Types
import type { PrismTheme } from 'types/prism';
export interface CodeBlockProps {
  children?: string;
  language?: string;
  theme?: PrismTheme;
}

const CodeBlock: FC<CodeBlockProps> = (props) => {
  // Props
  const { children = '', language = 'tsx', theme } = props;

  return (
    <Highlight code={children} language={language} theme={theme}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
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
