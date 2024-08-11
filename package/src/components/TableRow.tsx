import { TableRow as MuiTableRow } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableRowProps as MuiTableRowProps } from '@mui/material';

// Custom Types
export interface TableRowProps extends MuiTableRowProps {}

const TableRow: FC<TableRowProps> = (props) => <MuiTableRow {...props} />;

export default TableRow;
