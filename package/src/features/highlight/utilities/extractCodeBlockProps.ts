import type { ReactNode } from 'react';
import { parseLineRanges } from './parseLineRanges';

export interface ExtractedCodeBlockProps {
  code: string;
  language: string;
  highlighted: number[];
  removed: number[];
  inserted: number[];
  name: string;
  copiable?: boolean;
  hideLineNumbers?: boolean;
}

/**
 * Extracts props from markdown code block children
 * Supports props like: highlighted="1,3-5" removed="2" inserted="4" name="file.ts" copiable hideLineNumbers
 */
export const extractCodeBlockProps = (
  children: ReactNode
): ExtractedCodeBlockProps => {
  const defaultProps: ExtractedCodeBlockProps = {
    code: '',
    language: '',
    highlighted: [],
    removed: [],
    inserted: [],
    name: '',
    copiable: undefined,
    hideLineNumbers: undefined,
  };

  if (
    !children ||
    typeof children !== 'object' ||
    !('props' in children) ||
    typeof children.props !== 'object' ||
    !children.props
  ) {
    return defaultProps;
  }

  const props = children.props;

  // Extract language and boolean flags from className
  if ('className' in props && typeof props.className === 'string') {
    const match = props.className.match(/(?:language-|lang-)(\w+)/);
    if (match) {
      defaultProps.language = match[1];
    }

    // Check for boolean flags in className (markdown-to-jsx adds them there)
    if (props.className.includes('hidelinenumbers')) {
      defaultProps.hideLineNumbers = true;
    }
    if (props.className.includes('copiable')) {
      defaultProps.copiable = true;
    }
  }

  // Extract code content
  if ('children' in props && typeof props.children === 'string') {
    defaultProps.code = props.children;
  }

  // Extract name
  if ('name' in props && typeof props.name === 'string') {
    defaultProps.name = props.name;
  }

  // Extract highlighted lines
  if ('highlighted' in props && typeof props.highlighted === 'string') {
    defaultProps.highlighted = parseLineRanges(props.highlighted);
  }

  // Extract removed lines
  if ('removed' in props && typeof props.removed === 'string') {
    defaultProps.removed = parseLineRanges(props.removed);
  }

  // Extract inserted lines
  if ('inserted' in props && typeof props.inserted === 'string') {
    defaultProps.inserted = parseLineRanges(props.inserted);
  }

  if ('copiable' in props) {
    defaultProps.copiable = true;
  }

  // Extract hideLineNumbers flag - override className extraction if prop exists
  if ('hidelinenumbers' in props) {
    defaultProps.hideLineNumbers = true;
  }

  return defaultProps;
};
