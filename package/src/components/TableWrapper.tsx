// Custom Core Components
import Table from './Table';
import Box from './Box';

// Custom Utilities
import getScrollbarStyles from '../utilities/scrollbar';

// Custom Types
import type { TableProps } from './Table';

const TableWrapper = (props: TableProps) => {
  const { children, sx, ...otherProps } = props;

  return (
    <Box
      sx={
        sx
          ? sx
          : ({ palette }) => ({
              overflow: 'auto',
              ...getScrollbarStyles(palette),
            })
      }
    >
      <Table {...otherProps}>{children}</Table>
    </Box>
  );
};

export default TableWrapper;
