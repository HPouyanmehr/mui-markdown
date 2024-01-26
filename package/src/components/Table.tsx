import { Table as JoyuiTable, styled } from '@mui/joy';

// Types
import type { TableProps as JoyuiTableProps } from '@mui/joy';

// Custom Types
export interface TableProps extends JoyuiTableProps {}

const Table = styled(JoyuiTable)<TableProps>(() => ({}));

export default Table;
