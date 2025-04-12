import {
  TableFooter as MuiTableFooter,
  type TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

// Module Types
export interface TableFooterProps extends MuiTableFooterProps {}

export const TableFooter = (props: TableFooterProps) => (
  <MuiTableFooter {...props} />
);
