import MuiMarkdown from './MuiMarkdown';

// Types
export type { Options, Overrides } from './types/markdown';
export type { MuiMarkdownProps } from './types/muiMarkdown';
export type { PrismTheme } from './types/highlight';

// Utilities
export { defaultOverrides, getOverrides } from './overrides';
export { defaultMdxComponents, getMdxComponents } from './mdxComponents';

// MUI Markdown
export default MuiMarkdown;
export { default as MuiMarkdown } from './MuiMarkdown';
