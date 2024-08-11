import { TableHead as MuiTableHead } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material';

// Custom Types
export interface TableHeadProps extends MuiTableHeadProps {}

const TableHead: FC<TableHeadProps> = (props) => <MuiTableHead {...props} />;

export default TableHead;
