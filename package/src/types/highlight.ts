import type { CSSProperties, FunctionComponentElement } from 'react';

type Language = string;

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

type PrismThemeEntry = {
  color?: string;
  cursor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textShadow?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
};

export type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
};

export type HighlightProps = {
  prism?: any;
  theme?: PrismTheme;
  language: Language;
  code: string;
  children: (props: RenderProps) => JSX.Element;
};

type StyleObj = CSSProperties;

type LineInputProps = {
  style?: StyleObj;
  className?: string;
  line: Token[];
  [key: string]: unknown;
};

type LineOutputProps = {
  style?: StyleObj;
  className: string;
  [key: string]: unknown;
};

type TokenInputProps = {
  style?: StyleObj;
  className?: string;
  token: Token;
  [key: string]: unknown;
};

type TokenOutputProps = {
  style?: StyleObj;
  className: string;
  children: string;
  [key: string]: unknown;
};

export type InternalHighlightProps = {
  prism: any;
  theme: PrismTheme;
  language: Language;
  code: string;
  children: (props: RenderProps) => JSX.Element;
};

type RenderProps = {
  tokens: Token[][];
  className: string;
  style: CSSProperties;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};

export type HighlightComponent = (
  props: HighlightProps
) => FunctionComponentElement<InternalHighlightProps>;

export type HighlightThemes = { [key: string]: PrismTheme };
