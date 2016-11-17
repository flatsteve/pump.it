import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import Connector from './components/connector';
import Schedule from './components/schedule/schedule';
import EditRoutine from './components/routine/edit_routine';
import Profile from './components/profile/profile';
import NoMatch from './components/404';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Connector}>
        <IndexRoute component={Schedule} />
        <Route path="edit/:day" component={EditRoutine} />
        <Route path="profile" component={Profile} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
