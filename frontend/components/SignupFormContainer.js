import { connect } from 'react-redux';
import { signupUser } from '../actions/session_actions';
import SessionForm from './SessionForm';

const mstp = state => ({
  formType: 'Sign Up',
  errors: state.errors.session,
  currentUser: state.session.id,
});

const mdtp = dispatch => ({
  processForm: user => dispatch(signupUser(user)),
});

export default connect(mstp, mdtp)(SessionForm);
