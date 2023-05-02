## About

`mui-markdown` uses [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) and [MUI(formerly material-ui)](https://github.com/mui-org/material-ui) to help you render MD/MDX files with MUI components.

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

| Name              | Type                    | Default          | Optional or Mandatory |
| ----------------- | ----------------------- | ---------------- | --------------------- |
| key               | React.key               | -                | **optional**          |
| overrides         | MarkdownToJSX.Overrides | defaultOverrides | **optional**          |
| options           | MarkdownToJSX.Options   | -                | **optional**          |
| codeWrapperStyles | CSSProperties           | -                | **optional**          |
| prismTheme        | PrismTheme              | vsDark           | **optional**          |

Note: You cannot use overrides and options at the same time.

### overrides

You can optionally override a tag to use your component.

**An example of override with a regular HTML tag:**

JS and JSX:

```jsx
import React from 'react';
import { MuiMarkdown, getOverrides } from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides(), // This will keep the other default overrides.
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
import { MuiMarkdown, getOverrides } from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides(), // This will keep the other default overrides.
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
import { MuiMarkdown, getOverrides } from 'mui-markdown';
import CustomTypography from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides(), // This will keep the other default overrides.
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
import { MuiMarkdown, getOverrides } from 'mui-markdown';
import CustomTypography, {
  CustomTypographyProps,
} from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides(), // This will keep the other default overrides.
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

### prismTheme

mui-markdown uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) to highlight code blocks. With this property you can change the highlight theme. You can import the `themes` from `mui-markdown` to override the default theme:

```tsx
import React from 'react';
import { MuiMarkdown, themes } from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown prismTheme={themes.github}>{`# Hello markdown!`}</MuiMarkdown>
  );
};

export default App;
```
