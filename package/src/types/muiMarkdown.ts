// Custom Types
import type { Options, Overrides } from 'types/markdown';

export interface MuiMarkdownRootProps {
  children?: string;
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
