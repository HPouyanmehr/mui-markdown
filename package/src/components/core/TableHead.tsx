import { TableHead as MuiTableHead, styled } from '@mui/material';

// Types
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material';

// Custom Types
export interface TableHeadProps extends MuiTableHeadProps {}

const TableHead = styled(MuiTableHead)<TableHeadProps>();

export default TableHead;
