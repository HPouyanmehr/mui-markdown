// Types
import type { MarkdownToJSX } from 'markdown-to-jsx';

// Custom Components
import Blockquote from 'components/Blockquote';
import BodyOne from 'components/BodyOne';
import Divider from 'components/Divider';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import H4 from 'components/H4';
import H5 from 'components/H5';
import H6 from 'components/H6';
import InlineCode from 'components/InlineCode';
import Link from 'components/Link';
import Span from 'components/Span';
import TableBody from 'components/TableBody';
import TableCell from 'components/TableCell';
import TableFooter from 'components/TableFooter';
import TableHead from 'components/TableHead';
import TableRow from 'components/TableRow';
import TableWrapper from 'components/TableWrapper';

const defaultOverrides: MarkdownToJSX.Overrides = {
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
  span: Span,
  table: TableWrapper,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
};

export default defaultOverrides;
