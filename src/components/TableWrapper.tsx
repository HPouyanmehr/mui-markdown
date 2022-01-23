import React from 'react';
import { Table, TableContainer, Paper, TableProps } from '@mui/material';

const TableWrapper = (props: TableProps) => {
  const { children, ...otherProps } = props;

  return (
    <TableContainer component={Paper}>
      <Table {...otherProps}>{children}</Table>
    </TableContainer>
  );
};

export default TableWrapper;
