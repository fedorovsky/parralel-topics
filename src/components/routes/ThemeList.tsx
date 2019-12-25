import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { fetchThemeList, themeListSelector } from '../../modules/themes';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderOpen from '@material-ui/icons/FolderOpen';
import { NavLink } from 'react-router-dom';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface OwnProps {
  backgroundColor: string;
}

const ThemeList: React.FC<OwnProps & PropsFromRedux> = ({
  fetchThemeList,
  themes,
}) => {
  console.log('--------------------', themes);

  React.useEffect(() => {
    fetchThemeList();
  }, [fetchThemeList]);

  return (
    <div>
      <h2>Theme List</h2>
      <List>
        {themes.map(theme => (
          <ListItem
            key={theme.id}
            button
            component={NavLink}
            to={`/theme/${theme.id}/topics`}
          >
            <ListItemAvatar>
              <Avatar>
                <FolderOpen />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={theme.title} secondary={theme.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    themes: themeListSelector(state),
  }),
  {
    fetchThemeList,
  },
);

export default connector(ThemeList);

// https://redux.js.org/recipes/usage-with-typescript/
