import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Utilities
import { getOptions, hasOptionsAndOverridesProps } from 'utilities/muiMarkdown';

// Custom Types
import type { MuiMarkdownProps } from 'types/muiMarkdown';

const MuiMarkdown: FC<MuiMarkdownProps> = (props) => {
  // Props
  const { children = '' } = props;

  if (hasOptionsAndOverridesProps(props)) {
    console.error(
      "Cannot set both 'options' and 'overrides' in the MuiMarkdown component props."
    );
  }

  return <MarkdownRoot options={getOptions(props)}>{children}</MarkdownRoot>;
};

export default MuiMarkdown;
