// Types
import type { MarkdownToJSX } from 'markdown-to-jsx';

// Custom Components
import BodyOne from 'components/core/BodyOne';
import H1 from 'components/core/H1';
import H2 from 'components/core/H2';
import H3 from 'components/core/H3';
import H4 from 'components/core/H4';
import H5 from 'components/core/H5';
import H6 from 'components/core/H6';
import Span from 'components/core/Span';

const defaultOverrides: MarkdownToJSX.Overrides = {
  p: BodyOne,
  span: Span,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default defaultOverrides;
