import * as React from 'react';
import Header from './components/Header';
import TopicList from './components/routes/TopicList';
import Topic from './components/routes/Topic';
import Home from './components/routes/Home';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topic-list" component={TopicList} />
        <Route path="/topic" component={Topic} />
      </Switch>
    </div>
  </div>
);

export default App;
