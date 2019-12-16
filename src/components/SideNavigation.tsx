import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { NavLink } from 'react-router-dom';

interface OwnProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavigation: React.FC<OwnProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Drawer open={isOpen} onClose={onClose}>
        <List>
          <ListItem button component={NavLink} to="/" onClick={onClose}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/topic-list"
            onClick={onClose}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'TopicList'} />
          </ListItem>
          <ListItem button component={NavLink} to="/topic" onClick={onClose}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Topic'} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideNavigation;
