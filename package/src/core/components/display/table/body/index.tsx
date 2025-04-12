import {
  TableBody as MuiTableBody,
  type TableBodyProps as MuiTableBodyProps,
} from '@mui/material';

// Core Types
export interface TableBodyProps extends MuiTableBodyProps {}

export const TableBody = (props: TableBodyProps) => <MuiTableBody {...props} />;
