import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  active: {
    border: '1px solid red',
  },
});

const SideNavigation: React.FC<OwnProps> = ({ isOpen, onClose }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer open={isOpen} onClose={onClose}>
        <div className={classes.list}>
          <List>
            <ListItem
              button
              component={NavLink}
              to="/"
              exact
              onClick={onClose}
              activeClassName={classes.active}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/themes"
              exact
              onClick={onClose}
              activeClassName={classes.active}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'ThemeList'} />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/topics"
              exact
              onClick={onClose}
              activeClassName={classes.active}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'TopicList'} />
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/topic"
              exact
              onClick={onClose}
              activeClassName={classes.active}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Topic'} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default SideNavigation;
