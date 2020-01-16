import * as React from 'react';
import Header from 'components/Header';
import ThemeList from 'routes/ThemeList';
import TopicList from 'routes/TopicList';
import Topic from 'routes/Topic';
import Home from 'routes/Home';
import Login from 'routes/Login';
import Register from 'routes/Register';
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
