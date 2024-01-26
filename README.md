# JoyUI Markdown

## About

`joyui-markdown` uses [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) and [JoyUI(from MUI)](https://mui.com/joy-ui/getting-started/) to help you render MD/MDX files with JoyUI components.

## User Guide

### Installation

```bash
# with npm
npm i joyui-markdown@latest

# with yarn
yarn add joyui-markdown
```

### Usage

The example below will render the `h1` tag using JoyUI `Typography` component.

```js
import React from 'react';
import { JoyuiMarkdown } from 'joyui-markdown';
// You can also use
// import JoyuiMarkdown from 'joyui-markdown';
// But the first approach is recommended.

const App = () => {
  return <JoyuiMarkdown>{`# Hello markdown!`}</JoyuiMarkdown>;
};

export default App;
```

### Props

Props available for `JoyuiMarkdown` component:

| Name              | Type                    | Default          | Optional or Mandatory |
| ----------------- | ----------------------- | ---------------- | --------------------- |
| key               | React.key               | -                | **optional**          |
| children          | string                  | -                | **optional**          |
| overrides         | MarkdownToJSX.Overrides | defaultOverrides | **optional**          |
| options           | MarkdownToJSX.Options   | -                | **optional**          |
| codeWrapperStyles | CSSProperties           | -                | **optional**          |
| prismTheme        | PrismTheme              | vsDark           | **optional**          |
| Highlight         | HighlightComponent      | -                | **optional**          |
| themes            | HighlightThemes         | -                | **optional**          |
| hideLineNumbers   | boolean                 | false            | **optional**          |

**NOTE:** You cannot use overrides and options at the same time.

### overrides

You can optionally override a tag to use your component.

**An example of override with a regular HTML tag:**

JS and JSX:

```jsx
import React from 'react';
import { JoyuiMarkdown, getOverrides } from 'joyui-markdown';

const App = () => {
  return (
    <JoyuiMarkdown
      overrides={{
        ...getOverrides({}), // This will keep the other default overrides.
        h1: {
          component: 'p',
          props: {
            style: { color: 'red' },
          },
        },
      }}
    >
      {`# Hello markdown!`}
    </JoyuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import { JoyuiMarkdown, getOverrides } from 'joyui-markdown';

const App = () => {
  return (
    <JoyuiMarkdown
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
    </JoyuiMarkdown>
  );
};

export default App;
```

**An example of override with your component:**

JS and JSX:

```jsx
import React from 'react';
import { JoyuiMarkdown, getOverrides } from 'joyui-markdown';
import CustomTypography from './components/CustomTypography';

const App = () => {
  return (
    <JoyuiMarkdown
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
    </JoyuiMarkdown>
  );
};

export default App;
```

TS and TSX:

```tsx
import React from 'react';
import { JoyuiMarkdown, getOverrides } from 'joyui-markdown';
import CustomTypography, {
  CustomTypographyProps,
} from './components/CustomTypography';

const App = () => {
  return (
    <JoyuiMarkdown
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
    </JoyuiMarkdown>
  );
};

export default App;
```

### options

You can read about options in the [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx#parsing-options) docs.

**Note:** If you want to override something and also need to set some options, add the `overrides` property in the `options`. Don't use overrides and options property together on the `JoyuiMarkdown` component.

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

`joyui-markdown` uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) to highlight code blocks. As this is an optional dependencies, you need to install it if you want to have a syntax highlighter. So to highlight your code:

- First install `prism-react-renderer`

```bash
# with npm
npm i prism-react-renderer

# with yarn
yarn add prism-react-renderer
```

- Then pass the `Highlight` and the `themes` to the `JoyuiMarkdown` component

```tsx
import React from 'react';
import { JoyuiMarkdown } from 'joyui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <JoyuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
    >
      {`# Hello markdown!`}
    </JoyuiMarkdown>
  );
};

export default App;
```

With the `prismTheme` property you can change the highlight theme.

```tsx
import React from 'react';
import { JoyuiMarkdown } from 'joyui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <JoyuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
    >
      {`# Hello markdown!`}
    </JoyuiMarkdown>
  );
};

export default App;
```

Also to disable the line numbers in the code block you can use the `hideLineNumbers`.

```tsx
import React from 'react';
import { JoyuiMarkdown } from 'joyui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <JoyuiMarkdown
      Highlight={Highlight}
      themes={themes}
      prismTheme={themes.github}
      hideLineNumbers
    >
      {`# Hello markdown!`}
    </JoyuiMarkdown>
  );
};

export default App;
```

When you use overrides, you can have the syntax highlight by passing the `Highlight`, `themes`, and `themes.github` (or your favorite one) to the `getOverrides` function.

```tsx
import React from 'react';
import { JoyuiMarkdown, getOverrides } from 'joyui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

const App = () => {
  return (
    <JoyuiMarkdown
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
    </JoyuiMarkdown>
  );
};

export default App;
```

## Backers

 <a href='https://github.com/bgaurav7'> 
  <img src="https://github.com/bgaurav7.png" alt="joyui-markdown backer" width='36px' height='36px' style="border-radius: 50%">
 </a>
