import {
  TableRow as MuiTableRow,
  type TableRowProps as MuiTableRowProps,
} from '@mui/material';

// Module Types
export interface TableRowProps extends MuiTableRowProps {}

export const TableRow = (props: TableRowProps) => <MuiTableRow {...props} />;
