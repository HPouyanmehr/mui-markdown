import {
  TableHead as MuiTableHead,
  type TableHeadProps as MuiTableHeadProps,
} from '@mui/material';

// Module Types
export interface TableHeadProps extends MuiTableHeadProps {}

export const TableHead = (props: TableHeadProps) => <MuiTableHead {...props} />;
