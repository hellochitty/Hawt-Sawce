import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/util_actions';
import SessionForm from './session_form.jsx';

const mapStateToProps = (state, ownProps) =>  {
  const formType = (ownProps.location.pathname === '/login');

  return {
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  formType: formType ? 'login' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = (ownProps.location.pathname === '/login');
  const processForm = formType ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
