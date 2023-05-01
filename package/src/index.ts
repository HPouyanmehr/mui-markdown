import MuiMarkdown from './MuiMarkdown';

// Types
export type { Options, Overrides } from './types/markdown';
export type { MuiMarkdownProps } from './types/muiMarkdown';
export type { PrismTheme } from './types/prism';

// Utilities
export { defaultOverrides, getOverrides } from './overrides';

// MUI Markdown
export default MuiMarkdown;
export { default as MuiMarkdown } from './MuiMarkdown';

// Themes
export { themes } from 'prism-react-renderer';
