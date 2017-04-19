import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

const mapStateToProps = (state, ownProps) =>  {
  const formType = (ownProps.location.pathname === '/login');

  return {
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: formType ? 'login' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = (ownProps.location.pathname === '/login');
  const processForm = formType ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
