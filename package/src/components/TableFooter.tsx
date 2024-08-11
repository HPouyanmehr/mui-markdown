import { TableFooter as MuiTableFooter } from '@mui/material';

// Types
import type { FC } from 'react';
import type { TableFooterProps as MuiTableFooterProps } from '@mui/material';

// Custom Types
export interface TableFooterProps extends MuiTableFooterProps {}

const TableFooter: FC<TableFooterProps> = (props) => <MuiTableFooter {...props} />;

export default TableFooter;
