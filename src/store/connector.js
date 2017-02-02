import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator';
import App from '../scenes/app/app';

// Exposes all our state as props to child components
function mapStateToProps(state) {
  return {
    profile: state.profile,
    routine: state.routine
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Connector = connect(mapStateToProps, mapDispatchToProps)(App);

export default Connector;
