import React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';

import { TypographyProps } from '@mui/material';
import { BlockquoteProps } from './components/Blockquote';
import { InlineCodeProps } from './components/InlineCode';

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
const InlineCode = React.lazy(() => import('./components/InlineCode'));
const OrderedList = React.lazy(() => import('./components/OrderedList'));
const PreBlock = React.lazy(() => import('./components/PreBlock'));
const TableWrapper = React.lazy(() => import('./components/TableWrapper'));
const UnorderedList = React.lazy(() => import('./components/UnorderedList'));

export interface GetDefaultOverridesProps {
  disableTableContainer?: boolean;
  blockquoteBorderColor?: string;
  inlineCodeBgColor?: string;
  inlineCodeColor?: string;
}

export const getDefaultOverrides = (props: GetDefaultOverridesProps) => {
  const {
    disableTableContainer = false,
    blockquoteBorderColor,
    inlineCodeBgColor,
    inlineCodeColor,
  } = props;

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
    code: {
      component: InlineCode,
      props: {
        backgroundColor: inlineCodeBgColor,
        color: inlineCodeColor,
      } as InlineCodeProps,
    },
    h1: {
      component: Typography,
      props: { variant: 'h1', gutterBottom: true } as TypographyProps,
    },
    h2: {
      component: Typography,
      props: { variant: 'h2', gutterBottom: true } as TypographyProps,
    },
    h3: {
      component: Typography,
      props: { variant: 'h3', gutterBottom: true } as TypographyProps,
    },
    h4: {
      component: Typography,
      props: { variant: 'h4', gutterBottom: true } as TypographyProps,
    },
    h5: {
      component: Typography,
      props: { variant: 'h5', gutterBottom: true } as TypographyProps,
    },
    h6: {
      component: Typography,
      props: { variant: 'h6', gutterBottom: true } as TypographyProps,
    },
    li: {
      component: ListItemText,
    },
    Link: {
      component: Link,
    },
    ol: {
      component: OrderedList,
    },
    p: {
      component: Typography,
      props: { variant: 'body1', gutterBottom: true } as TypographyProps,
    },
    pre: {
      component: PreBlock,
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
