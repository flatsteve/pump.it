import defaultState from '../default_state';

function profile(state = defaultState.profile, action) {

  switch (action.type) {
    case 'UPDATE_STORE':
      return Object.assign({}, state, action.state.profile);

    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.profile);

    default:
      return state;
  }
}

export default profile;
