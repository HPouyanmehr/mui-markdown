Support this project by [giving it a star](https://github.com/HPouyanmehr/mui-markdown) on GitHub.

![Mui Markdown Cover](https://github.com/HPouyanmehr/mui-markdown/blob/main/.github/assets/mui-markdown.webp)

## About

`mui-markdown` uses [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) and [MUI(formerly material-ui)](https://github.com/mui-org/material-ui) to help you render MD/MDX files with MUI components.

Using `mui-markdown`:

- Markdown components will adapt to theme automatically
- Optional Syntax Highlight Support using `prism-react-renderer`
- Optional Diagrams Support using `mermaid`

## Table of Contents

- [User Guide](#user-guide)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Overrides](#overrides)
  - [Options](#options)
  - [CodeWrapperStyles](#codewrapperstyles)
  - [Syntax Highlight](#syntax-highlight)
  - [Enhanced Code Block Features](#enhanced-code-block-features)
- [Diagram Support](#diagram-support)
- [NextJS](#nextjs)
  - [Use with `useMDXComponents`](#use-with-usemdxcomponents)

## User Guide

### Installation

```bash
# with npm
npm i mui-markdown@latest

# with yarn
yarn add mui-markdown
```

### Usage

The example below will render the `h1` tag using MUI `Typography` component.

```js
import React from 'react';
import { MuiMarkdown } from 'mui-markdown';
// You can also use
// import MuiMarkdown from 'mui-markdown';
// But the first approach is recommended.

const App = () => {
  return <MuiMarkdown>{`# Hello markdown!`}</MuiMarkdown>;
};

export default App;
```

### Props

Props available for `MuiMarkdown` component:

| Name                        | Type                              | Default          | Optional or Mandatory |
| --------------------------- | --------------------------------- | ---------------- | --------------------- |
| key                         | React.key                         | -                | **optional**          |
| children                    | string                            | -                | **optional**          |
| overrides\*                 | MarkdownToJSX.Overrides           | defaultOverrides | **optional**          |
| options\*                   | MarkdownToJSX.Options             | -                | **optional**          |
| codeWrapperStyles           | CSSProperties                     | -                | **optional**          |
| prismTheme                  | PrismTheme                        | vsDark           | **optional**          |
| Highlight                   | HighlightComponent                | -                | **optional**          |
| customTableScrollbar        | boolean                           | false            | **optional**          |
| hideLineNumbers             | boolean                           | false            | **optional**          |
| name                        | string                            | -                | **optional**          |
| copiable                    | boolean                           | false            | **optional**          |
| CopyComponent               | ComponentType<CopyComponentProps> | -                | **optional**          |
| copiedLabel                 | string                            | 'Copied!'        | **optional**          |
| copyLabel                   | string                            | 'Copy code'      | **optional**          |
| copyIcon                    | ReactNode                         | -                | **optional**          |
| copiedIcon                  | ReactNode                         | -                | **optional**          |
| copyButtonSx                | SxProps<Theme>                    | -                | **optional**          |
| showFileIcon                | boolean                           | true             | **optional**          |
| fileIcon                    | ReactNode                         | -                | **optional**          |
| FileNameComponent           | ComponentType                     | Typography       | **optional**          |
| fileNameSx                  | SxProps<Theme>                    | -                | **optional**          |
| fileNameWrapperSx           | SxProps<Theme>                    | -                | **optional**          |
| useHighlightThemeBackground | boolean                           | false            | **optional**          |
| highlightColor              | string                            | 'info.main'      | **optional**          |
| removedColor                | string                            | 'error.main'     | **optional**          |
| insertedColor               | string                            | 'success.main'   | **optional**          |
| enableMermaid               | boolean                           | false            | **optional**          |
| mermaidConfig               | MermaidConfig                     | -                | **optional**          |
| Diagram\*                   | DiagramComponent                  | -                | **optional**          |

**NOTE:** You cannot use overrides and options at the same time

**NOTE:** Using `customTableScrollbar` option convert table to a client side component.

**NOTE:** You must provide the `Diagram` component if you've enabled the mermaid.

### overrides

You can optionally override a tag to use your component.

**An example of override with a regular HTML tag:**

JS and JSX:

```jsx
import React from 'react';
import { MuiMarkdown, defaultOverrides } from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...defaultOverrides, // This will keep the other default overrides.
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          },
        },
      }}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import { MuiMarkdown, defaultOverrides } from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...defaultOverrides, // This will keep the other default overrides.
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          } as React.HTMLProps<HTMLParagraphElement>,
        },
      }}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

**An example of override with your component:**

JS and JSX:

```jsx
import React from 'react';
import { MuiMarkdown, defaultOverrides } from 'mui-markdown';
import CustomTypography from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...defaultOverrides, // This will keep the other default overrides.
        h1: {
          component: CustomTypography,
          props: {
            // custom props
          },
        },
      }}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import { MuiMarkdown, defaultOverrides } from 'mui-markdown';
import CustomTypography, {
  CustomTypographyProps,
} from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...defaultOverrides, // This will keep the other default overrides.
        h1: {
          component: CustomTypography,
          props: {
            // custom props
          } as CustomTypographyProps,
        },
      }}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

### options

You can read about options in the [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx#parsing-options) docs.

**Note:** If you want to override something and also need to set some options, add the `overrides` property in the `options`. Don't use overrides and options property together on the `MuiMarkdown` component.

### codeWrapperStyles

You can pass your desired styles for the syntax highlighter component. These are the default styles:

```tsx
  ...
  borderRadius: '0.5rem',
  padding: '0.5rem 0.75rem',
  overflow: 'auto',
  ...
```

### Syntax Highlight

`mui-markdown` uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) to highlight code blocks. As this is an optional dependencies, you need to install it if you want to have a syntax highlighter. So to highlight your code:

- First install `prism-react-renderer`

```bash
# with npm
npm i prism-react-renderer

# with yarn
yarn add prism-react-renderer
```

- Then pass the `Highlight` and the `themes` to the `MuiMarkdown` component

```tsx
import React from 'react';
import { MuiMarkdown } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <MuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

With the `prismTheme` property you can change the highlight theme.

```tsx
import React from 'react';
import { MuiMarkdown } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <MuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

Also to disable the line numbers in the code block you can use the `hideLineNumbers`.

```tsx
import React from 'react';
import { MuiMarkdown } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <MuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
      hideLineNumbers
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

When you use overrides, you can have the syntax highlight by passing the `Highlight`, `themes`, and `themes.github` (or your favorite one) to the `getOverrides` function.

```tsx
import React from 'react';
import { MuiMarkdown, getOverrides } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides({ Highlight, themes, theme: themes.github }), // This will keep the other default overrides.
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          },
        },
      }}
    >
      {`# Hello markdown!`}
    </MuiMarkdown>
  );
};

