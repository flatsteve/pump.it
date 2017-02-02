import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import Connector from './store/connector';
import Schedule from './scenes/schedule/schedule';
import EditRoutine from './scenes/edit_routine/edit_routine';
import Profile from './scenes/profile/profile';
import NoMatch from './scenes/404';
import './index.css';

// Remove scroll class if user has navigated from a page showing a modal
function removeScrollClass() {
  document.body.classList.remove('prevent-scroll');
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Connector} onChange={removeScrollClass}>
        <IndexRoute component={Schedule} />
        <Route path="edit/:day" component={EditRoutine} />
        <Route path="profile" component={Profile} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
