import { MuiMarkdown } from './core/components/display/muiMarkdown';

// Core Utilities
export {
  defaultOverrides,
  getOverrides,
} from './core/utilities/helpers/overrides';
export {
  defaultMdxComponents,
  getMdxComponents,
} from './core/utilities/helpers/mdx';

// Core Types
export type { Options, Overrides, MuiMarkdownProps } from './core/types';

// Feature Types
export type { PrismTheme } from './features/highlight/types';
export type { DiagramProps } from './features/diagram/components/mermaid/type';
export type { CopyComponentProps } from './features/highlight/components/display/codeBlock';

// MUI Markdown
export default MuiMarkdown;
export { MuiMarkdown } from './core/components/display/muiMarkdown';
