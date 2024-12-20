import type { MDXComponents } from 'mdx/types';

import { defaultMdxComponents, getMdxComponents } from 'mui-markdown';

// const mdxComponents = getMdxComponents();

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ...mdxComponents,
    ...defaultMdxComponents,
    ...components,
  };
}
