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

export { MuiMarkdownProps, MuiMarkdown as default };
