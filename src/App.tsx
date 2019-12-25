import * as React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import ThemeList from './components/routes/ThemeList';
import TopicList from './components/routes/TopicList';
import Topic from './components/routes/Topic';
import Home from './components/routes/Home';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/themes" component={ThemeList} />
        <Route path="/theme/:themeId/topics" component={TopicList} />
        <Route path="/theme/:themeId/topic/:topicId" component={Topic} />
      </Switch>
    </Container>
    {/* <Footer /> */}
  </div>
);

export default App;
