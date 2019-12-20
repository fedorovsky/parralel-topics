import * as React from 'react';
import { connect } from 'react-redux';
import { fetchThemes, themeListSelector } from '../../modules/themes';

interface OwnProps {
  themes: Array<any>;
  fetchThemes: () => Promise<any>;
}

const ThemeList: React.FC<OwnProps> = ({ fetchThemes, themes }) => {
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

// @ts-ignore
export default connect(state => ({ themes: themeListSelector(state) }), {
  fetchThemes,
  // @ts-ignore
})(ThemeList);
