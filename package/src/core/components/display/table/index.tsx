import {
  Table as MuiTable,
  type TableProps as MuiTableProps,
} from '@mui/material';

// Module Types
export interface TableProps extends MuiTableProps {}

export const Table = (props: TableProps) => <MuiTable {...props} />;