export default App;
```

### Enhanced Code Block Features

`mui-markdown` supports advanced code block features for better documentation and code presentation.

#### Available Features

| Feature           | Markdown Attribute    | Global Prop              | Description                                               |
| ----------------- | --------------------- | ------------------------ | --------------------------------------------------------- |
| Line Highlighting | `highlighted="1,3-5"` | -                        | Highlights specific lines with blue background            |
| Removed Lines     | `removed="2,4"`       | -                        | Shows deletion lines with red background and `-` prefix   |
| Inserted Lines    | `inserted="3,5-7"`    | -                        | Shows addition lines with green background and `+` prefix |
| File Name         | `name="path/file.ts"` | `name="path/file.ts"`    | Displays file name/path above code block                  |
| Copy Button       | `copiable`            | `copiable={true}`        | Adds a copy-to-clipboard button                           |
| Hide Line Numbers | `hideLineNumbers`     | `hideLineNumbers={true}` | Toggles line number visibility                            |

#### Usage Examples

**Highlighting Important Lines:**

````markdown
```tsx highlighted="2,4-6"
function Button({ children }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return <button onClick={handleClick}>{children}</button>;
}
```
````

**Showing Code Diffs:**

````markdown
```tsx removed="2" inserted="3"
export async function getUser(id) {
  const url = `/api/user/${id}`;
  const url = `/api/v2/users/${id}`;
  return fetch(url).then((r) => r.json());
}
```
````

**Hiding Line Numbers Per Code Block:**

````markdown
```tsx hideLineNumbers
export function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
```
````

**File Name with Copy Button:**

````markdown
```tsx name="components/Header.tsx" copiable
export function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
```
````

**Combined Features:**

````markdown
```tsx name="src/utils/validator.ts" highlighted="4-6" removed="7" inserted="8" copiable hideLineNumbers
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return false;
  }
  const trimmedEmail = email.trimEnd();
  const trimmedEmail = email.trim();
  return regex.test(trimmedEmail);
}
```
````

#### Global Configuration

You can set defaults for all code blocks using `getOverrides`:

```tsx
import { MuiMarkdown, getOverrides } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const overrides = getOverrides({
  Highlight,
  themes,
  copiable: true, // All code blocks have copy button
  hideLineNumbers: false, // Show line numbers by default
  copiedLabel: 'Copied!', // Customize copy button labels
  copyLabel: 'Copy',
});

