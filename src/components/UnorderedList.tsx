import * as React from 'react';
import { List, ListItem, ListItemIcon, ListProps } from '@mui/material';

export interface UnorderedListProps extends ListProps {
  children?: React.ReactElement[];
}

const UnorderedList: React.FunctionComponent<UnorderedListProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <List {...otherProps}>
      {children &&
        children.map((listItem) => (
          <ListItem key={listItem.key}>
            <ListItemIcon sx={{ color: 'inherit', minWidth: '1rem' }}>
              &#9679;
            </ListItemIcon>
            {listItem}
          </ListItem>
        ))}
    </List>
  );
};

export default UnorderedList;
