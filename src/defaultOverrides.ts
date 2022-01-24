import React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

import { TypographyProps } from '@mui/material';
import { BlockquoteProps } from './components/Blockquote';

const Button = React.lazy(() => import('@mui/material/Button'));
const Link = React.lazy(() => import('@mui/material/Link'));
const ListItemText = React.lazy(() => import('@mui/material/ListItemText'));
const Typography = React.lazy(() => import('@mui/material/Typography'));
const Table = React.lazy(() => import('@mui/material/Table'));
const TableBody = React.lazy(() => import('@mui/material/TableBody'));
const TableCell = React.lazy(() => import('@mui/material/TableCell'));
const TableFooter = React.lazy(() => import('@mui/material/TableFooter'));
const TableHead = React.lazy(() => import('@mui/material/TableHead'));
const TableRow = React.lazy(() => import('@mui/material/TableRow'));

const Blockquote = React.lazy(() => import('./components/Blockquote'));
const OrderedList = React.lazy(() => import('./components/OrderedList'));
const TableWrapper = React.lazy(() => import('./components/TableWrapper'));
const UnorderedList = React.lazy(() => import('./components/UnorderedList'));

export interface GetDefaultOverridesProps {
  disableTableContainer?: boolean;
  blockquoteBorderColor?: string;
}

export const getDefaultOverrides = (props: GetDefaultOverridesProps) => {
  const { disableTableContainer = false, blockquoteBorderColor } = props;

  const defaultOverrides: MarkdownToJSX.Overrides = {
    a: {
      component: Link,
    },
    blockquote: {
      component: Blockquote,
      props: {
        borderColor: blockquoteBorderColor,
      } as BlockquoteProps,
    },
    button: {
      component: Button,
    },
    Button: {
      component: Button,
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
    li: {
      component: ListItemText,
    },
    ol: {
      component: OrderedList,
    },
    p: {
      component: Typography,
      props: { variant: 'body1' } as TypographyProps,
    },
    table: {
      component: disableTableContainer ? Table : TableWrapper,
    },
    tbody: {
      component: TableBody,
    },
    td: {
      component: TableCell,
    },
    tfoot: {
      component: TableFooter,
    },
    thead: {
      component: TableHead,
    },
    th: {
      component: TableCell,
    },
    tr: {
      component: TableRow,
    },
    ul: {
      component: UnorderedList,
    },
  };

  return defaultOverrides;
};

export default getDefaultOverrides({});
