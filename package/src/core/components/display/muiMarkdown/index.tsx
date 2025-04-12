import type { FC } from 'react';
import MarkdownRoot from 'markdown-to-jsx';

// Core Utilities
import { useOptions } from '../../../utilities/hooks/options';
import { hasOptionsAndOverridesProps } from '../../../utilities/helpers/muiMarkdown';

// Core Types
import type { MuiMarkdownProps } from '../../../types';

export const MuiMarkdown = (props: MuiMarkdownProps) => {
  // Props
  const { children = '' } = props;

  // Hooks
  const options = useOptions(props);

  // Helpers
  if (hasOptionsAndOverridesProps(props)) {
    console.error(
      "Cannot set both 'options' and 'overrides' in the MuiMarkdown component props."
    );
  }

  return <MarkdownRoot options={options}>{children}</MarkdownRoot>;
};
