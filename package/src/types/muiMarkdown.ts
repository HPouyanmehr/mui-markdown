// Custom Types
import type { CSSProperties } from 'react';
import type { Options, Overrides } from '../types/markdown';
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from './highlight';

export interface MuiMarkdownRootProps {
  children?: string;
  prismTheme?: PrismTheme;
  codeWrapperStyles?: CSSProperties;
  Highlight?: HighlightComponent;
  themes?: HighlightThemes;
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
