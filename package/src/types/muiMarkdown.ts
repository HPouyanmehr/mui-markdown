// Custom Types
import type { Options, Overrides } from 'types/markdown';
import type { PrismTheme } from 'types/prism';

export interface MuiMarkdownRootProps {
  children?: string;
  prismTheme?: PrismTheme;
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
