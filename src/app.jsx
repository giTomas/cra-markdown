import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

// import R from 'ramda';
import { List, Articles } from './components/';

const Default = () => <h1>Deafult</h1>;

const App = () => (
  <Router>
    <div>
      <h1>Menu</h1>
      <List>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">articles</Link></li>
      </List>

      <Route exact path="/" component={Default} />
      <Route path="/articles" component={Articles} />
    </div>
  </Router>
);

export default App;
