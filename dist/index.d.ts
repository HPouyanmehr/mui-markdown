import * as React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

interface MuiMarkdownBaseProps {
    children: string;
    key?: React.Key;
}
declare type MuiMarkdownProps = (MuiMarkdownBaseProps & {
    overrides?: MarkdownToJSX.Overrides;
    options?: never;
}) | (MuiMarkdownBaseProps & {
    options?: MarkdownToJSX.Options;
    overrides?: never;
});
declare const MuiMarkdown: React.FunctionComponent<MuiMarkdownProps>;

type MuiMarkdown_d_MuiMarkdownProps = MuiMarkdownProps;
declare namespace MuiMarkdown_d {
  export {
    MuiMarkdown as default,
    MuiMarkdown_d_MuiMarkdownProps as MuiMarkdownProps,
  };
}

export { MuiMarkdown_d as MuiMarkdown };
