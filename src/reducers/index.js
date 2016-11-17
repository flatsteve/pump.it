import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import routine from './routine';
import profile from './profile';

const rootReducer = combineReducers({
  routine,
  profile,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;