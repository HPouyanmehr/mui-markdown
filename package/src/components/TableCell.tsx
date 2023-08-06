import { TableCell as MuiTableCell, styled } from '@mui/material';

// Types
import type { TableCellProps as MuiTableCellProps } from '@mui/material';

// Custom Types
export interface TableCellProps extends MuiTableCellProps {}

const TableCell = styled(MuiTableCell)<TableCellProps>(() => ({
  whiteSpace: 'nowrap',
}));

export default TableCell;
