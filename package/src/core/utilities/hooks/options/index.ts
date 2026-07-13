import { RuleType } from 'markdown-to-jsx/react';

// Custom Utilities
import { getOverrides } from '../../helpers/overrides';

// Custom Types
import type { Options, MuiMarkdownProps } from '../../../types';

// markdown-to-jsx v9 keeps valueless code fence flags (```js copiable) only in
// the AST infoString instead of passing them as props like v7 did. This
// renderRule copies them back into the node attrs so extractCodeBlockProps
// keeps working with the documented markdown syntax.
const getBareFlags = (infoString: string): string[] =>
  infoString
    .replace(/[\w-]+=("[^"]*"|'[^']*'|\S+)/g, '')
    .split(/\s+/)
    .filter(Boolean);

const withCodeBlockFlags = (options: Options): Options => {
  const userRenderRule = options.renderRule;

  return {
    ...options,
    renderRule: (next, node, renderChildren, state) => {
      if (node.type === RuleType.codeBlock) {
        // infoString is set at runtime but missing from CodeBlockNode typings
        const codeBlock = node as typeof node & {
          infoString?: string;
          attrs?: Record<string, string>;
        };

        if (codeBlock.infoString) {
          for (const flag of getBareFlags(codeBlock.infoString)) {
            codeBlock.attrs = { ...codeBlock.attrs, [flag]: '' };
          }
        }
      }

      return userRenderRule
        ? userRenderRule(next, node, renderChildren, state)
        : next();
    },
  };
};

export const useOptions = (props: MuiMarkdownProps): Options => {
  const { options, overrides } = props;

  const defaultOverrides = getOverrides(props);

  if (options) {
    if (options.overrides) return withCodeBlockFlags(options);
    return withCodeBlockFlags({
      ...options,
      overrides: defaultOverrides,
    });
  }

  return withCodeBlockFlags({
    overrides: overrides ? overrides : defaultOverrides,
  });
};
