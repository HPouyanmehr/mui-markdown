import { TableRow as MuiTableRow, styled } from '@mui/material';

// Types
import type { TableRowProps as MuiTableRowProps } from '@mui/material';

// Custom Types
export interface TableRowProps extends MuiTableRowProps {}

const TableRow = styled(MuiTableRow)<TableRowProps>();

export default TableRow;
