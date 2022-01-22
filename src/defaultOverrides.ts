import React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

import { TypographyProps } from '@mui/material';

const Link = React.lazy(() => import('@mui/material/Link'));
const Typography = React.lazy(() => import('@mui/material/Typography'));

const defaultOverrides: MarkdownToJSX.Overrides = {
  a: {
    component: Link,
  },
  h1: {
    component: Typography,
    props: { variant: 'h1' } as TypographyProps,
  },
  h2: {
    component: Typography,
    props: { variant: 'h2' } as TypographyProps,
  },
  h3: {
    component: Typography,
    props: { variant: 'h3' } as TypographyProps,
  },
  h4: {
    component: Typography,
    props: { variant: 'h4' } as TypographyProps,
  },
  h5: {
    component: Typography,
    props: { variant: 'h5' } as TypographyProps,
  },
  h6: {
    component: Typography,
    props: { variant: 'h6' } as TypographyProps,
  },
  p: {
    component: Typography,
    props: { variant: 'body1' } as TypographyProps,
  },
};

export default defaultOverrides;
