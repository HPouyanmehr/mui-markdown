import type { CSSProperties } from 'react';
import type { MDXComponents } from 'mdx/types';

// Custom Types
import type {
  HighlightComponent,
  HighlightThemes,
  PrismTheme,
} from './types/highlight';

// Custom Components
import Blockquote from './components/Blockquote';
import BodyOne from './components/BodyOne';
import Divider from './components/Divider';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import H6 from './components/H6';
import InlineCode from './components/InlineCode';
import Link from './components/Link';
import PreBlock from './components/PreBlock';
import Span from './components/Span';
import TableBody from './components/TableBody';
import TableCell from './components/TableCell';
import TableFooter from './components/TableFooter';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableWrapper from './components/TableWrapper';
import UnorderedList from './components/UnorderedList';
import OrderedList from './components/OrderedList';

export const defaultMdxComponents: MDXComponents = {
  a: Link as any,
  blockquote: Blockquote,
  code: InlineCode,
  h1: H1 as any,
  h2: H2 as any,
  h3: H3 as any,
  h4: H4 as any,
  h5: H5 as any,
  h6: H6 as any,
  hr: Divider as any,
  ol: OrderedList as any,
  p: BodyOne as any,
  pre: PreBlock as any,
  span: Span as any,
  table: TableWrapper as any,
  tbody: TableBody as any,
  td: TableCell as any,
  tfoot: TableFooter as any,
  th: TableCell as any,
  thead: TableHead as any,
  tr: TableRow as any,
  ul: UnorderedList as any,
};

export const getMdxComponents = ({
  hideLineNumbers,
  theme,
  styles,
  Highlight,
  themes,
}: {
  hideLineNumbers?: boolean;
  theme?: PrismTheme;
  styles?: CSSProperties;
  Highlight?: HighlightComponent;
  themes?: HighlightThemes;
} = {}): MDXComponents => ({
  ...defaultMdxComponents,
  pre: {
    component: PreBlock,
    props: {
      theme,
      styles,
      Highlight,
      themes,
      hideLineNumbers,
    },
  } as any,
});
