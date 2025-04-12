// Module Types
import type {
  MuiMarkdownProps,
  MuiMarkdownWithOptions,
  MuiMarkdownWithOverrides,
} from '../../../types';

export const hasOptionsAndOverridesProps = (
  props: MuiMarkdownProps
): props is MuiMarkdownWithOptions & MuiMarkdownWithOverrides =>
  'options' in props && 'overrides' in props;
