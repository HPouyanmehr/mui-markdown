import { parser, RuleType } from 'markdown-to-jsx/react';
import type { MarkdownToJSX } from 'markdown-to-jsx/react';

// Core Types
import type { Options } from '../../../types';

// Module Types
export interface MarkdownHeading {
  /** Plain text content of the heading */
  text: string;
  /** Heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /** Generated HTML id, matches the anchor rendered by MuiMarkdown */
  id: string;
}

const getNodeText = (node: MarkdownToJSX.ASTNode): string => {
  if ('text' in node && typeof node.text === 'string') return node.text;

  if ('children' in node && Array.isArray(node.children)) {
    return (node.children as MarkdownToJSX.ASTNode[])
      .map(getNodeText)
      .join('');
  }

  return '';
};

export const extractHeadings = (
  markdown: string,
  options?: Options
): MarkdownHeading[] => {
  const headings: MarkdownHeading[] = [];

  const walk = (nodes: MarkdownToJSX.ASTNode[]) => {
    for (const node of nodes) {
      if (node.type === RuleType.heading) {
        headings.push({
          text: getNodeText(node).trim(),
          level: node.level,
          id: node.id,
        });
      } else if ('children' in node && Array.isArray(node.children)) {
        walk(node.children as MarkdownToJSX.ASTNode[]);
      }
    }
  };

  walk(parser(markdown || '', options));

  return headings;
};
