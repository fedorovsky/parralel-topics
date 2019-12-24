import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { fetchThemeList, themeListSelector } from '../../modules/themes';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface OwnProps {
  backgroundColor: string;
}

const ThemeList: React.FC<OwnProps & PropsFromRedux> = ({
  fetchThemeList,
  themes,
}) => {
  console.log('--------------------', themes);

  const handleClickFetch = () => {
    fetchThemeList();
  };

  return (
    <div>
      <h1>Theme List</h1>
      <button onClick={handleClickFetch}>Fetch</button>
      <ul>
        {themes.map(theme => (
          <li key={theme.id}>
            <p>{theme.title}</p>
            <p>{theme.description}</p>
          </li>
        ))}
      </ul>
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
