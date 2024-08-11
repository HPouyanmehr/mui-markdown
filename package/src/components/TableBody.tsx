import { TableBody as MuiTableBody } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material';

// Custom Types
export interface TableBodyProps extends MuiTableBodyProps {}

const TableBody: FC<TableBodyProps> = (props) => <MuiTableBody {...props} />;

export default TableBody;
