// Core Components
import { Box } from '../../../layout/box';
import { Table, TableProps } from '../../../display/table';

// Core Utilities
import { getScrollbarStyles } from '../../../../utilities/styles/scrollbar';

export const TableWrapper = (props: TableProps) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <Box
      sx={
        sx
          ? { overflow: 'auto', ...sx }
          : ({ palette }) => ({
              overflow: 'auto',
              ...getScrollbarStyles(palette),
            })
      }
    >
      <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
        <Table {...otherProps}>{children}</Table>
      </Box>
    </Box>
  );
};
