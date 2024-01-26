import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Hooks
import useOptions from './hooks/options';

// Custom Utilities
import { hasOptionsAndOverridesProps } from './utilities/joyuiMarkdown';

// Custom Types
import type { JoyuiMarkdownProps } from './types/joyuiMarkdown';

const JoyuiMarkdown: FC<JoyuiMarkdownProps> = (props) => {
  // Props
  const { children = '' } = props;

  // Hooks
  const options = useOptions(props);

  if (hasOptionsAndOverridesProps(props)) {
    console.error(
      "Cannot set both 'options' and 'overrides' in the JoyuiMarkdown component props."
    );
  }

  return (
    <MarkdownRoot options={options}>{children ? children : ''}</MarkdownRoot>
  );
};

export default JoyuiMarkdown;
