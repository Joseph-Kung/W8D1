import { connect } from 'react-redux';
import Greeting from './Greeting';
import { logoutUser } from '../actions/session_actions';

const mstp = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mdtp = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mstp, mdtp)(Greeting);
