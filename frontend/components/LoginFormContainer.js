import { connect } from 'react-redux';
import { loginUser } from '../actions/session_actions';
import SessionForm from './SessionForm';

const mstp = (state, ownProps) => {
  console.log(state);
  return ({
    formType: 'Log In',
    errors: state.errors.session,
    currentUser: state.session.id,
  });
};

const mdtp = dispatch => ({
  processForm: user => dispatch(loginUser(user)),
});

export default connect(mstp, mdtp)(SessionForm);
