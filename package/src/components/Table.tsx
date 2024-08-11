import { Table as MuiTable } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableProps as MuiTableProps } from '@mui/material';

// Custom Types
export interface TableProps extends MuiTableProps {}

const Table: FC<TableProps> = (props) => <MuiTable {...props} />;

export default Table;
