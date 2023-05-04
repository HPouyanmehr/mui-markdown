// Custom Types
import type {
  MuiMarkdownProps,
  MuiMarkdownWithOptions,
  MuiMarkdownWithOverrides,
} from '../types/muiMarkdown';

export const hasOptionsAndOverridesProps = (
  props: MuiMarkdownProps
): props is MuiMarkdownWithOptions & MuiMarkdownWithOverrides =>
  'options' in props && 'overrides' in props;