function App() {
  return <MuiMarkdown overrides={overrides}>{markdownContent}</MuiMarkdown>;
}
```

#### Per-Block Overrides

Markdown attributes override global settings, allowing you to customize individual code blocks:

````markdown
```tsx hideLineNumbers copiable name="config.ts"
export const config = {
  apiUrl: process.env.API_URL,
  timeout: 5000,
};
```
````

#### Line Range Syntax

The line range parser supports flexible syntax:

- Single lines: `"1"` or `"1,2,3"`
- Ranges: `"1-5"` or `"1-5,8-10"`
- Mixed: `"1,3-5,7,9-12"`

#### Customization

All visual elements can be customized using MUI theming:

**Custom Colors:**

```tsx
const overrides = getOverrides({
  Highlight,
  themes,
  highlightColor: 'primary.main', // Use theme colors
  removedColor: 'error.dark',
  insertedColor: 'success.light',
});
```

**Custom Copy Button Icons:**

```tsx
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

const overrides = getOverrides({
  Highlight,
  themes,
  copyIcon: <ContentCopyIcon />,
  copiedIcon: <CheckIcon />,
  copyButtonSx: { top: 16, right: 16 }, // Custom positioning
});
```

**Custom Copy Component:**

For complete control over the copy button, provide your own component:

```tsx
import { CopyComponentProps } from 'mui-markdown';
import { IconButton } from '@mui/material';

const CustomCopyButton = ({ handleCopy, code }: CopyComponentProps) => {
  return (
    <IconButton
      onClick={handleCopy}
      sx={{ position: 'absolute', top: 8, right: 8 }}
    >
      Copy {code.split('\n').length} lines
    </IconButton>
  );
};

const overrides = getOverrides({
  Highlight,
  themes,
  CopyComponent: CustomCopyButton,
});
```

**Custom File Name Display:**

```tsx
import FolderIcon from '@mui/icons-material/Folder';

const overrides = getOverrides({
  Highlight,
  themes,
  showFileIcon: true, // Show/hide icon
  fileIcon: <FolderIcon />, // Custom icon
  FileNameComponent: CustomTypography, // Custom component
  fileNameSx: { fontWeight: 'bold' }, // Custom text styles
  fileNameWrapperSx: { backgroundColor: 'primary.light', px: 3 }, // Custom wrapper styles
  useHighlightThemeBackground: true, // Use prism theme background for file name wrapper
});
```

## Diagram Support

`mui-markdown` uses [`mermaid`](https://github.com/mermaid-js/mermaid) as its diagramming and charting tool, to enable that, first make sure you have the `mermaid` installed. By passing the `enableMermaid` key you'll be able to have diagram support in your markdowns, just make sure you've provided the `Diagram` component as well. Also, using the `mermaidConfigs` you can configure it as you like.

The `Diagram` component is a client-side component, You can create your desired one for that purpose if needed, just make sure the custom component satisfying the following type: `(props: DiagramProps) => JSX.Element`. Props type is available under `mui-markdown` and `mui-markdown/client`.

```tsx
import React from 'react';
import { MuiMarkdown, getOverrides } from 'mui-markdown';
import { Diagram } from 'mui-markdown/client'; // This component will handle mermaid init and content load
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <MuiMarkdown
      enableMermaid
      mermaidConfig={{ startOnLoad: true }}
      DiagramComponent={Diagram}
    >
      {/* Markdown content */}
    </MuiMarkdown>
  );
};

export default App;
```

## NextJS

### Use with `useMDXComponents`

To add `mui-markdown` to `useMDXComponents` you can either import `defaultMdxComponents` or use `getMdxComponents` if you need to override defaults.

```ts
import type { MDXComponents } from 'mdx/types';

import { defaultMdxComponents, getMdxComponents } from 'mui-markdown';

// You can use the getMdxComponents(options) to override defaults!
// const mdxComponents = getMdxComponents();

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ...mdxComponents,
    ...defaultMdxComponents,
    ...components,
  };
}
```
