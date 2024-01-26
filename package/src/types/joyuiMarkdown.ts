// Custom Types
import type { CSSProperties } from 'react';
import type { Options, Overrides } from './markdown';
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from './highlight';

export interface JoyuiMarkdownRootProps {
  hideLineNumbers?: boolean;
  children?: string | null;
  prismTheme?: PrismTheme;
  codeWrapperStyles?: CSSProperties;
  Highlight?: HighlightComponent;
  themes?: HighlightThemes;
}

export interface JoyuiMarkdownWithOverrides extends JoyuiMarkdownRootProps {
  overrides?: Overrides;
  options?: never;
}

export interface JoyuiMarkdownWithOptions extends JoyuiMarkdownRootProps {
  options?: Options;
  overrides?: never;
}

export type JoyuiMarkdownProps =
  | JoyuiMarkdownWithOptions
  | JoyuiMarkdownWithOverrides;
