import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

interface Params {
  id: string;
}

const TopicList: React.FC<RouteComponentProps<Params>> = props => {
  const classes = useStyles();
  console.log(props);

  return (
    <>
      <h2>theme id: {props.match.params.id}</h2>
      <List className={classes.root}>
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
