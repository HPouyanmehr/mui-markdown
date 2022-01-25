import MuiMarkdown from './MuiMarkdown';
export default MuiMarkdown;

export type { MuiMarkdownProps } from './MuiMarkdown';

import overrides from './defaultOverrides';
export const defaultOverrides = overrides;

export type { PrismTheme } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import okaidia from 'prism-react-renderer/themes/okaidia';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import synthwave84 from 'prism-react-renderer/themes/synthwave84';
import ultramin from 'prism-react-renderer/themes/ultramin';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';

export const codeBlockThemes = {
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  nightOwl,
  nightOwlLight,
  oceanicNext,
  okaidia,
  palenight,
  shadesOfPurple,
  synthwave84,
  ultramin,
  vsDark,
  vsLight,
};
