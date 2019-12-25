import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import { fetchTopicList, topicListSelector } from '../../modules/topics';
import { RootState } from '../../redux/reducer';
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

type PropsFromRedux = ConnectedProps<typeof connector>;

const TopicList: React.FC<RouteComponentProps<RouterParams> &
  PropsFromRedux> = ({ fetchTopicList, topics, match }) => {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('MOUNT TOPIC LIST');
    console.log('ROUTER MATCH', match);
    fetchTopicList(match.params.themeId);
  }, [fetchTopicList, match]);

  return (
    <>
      <h2>theme id: {match.params.themeId}</h2>
      <List className={classes.root}>
        {topics.map(topic => (
          <ListItem
            key={topic.id}
            button
            component={NavLink}
            to={`/theme/${match.params.themeId}/topic/${topic.id}`}
          >
            <ListItemAvatar>
              <Avatar>
                <DescriptionIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={topic.title} secondary={topic.description} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

const connector = connect(
  (state: RootState) => ({
    topics: topicListSelector(state),
  }),
  {
    fetchTopicList,
  },
);

export default connector(TopicList);
