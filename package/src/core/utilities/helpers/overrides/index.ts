// Core Components
import { Blockquote } from '../../../components/display/blockquote';
import { Body1 } from '../../../components/display/typography/body1';
import { Divider } from '../../../components/display/divider';
import { H1 } from '../../../components/display/typography/h1';
import { H2 } from '../../../components/display/typography/h2';
import { H3 } from '../../../components/display/typography/h3';
import { H4 } from '../../../components/display/typography/h4';
import { H5 } from '../../../components/display/typography/h5';
import { H6 } from '../../../components/display/typography/h6';
import { InlineCode } from '../../../components/display/code';
import { Link } from '../../../components/navigation/link';
import { PreBlock, PreBlockWithDiagram } from '../../../components/display/pre';
import { Span } from '../../../components/display/span';
import { TableBody } from '../../../components/display/table/body';
import { TableCell } from '../../../components/display/table/cell';
import { TableFooter } from '../../../components/display/table/footer';
import { TableHead } from '../../../components/display/table/head';
import { TableRow } from '../../../components/display/table/row';
import { TableWrapper } from '../../../components/display/table/wrapper';
import { UnOrderedList } from '../../../components/display/list/ul';
import { OrderedList } from '../../../components/display/list/ol';

// Core Types
import type { Overrides } from '../../../types';

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
  ol: OrderedList,
  p: Body1,
  pre: PreBlock,
  span: Span,
  table: TableWrapper,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
  ul: UnOrderedList,
};

export interface GetOverridesProps
  extends Omit<PreBlockWithDiagram, 'children' | 'enableMermaid'> {
  enableMermaid?: boolean;
  overrides?: Overrides;
}

export const getOverrides = ({
  overrides,
  ...otherProps
}: GetOverridesProps = {}): Overrides => ({
  ...defaultOverrides,
  ...overrides,
  pre: {
    component: PreBlock,
    props: otherProps,
  },
});
