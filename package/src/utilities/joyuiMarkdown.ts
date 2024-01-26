// Custom Types
import type {
  JoyuiMarkdownProps,
  JoyuiMarkdownWithOptions,
  JoyuiMarkdownWithOverrides,
} from '../types/joyuiMarkdown';

export const hasOptionsAndOverridesProps = (
  props: JoyuiMarkdownProps
): props is JoyuiMarkdownWithOptions & JoyuiMarkdownWithOverrides =>
  'options' in props && 'overrides' in props;
