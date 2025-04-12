import type { MarkdownToJSX } from 'markdown-to-jsx';

// Core Types
import type { PreBlockWithDiagram } from '../components/display/pre';

// Module Types
export type Overrides = MarkdownToJSX.Overrides;
export type Options = MarkdownToJSX.Options;

export interface MuiMarkdownRootProps
  extends Omit<PreBlockWithDiagram, 'enableMermaid'> {
  enableMermaid?: boolean;
}

export interface MuiMarkdownWithOverrides extends MuiMarkdownRootProps {
  overrides?: Overrides;
  options?: never;
}

export interface MuiMarkdownWithOptions extends MuiMarkdownRootProps {
  options?: Options;
  overrides?: never;
}

export type MuiMarkdownProps =
  | MuiMarkdownWithOptions
  | MuiMarkdownWithOverrides;
