// Default Overrides
import { getOverrides } from 'overrides';

// Custom Types
import { Options } from 'types/markdown';
import type {
  MuiMarkdownProps,
  MuiMarkdownWithOptions,
  MuiMarkdownWithOverrides,
} from 'types/muiMarkdown';

export const hasOptionsAndOverridesProps = (
  props: MuiMarkdownProps
): props is MuiMarkdownWithOptions & MuiMarkdownWithOverrides =>
  'options' in props && 'overrides' in props;

export const getOptions = (props: MuiMarkdownProps): Options => {
  const { options, overrides } = props;

  const defaultOverrides = getOverrides({ theme: props.prismTheme });

  if (options) {
    if (options.overrides !== undefined) return options;
    else return { overrides: defaultOverrides, ...options };
  }

  return overrides ? { overrides } : { overrides: defaultOverrides };
};
