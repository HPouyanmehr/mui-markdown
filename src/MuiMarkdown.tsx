import * as React from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

export interface MuiMarkdownProps {
  children: string;
  key?: React.Key;
  overrides?: MarkdownToJSX.Overrides;
  options?: MarkdownToJSX.Options;
}

const MuiMarkdown: React.FunctionComponent<MuiMarkdownProps> = (props) => {
  const { children, key, options, overrides, ...otherProps } = props;

  if (options) {
    return (
      <Markdown key={key && key} options={options}>
        {children}
      </Markdown>
    );
  }

  return <Markdown key={key && key}>{children}</Markdown>;
};

export default MuiMarkdown;
