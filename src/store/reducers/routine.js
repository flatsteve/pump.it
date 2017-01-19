import defaultState from '../default_state';
import { fromJS } from 'immutable';

function routine(state = defaultState.routine, action) {
  switch (action.type) {
    case 'UPDATE_STORE':
      return Object.assign({}, state, action.state.routine);

    case 'TOGGLE_DAY':
      return fromJS(state).setIn([action.day, 'active'], !fromJS(state).getIn([action.day, 'active'])).toJS();

    case 'ADD_LABEL':
      return fromJS(state).setIn([action.day, 'label'], action.label).toJS();

    case 'ADD_EXERCISE':
      return fromJS(state).updateIn([action.day, 'exercises'],
        exercises => exercises.push(action.exercise)).toJS();

    case 'DELETE_EXERCISE':
      return fromJS(state).updateIn([action.day, 'exercises'],
        exercises => exercises.filter(
          exercises => exercises.get('id') !== action.exercise.id
        )
      ).toJS();

    default:
      return state;
  }
}

export default routine;
