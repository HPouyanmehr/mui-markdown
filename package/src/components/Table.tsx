import { Table as MuiTable, styled } from '@mui/material';

// Types
import type { TableProps as MuiTableProps } from '@mui/material';

// Custom Types
export interface TableProps extends MuiTableProps {}

const Table = styled(MuiTable)<TableProps>(() => ({}));

export default Table;
