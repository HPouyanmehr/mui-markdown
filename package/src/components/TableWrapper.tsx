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
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Table {...otherProps}>{children}</Table>
      </Box>
    </Box>
  );
};

export default TableWrapper;
