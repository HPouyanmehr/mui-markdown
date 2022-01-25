// react
import * as React from 'react';
// @mui
import { Box, BoxProps, styled } from '@mui/material';
// prism-react-renderer
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
// type
interface HighlightSyntaxProps {
  code?: string;
  language?: Language;
  theme?: PrismTheme;
}

const PreContainer = styled(Box, { name: 'PreContainer' })<BoxProps>(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: '1rem',
  })
);

const Pre = styled('pre')<React.HTMLAttributes<HTMLPreElement>>({
  overflowX: 'auto',
});

const HighlightSyntax: React.FunctionComponent<HighlightSyntaxProps> = (
  props
) => {
  const {
    code = `const sayHello = (name:string) => console.log(\`Hello\${name}\`);`,
    language = 'tsx',
    theme = vsDark,
  } = props;

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreContainer className={className} style={style}>
          <Pre>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </PreContainer>
      )}
    </Highlight>
  );
};

export default HighlightSyntax;
