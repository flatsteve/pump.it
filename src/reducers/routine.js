import defaultState from '../store/default_state';

function routine(state = defaultState.routine, action) {
  switch (action.type) {
    case 'TOGGLE_DAY':
      return Object.assign({},
        state,
        state[action.day].active = !state[action.day].active
      );

    case 'ADD_LABEL':
      var newState = Object.assign({}, state);
      newState[action.day].label = action.label;
      return newState;

    case 'ADD_EXERCISE':
      return Object.assign({},
        state,
        state[action.day].exercises.push(action.exercise)
      );

    case 'DELETE_EXERCISE':
      var newState = Object.assign({}, state);
      var newExercises = newState[action.day].exercises.filter((exercise) => {
        return exercise.id !== action.exercise.id;
      });

      newState[action.day].exercises = newExercises;
      return newState;

    default:
      return state;
  }
}

export default routine;