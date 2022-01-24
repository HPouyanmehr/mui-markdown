## About

mui-markdown uses [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) and [MUI(formerly material-ui)](https://github.com/mui-org/material-ui) to help you render MD/MDX files with MUI components.

## User Guide

### Installation

```bash
# with npm
npm i mui-markdown

# with yarn
yarn add mui-markdown
```

### Usage

The example below will render the `h1` tag using MUI `Typography` component.

```js
import React from 'react';
import MuiMarkdown from 'mui-markdown';

const App = () => {
  return <MuiMarkdown>{`# Hello markdown`}</MuiMarkdown>;
};

export default App;
```

### Props

Props available for `MuiMarkdown` component:

| Name                  | Type                    | Default        | Optional or Mandatory |
| --------------------- | ----------------------- | -------------- | --------------------- |
| key                   | React.key               |                | **optional**          |
| overrides             | MarkdownToJSX.Overrides |                | **optional**          |
| options               | MarkdownToJSX.Options   |                | **optional**          |
| disableTableContainer | boolean                 | false          | **optional**          |
| blockquoteBorderColor | string                  | MUI info color | **optional**          |

### overrides

You can optionally override a tag to use your component.

example of override with a regular HTML tag:

JS and JSX:

```jsx
import React from 'react';
import MuiMarkdown from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          },
        },
      }}
    >
      {`# Hello markdown`}
    </MuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import MuiMarkdown from 'mui-markdown';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          } as React.HTMLProps<HTMLParagraphElement>,
        },
      }}
    >
      {`# Hello markdown`}
    </MuiMarkdown>
  );
};

export default App;
```

example of override with your component:

JS and JSX:

```jsx
import React from 'react';
import MuiMarkdown from 'mui-markdown';
import CustomTypography from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        h1: {
          component: CustomTypography,
          props: {
            // custom props
          },
        },
      }}
    >
      {`# Hello markdown`}
    </MuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import MuiMarkdown from 'mui-markdown';
import CustomTypography, {
  CustomTypographyProps,
} from './components/CustomTypography';

const App = () => {
  return (
    <MuiMarkdown
      overrides={{
        h1: {
          component: CustomTypography,
          props: {
            // custom props
          } as CustomTypographyProps,
        },
      }}
    >
      {`# Hello markdown`}
    </MuiMarkdown>
  );
};

export default App;
```

### options

You can read about options in the [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx#parsing-options) docs.

**Note:** If you want to override something and also need to set some options, add the `overrides` property in the `options`. Don't use overrides and options property together on the `MuiMarkdown` component.

### disableTableContainer

Optionally you can disable container wrapper around tables. If true, table component will be like this:

```js
  <Table>
    {children}
  <Table>
```

default(false):

```js
<TableContainer component={Paper}>
  <Table>
    {children}
  <Table>
</TableContainer>
```

### blockquoteBorderColor

You can change the `blockquote` component border color with this property. The default color is `theme.palette.info.main`

example:

```js
...
<MuiMarkdown blockquoteBorderColor='gold'>
{
  `> This is a block of code`
}
</MuiMarkdown>
...
```
