import defaultState from '../store/default_state';

function profile(state = defaultState.profile, action) {

  switch (action.type) {
    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.profile);

    default:
      return state;
  }
}

export default profile;