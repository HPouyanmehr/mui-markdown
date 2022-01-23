import * as markdown_to_jsx from 'markdown-to-jsx';
import { MarkdownToJSX } from 'markdown-to-jsx';
import * as React from 'react';

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

declare const defaultOverrides: markdown_to_jsx.MarkdownToJSX.Overrides;

export { MuiMarkdownProps, MuiMarkdown as default, defaultOverrides };
