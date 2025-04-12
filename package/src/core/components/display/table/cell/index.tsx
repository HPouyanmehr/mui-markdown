import { TableCell as MuiTableCell } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableCellProps as MuiTableCellProps } from '@mui/material';

// Module Types
export interface TableCellProps extends MuiTableCellProps {}

export const TableCell = (props: TableCellProps) => (
  <MuiTableCell {...props} sx={{ whiteSpace: 'nowrap', ...props.sx }} />
);
