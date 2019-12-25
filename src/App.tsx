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
        <Route path="/theme-list" component={ThemeList} />
        <Route path="/theme/:id/topic-list" component={TopicList} />
        <Route path="/topic" component={Topic} />
      </Switch>
    </Container>
    {/* <Footer /> */}
  </div>
);

export default App;
