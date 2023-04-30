import { TableFooter as MuiTableFooter, styled } from '@mui/material';

// Types
import type { TableFooterProps as MuiTableFooterProps } from '@mui/material';

// Custom Types
export interface TableFooterProps extends MuiTableFooterProps {}

const TableFooter = styled(MuiTableFooter)<TableFooterProps>();

export default TableFooter;
