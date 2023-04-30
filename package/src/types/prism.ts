type Language = string;

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
