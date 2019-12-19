import * as React from 'react';
import { connect } from 'react-redux';
import { fetchThemes, themeListSelector } from '../../modules/topics';

interface OwnProps {
  fetchThemes: () => Promise<any>;
}

const ThemeList: React.FC<OwnProps> = ({ fetchThemes }) => (
  <div>
    <h1>Theme List</h1>
    <button onClick={fetchThemes}>Fetch</button>
  </div>
);

export default connect(state => ({ themes: themeListSelector(state) }), {
  fetchThemes,
})(ThemeList);
