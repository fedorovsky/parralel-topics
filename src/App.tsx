import * as React from 'react';
import SideNavigation from './components/SideNavigation';
import Header from './components/Header';
import TopicList from './components/routes/TopicList';
import Topic from './components/routes/Topic';
import Home from './components/routes/Home';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
    <SideNavigation />
    <div>
      <NavLink to="/" activeStyle={{ color: 'red' }}>
        Home
      </NavLink>
      <NavLink to="/topic-list" activeStyle={{ color: 'red' }}>
        TopicList
      </NavLink>
      <NavLink to="/topic" activeStyle={{ color: 'red' }}>
        Topic
      </NavLink>
    </div>
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
