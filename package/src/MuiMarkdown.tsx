import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Hooks
import useOptions from './hooks/options';

// Custom Utilities
import { hasOptionsAndOverridesProps } from './utilities/muiMarkdown';

// Custom Types
import type { MuiMarkdownProps } from './types/muiMarkdown';

const MuiMarkdown: FC<MuiMarkdownProps> = (props) => {
  // Props
  const { children = '' } = props;

  // Hooks
  const options = useOptions(props);

  if (hasOptionsAndOverridesProps(props)) {
    console.error(
      "Cannot set both 'options' and 'overrides' in the MuiMarkdown component props."
    );
  }

  return <MarkdownRoot>{children}</MarkdownRoot>;
};

export default MuiMarkdown;
