// Types
import type { MarkdownToJSX } from 'markdown-to-jsx';

// Custom Components
import Blockquote from 'components/core/Blockquote';
import BodyOne from 'components/core/BodyOne';
import Divider from 'components/core/Divider';
import H1 from 'components/core/H1';
import H2 from 'components/core/H2';
import H3 from 'components/core/H3';
import H4 from 'components/core/H4';
import H5 from 'components/core/H5';
import H6 from 'components/core/H6';
import InlineCode from 'components/core/InlineCode';
import Span from 'components/core/Span';
import TableBody from 'components/core/TableBody';
import TableCell from 'components/core/TableCell';
import TableFooter from 'components/core/TableFooter';
import TableHead from 'components/core/TableHead';
import TableRow from 'components/core/TableRow';
import TableWrapper from 'components/core/TableWrapper';

const defaultOverrides: MarkdownToJSX.Overrides = {
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
