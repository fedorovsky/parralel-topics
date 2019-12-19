import * as React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import ThemeList from './components/routes/ThemeList';
import TopicList from './components/routes/TopicList';
import Topic from './components/routes/Topic';
import Home from './components/routes/Home';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

export const Routes: { [key: string]: string } = {
  home: '/',
  themeList: '/theme-list',
  topicList: '/topic-list',
  topic: '/topic',
};

const App = () => (
  <div>
    <Header />
    <Container>
      <Switch>
        <Route exact path={Routes.home} component={Home} />
        <Route path={Routes.themeList} component={ThemeList} />
        <Route path={Routes.topicList} component={TopicList} />
        <Route path={Routes.topic} component={Topic} />
      </Switch>
    </Container>
    {/* <Footer /> */}
  </div>
);

export default App;
