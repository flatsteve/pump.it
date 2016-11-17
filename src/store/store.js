import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import rootReducer from '../reducers/index';
import defaultState from './default_state';

const state = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : defaultState;

const store = createStore(rootReducer, state);
//const store = createStore(rootReducer, defaultState);

// Write the application state to localStorage when it changes
store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export const history = syncHistoryWithStore(hashHistory, store);

export default store;