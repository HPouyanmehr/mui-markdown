import * as React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListProps,
  Typography,
} from '@mui/material';

export interface OrderedListProps extends ListProps {
  children?: React.ReactElement[];
}

const OrderedList: React.FunctionComponent<OrderedListProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <List {...otherProps}>
      {children &&
        children.map((listItem, index) => (
          <ListItem key={listItem.key}>
            <ListItemIcon sx={{ color: 'inherit', minWidth: '1rem' }}>
              <Typography>{index + 1}.</Typography>
            </ListItemIcon>
            {listItem}
          </ListItem>
        ))}
    </List>
  );
};

export default OrderedList;
