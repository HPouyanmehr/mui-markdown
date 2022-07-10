import * as React from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { PrismTheme } from 'prism-react-renderer';

import { getDefaultOverrides } from './defaultOverrides';

interface MuiMarkdownBaseProps {
  children?: string;
  key?: React.Key;
  disableTableContainer?: boolean;
  blockquoteBorderColor?: string;
  inlineCodeBgColor?: string;
  inlineCodeColor?: string;
  codeBlockTheme?: PrismTheme;
}

export type MuiMarkdownProps =
  | (MuiMarkdownBaseProps & {
      overrides?: MarkdownToJSX.Overrides;
      options?: never;
    })
  | (MuiMarkdownBaseProps & {
      options?: MarkdownToJSX.Options;
      overrides?: never;
    });

const MuiMarkdown: React.FunctionComponent<MuiMarkdownProps> = (props) => {
  const getMarkdownComponent = (props: MuiMarkdownProps) => {
    const {
      children,
      key,
      options,
      overrides,
      disableTableContainer,
      blockquoteBorderColor,
      inlineCodeBgColor,
      inlineCodeColor,
      codeBlockTheme,
    } = props;
    const defaultOverrides = getDefaultOverrides({
      disableTableContainer,
      blockquoteBorderColor,
      inlineCodeBgColor,
      inlineCodeColor,
      codeBlockTheme,
    });

    const mdChildren = children ? children : '';

    if (options) {
      const { overrides: overridesInOptions, ...otherOptions } = options;

      if (overridesInOptions)
        return (
          <Markdown
            key={key && key}
            options={{
              overrides: { ...defaultOverrides, ...overridesInOptions },
              ...otherOptions,
            }}
          >
            {mdChildren}
          </Markdown>
        );

      return (
        <Markdown
          key={key && key}
          options={{
            overrides: { ...defaultOverrides },
            ...otherOptions,
          }}
        >
          {mdChildren}
        </Markdown>
      );
    }

    if (overrides) {
      return (
        <Markdown
          key={key && key}
          options={{
            overrides: { ...defaultOverrides, ...overrides },
          }}
        >
          {mdChildren}
        </Markdown>
      );
    }

    return (
      <Markdown
        key={key && key}
        options={{
          overrides: { ...defaultOverrides },
        }}
      >
        {mdChildren}
      </Markdown>
    );
  };

  return (
    <React.Suspense fallback={<div>...</div>}>
      {getMarkdownComponent(props)}
    </React.Suspense>
  );
};

export default MuiMarkdown;
