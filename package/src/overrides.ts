// Custom Types
import type { CSSProperties } from 'react';
import type { Overrides } from './types/markdown';
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

export const defaultOverrides: Overrides = {
  a: Link,
  blockquote: Blockquote,
  code: InlineCode,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Divider,
  p: BodyOne,
  pre: PreBlock,
  span: Span,
  table: TableWrapper,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
};

export const getOverrides = ({
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
}): Overrides => ({
  ...defaultOverrides,
  pre: {
    component: PreBlock,
    props: {
      theme,
      styles,
      Highlight,
      themes,
      hideLineNumbers,
    },
  },
});
