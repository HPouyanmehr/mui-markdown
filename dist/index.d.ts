import * as React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

interface MuiMarkdownBaseProps {
    children: string;
    key?: React.Key;
}
declare type MuiMarkdownProps$1 = (MuiMarkdownBaseProps & {
    overrides?: MarkdownToJSX.Overrides;
    options?: never;
}) | (MuiMarkdownBaseProps & {
    options?: MarkdownToJSX.Options;
    overrides?: never;
});
declare const MuiMarkdown: React.FunctionComponent<MuiMarkdownProps$1>;

declare type MuiMarkdownProps = MuiMarkdownProps$1;

export { MuiMarkdownProps, MuiMarkdown as default };
