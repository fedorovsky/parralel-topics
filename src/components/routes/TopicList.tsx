import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

interface RouterParams {
  themeId: string;
}

const TopicList: React.FC<RouteComponentProps<RouterParams>> = props => {
  const classes = useStyles();
  console.log(props);

  return (
    <>
      <h2>theme id: {props.match.params.themeId}</h2>
      <List className={classes.root}>
        <ListItem button component={NavLink} to={`/theme/10/topic/15`}>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Topic" secondary="Description" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Topic" secondary="Description" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Topic" secondary="Description" />
        </ListItem>
      </List>
    </>
  );
};

export default TopicList;
