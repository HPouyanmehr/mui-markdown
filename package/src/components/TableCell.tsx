import { TableCell as MuiTableCell } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableCellProps as MuiTableCellProps } from '@mui/material';

// Custom Types
export interface TableCellProps extends MuiTableCellProps {}

const TableCell: FC<TableCellProps> = (props) => <MuiTableCell {...props} sx={{ whiteSpace: 'nowrap', ...props.sx }} />;

export default TableCell;
