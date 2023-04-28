import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Default Overrides
import defaultOverrides from 'overrides';

// Custom Types
import type { Overrides } from 'types/overrides';
export interface MuiMarkdownProps {
  children?: string;
  overrides?: Overrides;
}

const MuiMarkdown: FC<MuiMarkdownProps> = (props) => {
  // Props
  const { children = '', overrides = defaultOverrides } = props;

  return <MarkdownRoot options={{ overrides }}>{children}</MarkdownRoot>;
};

export default MuiMarkdown;
