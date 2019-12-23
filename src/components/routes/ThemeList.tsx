import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { fetchThemes, themeListSelector } from '../../modules/themes';

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  backgroundColor: string;
};

const ThemeList: React.FC<Props> = ({ fetchThemes, themes }) => {
  console.log('--------------------', themes);
  return (
    <div>
      <h1>Theme List</h1>
      <button onClick={fetchThemes}>Fetch</button>

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
    fetchThemes,
  },
);

export default connector(ThemeList);

// https://redux.js.org/recipes/usage-with-typescript/
