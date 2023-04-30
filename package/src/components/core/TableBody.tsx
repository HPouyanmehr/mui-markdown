import { TableBody as MuiTableBody, styled } from '@mui/material';

// Types
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material';

// Custom Types
export interface TableBodyProps extends MuiTableBodyProps {}

const TableBody = styled(MuiTableBody)<TableBodyProps>();

export default TableBody;
