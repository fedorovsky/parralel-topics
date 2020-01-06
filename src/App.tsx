import * as React from 'react';
import Header from 'components/Header';
import ThemeList from 'components/routes/ThemeList';
import TopicList from 'components/routes/TopicList';
import Topic from 'components/routes/Topic';
import Home from 'components/routes/Home';
import Login from 'components/routes/Login';
import Register from 'components/routes/Register';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';
import AppContext from './AppContext';

const App = () => {
  const [pageTitle, setPageTitle] = React.useState<string>('Initial Title');
  return (
    <AppContext.Provider value={{ pageTitle, setPageTitle }}>
      <>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/themes" component={ThemeList} />
            <Route path="/theme/:themeId/topics" component={TopicList} />
            <Route path="/theme/:themeId/topic/:topicId" component={Topic} />
          </Switch>
        </Container>
      </>
    </AppContext.Provider>
  );
};

export default App;
