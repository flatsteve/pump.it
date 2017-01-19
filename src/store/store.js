import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import rootReducer from './reducers/index';
import defaultState from './default_state';
import { saveState } from '../services/api';

const state = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : defaultState;

const store = createStore(rootReducer, state);

// TODO figure out how to persist store better
let currentState;
let notInitLoad = false;
store.subscribe(() => {
  let previousState = currentState;
  currentState = Object.assign({}, store.getState());
  delete currentState.routing;
  delete currentState.form;

  // Persist date to the API if application data has changed (not routing etc)
  if (JSON.stringify(currentState) !== JSON.stringify(previousState) && notInitLoad) {
    // Save all state changes locally
    localStorage.setItem('store', JSON.stringify(store.getState()));

    saveState(store.getState()).then((data) => {
      console.info('Save success', data);
    }).catch((error) => {
      console.error('Save error', error);
    });
  };

  notInitLoad = true;
});

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
