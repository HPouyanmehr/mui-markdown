import type { MDXComponents } from 'mdx/types';

// Core Utilities
import {
  defaultOverrides,
  getOverrides,
  type GetOverridesProps,
} from '../../../utilities/helpers/overrides';

export const defaultMdxComponents: MDXComponents = {
  ...(defaultOverrides as any),
};

export const getMdxComponents = getOverrides as (
  props: GetOverridesProps
) => MDXComponents;
