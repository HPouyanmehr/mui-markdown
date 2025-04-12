// Custom Utilities
import { getOverrides } from '../../helpers/overrides';

// Custom Types
import type { Options, MuiMarkdownProps } from '../../../types';

export const useOptions = (props: MuiMarkdownProps): Options => {
  const { options, overrides } = props;

  const defaultOverrides = getOverrides(props);

  if (options) {
    if (options.overrides) return options;
    return {
      ...options,
      overrides: defaultOverrides,
    };
  }

  return { overrides: overrides ? overrides : defaultOverrides };
};
